import React from "react"
import {
  Contained,
  Card,
  Wrapper,
  Board,
  SectionWrapper,
  SmallWrapper,
  List,
  NameWrapper,
  Line,
} from "../ui/elements/Wrapper"
import { Title, SubHeader } from "../ui/elements/Typography"
import { ProfileThumb } from "../ui/elements/Image"
import ScrollArea from "react-scrollbar/dist/no-css"

import data from "../data/data.json"
import "./style.css"

function Landing() {
  return (
    <>
      <section>
        <Contained>
          <Wrapper>
            <Card>
              <Board>
                <Title>Select an account</Title>
              </Board>
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
                  smoothScrolling={true}
                >
                  <List>
                    {data.users.map((i) => (
                      <SectionWrapper>
                        <NameWrapper to={`/${i.id}`}>
                          <ProfileThumb src={`${i.profilepicture}`} />
                          <SubHeader>{i.name}</SubHeader>
                        </NameWrapper>
                        <Line />
                      </SectionWrapper>
                    ))}
                  </List>
                </ScrollArea>
              </SmallWrapper>
            </Card>
          </Wrapper>
        </Contained>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
    </>
  )
}

export default Landing
