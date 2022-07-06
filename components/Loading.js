import styled from "styled-components";
import { Circle } from "better-react-spinkit";
const Loading = () => {
  return (
    <LoadingContainer>
      <img
        height={200}
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg"
        alt=""
        style={{ marginBottom: "50px" }}
      />
      <Circle color="#3CBC28" size={60} />
    </LoadingContainer>
  );
};

export default Loading;
export const LoadingContainer = styled.div`
  width: 500px;
  height: 500px;
  margin: auto;
  display: flex;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
`;
