import React, { useState } from "react"
import PropTypes from "prop-types"
import { Contained, Wrapper } from "../elements/Wrapper"
import { Chatbox } from "../elements/Chatbox"
import { SubHeader } from "../elements/Typography"

const Layout = ({ children }) => {
  return (
    <Contained>
      <Wrapper>{children}</Wrapper>
      <>
        <Chatbox>
          <SubHeader style={{ color: "var(--white)" }}>
            <i class="far fa-comment-alt" />
          </SubHeader>
          <SubHeader style={{ color: "var(--white)", marginRight: "8rem" }}>
            Chats
          </SubHeader>
          <SubHeader style={{ color: "var(--white)", fontSize: "1.5rem" }}>
            <i class="fas fa-chevron-up" />
          </SubHeader>
        </Chatbox>
      </>
    </Contained>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
