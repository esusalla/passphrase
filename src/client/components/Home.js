import React from 'react';

import { Button, Img, StyledLink, Wrapper } from '../styles';


function Home() {
  return (
    <Wrapper>
      <Img src="images/pp-logo.png" alt="" />
      <StyledLink to="/join"><Button type="button">JOIN GAME</Button></StyledLink>
      <StyledLink to="/create"><Button type="button">CREATE GAME</Button></StyledLink>
    </Wrapper>
  );
}

export default Home;
