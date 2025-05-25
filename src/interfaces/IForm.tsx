import type { JSX } from "react";

type Method = "post" | "get";

export interface IForm {
  method: Method;
  action: string;
  children?: Array<JSX.Element> | JSX.Element;
}
