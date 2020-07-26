import React, { useState } from "react"
import {
  DetailsSectionWrapper,
  DetailsTitleWrapper,
  DetailsContentWrapper,
  DetailsContentWrapper1,
  DetailsContentWrapper2,
  DetailsSubContentWrapper1,
  DetailsSubContentWrapper2,
  NameSection,
  NameDetailsSection,
  NameDetailsTitleSection,
  NameDetailsFillSection,
  CompanyNameWrapper,
  NameDetailsSection2,
  AnotherLine,
  AddressNameWrapper,
  LatLongWrapper,
  MapWrapper,
  AddressDetailsWrapper,
  AddressWrapper,
  NameDetailsSection3,
  AddressDetailsFillSection,
  AddressDetailsTitleSection,
  NavWrapper,
  ViewWrapper,
  PageWrapper,
  SectionWrapper3,
  SectionWrapper2,
  NameWrapper2,
  DropdownContainer,
  DropdownDetails,
  ExtraWrapper,
} from "../ui/elements/Wrapper"
import {
  SubHeader,
  Title,
  Details,
  SubTitle,
  SubText,
  Text,
  DropText,
} from "../ui/elements/Typography"
import {
  ProfileLarge,
  MapImage,
  ProfileThumb,
  ProfileSmall,
} from "../ui/elements/Image"
import Navbar from "../components/Navbar"
import { SmallButton } from "../ui/elements/Link"

import Map from "../assets/map.jpg"
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

function Profile({ match }) {
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
                <SubHeader>Profile</SubHeader>
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
              <DetailsContentWrapper1>
                <DetailsSubContentWrapper1>
                  <NameSection>
                    <ProfileLarge src={`${user.profilepicture}`} />
                    <Title>{user.name}</Title>
                  </NameSection>

                  <NameDetailsSection>
                    <NameDetailsTitleSection>
                      <SubTitle>Username :</SubTitle>
                      <SubTitle>E-mail :</SubTitle>
                      <SubTitle>Phone :</SubTitle>
                      <SubTitle>Website :</SubTitle>
                    </NameDetailsTitleSection>
                    <NameDetailsFillSection>
                      <Details>{user.username}</Details>
                      <Details>{user.email}</Details>
                      <Details>{user.phone}</Details>
                      <Details>{user.website}</Details>
                    </NameDetailsFillSection>
                  </NameDetailsSection>
                </DetailsSubContentWrapper1>

                <AnotherLine />

                <DetailsSubContentWrapper2>
                  <CompanyNameWrapper>
                    <SubTitle style={{ marginBottom: "-1rem" }}>
                      Company
                    </SubTitle>
                  </CompanyNameWrapper>
                  <NameDetailsSection2>
                    <NameDetailsTitleSection>
                      <SubTitle>Name :</SubTitle>
                      <SubTitle>catchphrase :</SubTitle>
                      <SubTitle style={{ marginTop: "3.18rem" }}>bs :</SubTitle>
                    </NameDetailsTitleSection>
                    <NameDetailsFillSection>
                      <Details>{user.company.name}</Details>
                      <Details>{user.company.catchPhrase}</Details>
                      <Details>{user.company.bs}</Details>
                    </NameDetailsFillSection>
                  </NameDetailsSection2>
                </DetailsSubContentWrapper2>
              </DetailsContentWrapper1>

              <DetailsContentWrapper2>
                <AddressNameWrapper>
                  <SubTitle>Address :</SubTitle>
                </AddressNameWrapper>

                <AddressWrapper>
                  <AddressDetailsWrapper>
                    <NameDetailsSection3>
                      <AddressDetailsTitleSection>
                        <SubTitle>Street :</SubTitle>
                        <SubTitle>Suite :</SubTitle>
                        <SubTitle>City :</SubTitle>
                        <SubTitle>Zipcode :</SubTitle>
                      </AddressDetailsTitleSection>
                      <AddressDetailsFillSection>
                        <Details>{user.address.street}</Details>
                        <Details>{user.address.suite}</Details>
                        <Details>{user.address.city}</Details>
                        <Details>{user.address.zipcode}</Details>
                      </AddressDetailsFillSection>
                    </NameDetailsSection3>
                  </AddressDetailsWrapper>
                  <MapWrapper>
                    <MapImage src={`${Map}`} />
                  </MapWrapper>
                  <LatLongWrapper>
                    <SubText style={{ margin: "0rem", marginRight: "1rem" }}>
                      Lat :
                    </SubText>
                    <Text style={{ margin: "0rem", marginRight: "2rem" }}>
                      {user.address.geo.lat}
                    </Text>
                    <SubText style={{ margin: "0rem", marginRight: "1rem" }}>
                      Long :
                    </SubText>
                    <Text style={{ margin: "0rem", marginRight: "1rem" }}>
                      {user.address.geo.lng}
                    </Text>
                  </LatLongWrapper>
                </AddressWrapper>
              </DetailsContentWrapper2>
            </DetailsContentWrapper>
          </DetailsSectionWrapper>
        </PageWrapper>
      </ViewWrapper>
    </>
  )
}

export default Profile
