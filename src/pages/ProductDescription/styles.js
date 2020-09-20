import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 16px;
  }

  > div {
    display: flex;
    flex-direction: row;

    width: 700px;
    height: 350px;

    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    padding: 16px;

    margin-top: 30px;

    img {
      width: 200px;
      height: 300px;
    }

    p {
      margin-left: 16px;
      margin-top: 30px;
    }
  }
`;

export const CTA = styled.div`
  margin-top: 20px;
  margin-left: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    font-weight: bold;
    font-size: 20px;
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

export const AddCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;

  color: #fff;

  width: 219px;
  height: 46px;

  background: #407BFF;
  border-radius: 8px;

  font-size: 14px;

  opacity: 0.9;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  span {
    font-weight: bold;
  }


`;