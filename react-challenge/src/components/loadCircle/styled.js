import styled, { keyframes } from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  margin: auto;
`

const spin = keyframes`
  0%  {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const LoaderCircle = styled.div`
  border: 0.25em solid #F3F3F3;
  border-top: 0.25em solid ${props => props.color};
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: ${ spin } 2s linear infinite;
`