import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  flex: 1;

  div {
    h1 {
      font-weight: bold;
      font-size: 44px;
      line-height: 54px;
      margin-left: 55px;
      margin-top: 20px;
      margin-bottom: 40px;

      @media (max-width: 650px) {
        width: unset;
        margin-left: 72px;
      }

      @media (max-width: 400px) {
        margin-left: 55px;
      }
    }

    input {
      width: 550px;
      height: 65px;
      margin-left: 55px;
      padding: 20px;

      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.17);
      box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      margin-bottom: 40px;

      @media (max-width: 650px) {
        width: 310px;
        margin-left: 72px;
      }

      @media (max-width: 400px) {
        margin-left: 55px;
      }
    }
  }
`;

export const Cards = styled.div`
  @media (max-width: 400px) {
    width: 420px;
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