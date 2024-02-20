// Style your components here
import styled from 'styled-components'

export const Meme = styled.div`
  height: 300px;
  width: 400px;
  background-image: url('${props => props.imgUrl}');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  text-align: center;
`
export const Text = styled.p`
  font-size: ${props => props.fontSize}px;
`
