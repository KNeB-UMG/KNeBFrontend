import { Carousel, Row, Col, Card} from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from "react";
import StandardTitle from "../standard/StandardTitle";
import StandardText from "../standard/StandardText";

type ProjectsProps = {
  id: number,
  title: string,
  image: string,
  techs: Technology[]
}

const projects:ProjectsProps[] = [
  { id: 1, title: "projekt1", image: "https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095_16x9.jpg", techs: ['React']},
  { id: 2, title: "projekt2", image: "https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095_16x9.jpg", techs: ['React']},
  { id: 3, title: "projekt3", image: "https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095_16x9.jpg", techs: ['React', 'Python']},
  { id: 4, title: "projekt4", image: "https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095_16x9.jpg", techs: ['React']},
  { id: 5, title: "projekt5", image: "https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095_16x9.jpg", techs: ['React', 'JavaScript']},
];

type Technology = 'React' | 'JavaScript' | 'Python';

type ProjectProps = {
  title: string;
  image: string;
  techs: Technology[];
}

const techIcons: Record<Technology, React.ReactNode> = {
  React: <FontAwesomeIcon icon={faReact} />,
  JavaScript: <FontAwesomeIcon icon={faJs} />,
  Python: <FontAwesomeIcon icon={faPython} />

};

const ProjectCard: React.FC<ProjectProps> = ({ title, image, techs }) => (
  <Card hoverable style={{ margin: "15px 10%"}} cover={ <img alt="project" src={image} style={{ height: "200px", objectFit: "cover" }} />} >
    <Row>
      <Col xs={24}>
        <StandardTitle level = {4} style={{ marginTop: "0px", marginBottom: "0px"}}>
          {title}
        </StandardTitle>
        {techs.map((tech) => (techIcons[tech] && <StandardText key={tech} style={{ fontSize: '30px' }}>{techIcons[tech]} </StandardText>))}
      </Col>
    </Row>
  </Card>
);

export default function PhotoCarousel() { 
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => setSlidesToShow(window.innerWidth < 768 ? 1 : window.innerWidth < 1200 ? 2 : 3);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Row justify="center" align="middle">
      <Col xs={22} lg={18} style={{ boxShadow: '0px 4px 19.9px 0px #00000040', padding: "20px", borderRadius: '25px' }}>
        <Carousel arrows dots={false} infinite slidesToShow={slidesToShow}>
          {projects.map((project) => ( <ProjectCard key={project.id} title={project.title} image={project.image} techs={project.techs}/> ))}
        </Carousel>
      </Col>
    </Row>
  );
}