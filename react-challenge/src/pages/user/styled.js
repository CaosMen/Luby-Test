import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { ArrowLeftIcon, SignOutIcon, SignInIcon } from '@primer/octicons-react';

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  padding: 1em 1em 15vh 1em;
  background: #1F1F1F;
`

export const GoBackIcon = styled(ArrowLeftIcon)`
  cursor: pointer;
`

export const Username = styled.p`
  color: white;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`

export const LinkTo = styled(Link)`
  text-decoration: none;
  outline: none;
  pointer: cursor;
`

export const SignText = styled.div`
  color: white;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const SignOut = styled(SignOutIcon)`
  margin: 0.125em 0 0.125em 0.5em;
  width: 100%;
  height: 1.25em;
`

export const SignIn = styled(SignInIcon)`
  margin-left: 0.5em;
  width: 100%;
  height: 1.25em;
`

export const Avatar = styled.img`
  display: block;
  background: white;
  margin: -15vw auto 0 auto;
  width: 30vw;
  border: 0.2em solid white;
  border-radius: 50%;

  @media (min-width: 768px) {
    max-width: 20vh;
    margin: -10vh auto 0 auto;
  }
`

export const Title = styled.h1`
  color: white;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`

export const BarTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.75em;
`

export const Box = styled.div`
  height: 3em;
  width: 0.5em;
  margin-right: 0.5em;
  border-radius: 0 2em 2em 0;
  background: ${props => props.color}; 
`

export const Info = styled.p`
  color: white;
  margin: 0.2em 0 0 1em;
  font-weight: 100;
  font-family: 'Roboto', sans-serif;
`

export const BarInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2em 0;
  background: #5252525D;
`

export const BarBlock = styled.div`
  display: flex;
  padding: 1em 0;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: 'Roboto', sans-serif;
`

export const BlockNumber = styled.p`
  font-size: 2.5em;
  font-weight: bold;
  margin: 0 0 0.1em 0;
`

export const BlockText = styled.p`
  font-weight: 100;
  margin: 0;
`