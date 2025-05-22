import type { JSX } from "react";

type Method = "POST" | "GET";

export interface IForm {
  method: Method;
  action: string;
  children: Array<JSX.Element>;
}
