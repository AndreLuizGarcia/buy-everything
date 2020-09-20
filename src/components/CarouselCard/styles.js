import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 270px;
  height: 458px;

  background: #FFFFFF;
  border: 1px solid #ACACAC;
  border-radius: 8px;

  padding: 8px;

  img {
    width: 150px;
    height: 190px;

    align-self: center;
  }
  
  span {
    font-weight: bold;
  }

  p {
    display: -webkit-box;
    max-width: 100%;
    height: 112px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 1;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;

  background-color: ${props => props.backgroundColor};
  border-radius: 8px;
  
  color: #fff;

  opacity: 0.9;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
