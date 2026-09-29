import personal from "../../images/personal.svg";
import group from "../../images/group.svg";
import type { AppointmentTypeOption } from "../../types/booking";

const MyAppointmentsData: AppointmentTypeOption[] = [
  {
    id: 1,
    icon: personal,
    title: "Personal Booking",
    link: "/my-appointments/personal-booking/select-location",
  },
  {
    id: 2,
    icon: group,
    title: "Group Booking",
    link: "/my-appointments/group-booking/select-location",
  },
];
export default MyAppointmentsData;
