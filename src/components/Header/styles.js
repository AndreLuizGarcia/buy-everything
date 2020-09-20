import styled from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;

  img {
    width: 80px;
    cursor: pointer;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 250px;
`;

export const CartButton = styled.button`
  display: flex;

  img {
    width: 42px;
    height: 35px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 0.2px solid rgba(0, 0, 0, 0.1);
    margin-left: -10px;
    background-color: #fff;
    font-size: 13px
  }
`;

export const Button = styled.button`
  width: 75px;
  height: 40px;

  background: #FFFFFF;
  border: 1px solid #79797B;
  border-radius: 6px;
  box-sizing: border-box;

  color: #407BFF;
`;
