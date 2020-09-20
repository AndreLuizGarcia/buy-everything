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
      margin-bottom: 20px;
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

export const Button = styled.button`
  width: 100px;
  height: 40px;

  margin-top: 10px;

  background-color: ${props => props.backgroundColor};
  border-radius: 8px;
  
  color: #fff;

  opacity: 0.9;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;