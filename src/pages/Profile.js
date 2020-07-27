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
  Title,
  SubText,
  Text,
  SubTitle,
  LightSubTitle,
  SubHeader,
  LightTitle,
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
        <SubTitle style={{ marginBottom: "0.5rem" }}>{user.name}</SubTitle>
        <LightSubTitle style={{ marginTop: "0.2rem", marginBottom: "1.6rem" }}>
          {user.email}
        </LightSubTitle>
        <ExtraWrapper to={`/${data.users[2].id}`}>
          <ProfileThumb
            style={{
              width: "3.2rem",
              height: "3.2rem",
              borderRadius: "3.2rem",
              marginRight: "0.2rem",
            }}
            src={`${data.users[2].profilepicture}`}
          />
          <Text>{data.users[2].name}</Text>
        </ExtraWrapper>
        <ExtraWrapper to={`/${data.users[3].id}`}>
          <ProfileThumb
            style={{
              width: "3.2rem",
              height: "3.2rem",
              borderRadius: "3.2rem",
              marginRight: "0.2rem",
            }}
            src={`${data.users[3].profilepicture}`}
          />
          <Text>{data.users[3].name}</Text>
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
                <Title style={{ marginLeft: "0rem" }}>Profile</Title>
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
                      <LightTitle>Username :</LightTitle>
                      <LightTitle>E-mail :</LightTitle>
                      <LightTitle>Phone :</LightTitle>
                      <LightTitle>Website :</LightTitle>
                    </NameDetailsTitleSection>
                    <NameDetailsFillSection>
                      <Title>{user.username}</Title>
                      <Title>{user.email}</Title>
                      <Title>{user.phone}</Title>
                      <Title>{user.website}</Title>
                    </NameDetailsFillSection>
                  </NameDetailsSection>
                </DetailsSubContentWrapper1>

                <AnotherLine />

                <DetailsSubContentWrapper2>
                  <CompanyNameWrapper>
                    <LightTitle style={{ marginBottom: "-1rem" }}>
                      Company
                    </LightTitle>
                  </CompanyNameWrapper>
                  <NameDetailsSection2>
                    <NameDetailsTitleSection>
                      <LightTitle>Name :</LightTitle>
                      <LightTitle>catchphrase :</LightTitle>
                      <LightTitle style={{ marginTop: "3.18rem" }}>
                        bs :
                      </LightTitle>
                    </NameDetailsTitleSection>
                    <NameDetailsFillSection>
                      <Title>{user.company.name}</Title>
                      <Title>{user.company.catchPhrase}</Title>
                      <Title>{user.company.bs}</Title>
                    </NameDetailsFillSection>
                  </NameDetailsSection2>
                </DetailsSubContentWrapper2>
              </DetailsContentWrapper1>

              <DetailsContentWrapper2>
                <AddressNameWrapper>
                  <LightTitle>Address :</LightTitle>
                </AddressNameWrapper>

                <AddressWrapper>
                  <AddressDetailsWrapper>
                    <NameDetailsSection3>
                      <AddressDetailsTitleSection>
                        <LightTitle>Street :</LightTitle>
                        <LightTitle>Suite :</LightTitle>
                        <LightTitle>City :</LightTitle>
                        <LightTitle>Zipcode :</LightTitle>
                      </AddressDetailsTitleSection>
                      <AddressDetailsFillSection>
                        <Title>{user.address.street}</Title>
                        <Title>{user.address.suite}</Title>
                        <Title>{user.address.city}</Title>
                        <Title>{user.address.zipcode}</Title>
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
