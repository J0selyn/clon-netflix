import React from 'react'
import background from  "../assets/Fondo.png"
import styled  from 'styled-components';

const Backgroundimage = () => {
  return (
    <Container>
        <img src={background} alt='background' />
    </Container>
  )
}

export default Backgroundimage

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
