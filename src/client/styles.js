import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  #root {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

export const Button = styled.button`
  align-self: center;
  background: black;
  border: 2px solid white;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  height: 10vh;
  font-size: 3vh;
  font-weight: bold;
  max-width: 360px;
  min-height: 25px;
  position: relative;
  transition: all 100ms;
  width: 60vw;
  z-index: 1;
  &:active {
    background: white;
    border: 2px solid black;
    border-radius: 0px;
    color: black;
  }

  &:before {
    border: 2px solid white;
    border-radius: 6px;
    bottom: 4px;
    content: "";
    left: 4px;
    position: absolute;
    right: 4px;
    top: 4px;
    transition: all 200ms;
    z-index: -1;
  }
  &:active:before {
    border: 2px solid black;
    border-radius: 0px;
  }
`;

export const Img = styled.img`
  max-width: 720px;
  margin: 5vh 0 20vh;
  width: 80vw;
`;

export const Input = styled.input`
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 16px;
  display: block;
  height: 8vh;
  margin-bottom: 5vh;
  max-height: 40px;
  max-width: 360px;
  min-height: 25px;
  padding: 0;
  width: 60vw;
`;

export const StyledLink = styled(Link)`
  margin-bottom: 5vh;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
`;
