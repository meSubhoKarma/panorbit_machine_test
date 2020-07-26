import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { PrimaryLink, HoverLink } from "../ui/elements/Link"
import { NavLine, NavLinkWrapper } from "../ui/elements/Wrapper"
import { Nav } from "../ui/elements/Navbar"

function Navbar({ link }) {
  return (
    <>
      <Nav>
        <HoverLink to="/landing">
          <i class="fas fa-chevron-left" />
        </HoverLink>

        <NavLinkWrapper>
          <PrimaryLink to={`/${link}`}>Profile</PrimaryLink>
        </NavLinkWrapper>

        <NavLine />

        <NavLinkWrapper>
          <PrimaryLink to={`/${link}/posts`}>Posts</PrimaryLink>
        </NavLinkWrapper>

        <NavLine />

        <NavLinkWrapper>
          <PrimaryLink to={`/${link}/gallery`}>Gallery</PrimaryLink>
        </NavLinkWrapper>

        <NavLine />

        <NavLinkWrapper>
          <PrimaryLink to={`/${link}/todos`}>Todos</PrimaryLink>
        </NavLinkWrapper>
      </Nav>
    </>
  )
}

export default Navbar
