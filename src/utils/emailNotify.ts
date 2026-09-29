import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const CONTACT_EMAIL = process.env.REACT_APP_CONTACT_EMAIL;
const SMS_GATEWAY_EMAIL = process.env.REACT_APP_SMS_GATEWAY_EMAIL;

// EmailJS templates take one "To Email" field, but it accepts a comma-separated
// list - so sending to both a real inbox and a carrier's email-to-SMS gateway
// address delivers the same message as an email and a text with one send.
export const TO_EMAIL = [CONTACT_EMAIL, SMS_GATEWAY_EMAIL].filter(Boolean).join(",");

export const isEmailConfigured = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY && CONTACT_EMAIL
);

export interface NotifyParams {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Sends via the same EmailJS service/template used by the Contact Us form, so
// the "To Email" field is only ever configured once, in the EmailJS dashboard.
export function sendNotification(params: NotifyParams) {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    return Promise.reject(new Error("EmailJS is not configured"));
  }
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    { ...params, to_email: TO_EMAIL },
    { publicKey: EMAILJS_PUBLIC_KEY }
  );
}
