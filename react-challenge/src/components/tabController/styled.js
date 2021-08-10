import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Footter = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  bottom: 0;
  width: 100%;
  background: white;
  border-radius: 2em 2em 0 0;
`

export const LinkTo = styled(Link)`
  text-decoration: none;
  outline: none;
  pointer: cursor;
  -webkit-tap-highlight-color: transparent;
`

export const Spacer = styled.div`
  height: 6em;
`

export const Option = styled.div`
  display: flex;
  height: 5em;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    color: ${props => props.active ? 'black' : 'grey'};
  }
`

export const OptionIcon = styled.div`
  width: 2em;

  * {
    width: 100%;
    height: 100%;
  }
`

export const OptionName = styled.div`
  margin-top: 0.25em;
`