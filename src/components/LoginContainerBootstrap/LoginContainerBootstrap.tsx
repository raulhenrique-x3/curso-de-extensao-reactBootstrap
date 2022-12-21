import { Container, Stack, Image } from "react-bootstrap";
import styles from "./loginContainer.module.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img from "../../assets/gravar-a-tela-do-pc-capa (2).jpg";

export const LoginContainerBootstrap = () => {
  return (
    <Stack direction="horizontal" className="w-100">
      <Image fluid src={img} className={styles.img} />
      <Stack className="d-flex justify-content-center align-items-center p-5">
        <Container fluid className="d-flex justify-content-center align-items-center border w-100 p-4">
          <Form className="w-100">
            <Form.Text className="fs-1">Login</Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" />
            </Form.Group>
            <Container className="d-grid gap-2">
              <Button variant="primary" size="lg">
                Acessar
              </Button>
            </Container>
          </Form>
        </Container>
      </Stack>
    </Stack>
  );
};
