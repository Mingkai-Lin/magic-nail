import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { GlobalStyle } from "./reuseableComponents/globalStyle";
import Navbar from "./components/navbar/index";
import MyAppointments from "./components/myAppointments/index";
import UpdateProfile from "./components/updateProfile/index";
import ContactUs from "./components/contactUs/index";
import AboutUs from "./components/aboutUs/index";
import Notifications from "./components/notifications/index";
import { SummaryProvider } from "./summaryContext";
import Aos from "aos";
import "aos/dist/aos.css";

// my appointments personal
import SelectLocationPersonal from "./components/myAppointments/myAppointmentsPersonal/selectLocation/index";
import SelectServicePersonal from "./components/myAppointments/myAppointmentsPersonal/selectService/index";
import SelectTechnicianPersonal from "./components/myAppointments/myAppointmentsPersonal/selectTechnician/index";
import SchedulePersonal from "./components/myAppointments/myAppointmentsPersonal/schedule/index";
import ConfirmBookingPersonal from "./components/myAppointments/myAppointmentsPersonal/confirmBooking/index";
import EnterDetailsPersonal from "./components/myAppointments/myAppointmentsPersonal/enterDetails/index";

// my appointments group
import SelectLocationGroup from "./components/myAppointments/myAppointmentsGroup/selectLocation/index";
import SelectServiceGroup from "./components/myAppointments/myAppointmentsGroup/selectService/index";
import ScheduleGroup from "./components/myAppointments/myAppointmentsGroup/schedule/index";
import ConfirmBookingGroup from "./components/myAppointments/myAppointmentsGroup/confirmBooking/index";
import EnterDetailsGroup from "./components/myAppointments/myAppointmentsGroup/enterDetails/index";
import ExpectedClientsGroup from "./components/myAppointments/myAppointmentsGroup/expectedClients/index";

// Outlets
import MyAppointmentIndex from "./components/pages/MyAppointmentIndex";
import PersonalBookingIndex from "./components/pages/PersonalBookingIndex";
import GroupBookingIndex from "./components/pages/GroupBookingIndex";
import Home from "./components/home";

const theme: DefaultTheme = {
  colors: {
    primary1: "#110E10",
    primary2: "#1B1719",
    primary3: "#2A2426",
    primary4: "#171314",
    primary5: "#3D3538",
    primary6: "#A08B6E",
    primary7: "#241F21",
    primary8: "#302A2C",

    secondary1: "#F7F2EA",
    secondary2: "#CBBFB2",
    secondary3: "#D9CFC3",
    secondary4: "#B3A797",
    secondary5: "#AFA290",
    secondary6: "#6E625A",
    secondary7: "#9C8F80",

    tertiary1: "#A9803F",
    tertiary2: "#CB9F55",
    tertiary3: "#EED9AA",
    tertiary4: "#55C57A",
    tertiary5: "#E5675F",
  },

  gradients: {
    gold: "linear-gradient(135deg, #EED9AA 0%, #CB9F55 55%, #A9803F 100%)",
    goldHover: "linear-gradient(135deg, #F3E2BB 0%, #D6AC64 55%, #B38C48 100%)",
  },

  radius: {
    sm: "0.6rem",
    md: "1rem",
    lg: "1.6rem",
  },

  shadow: {
    soft: "0 0.8rem 2.4rem rgba(0, 0, 0, 0.35)",
    gold: "0 0.6rem 1.8rem rgba(203, 159, 85, 0.35)",
  },

  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Poppins', sans-serif",
  },

  mediaQuery: {
    mobile: "768px",
    tablet: "960px",
  },
};

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Navbar />
          <SummaryProvider>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/my-appointments" element={<MyAppointmentIndex />}>
                <Route index element={<MyAppointments />} />
                <Route
                  path="personal-booking"
                  element={<PersonalBookingIndex />}
                >
                  <Route index element={<SelectLocationPersonal />} />
                  <Route
                    path="select-location"
                    element={<SelectLocationPersonal />}
                  />
                  <Route
                    path="select-services"
                    element={<SelectServicePersonal />}
                  />
                  <Route
                    path="select-technician"
                    element={<SelectTechnicianPersonal />}
                  />
                  <Route path="schedule" element={<SchedulePersonal />} />
                  <Route
                    path="enter-details"
                    element={<EnterDetailsPersonal />}
                  />
                  <Route
                    path="confirm-booking"
                    element={<ConfirmBookingPersonal />}
                  />
                </Route>
                <Route path="group-booking" element={<GroupBookingIndex />}>
                  <Route index element={<SelectLocationGroup />} />
                  <Route
                    path="select-location"
                    element={<SelectLocationGroup />}
                  />
                  <Route
                    path="select-services"
                    element={<SelectServiceGroup />}
                  />
                  <Route
                    path="expected-clients"
                    element={<ExpectedClientsGroup />}
                  />
                  <Route path="schedule" element={<ScheduleGroup />} />
                  <Route path="enter-details" element={<EnterDetailsGroup />} />
                  <Route
                    path="confirm-booking"
                    element={<ConfirmBookingGroup />}
                  />
                </Route>
              </Route>
              <Route path="update-profile" element={<UpdateProfile />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="about-us" element={<AboutUs />} />
            </Routes>
          </SummaryProvider>
        </Fragment>
      </ThemeProvider>
    </Router>
  );
}

export default App;
