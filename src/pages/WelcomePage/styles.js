import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  >div {
    h1 {
      width: 550px;
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
      width: 448px;
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

  img {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 896px) {
    flex-flow: wrap-reverse;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 92vw;
  margin: 0 auto;

  a {
    align-self: flex-end;
    margin-right: 45px;
    margin-top: 20px;
  }
`;