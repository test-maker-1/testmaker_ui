import React from "react";
import Enum from "../constants/Enum";

const {ADD, CANCEL, PICTURE, CHANGE} = Enum;

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
  },
  [CHANGE]: {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    inContext: [
      <path d="M20.1509 31.8809V36.6667L26.7318 29.9286L20.1276 23.1905V28.2857C17.9806 28.3333 15.8337 27.5476 14.2001 25.8809C11.5864 23.2143 11.1663 19.2143 12.8232 16.0476L10.2562 13.4286C7.26913 18.0476 7.7592 24.3333 11.7498 28.4048C14.0367 30.7143 17.0238 31.8809 20.0109 31.8809H20.1509Z" fill="#8A929E"/>,
      <path d="M27.1752 23.9524L29.7423 26.5714C32.7294 21.9524 32.2393 15.6429 28.2721 11.5952C25.9617 9.21428 22.9046 8.09523 19.8709 8.14285V3.33333L13.2666 10.0714L19.8709 16.7857V11.6667H20.0109C22.1112 11.6667 24.1882 12.4762 25.7984 14.119C28.4121 16.7857 28.8321 20.7857 27.1752 23.9524Z" fill="#8A929E"/>
    ]
  }
};

//info에서 가져야할 필수 속성
//default form: { width: "", height: "", fill: "none", viewBox: "", inContext: [] }