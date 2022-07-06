import styled from "styled-components";
import LoginButton from "../components/LoginButton";
const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg" />
        <LoginButton />
      </LoginContainer>
    </Container>
  );
};

export default Login;
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
`;
