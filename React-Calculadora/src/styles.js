import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #e0e0e0;
  width: 50%;
  height: 460px;
  max-width: 350px;
  border-radius: 32px;
  box-shadow: 7px 7px 14px #828282, -7px -7px 14px #fff;
  overflow: hidden;  
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
