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
    flex-direction: column;
    align-items: center;

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

  flex-direction: column;
  height: 166px;

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

export const SnackNotification = styled.div`
  display: flex;

  width: 295px;
  position: fixed;
  top: 95px;
  right: 20px;

  font-size: 14px;
  color: white;
  background: rgba(242, 24, 24, 0.9);
  line-height: 1.3em;
  padding: 10px 15px;
  margin: 5px 10px;
  border-radius: 5px;
  transition: opacity 0.5s ease-in;

  visibility: visible;
  transition: visibility 0s linear 300ms, opacity 300ms;

  opacity: ${ props => props.visible ? 1 : 0 };

  button {
    border: none;
    color: #ffffff;
    background: none;

    cursor: pointer;
  }
`