import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const LinkTo = styled(Link)`
  text-decoration: none;
  outline: none;
  pointer: cursor;
`

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 2em 2em 0;
  border-bottom: 1px solid grey;
`

export const BarTitle = styled.div`
  display: flex;
  align-items: center;
`

export const Box = styled.div`
  height: 3em;
  width: 0.5em;
  margin-right: 1em;
  border-radius: 0 2em 2em 0;
  background: ${props => props.color}; 
`

export const Avatar = styled.img`
  background: white;
  height: 3em;
  width: 3em;
  margin-right: 1em;
  border-radius: 50%;
  border: 0.2em solid white;
`

export const Name = styled.p`
  color: white;
  margin: 0;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
`

export const Info = styled.p`
  color: white;
  margin: 0.2em 2em 0 1.75em;
  font-weight: 100;
  font-family: 'Roboto', sans-serif;
`