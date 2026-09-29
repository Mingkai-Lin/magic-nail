import React, { createContext, ReactNode, useState } from "react";
import type { ServiceOption, SummaryContextValue, SummaryList } from "./types/booking";

const defaultSummaryList: SummaryList = {
  location: null,
  services: [],
  technician: null,
  schedule: null,
  numberOfClients: null,
  customer: null,
};

const defaultSummaryContext: SummaryContextValue = {
  summaryList: defaultSummaryList,
  setSummaryList: () => {},
  updateList: () => {},
  date: new Date(),
  onDateChange: () => {},
  DaysToAppointmentDay: 0,
  removeServiceFromList: () => {},
  addServiceToList: () => {},
  NumberOfExpectedclient: "",
  handleExpectedClient: () => {},
};

export const SummaryContext = createContext<SummaryContextValue>(defaultSummaryContext);

export const SummaryProvider = ({ children }: { children: ReactNode }) => {
  // state to get all items in the booking summaryList
  const [summaryList, setSummaryList] = useState<SummaryList>(defaultSummaryList);

  //  function to update the booking summaryList
  const updateList = (newList: Partial<SummaryList>) => {
    setSummaryList((prevList) => ({ ...prevList, ...newList }));
  };

  // function to remove serviceItem from  booking summary page
  const removeServiceFromList = (service: ServiceOption) => {
    const newServiceList = summaryList.services.filter(
      (item) => item.id !== service.id
    );
    updateList({ services: newServiceList });
  };

  // function to add serviceItem to booking summary page
  const addServiceToList = (service: ServiceOption) => {
    const newServiceList = summaryList.services.concat(service);
    updateList({ services: newServiceList });
  };

  // state and function to display selected date in booking summary page
  const [date, setDate] = useState(new Date());
  const onDateChange = (newDate: Date) => {
    setDate(newDate);
  };

  // function to calculate number of days to clients selected appointment day
  let DaysToAppointmentDay =
    Number(date.toLocaleString("en-US", { day: "2-digit" })) -
    Number(new Date().toLocaleString("en-US", { day: "2-digit" }));

  // function to calculate number of expected clients for group booking
  const [NumberOfExpectedclient, setNumberOfExpectedclient] = useState("");
  const handleExpectedClient = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfExpectedclient(event.target.value);
  };

  const value: SummaryContextValue = {
    summaryList,
    setSummaryList,
    updateList,
    date,
    onDateChange,
    DaysToAppointmentDay,
    removeServiceFromList,
    addServiceToList,
    NumberOfExpectedclient,
    handleExpectedClient,
  };

  return (
    <SummaryContext.Provider value={value}>{children}</SummaryContext.Provider>
  );
};
