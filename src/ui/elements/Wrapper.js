import styled from "styled-components"
// eslint-disable-next-line
import ScrollArea from "react-scrollbar"
import { Link } from "react-router-dom"

export const Contained = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`

export const Wrapper = styled.div`
  z-index: 2;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const ViewWrapper = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 8rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
`

export const NavWrapper = styled.div`
  display: flex;
  width: 22%;
  padding: 4rem 5.6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 88vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Card = styled.div`
  display: flex;
  width: 37vw;
  height: 66vh;
  flex-direction: column;
  background: var(--white);
  justify-content: center;
  align-items: center;
  box-shadow: 0rem 2rem 2.8rem var(--shadow-color);
  border-radius: 3rem;
`

export const Board = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  background-color: var(--lightGrey);
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
`

export const List = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`

export const SmallWrapper = styled.div`
  width: 100%;
  height: 82%;
  padding: 0rem 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
`

export const SectionWrapper = styled.div`
  width: 98%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0rem 0.4rem;
  align-items: center;
`

export const SectionWrapper2 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

export const SectionWrapper3 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const NameWrapper = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
`

export const NameWrapper2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 1px;
  background: var(--border-color);
`

export const NavLine = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 1px;
  background: var(--lightWhite);
`

export const AnotherLine = styled.div`
  width: 70%;
  height: 1px;
  border-radius: 1px;
  background: var(--color-light);
`

export const DetailsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`

export const DetailsTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  border-bottom: 1px solid var(--color-light);
  padding-bottom: 2rem;
`

export const DetailsContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5rem;
  height: 90%;
`

export const DetailsContentWrapper1 = styled.div`
  border-right: 1px solid var(--color-light);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 38%;
`

export const DetailsContentWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 62%;
  margin-left: 3rem;
`

export const DetailsSubContentWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65%;
  margin-bottom: 1.4rem;
`

export const DetailsSubContentWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35%;
  margin-top: 0rem;
`

export const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
`

export const NameDetailsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  height: 40%;
`

export const NameDetailsTitleSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 40%;
`

export const AddressDetailsTitleSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 25%;
`

export const NameDetailsFillSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
`

export const AddressDetailsFillSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
`

export const CompanyNameWrapper = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NameDetailsSection2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  height: 80%;
`

export const NameDetailsSection3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  height: 100%;
`

export const AddressNameWrapper = styled.div`
  height: 7%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const AddressWrapper = styled.div`
  width: 90%;
  margin-left: 5rem;
  height: 93%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -1.6rem;
`

export const AddressDetailsWrapper = styled.div`
  width: 70%;
  height: 36%;
  margin-left: -1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MapWrapper = styled.div`
  width: 100%;
  height: 56%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: -1rem;
`

export const LatLongWrapper = styled.div`
  width: 100%;
  height: 4%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
`

export const DropdownContainer = styled.div`
  position: absolute;
  top: 12%;
  right: 0%;
  width: 20%;
  height: 48%;
  transform: translate(-32%);
  background: var(--white);
  padding: 1rem;
  border-radius: 3rem;
  overflow: hidden;
  box-shadow: 0rem 2rem 6rem var(--shadow-color-dark);
`

export const DropdownDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4rem;
`

export const ExtraWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 1rem 0rem;
  border-top: 1px solid var(--color-light);
  text-decoration: none;
`

export const NavLinkWrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Blink = styled.div`
  width: 15%;
  position: relative;
  border-top-left-radius: 6rem;
  border-bottom-left-radius: 6rem;
  height: 70%;
  background: var(--white);

  /* :before,
  :after {
    content: "";
    position: absolute;

    height: 10px;
    width: 20px;

    bottom: 0;
  }

  :after {
    top: -20px;

    border-radius: 0 0 0 10px;
    -moz-border-radius: 0 0 0 10px;
    -webkit-border-radius: 0 0 0 10px;

    -webkit-box-shadow: -10px 0 0 0 #fff;
    box-shadow: -10px 0 0 0 #fff;
  }

  :before {
    bottom: -20px;

    border-radius: 0 0 10px 0;
    -moz-border-radius: 0 0 10px 0;
    -webkit-border-radius: 0 0 10px 0;

    -webkit-box-shadow: 10px 0 0 0 #fff;
    box-shadow: 10px 0 0 0 #fff;
  } */
`

export const SoonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
`

export const Blank = styled.h1`
  opacity: 0;
  margin: 0;
`
