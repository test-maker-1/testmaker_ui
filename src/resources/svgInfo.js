import React from "react";
import Enum from "../constants/Enum";

const {
  ADD,
  CANCEL,
  PICTURE,
  CHANGE,
  ADDPROFILE,
  CASINO,
  CHECK,
  DELETE,
  INFO,
  MENU,
  BACK,
  SEARCH,
  HEADERLOGO,
} = Enum;

export const svgInfo = {
  [ADD]: {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    inContext: [
      <path
        d="M6.83537 13.6707V0M13.6707 6.83536L0 6.83537"
        stroke="#CFD3DB"
        strokeWidth="3"
      />,
    ],
  },
  [CANCEL]: {
    width: "25",
    height: "24",
    viewBox: "0 0 25 24",
    fill: "none",
    inContext: [
      <path d="M5 19.5L19.5 5" stroke="#CFD3DB" strokeWidth="3" />,
      <path d="M19.5 19.5L5 5" stroke="#CFD3DB" strokeWidth="3" />,
    ],
  },
  [PICTURE]: {
    width: "49",
    height: "49",
    viewBox: "0 0 49 49",
    fill: "none",
    infill: "#DADEE5",
    inContext: [
      <path
        d="M48.125 42.875V6.125C48.125 3.2375 45.7625 0.875 42.875 0.875H6.125C3.2375 0.875 0.875 3.2375 0.875 6.125V42.875C0.875 45.7625 3.2375 48.125 6.125 48.125H42.875C45.7625 48.125 48.125 45.7625 48.125 42.875ZM15.3125 28.4375L21.875 36.3387L31.0625 24.5L42.875 40.25H6.125L15.3125 28.4375Z"
        fill="#DADEE5"
      />,
    ],
  },
  [CHANGE]: {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    infill: "#8A929E",
    inContext: [
      <path
        d="M20.1509 31.8809V36.6667L26.7318 29.9286L20.1276 23.1905V28.2857C17.9806 28.3333 15.8337 27.5476 14.2001 25.8809C11.5864 23.2143 11.1663 19.2143 12.8232 16.0476L10.2562 13.4286C7.26913 18.0476 7.7592 24.3333 11.7498 28.4048C14.0367 30.7143 17.0238 31.8809 20.0109 31.8809H20.1509Z"
        fill="#8A929E"
      />,
      <path
        d="M27.1752 23.9524L29.7423 26.5714C32.7294 21.9524 32.2393 15.6429 28.2721 11.5952C25.9617 9.21428 22.9046 8.09523 19.8709 8.14285V3.33333L13.2666 10.0714L19.8709 16.7857V11.6667H20.0109C22.1112 11.6667 24.1882 12.4762 25.7984 14.119C28.4121 16.7857 28.8321 20.7857 27.1752 23.9524Z"
        fill="#8A929E"
      />,
    ],
  },
  [ADDPROFILE]: {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    inContext: [
      <circle
        cx="14"
        cy="14"
        r="13"
        fill="#F1F2F4"
        stroke="white"
        strokeWidth="2"
      />,
      <path
        d="M14.2355 20.8348V7.16406M21.0709 13.9994L7.40015 13.9994"
        stroke="#CFD3DB"
        strokeWidth="3.42857"
      />,
    ],
  },
  [CASINO]: {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    inContext: [
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM7.5 18C6.67 18 6 17.33 6 16.5C6 15.67 6.67 15 7.5 15C8.33 15 9 15.67 9 16.5C9 17.33 8.33 18 7.5 18ZM7.5 9C6.67 9 6 8.33 6 7.5C6 6.67 6.67 6 7.5 6C8.33 6 9 6.67 9 7.5C9 8.33 8.33 9 7.5 9ZM12 13.5C11.17 13.5 10.5 12.83 10.5 12C10.5 11.17 11.17 10.5 12 10.5C12.83 10.5 13.5 11.17 13.5 12C13.5 12.83 12.83 13.5 12 13.5ZM16.5 18C15.67 18 15 17.33 15 16.5C15 15.67 15.67 15 16.5 15C17.33 15 18 15.67 18 16.5C18 17.33 17.33 18 16.5 18ZM16.5 9C15.67 9 15 8.33 15 7.5C15 6.67 15.67 6 16.5 6C17.33 6 18 6.67 18 7.5C18 8.33 17.33 9 16.5 9Z"
        fill="#B7BDCB"
      />,
    ],
  },
  [CHECK]: {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    inContext: [
      <path
        d="M5 10.1053L11.1765 16L19 8"
        stroke="#DADEE6"
        strokeWidth="2.5"
      />,
    ],
  },
  [DELETE]: {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    inContext: [
      <path
        d="M7.5 4.8V3H16.5V4.8H21V6.6H19.2V20.1C19.2 20.3387 19.1052 20.5676 18.9364 20.7364C18.7676 20.9052 18.5387 21 18.3 21H5.7C5.46131 21 5.23239 20.9052 5.0636 20.7364C4.89482 20.5676 4.8 20.3387 4.8 20.1V6.6H3V4.8H7.5ZM6.6 6.6V19.2H17.4V6.6H6.6ZM9.3 9.3H11.1V16.5H9.3V9.3ZM12.9 9.3H14.7V16.5H12.9V9.3Z"
        fill="#B7BDCB"
      />,
    ],
  },
  [INFO]: {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    inContext: [
      <path
        d="M8.1665 11.6668H9.83317V13.3335H8.1665V11.6668ZM8.1665 5.00016H9.83317V10.0002H8.1665V5.00016ZM8.9915 0.833496C4.3915 0.833496 0.666504 4.56683 0.666504 9.16683C0.666504 13.7668 4.3915 17.5002 8.9915 17.5002C13.5998 17.5002 17.3332 13.7668 17.3332 9.16683C17.3332 4.56683 13.5998 0.833496 8.9915 0.833496ZM8.99984 15.8335C5.3165 15.8335 2.33317 12.8502 2.33317 9.16683C2.33317 5.4835 5.3165 2.50016 8.99984 2.50016C12.6832 2.50016 15.6665 5.4835 15.6665 9.16683C15.6665 12.8502 12.6832 15.8335 8.99984 15.8335Z"
        fill="#8A929E"
      />,
    ],
  },
  [MENU]: {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "#8A929E",
    inContext: [
      <rect x="3" y="11" width="15" height="3" rx="1.28571" fill="#8A929E" />,
      <path
        d="M3 6.28571C3 5.57563 3.57563 5 4.28571 5H19.7143C20.4244 5 21 5.57563 21 6.28571V6.71429C21 7.42437 20.4244 8 19.7143 8H4.28571C3.57563 8 3 7.42437 3 6.71429V6.28571Z"
        fill="#8A929E"
      />,
      <path
        d="M3 18.2857C3 17.5756 3.57563 17 4.28571 17H18.7143C19.4244 17 20 17.5756 20 18.2857V18.7143C20 19.4244 19.4244 20 18.7143 20H4.28571C3.57563 20 3 19.4244 3 18.7143V18.2857Z"
        fill="#8A929E"
      />,
    ],
  },
  [SEARCH]: {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    inContext: [
      <path
        d="M15.9193 12C15.9193 15.5535 12.9521 18.5 9.20964 18.5C5.46719 18.5 2.5 15.5535 2.5 12C2.5 8.44649 5.46719 5.5 9.20964 5.5C12.9521 5.5 15.9193 8.44649 15.9193 12Z"
        stroke="#8A929E"
        strokeWidth="3"
      />,
      <path
        d="M15.8734 15.5567L21.0001 18.9192"
        stroke="#8A929E"
        strokeWidth="3"
        strokeLinecap="round"
      />,
    ],
  },
  [BACK]: {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    inContext: [
      <path
        d="M16.2502 5.41699L8.44358 12.2477C7.98826 12.6462 7.98826 13.3545 8.44358 13.7529L16.2502 20.5837"
        stroke="#8A929E"
        strokeWidth="3"
        strokeLinecap="round"
      />,
    ],
  },
  [HEADERLOGO]: {
    width: "85",
    height: "24",
    viewBox: "0 0 85 24",
    fill: "#0B70FD",
    inContext: [
      <g clipPath="url(#clip0)">
        <path
          d="M10.097 2.31966L0.5214 18.041C-0.957276 20.4672 0.891069 23.5038 3.84842 23.5038H22.9997C25.957 23.5038 27.8054 20.471 26.3267 18.041L16.7511 2.31966C15.2724 -0.106552 11.5757 -0.106552 10.097 2.31966Z"
          fill="#0B70FD"
        />
        <path
          d="M52.533 23.4847H36.526C34.2921 23.4847 32.4795 21.7668 32.4795 19.6495V4.47438C32.4795 2.3571 34.2921 0.63916 36.526 0.63916H52.533C54.767 0.63916 56.5795 2.3571 56.5795 4.47438V19.6457C56.5835 21.7668 54.7709 23.4847 52.533 23.4847Z"
          fill="#0B70FD"
        />
        <path
          d="M9.55971 13.1851C8.99527 13.1851 8.53418 12.7518 8.53418 12.2131V11.388C8.53418 10.853 8.9913 10.416 9.55971 10.416C10.1242 10.416 10.5852 10.8493 10.5852 11.388V12.2131C10.5852 12.7518 10.1242 13.1851 9.55971 13.1851Z"
          fill="#0B70FD"
        />
        <path
          d="M12.859 13.1851C12.2946 13.1851 11.8335 12.7518 11.8335 12.2131V11.388C11.8335 10.853 12.2906 10.416 12.859 10.416C13.4235 10.416 13.8846 10.8493 13.8846 11.388V12.2131C13.8846 12.7518 13.4235 13.1851 12.859 13.1851Z"
          fill="#0B70FD"
        />
        <path
          d="M42.4005 19.7778C41.8361 19.7778 41.375 19.3446 41.375 18.8058V17.9808C41.375 17.4458 41.8321 17.0088 42.4005 17.0088C42.965 17.0088 43.4261 17.442 43.4261 17.9808V18.8058C43.4261 19.3408 42.969 19.7778 42.4005 19.7778Z"
          fill="#0B70FD"
        />
        <path
          d="M45.7038 19.7778C45.1393 19.7778 44.6782 19.3446 44.6782 18.8058V17.9808C44.6782 17.4458 45.1353 17.0088 45.7038 17.0088C46.2682 17.0088 46.7293 17.442 46.7293 17.9808V18.8058C46.7253 19.3408 46.2682 19.7778 45.7038 19.7778Z"
          fill="#0B70FD"
        />
        <path
          d="M82.4405 15.8676C82.7664 15.7395 84.9884 15.0274 84.9884 12.1416C84.9884 8.93554 82.6154 8.32899 82.4246 8.28755C82.6988 8.21973 84.9844 7.63579 84.9844 4.54651C84.9844 0.281814 79.0419 0.639717 79.0419 0.639717H64.756C64.756 0.639717 63.5953 0.553067 62.9196 1.16339C62.1842 1.83022 62.3074 2.64398 62.3074 2.64398V21.4923C62.3074 21.4923 62.1365 22.291 62.8242 22.988C63.4363 23.6058 64.8236 23.4928 64.8236 23.4928H79.1095C79.1095 23.4928 84.9129 23.8319 84.9963 19.7405C85.0599 16.7265 82.7823 15.958 82.4405 15.8676Z"
          fill="#0B70FD"
        />
        <path
          d="M71.4293 8.26514C70.8649 8.26514 70.4038 7.83189 70.4038 7.29315V6.46808C70.4038 5.93311 70.8609 5.49609 71.4293 5.49609C71.9938 5.49609 72.4549 5.92935 72.4549 6.46808V7.29315C72.4549 7.83189 71.9977 8.26514 71.4293 8.26514Z"
          fill="#0B70FD"
        />
        <path
          d="M74.7331 8.26514C74.1686 8.26514 73.7075 7.83189 73.7075 7.29315V6.46808C73.7075 5.93311 74.1646 5.49609 74.7331 5.49609C75.2975 5.49609 75.7586 5.92935 75.7586 6.46808V7.29315C75.7586 7.83189 75.2975 8.26514 74.7331 8.26514Z"
          fill="#0B70FD"
        />
      </g>,
    ],
  },
};

//info에서 가져야할 필수 속성
//default form: { width: "", height: "", fill: "none", viewBox: "", inContext: [] }
