import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";
import {
  ContentContainer,
  RightContent,
  RightContentCol1,
  RightContentCol2,
} from "../../../../reuseableComponents/containerStyle";
import Sidebar from "../../../sidebar";
import {
  Button,
  ButtonContainer,
} from "../../../../reuseableComponents/buttonStyle";
import {
  ServiceContainer,
  Services,
  ServiceType,
  FormContainer,
  InputContainer,
} from "./selectServiceStyle";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { MdChevronLeft } from "react-icons/md";
import serviceData from "../../../../data/serviceData";
import BookingSummary from "../bookingSummary";
import {
  HeadingStyle,
  Back,
} from "../../../../reuseableComponents/headingStyle";
import CheckBox from "../../../../reuseableComponents/Checkbox";
import type { ServiceOption } from "../../../../types/booking";

function SelectServices() {
  const { removeServiceFromList, addServiceToList } =
    useContext(SummaryContext);

  const [onClick, setOnClick] = React.useState<Record<number, boolean>>({});
  const handleToggle = (id: number) => () => {
    setOnClick((state) => ({
      ...state,
      [id]: !state[id],
    }));
  };

  const handleClick = (checkboxState: boolean, service: ServiceOption) => {
    if (checkboxState) {
      addServiceToList(service);
    } else {
      removeServiceFromList(service);
    }
  };

  return (
    <ContentContainer>
      <Sidebar />
      <RightContent>
        <RightContentCol1>
          <HeadingStyle data-aos="zoom-in">
            <h2>Select Services</h2>
            <Back to="/my-appointments/personal-booking/select-location">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <ServiceContainer data-aos="fade-up">
            {serviceData.map((items, id) => {
              return (
                <Services key={id}>
                  <ServiceType>
                    <div onClick={handleToggle(id)}>
                      <h3>{items.title}</h3>
                      <p>{items.text}</p>
                    </div>
                    <span onClick={handleToggle(id)}>
                      {onClick[id] ? <FaAngleRight /> : <FaAngleDown />}
                    </span>
                  </ServiceType>
                  {onClick[id] && (
                    <FormContainer>
                      {items.options.map((option) => (
                        <InputContainer key={option.id}>
                          <CheckBox
                            onChange={(checkboxState) =>
                              handleClick(checkboxState, option)
                            }
                            value={items.options}
                            name="services"
                            label={
                              <div>
                                <h5>{option.product}</h5>
                                <p>{`${option.time} mins - $${option.price}`}</p>
                              </div>
                            }
                          />
                        </InputContainer>
                      ))}
                    </FormContainer>
                  )}
                </Services>
              );
            })}
          </ServiceContainer>
          <ButtonContainer paddingm="0.5rem 0">
            <Button to="/my-appointments/personal-booking/select-technician">
              CONTINUE
            </Button>
          </ButtonContainer>
        </RightContentCol1>
        <RightContentCol2>
          <BookingSummary />
        </RightContentCol2>
      </RightContent>
    </ContentContainer>
  );
}

export default SelectServices;
