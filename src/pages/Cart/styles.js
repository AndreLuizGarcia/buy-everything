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
    }
  }
`;

export const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  z-index: 2;

  display: flex;
  justify-content: flex-end;

  button {
    width: 207px;
    height: 48px;

    background: #407BFF;
    border: 1px solid rgba(0, 0, 0, 0.33);
    border-radius: 4px;

    color: #fff;

    margin-bottom: 20px;
    margin-right: 20px;
  }
`;