import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";
import locationData from "../../../../data/locationData";
import { MdChevronLeft } from "react-icons/md";
import {
  Content,
  LocationText,
  MapImg,
  Location as LocationContainer,
  RightContent,
} from "./selectLocationStyle";
import { ContentContainer } from "../../../../reuseableComponents/containerStyle";
import Sidebar from "../../../sidebar";
import {
  Button,
  ButtonContainer,
} from "../../../../reuseableComponents/buttonStyle";
import {
  HeadingStyle,
  Back,
} from "../../../../reuseableComponents/headingStyle";
import RadioButton from "../../../../reuseableComponents/RadioButton";
import type { Location } from "../../../../types/booking";

function SelectLocation() {
  const { updateList } = useContext(SummaryContext);
  const handleGroupLocation = (location: Location) => {
    updateList({ location });
  };
  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <LocationContainer>
          <HeadingStyle mPdTop="0" data-aos="zoom-in">
            <h2>Select Location</h2>
            <Back to="/my-appointments">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>

          {locationData.map((data) => (
            <Content key={data.id}>
              <RadioButton
                checkHeight="1.5rem"
                checkWidth="0.8rem"
                width="3rem"
                height="3rem"
                onChange={() => handleGroupLocation(data)}
                label={
                  <LocationText>
                    <h4>{data.heading}</h4>
                    <p>{data.address}</p>
                  </LocationText>
                }
                flexDirection="row"
                value={data}
                name="location"
              />
            </Content>
          ))}
          <ButtonContainer>
            <Button to="/my-appointments/group-booking/select-services">
              CONTINUE
            </Button>
          </ButtonContainer>
        </LocationContainer>

        <MapImg data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1MiiQQATEDjm3WLI6Z_TLAkdxQ-OCfYw&ehbc=2E312F"
            width="100%"
            height="100%"
            title="googleMap"
          ></iframe>
        </MapImg>
      </RightContent>
    </ContentContainer>
  );
}

export default SelectLocation;
