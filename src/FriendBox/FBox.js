import React from 'react'
import styled from 'styled-components'
import data from './data.json'

 const FBox = () => {
    return (
       <Container>
           <Wrapper>
            {data.map((diamond) => (
                <VideoBox key={diamond.id}>
               <Title>{diamond.title}</Title>
               <Div>{diamond.div}</Div>
                   <Video 
                   onMouseOver={e=> e.target.play()}
                   onMouseOut ={e=> e.target.pause()}
                   src={diamond.vid} controls loop muted
                    your video does not support browser />
               </VideoBox>
            ))}   
           </Wrapper>
       </Container>
    )
}

export default FBox

const Div = styled.div` 
width: 300px;
height: 300px;
object-fit: cover;
border-radius: 30px;
position: absolute;
bottom: -300px;
border: 2px solid white;
`;
const Video= styled.video`
width: 300px;
height: 300px;
object-fit: cover;
border-radius: 30px;
border: 2px solid white;
position: absolute;
bottom: -550px;
top: 200px;
left: 350px;
transition: all 400ms;
margin: 10px;
transform: scale(1);

hover{
    transform: scale(1.05);
}
`;
const VideoBox = styled.div`
width: 100%;
height: 100%;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
`;
const Title= styled.div`
font-weight: bold;
`;
const Wrapper= styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 50px;

`;
const Container= styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
color: pink;
background-color: #2b6777;

`;
