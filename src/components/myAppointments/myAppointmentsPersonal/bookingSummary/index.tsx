import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";
import {
  SummaryContainer,
  Title,
  LocationContainer,
  Location,
  Service,
  Manicure,
  Booking,
  SubTotal,
  Technician,
  Day,
  Total,
} from "./bookingSummaryStyle";

import { VscLocation } from "react-icons/vsc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import type { ScheduleSlot } from "../../../../types/booking";

function BookingSummary() {
  const { summaryList, date, DaysToAppointmentDay } =
    useContext(SummaryContext);

  const initialValue = 0;
  let newSubtotal = summaryList.services;

  const addSubtotal = newSubtotal.reduce(
    (prevValue, currentValue) => prevValue + currentValue.price,
    initialValue
  );
  const TAX = 0.08375 * addSubtotal;
  const addBookingTotal = TAX + addSubtotal;

  return (
    <SummaryContainer data-aos="fade-up">
      <Title>
        <h2>Booking Summary</h2>
        <p>Please note that all prices are inclusive of the 8.375 TAX</p>
      </Title>
      {summaryList.location && (
        <LocationContainer>
          <Location>
            <div>
              <span>
                <VscLocation />
              </span>
              <p>
                {summaryList.location.heading +
                  " " +
                  summaryList.location.address}
              </p>
            </div>
          </Location>
        </LocationContainer>
      )}
      {summaryList.services && (
        <Service>
          {summaryList.services.map((s) => {
            return (
              <Manicure key={s.id}>
                <div>
                  <h6>{s.product}:</h6>
                  <p> ${s.price.toLocaleString()}</p>
                </div>
              </Manicure>
            );
          })}
          <SubTotal>
            <div>
              <h6>SUB TOTAL:</h6>
              <p>${addSubtotal.toLocaleString()}</p>
            </div>
            <div>
              <h6>TAX:</h6>
              <p>${TAX.toLocaleString()}</p>
            </div>
          </SubTotal>
        </Service>
      )}
      <Booking>
        {summaryList.technician && (
          <Technician>
            <p> Technician Selected</p>
            <div>
              <IoIosCheckmarkCircle className="icon" />
              <img src={summaryList.technician.avatar} alt="avatar" />

              <span className="name">
                <h6>{summaryList.technician.name}</h6>
                <p>
                  {summaryList.technician.role +
                    " - " +
                    summaryList.technician.age}
                  yrs
                </p>
              </span>
            </div>
          </Technician>
        )}
        {summaryList.schedule && (
          <Day>
            <AiOutlineClockCircle className="icon" />
            <h6>
              {date.toDateString()} - {(summaryList.schedule as ScheduleSlot).time} -
              <em>
                {" "}
                In {DaysToAppointmentDay}&nbsp;
                {DaysToAppointmentDay > 1 ? "days" : "day"}
              </em>
            </h6>
          </Day>
        )}
      </Booking>

      <Total>
        <div>
          <h6>BOOKING TOTAL:</h6>
          <p>
            $
            {addBookingTotal.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </Total>
    </SummaryContainer>
  );
}

export default BookingSummary;
