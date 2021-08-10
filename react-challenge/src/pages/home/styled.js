import styled from 'styled-components';

import { MarkGithubIcon } from '@primer/octicons-react';

export const Main = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  margin: auto;
`

export const GitHubLogo = styled(MarkGithubIcon)`
  margin: auto;
  margin-bottom: 1.5em;
  height: auto;
  width: 30vw;

  @media (min-width: 768px) {
    width: 15vh;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 65vw;

  @media (min-width: 768px) {
    width: 50vh;
  }
`

export const InputArea = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 0.75em;
  flex-direction: column;
`

export const Input = styled.input`
  height: 2.5em;
  padding: 0.25em 1em;
  outline: none;
  border: none;
  border-radius: 5px;
`

export const ErrorArea = styled.p`
  display: ${props => props.out ? 'block' : 'none'};
  color: #EB2D2D;
  position: absolute;
  right: 1em;
  font-size: 0.8em;
  user-select: none;
`

export const Button = styled.button`
  color: #030202;
  background: ${props => props.color};
  height: 3em;
  border: none;
  border-radius: 5px;
  outline: none;
  font-weight: 900;
  cursor: pointer;

  &:active {
    background: #CCA400;
  }
`