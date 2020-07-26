import styled from "styled-components"

export const Chatbox = styled.div`
  position: absolute;
  padding: 0rem 1rem;
  bottom: 0%;
  right: 6.7%;
  background: var(--color-secondary);
  width: 14%;
  height: 5.6%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  z-index: 24;
`

export const ChatboxContainer = styled.div`
  position: relative;
  bottom: 0%;
  right: 6.7%;
  width: 14%;
  height: 48%;
  transform: translate(-32%);
  background: var(--white);
  padding: 1rem;
  border-radius: 3rem;
  overflow: hidden;
`

export const ChatboxDetails = styled.div``
