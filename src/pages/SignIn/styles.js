import styled, { keyframes } from 'styled-components';

import signInBackgroundImg from '../../assets/signInBackground.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #F4EDE8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {

      }
    }

    input {
      width: 340px;
      height: 60px;

      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.17);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      padding: 20px;

      margin-bottom: 20px;

      &::placeholder {
        color: #636360;
      }
    }

    button {
      width: 340px;
      height: 60px;

      background: #72a1d4;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      padding: 20px;
      opacity: 0.8;

      margin-bottom: 20px;

      transition: opacity 2s;

      &:hover {
        opacity: 1;
      }
    }
  }

  > a {
    color: #72a1d4;
    display: block;
    margin-top: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: color 0.2s;

    &:hover {

      }

    svg {
      margin-right: 16px;
    }    
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`