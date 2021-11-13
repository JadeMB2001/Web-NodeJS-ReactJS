import React from 'react';
import { Container, Row , Col, Accordion} from 'react-bootstrap';
import './App.css';
import imagem from './componentes/imagem';

function App () {
  return (
      <Container>

        <Row className="justify-content-md-center">
          <Col>
            <center><h1>Meu Perfil</h1></center>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs = {6} md = {4}>
              <Imagem />
          </Col>
        </Row>

        <br/>
      
        <Row>
          <Col>
            <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Dados Pessoais</Accordion.Header>
                    <Accordion.Body>
                      <p>Jade Martin Bernardo;</p>
                      <p>20 Anos;</p>
                      <p>Santos, São Paulo;</p>
                      <p>Brasileiro</p>
                    </Accordion.Body>
                  </Accordion.Item>
              <Accordion.Item eventKey="1">
              <Accordion.Header>Formação</Accordion.Header>
                <Accordion.Body>
                  <p>Cursando Bacharel em Sistemas de informação - UNIP</p>
                  <p>Ensino Médio Completo</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
              <Accordion.Header>Experiência</Accordion.Header>
                <Accordion.Body>
                  <p>Desenvolvedor de sistemas/ EspuriTecnologia- 2020/2021</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
  );
}
export default App;