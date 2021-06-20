import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { PARTTEST, MADETEST, TEMPSTORAGE } from "../../constants/Enum";
import useUser from "../../hooks/useUser";
import { useEffect } from "react";

const { darkGray, bodyGray } = theme.colors;
const TabScroll = (props) => {
  const tabs = [PARTTEST, MADETEST, TEMPSTORAGE];
  const { selectedTab, selecTab } = useUser();

  const onClick = useCallback(
    (tab) => {
      if (selectedTab === tab) return;
      selecTab(tab);

      // switch (tab) {
      //   case PARTTEST:
      //     return getPartTests({ num_elements: 10 });
      //   case MADETEST:
      //     return getMadeTests({ num_elements: 10 });
      //   case TEMPSTORAGE:
      //     return getTempSaveTests();
      //   default:
      //     return;
      // }
    },
    [selecTab, selectedTab]
  );

  return (
    <TabArea>
      {tabs.map((tab) => (
        <Tab
          key={`key${tab}`}
          value={tab}
          onClick={() => onClick(tab)}
          selected={selectedTab === tab}
        >
          {tab}
        </Tab>
      ))}
    </TabArea>
  );
};

export default TabScroll;

const TabArea = styled.div`
  display: block;
  padding: 0 2rem 0.8rem 2rem;
`;

const Tab = styled.span`
  margin-right: 10px;
  height: 3.2rem;
  padding: 5.5px 16px;
  display: inline-flex;
  align-items: center;

  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem;
  font-weight: bold;
  line-height: 21px;
  letter-spacing: -0.3px;
  border-radius: 8px;
  cursor: pointer;

  ${({ selected }) => {
    if (selected) {
      return css`
        background: ${darkGray};
        color: white;
      `;
    } else {
      return css`
        border: 1px solid #e5e8ec;
        background: white;
        color: ${bodyGray};
      `;
    }
  }}
`;
