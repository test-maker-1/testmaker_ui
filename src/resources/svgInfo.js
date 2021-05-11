import React from "react";
import Enum from "../constants/Enum";

const {ADD, CANCEL, PICTURE, CHANGE, CASINO, CHECK, DELETE, INFO} = Enum;

export const svgInfo = {
  [ADD]: {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    inContext: [
      <path d="M6.83537 13.6707V0M13.6707 6.83536L0 6.83537" stroke="#CFD3DB" strokeWidth="3"/>
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
  },
  [CASINO]: {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    inContext: [
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM7.5 18C6.67 18 6 17.33 6 16.5C6 15.67 6.67 15 7.5 15C8.33 15 9 15.67 9 16.5C9 17.33 8.33 18 7.5 18ZM7.5 9C6.67 9 6 8.33 6 7.5C6 6.67 6.67 6 7.5 6C8.33 6 9 6.67 9 7.5C9 8.33 8.33 9 7.5 9ZM12 13.5C11.17 13.5 10.5 12.83 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.83 10.5 13.5 11.17 13.5 12C13.5 12.83 12.83 13.5 12 13.5ZM16.5 18C15.67 18 15 17.33 15 16.5C15 15.67 15.67 15 16.5 15C17.33 15 18 15.67 18 16.5C18 17.33 17.33 18 16.5 18ZM16.5 9C15.67 9 15 8.33 15 7.5C15 6.67 15.67 6 16.5 6C17.33 6 18 6.67 18 7.5C18 8.33 17.33 9 16.5 9Z" fill="#B7BDCB"/>
    ]
  },
  [CHECK]: {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    inContext: [
      <path d="M5 10.1053L11.1765 16L19 8" stroke="#DADEE6" stroke-width="2.5"/>
    ]
  },
  [DELETE]: {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    inContext: [
      <path d="M7.5 4.8V3H16.5V4.8H21V6.6H19.2V20.1C19.2 20.3387 19.1052 20.5676 18.9364 20.7364C18.7676 20.9052 18.5387 21 18.3 21H5.7C5.46131 21 5.23239 20.9052 5.0636 20.7364C4.89482 20.5676 4.8 20.3387 4.8 20.1V6.6H3V4.8H7.5ZM6.6 6.6V19.2H17.4V6.6H6.6ZM9.3 9.3H11.1V16.5H9.3V9.3ZM12.9 9.3H14.7V16.5H12.9V9.3Z" fill="#B7BDCB"/>
    ]
  },
  [INFO]: {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    inContext: [
      <path d="M8.1665 11.6668H9.83317V13.3335H8.1665V11.6668ZM8.1665 5.00016H9.83317V10.0002H8.1665V5.00016ZM8.9915 0.833496C4.3915 0.833496 0.666504 4.56683 0.666504 9.16683C0.666504 13.7668 4.3915 17.5002 8.9915 17.5002C13.5998 17.5002 17.3332 13.7668 17.3332 9.16683C17.3332 4.56683 13.5998 0.833496 8.9915 0.833496ZM8.99984 15.8335C5.3165 15.8335 2.33317 12.8502 2.33317 9.16683C2.33317 5.4835 5.3165 2.50016 8.99984 2.50016C12.6832 2.50016 15.6665 5.4835 15.6665 9.16683C15.6665 12.8502 12.6832 15.8335 8.99984 15.8335Z" fill="#8A929E"/>
    ]
  }
};

//info에서 가져야할 필수 속성
//default form: { width: "", height: "", fill: "none", viewBox: "", inContext: [] }