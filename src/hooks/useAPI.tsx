import { useEffect, useState } from "react";
import { useNotification } from "./useNotification.tsx";
import { Button } from "antd";

const apiUrl = import.meta.env.VITE_API_URL

export type callAPIProps = {
    url?: string | ((params:urlFunctionParams) => string),
    method?: string,
    body?: object,
    displayErrorNotification?: boolean
}

export type callAPIFunction = (...args: any[]) => callAPIProps;

export type callAPISettings = callAPIProps | callAPIFunction;

export type urlFunctionParams = {
    getApiUrl(url:string, version?:number): string;
    employeeId: number;
}
export const getApiUrl = (url:string, version?:number) => version ? `${apiUrl}/api/v${version}${url}` : `${apiUrl}/api/v1/${url}`;

export default function useAPI(props: callAPIProps, callInstantly = false) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>(undefined);
    const [error, setError] = useState<any>(undefined);
    const [success, setSuccess] = useState(false);

    const { showNotification } = useNotification();

    const employeeId = sessionStorage.getItem("employeeId");
    const token = sessionStorage.getItem("token");

    function handleReAuth() {
        window.location.href = "/login";
    }

    const getUrl = (url: string | ((params: urlFunctionParams) => string)) => {
        if (typeof url === "string") return url;
        if (typeof url === "function")
            return url({
                employeeId: employeeId ? parseInt(employeeId) : 0,
                getApiUrl,
            });
    };

    const call = async (cp?: callAPISettings) => {
        if (!cp) return await callAPI();

        let callProps: callAPIProps = {};

        if (typeof cp === "function") {
            callProps = cp();
        } else {
            callProps = cp;
        }

        return await callAPI(callProps);
    };

    const callAPI = async (callProps?: callAPIProps) => {
        try {
            setLoading(true);

            const headers: { [key: string]: string } = {
                "Content-Type": "application/json",
                ...(token && { Authorization: `Bearer ${token}` }),
            };

            if (!props.url) return null;

            const requestOptions: RequestInit = {
                method: props.method || "GET",
                headers,
                ...((props.method === "POST" || props.method === "PUT") && {
                    body: JSON.stringify(props.body || callProps?.body),
                }),
                ...(props.method === "DELETE" && props.body ? { body: JSON.stringify(props.body) } : {}),
            };

            const response = await fetch(getUrl(props.url), requestOptions);
            const responseData = await response.json();

            if (!response.ok) {
                if (props.displayErrorNotification !== false) {
                    if (response.status === 401) {
                        showNotification(
                            <>
                                Zaloguj się ponownie
                                <Button
                                    type="primary"
                                    danger
                                    size="small"
                                    onClick={handleReAuth}
                                    style={{ marginLeft: "10px" }}
                                >
                                    Zaloguj się
                                </Button>
                            </>,
                            "error"
                        );
                        sessionStorage.clear();
                    } else {
                        showNotification(responseData.message || "Wystąpił błąd", "error");
                    }
                }
                throw new Error(responseData.message);
            }

            setData(responseData?.data);
            setSuccess(true);
            setError(null);

            return { data: responseData, response };
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (callInstantly) callAPI();
    }, []);

    return { loading, data, error, success, callAPI, call };
}
