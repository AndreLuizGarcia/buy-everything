import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  padding: 8px;

  margin: 16px;
  margin-left: 55px;
  margin-right: 55px;

  @media(max-width: 600px) {
    flex-direction: column;
  }

  img {
    width: 100px;
    height: 120px;

    align-self: center;

    padding: 8px;
  }

  > div {
    margin-left: 16px;

    span {
      font-weight: bold;
    }

    p {
      margin-top: 20px;
    }
  }

  div + div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    span {
      font-weight: bold;
      font-size: 22px;
    }
  }
`;

export const Resume = styled.div`
  @media(max-width: 600px) {
    height: 130px;
    margin-top: 20px;
  }
`;

export const Control = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 123px;
  height: 43px;

  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  button {
    font-size: 20px;
    color: #407BFF;
  }
`;

export const DeleteFromCart = styled.button`
  color: #ff5555;
`;