import { Container, Button } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';

export default function MainView() {

    return (
        <>
            <Container>
                <h1 className="fw-bold text-center">Overview</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum cursus tempus. Duis dictum, ipsum ac malesuada aliquet, nisl ligula gravida velit, vel scelerisque nunc nisi et purus. Aliquam volutpat, ipsum eu elementum euismod, arcu metus rutrum nibh, eu suscipit dui ipsum id enim. Mauris non pellentesque lectus. Curabitur auctor diam a nulla sollicitudin, at facilisis tellus elementum. Ut convallis felis ut mauris gravida, sit amet fringilla lorem lobortis. Proin dictum luctus egestas. Suspendisse potenti. Vestibulum cursus mi non mauris porttitor dignissim. In non ipsum non ipsum pretium ultricies et sit amet magna. Duis nisl nisi, pharetra id metus vel, laoreet dictum quam. Donec porta quam quis ante malesuada, ac ornare orci laoreet. Ut elementum, neque at sollicitudin volutpat, felis lacus aliquet nisi, a congue erat metus eu tellus. Proin lobortis, quam auctor dictum dictum, ligula dolor dictum lectus, id placerat purus ligula eget lacus. Donec viverra velit in velit faucibus, a hendrerit urna euismod. Nulla lobortis ultricies dictum. Proin dictum ultricies dui, at gravida enim pellentesque a.</p>
                <div className="text-center">
                    <Button className="text-primary bg-white fw-bold button-center">Learn More</Button>
                </div>
            </Container>
        </>
    );
}

// import React from 'react';
// import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

// const Resume = () => {
//   // Fetch and store your personal information in state
//   const [personal, setPersonal] = useState({});
//   useEffect(() => {
//     fetch('/personal.json')
//       .then(response => response.json())
//       .then(data => setPersonal(data));
//   }, []);

//   return (
//     <Container>
//       <Row>
//         <Col xs={12} md={4}>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Title>{personal.name}</Card.Title>
//               <Card.Subtitle>{personal.title}</Card.Subtitle>
//               <Card.Text>{personal.summary}</Card.Text>
//             </Card.Body>
//             <ListGroup variant="flush">
//               <ListGroup.Item>{personal.email}</ListGroup.Item>
//               <ListGroup.Item>{personal.location}</ListGroup.Item>
//               <ListGroup.Item>
//                 <a href={personal.website}>{personal.website}</a>
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </Col>
//         <Col xs={12} md={8}>
//           {/* Add your resume content here */}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Resume;
