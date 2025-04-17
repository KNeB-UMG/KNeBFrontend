import { Button, Flex } from "antd";
import { useTheme } from "../../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";

type Props = {
  style?: CSSProperties
}

export default function StandardToggleTheme(props: Props) {
  const { theme, toggleTheme } = useTheme();

  return (

      <Button type="text" onClick={toggleTheme} style={props.style}>
        <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} size="2x" />
      </Button>


  );
}
