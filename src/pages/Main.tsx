import { useEffect } from "react";
import MembersDisplay from "../components/members/MembersDisplay";
import SocialsDisplay from "../components/main/SocialsDisplay";
import ProjectLinks from "../components/main/ProjectLinks";
import { useNotification } from "../hooks/useNotification";
import { Button } from "antd";
import backgroundKneb from "../assets/backgroundKneb.jpg"
import { useWindowSize } from "../hooks/useWindowSize";

export default function MainPage() {
  const { showNotification } = useNotification();
  const { isMobile } = useWindowSize()

  useEffect(() => {
    showNotification({
      type: "info",
      message: "Newsletter KNeB",
      description: (
        <div>
          <h2>Zapisz się do naszego newslettera!</h2>
          <Button
            type="primary"
            onClick={() => console.log("Przekierowanie do stronki z newsletterem")} // TODO: Przekierowanie do strony z formularzem do wypełnienia
          >
            Zapisz się
          </Button>
        </div>
      ),
      placement: 'bottomLeft'
    });
  }, []);


  return (
    <div>
      {!isMobile && (
        <img
          src={backgroundKneb}
          alt="Background KNeB"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover"
          }}
        />
      )}

      <ProjectLinks />
      <MembersDisplay />
      <SocialsDisplay />
    </div>
  );
}
