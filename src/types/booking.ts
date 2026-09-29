import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface Location {
  id: number;
  heading: string;
  address: string;
}

export interface ServiceOption {
  id: number;
  product: string;
  time: number;
  price: number;
}

export interface ServiceCategory {
  title: string;
  text: string;
  options: ServiceOption[];
}

export interface Technician {
  id: number;
  avatar: string;
  name: string;
  role: string;
  age: number;
  clients: number;
  rating: number;
}

export interface ScheduleSlot {
  id: number;
  time: string;
}

export interface AppointmentTypeOption {
  id: number;
  icon: string;
  title: string;
  link: string;
}

export interface NotificationAlert {
  id: number;
  heading: string;
  body: string;
  indicator: boolean;
}

export interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comment: string;
}

export interface SummaryList {
  location: Location | null;
  services: ServiceOption[];
  technician: Technician | null;
  // A calendar day pick (Date) sets this directly; picking a time slot below
  // it sets it to a ScheduleSlot instead - both are valid depending on which
  // control the visitor used last.
  schedule: ScheduleSlot | Date | null;
  numberOfClients: string | null;
  customer: CustomerDetails | null;
}

export interface SummaryContextValue {
  summaryList: SummaryList;
  setSummaryList: Dispatch<SetStateAction<SummaryList>>;
  updateList: (newList: Partial<SummaryList>) => void;
  date: Date;
  onDateChange: (newDate: Date) => void;
  DaysToAppointmentDay: number;
  removeServiceFromList: (service: ServiceOption) => void;
  addServiceToList: (service: ServiceOption) => void;
  NumberOfExpectedclient: string;
  handleExpectedClient: (event: ChangeEvent<HTMLInputElement>) => void;
}
