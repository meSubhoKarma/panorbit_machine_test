import React, { useState } from "react"
import {
  DetailsSectionWrapper,
  DetailsTitleWrapper,
  DetailsContentWrapper,
  NavWrapper,
  ViewWrapper,
  PageWrapper,
  SectionWrapper3,
  SectionWrapper2,
  NameWrapper2,
  DropdownContainer,
  DropdownDetails,
  ExtraWrapper,
  SoonWrapper,
} from "../ui/elements/Wrapper"
import {
  SubHeader,
  SubTitle,
  DropText,
  BanHead,
} from "../ui/elements/Typography"
import { ProfileThumb, ProfileSmall } from "../ui/elements/Image"
import Navbar from "../components/Navbar"
import { SmallButton } from "../ui/elements/Link"

import data from "../data/data.json"

function Dropdown({ user }) {
  return (
    <DropdownContainer>
      <DropdownDetails>
        <ProfileSmall src={`${user.profilepicture}`} />
        <SubHeader style={{ marginBottom: "0.5rem" }}>{user.name}</SubHeader>
        <SubTitle style={{ marginTop: "0.2rem", marginBottom: "1.6rem" }}>
          {user.email}
        </SubTitle>
        <ExtraWrapper>
          <ProfileThumb
            style={{
              width: "3.2rem",
              height: "3.2rem",
              borderRadius: "3.2rem",
              marginRight: "0.2rem",
            }}
            src={`${data.users[2].profilepicture}`}
          />
          <DropText>{data.users[2].name}</DropText>
        </ExtraWrapper>
        <ExtraWrapper>
          <ProfileThumb
            style={{
              width: "3.2rem",
              height: "3.2rem",
              borderRadius: "3.2rem",
              marginRight: "0.2rem",
            }}
            src={`${data.users[3].profilepicture}`}
          />
          <DropText>{data.users[3].name}</DropText>
        </ExtraWrapper>
        <SmallButton to="/landing">Sign out</SmallButton>
      </DropdownDetails>
    </DropdownContainer>
  )
}
function Todos({ match }) {
  const [open, setOpen] = useState(false)

  const getEvent = (profile) => {
    return data.users.find((e) => e.id === profile)
  }
  const user = getEvent(parseInt(match.params.profileId))

  return (
    <>
      <NavWrapper>
        <Navbar link={user.id} />
      </NavWrapper>
      <ViewWrapper>
        <PageWrapper>
          <DetailsSectionWrapper>
            <DetailsTitleWrapper>
              <SectionWrapper3>
                <SubHeader>Todos</SubHeader>
              </SectionWrapper3>

              <SectionWrapper2>
                <>
                  <NameWrapper2 onClick={() => setOpen(!open)}>
                    <ProfileThumb src={`${user.profilepicture}`} />
                    <SubHeader style={{ userSelect: "none" }}>
                      {user.name}
                    </SubHeader>
                  </NameWrapper2>

                  {open && <Dropdown user={user} />}
                </>
              </SectionWrapper2>
            </DetailsTitleWrapper>
            <DetailsContentWrapper>
              <SoonWrapper>
                <BanHead>Coming soon</BanHead>
              </SoonWrapper>
            </DetailsContentWrapper>
          </DetailsSectionWrapper>
        </PageWrapper>
      </ViewWrapper>
    </>
  )
}

export default Todos
