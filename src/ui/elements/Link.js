import styled from "styled-components"
import { Link } from "react-router-dom"

export const PrimaryLink = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  width: 100%;
  text-align: start;
  font-size: 2rem;
  font-weight: 400;
  color: var(--subWhite);
  cursor: pointer;
  transition: all var(--speed);

  &:hover {
    color: var(--white);
  }

  &:focus {
    color: var(--white);
  }
`

export const HoverLink = styled(Link)`
  position: absolute;
  width: 9rem;
  height: 3.8rem;
  padding: 0.8rem;
  top: 8.4%;
  left: 5.9%;
  font-size: 2rem;
  color: var(--color-secondary);
  font-weight: 600;
  border-radius: 4rem;
  background: var(--white);
  cursor: pointer;
  text-decoration: none;
  transition: all var(--speed);

  &:hover {
    color: var(--white);
    background: transparent;
    border: 1px solid var(--white);
  }
`

export const SmallButton = styled(Link)`
  width: 48%;
  text-decoration: none;
  height: auto;
  text-align: center;
  padding: 1.2rem 2rem;
  border-radius: 4rem;
  border: none;
  background: #cd5c5c;
  color: white;
  font-size: 1.8rem;
  font-weight: 500;
  margin: 1rem;
  transition: all var(--speed);

  &:hover {
    background: #fa8072;
  }

  &:focus {
    color: #cd5c5c;
    background: transparent;
    border: 1px solid #cd5c5c;
  }
`
