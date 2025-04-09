import { useEffect, useState } from "react";
import { useNotification } from "./useNotification";

const apiUrl = import.meta.env.VITE_API_URL;

export type CallAPIProps = {
  url?: string | ((params: UrlFunctionParams) => string);
  method?: string;
  body?: object;
  headers?: object;
  displayNotification?: boolean;
};

export type CallAPIFunction = (...args: any[]) => CallAPIProps;
export type CallAPISettings = CallAPIProps | CallAPIFunction;

export type UrlFunctionParams = {
  getApiUrl(url: string, version?: number): string;
};

export const getApiUrl = (url: string) => `${apiUrl}${url}`;

export default function useAPI(props: CallAPIProps, callInstantly = false) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<any>(undefined);
  const [success, setSuccess] = useState(false);

  const { showNotification } = useNotification();

  useEffect(() => {
    if (callInstantly) {
      callAPI();
    }
  }, []);

  const token = sessionStorage.getItem("token");

  const getUrl = (url: string | ((params: UrlFunctionParams) => string)) => {
    if (typeof url === "string") return url;
    if (typeof url === "function") {
      return url({
        getApiUrl,
      });
    }
  };

  const call = async (cp?: CallAPISettings) => {
    if (!cp) return await callAPI();
    const callProps = typeof cp === "function" ? cp() : cp;
    return await callAPI(callProps);
  };

  const callAPI = async (callProps?: CallAPIProps) => {
    try {
      setLoading(true);
      const finalProps = { ...props, ...callProps };

      if (!finalProps.url) return null;

      const headers: { [key: string]: string } = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...finalProps.headers,
      };

      const requestOptions: RequestInit = {
        method: finalProps.method || "GET",
        headers,
        ...(finalProps.method !== "GET" && finalProps.method !== "DELETE"
          ? { body: JSON.stringify(finalProps.body) }
          : {}),
      };

      const response = await fetch(getUrl(finalProps.url)!, requestOptions);

      if (response.status === 204) {
        setData([]);
        return { data: null, response };
      }

      const responseData = await response.json();
      console.log("response", response);
      console.log("responseData", responseData);

      if (!response.ok) {
        if (finalProps.displayNotification === true) {
          showNotification({
            type: "error",
            message: "Błąd",
            description: responseData?.message,
          });
        }
        throw new Error(responseData?.message || "Unknown error");
      }

      if (finalProps.displayNotification === true) {
        showNotification({
          type: "success",
          description: responseData?.message,
        });
      }

      setSuccess(true);
      setData(responseData);
      setError(null);

      return { data: responseData, response };
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, success, callAPI, call };
}
