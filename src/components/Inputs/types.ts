import type {
  ButtonHTMLAttributes,
  HtmlHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";

export type InputAtomPropTypes = {
  contentLeft?: ReactNode;
  contentRight?: ReactNode;
} & InputBasePropTypes;

export type InputBasePropTypes = {
  label?: string;
  error?: boolean | ((arg: any) => boolean);
  supportingText?: string;
  characterCounter?: number;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  supportingTextProps?: HtmlHTMLAttributes<HTMLSpanElement>;
  characterCounterProps?: HtmlHTMLAttributes<HTMLSpanElement>;
  areaProps?: HtmlHTMLAttributes<HTMLDivElement>;
  inputClassname?: InputHTMLAttributes<HTMLInputElement>["className"];
  inputStyle?: InputHTMLAttributes<HTMLInputElement>["style"];
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export type InputSearchPropTypes = {
  hideIcon?: boolean;
  hideEraseButton?: boolean;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
} & InputBasePropTypes;
