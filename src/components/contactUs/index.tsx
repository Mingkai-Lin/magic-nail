import React, { useRef, useState } from "react";
import {
  FormField,
  ContactUsContainer,
  InputField,
  Message,
  ErrorMsg,
  SubmitBtn,
} from "./contactUsStyle";
import { MdChevronLeft } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import {
  ContentContainer,
  RightContent,
} from "../../reuseableComponents/containerStyle";
import Sidebar from "../sidebar";
import { HeadingStyle, Back } from "../../reuseableComponents/headingStyle";
import { ButtonContainer } from "../../reuseableComponents/buttonStyle";
import Alert, { AlertMessage } from "../Alert/Alert";
import { TO_EMAIL, isEmailConfigured } from "../../utils/emailNotify";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function ContactUs() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showAlert, setShowAlert] = useState<AlertMessage | null>(null);
  const handleShowAlert = (message: string, variant: "success" | "error" = "success") => {
    setShowAlert({ msg: message, variant });
    setTimeout(() => {
      setShowAlert(null);
    }, 6000);
  };

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Must be 2 characters or more")
        .required("*Required"),
      email: Yup.string()
        .email("Enter a valid email address")
        .required("*Required"),
      phone: Yup.string().required("*Required"),
      subject: Yup.string()
        .min(4, "Must be 4 characters or more")
        .required("*Required"),
      message: Yup.string(),
    }),

    onSubmit: async (values, { resetForm }) => {
      if (!isEmailConfigured || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        console.error(
          "EmailJS is not configured - set REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY and REACT_APP_CONTACT_EMAIL in .env"
        );
        handleShowAlert(
          "Message not sent: email isn't configured yet. See .env.example.",
          "error"
        );
        return;
      }

      try {
        if (formRef.current) {
          await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
            publicKey: EMAILJS_PUBLIC_KEY,
          });
        }
        resetForm();
        handleShowAlert(
          "Thanks for contacting us, we will get back to you as soon as possible"
        );
      } catch (error) {
        console.error("Failed to send message via EmailJS", error);
        handleShowAlert(
          "Something went wrong sending your message. Please try again.",
          "error"
        );
      }
    },
  });

  return (
    <ContentContainer>
      <Sidebar />
      <RightContent display="block">
        <ContactUsContainer>
          <HeadingStyle data-aos="zoom-in">
            <h2>Contact Us</h2>
            <Back to="/">
              <MdChevronLeft />
              Go back
            </Back>
          </HeadingStyle>
          <FormField ref={formRef} onSubmit={formik.handleSubmit} data-aos="zoom-in">
            <input type="hidden" name="to_email" value={TO_EMAIL} />
            <InputField>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <ErrorMsg>
                {formik.touched.name && formik.errors.name ? (
                  <p>{formik.errors.name}</p>
                ) : null}
              </ErrorMsg>
            </InputField>
            <InputField>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <ErrorMsg>
                {formik.touched.email && formik.errors.email ? (
                  <p>{formik.errors.email}</p>
                ) : null}
              </ErrorMsg>
            </InputField>
            <InputField>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter phone number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              <ErrorMsg>
                {formik.touched.phone && formik.errors.phone ? (
                  <p>{formik.errors.phone}</p>
                ) : null}
              </ErrorMsg>
            </InputField>
            <InputField>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                placeholder="Provide context"
                id="subject"
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <ErrorMsg>
                {formik.touched.subject && formik.errors.subject ? (
                  <p>{formik.errors.subject}</p>
                ) : null}
              </ErrorMsg>
            </InputField>
            <Message>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={2}
                placeholder="Write your question(s) here"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
            </Message>
            <ButtonContainer>
              <SubmitBtn
                type="submit"
                disabled={formik.isSubmitting}
                onClick={() => formik.handleSubmit()}
              >
                {formik.isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </SubmitBtn>
            </ButtonContainer>
          </FormField>
          <Alert display="none" showAlert={showAlert} />
        </ContactUsContainer>
      </RightContent>
    </ContentContainer>
  );
}

export default ContactUs;
