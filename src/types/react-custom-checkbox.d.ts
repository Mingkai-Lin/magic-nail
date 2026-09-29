declare module "react-custom-checkbox" {
  import { ReactNode, CSSProperties } from "react";

  export interface CustomCheckboxProps {
    icon?: ReactNode;
    label?: ReactNode;
    name?: string;
    className?: string;
    value?: unknown;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    borderColor?: string;
    borderWidth?: number;
    style?: CSSProperties;
    labelStyle?: CSSProperties;
    [key: string]: unknown;
  }

  export default function Checkbox(props: CustomCheckboxProps): JSX.Element;
}
