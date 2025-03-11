import { useEffect } from "react";
import Management from "../components/main/Management";
import ProjectLinks from "../components/main/ProjectLinks";
import { useNotification } from "../hooks/useNotification";
import { Button } from "antd";
import backgroundKneb from "../assets/backgroundKneb.jpg"

export default function MainPage() {
  const { showNotification } = useNotification();

  useEffect(() => {
    showNotification(
      <div>
        <h2>Zapisz się do naszego newslettera!</h2>
        <Button 
          type="primary" 
          onClick={() => console.log("Przekierowanie do stronki z newsletterem") } //TODO: Przekierowanie do strony z formularzem do wypełnienia
        >
          Zapisz się
        </Button>
      </div>,
      "info"
    );
  }, []);

  return (
    <div>
      <img src={backgroundKneb} alt="Background KNeB" width={"100%"} />
      <ProjectLinks />
      <Management />
    </div>
  );
}
