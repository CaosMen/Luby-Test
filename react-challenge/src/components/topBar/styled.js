import styled from 'styled-components';

import { ArrowLeftIcon } from '@primer/octicons-react';

export const Bar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1em;
  height: 8vh;
  background: #1F1F1F;
`

export const GoBackIcon = styled(ArrowLeftIcon)`
  cursor: pointer;
`

export const TextBar = styled.p`
  color: white;
  padding-right: 24px;
  margin: auto;
  font-family: 'Roboto', sans-serif;
`