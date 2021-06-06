import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { PARTTEST, MADETEST, TEMPSTORAGE } from "../../constants/Enum";
import useCommon from "../../hooks/making/useCommon";
import { setSelecteTab, partTests } from "../../redux/reducer/userReducer";
import useUser from "../../hooks/useUser";

const { darkGray, bodyGray } = theme.colors;
const TabScroll = (props) => {
  const tabs = [PARTTEST, MADETEST, TEMPSTORAGE];
  const { data, selectedTab } = useUser();
  const { dispatch } = useCommon();

  const onClick = useCallback(
    (tab) => {
      if (selectedTab === tab) return;
      dispatch(setSelecteTab(tab));

      switch (tab) {
        case PARTTEST:
          return dispatch(partTests({ num_elements: 8, uid: data.uid }));
        case MADETEST:
        case TEMPSTORAGE:
        default:
          return;
      }
    },
    [selectedTab, dispatch, data]
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
