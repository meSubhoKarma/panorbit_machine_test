import React, { useState } from "react"
import styled from "styled-components"
import ScrollArea from "react-scrollbar/dist/no-css"
import PropTypes from "prop-types"
import { Contained, Wrapper } from "../elements/Wrapper"
//import { Chatbox } from "../elements/Chatbox"
import { SubHeader, LightSubHeader } from "../elements/Typography"

import data from "../../data/data.json"
import { ProfileThumb } from "../elements/Image"

const Chatbox = styled.div`
  position: absolute;
  bottom: 0%;
  right: 6.7%;
  background: var(--color-secondary);
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  z-index: 24;
`

const ClickWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 0rem 1rem;
`

const ListWrapper = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`

const SmallWrapper = styled.div`
  width: 99%;
  height: 100%;
  background: var(--white);
  /* padding: 1rem 0rem; */
  /* display: -webkit-box; */
  /* display: -webkit-flex; */
  display: -ms-flexbox;
  display: flex;
  /* -webkit-box-pack: center; */
  /* -webkit-justify-content: center; */
  -ms-flex-pack: center;
  justify-content: center;
  /* -webkit-align-items: center; */
  /* -webkit-box-align: center; */
  -ms-flex-align: center;
  align-items: center;
`

const SectionWrapper = styled.div`
  width: 100%;
  height: 5rem;
  /* display: -webkit-box; */
  /* display: -webkit-flex; */
  display: -ms-flexbox;
  display: flex;
  /* -webkit-flex-direction: column; */
  -ms-flex-direction: column;
  flex-direction: column;
  /* -webkit-box-pack: center; */
  /* -webkit-justify-content: center; */
  -ms-flex-pack: center;
  justify-content: center;
  /* margin: 0rem 0.2rem; */
  /* -webkit-align-items: center; */
  /* -webkit-box-align: center; */
  -ms-flex-align: center;
  align-items: center;
`

export const List = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 1.4rem;
`

const NameWrapper = styled.div`
  /*display: -webkit-box; */
  /* display: -webkit-flex; */
  display: -ms-flexbox;
  display: flex;
  /* -webkit-box-pack: start; */
  /* -webkit-justify-content: flex-start; */
  -ms-flex-pack: start;
  justify-content: flex-start;
  /* -webkit-align-items: center; */
  /* -webkit-box-align: center; */
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
`

const SubHeader2 = styled.h1`
  margin-left: 0.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-strong);
`

function ChatList() {
  return (
    <ListWrapper>
      <SmallWrapper>
        <ScrollArea
          style={{
            width: "100%",
            height: "98%",
          }}
          speed={0.8}
          className="area"
          contentClassName="content"
          horizontal={false}
          vertical={true}
        >
          <List>
            {data.users.map((i) => (
              <SectionWrapper>
                <NameWrapper>
                  <ProfileThumb src={`${i.profilepicture}`} />
                  <SubHeader2>{i.name}</SubHeader2>
                </NameWrapper>
              </SectionWrapper>
            ))}
          </List>
        </ScrollArea>
      </SmallWrapper>
    </ListWrapper>
  )
}

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <Contained>
      <Wrapper>{children}</Wrapper>
      <>
        <Chatbox>
          <ClickWrapper onClick={() => setOpen(!open)}>
            <SubHeader style={{ color: "var(--white)", fontSize: "1.8rem" }}>
              <i className="far fa-comment-alt" />
            </SubHeader>
            <LightSubHeader
              style={{
                color: "var(--white)",
                margin: "0rem",
                marginRight: "11rem",
                marginBottom: "0.5rem",
              }}
            >
              Chats
            </LightSubHeader>
            {!open ? (
              <SubHeader style={{ color: "var(--white)", fontSize: "1.5rem" }}>
                <i className="fas fa-chevron-up" />
              </SubHeader>
            ) : (
              <SubHeader style={{ color: "var(--white)", fontSize: "1.5rem" }}>
                <i className="fas fa-chevron-down" />
              </SubHeader>
            )}
          </ClickWrapper>

          {open && <ChatList />}
        </Chatbox>
      </>
    </Contained>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
