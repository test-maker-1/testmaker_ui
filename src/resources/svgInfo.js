import React from "react";
import Enum from "../constants/Enum";

const {ADD, CANCEL, PICTURE} = Enum;

export const svgInfo = {
  [ADD]: {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    inContext: [
      <circle cx="12" cy="12" r="12" fill="#F1F2F4"/>,
      <path d="M12.2358 18.8354V5.16467M19.0711 12L5.40039 12" stroke="#CFD3DB" strokeWidth="3"/>
    ]
  },
  [CANCEL]: {
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none",
    inContext: [
      <path d="M5 19.5L19.5 5" stroke="#CFD3DB" strokeWidth="3"/>,
      <path d="M19.5 19.5L5 5" stroke="#CFD3DB" strokeWidth="3"/>
    ]
  },
  [PICTURE]: {
    width: "49",
    height: "49",
    viewBox: "0 0 49 49",
    fill: "none",
    inContext: [
      <path d="M48.125 42.875V6.125C48.125 3.2375 45.7625 0.875 42.875 0.875H6.125C3.2375 0.875 0.875 3.2375 0.875 6.125V42.875C0.875 45.7625 3.2375 48.125 6.125 48.125H42.875C45.7625 48.125 48.125 45.7625 48.125 42.875ZM15.3125 28.4375L21.875 36.3387L31.0625 24.5L42.875 40.25H6.125L15.3125 28.4375Z" fill="#DADEE5"/>
    ]
  }
};

//info에서 가져야할 필수 속성
//default form: { width: "", height: "", fill: "none", viewBox: "", inContext: [] }