import styled, { css } from "styled-components"

const buttonStyles = css`
background-color: #E9FFAA;
color: black;
border: none;

&:hover{
  background-color: white;
    color: black;
    border: 1px solid black;
}
`

const invertedButtonStyles = css`
  background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
      background-color: black;
      color: white;
      border:none;
    }

`

const googleSignInStyles = css`
  background-color: #4285f4;
    color:white;

    &.hover{
  background-color: #357ae8;
  border:none;
  } 
`

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;

}



export const CustomButtonContainer = styled.button`
min-width: 165px;
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 14px;
  

  text-transform: uppercase;
  font-family: 'Canela Deck';
  /* font-weight: bolder; */
  
  cursor: pointer;
  display:flex;
  justify-content: center;

  ${getButtonStyles}

`
