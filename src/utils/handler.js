import headerInfo, { initHeader } from "../constants/headerInfo";

/*
 * plocation: string; => path
 */
export const getConfiguration = (plocation) => {
  const { pathname } = plocation;

  let updateHeader = {};
  for (const path in headerInfo) {
    if (pathname.includes(path)) {
      updateHeader = headerInfo[path];
      break;
    }
  }

  const header = {
    ...initHeader,
    ...updateHeader
  };

  return { header };
};
