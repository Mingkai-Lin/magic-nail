import React from "react";
import { AlertStyle, ErrorIcon, Tick } from "./AlertStyle";

export interface AlertMessage {
  msg: string;
  variant?: "success" | "error";
}

interface AlertProps {
  showAlert?: AlertMessage | null;
  display?: string;
}

const Alert = ({ showAlert, display }: AlertProps) => {
  return (
    <>
      {showAlert && (
        <AlertStyle variant={showAlert.variant || "success"}>
          <p>
            {showAlert.variant === "error" ? (
              <ErrorIcon display={display} />
            ) : (
              <Tick display={display} />
            )}
            {showAlert.msg}
          </p>
        </AlertStyle>
      )}
    </>
  );
};

export default Alert;
