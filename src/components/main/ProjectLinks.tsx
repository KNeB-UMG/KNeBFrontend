import { Col, Row, Typography, Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { themes, ThemeType } from "../../theme";
import { useTheme } from "../../hooks/useTheme";
import styled from "styled-components";

const { Title, Text } = Typography;

const ProjectLinkCard = styled(Card)<{ themeName: ThemeType }>`
  box-shadow: ${(p) => themes?.[p.themeName]?.boxShadow};
  border-radius: ${(p) => themes?.[p.themeName]?.spacing?.hg};
  padding: ${(p) => themes?.[p.themeName]?.spacing?.xs};
  margin: ${(p) => themes?.[p.themeName]?.spacing?.xs};
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: ${(p) => themes?.[p.themeName]?.hoverColor};
  }
`;

type ProjectLinkProps = {
  title: string;
  description: string;
};

const ProjectLink: React.FC<ProjectLinkProps> = ({ title, description }) => {
  const { theme } = useTheme();

  return (
    <ProjectLinkCard theme={theme}>
      <Row align="middle">
        <Col span={21}>
          <Title level={4}>{title}</Title>
          <Text strong>{description}</Text>
        </Col>
        <Col span={3} style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faChevronRight} size="2x" color="grey" />
        </Col>
      </Row>
    </ProjectLinkCard>
  );
};

export default function ProjectLinks() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    { title: "Projekt A", description: "Opis projektu A" },
    { title: "Projekt B", description: "Opis projektu B" },
    { title: "Projekt C", description: "Opis projektu C" },
    { title: "Projekt D", description: "Opis projektu D" },
    { title: "Projekt E", description: "Opis projektu E" },
    { title: "Projekt F", description: "Opis projektu F" },
  ];

  return (
    <div>
      <Row style={{ padding: "20px", textAlign: "center" }}>
        <Col span={24}>
          <Title>Nasze Projekty</Title>
          <Title level={4}>Projekty stworzone przez członków naszego koła</Title>
        </Col>
      </Row>
      <Row
        gutter={[16, 16]}
        justify="center"
        style={{ width: isLargeScreen ? "60%" : "100%", margin: "0 auto" }}
      >
        {projects.map((project, index) => (
          <Col xs={24} sm={24} md={9} lg={9} xl={9} key={index}>
            <ProjectLink title={project.title} description={project.description} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
