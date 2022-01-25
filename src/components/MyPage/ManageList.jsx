import React from "react";
import styled from "styled-components";
import SVG from "../common/SVG";
import ENUM, { CHANGEPW, CHECKTERMS, DELETEACCOUT } from "../../constants/Enum";
import { useCallback } from "react";

const ManageList = (props) => {
  const list = [CHANGEPW, CHECKTERMS, DELETEACCOUT];
  const onClick = useCallback((li) => {
    switch (li) {
      case CHANGEPW:
        // 페이지 이동
        break;
      case CHECKTERMS:
        // 페이지 이동
        break;
      case DELETEACCOUT:
        // 페이지 이동
        break;

      default:
        break;
    }
    return;
  }, []);
  
  return (
    <Menu>
      {list.map((li) => (
        <Item key={li}>
          <div>{li}</div>
          <div className="svg-box">
            <SVG
              type={ENUM.NEXT}
              style={{
                width: "20",
                height: "20",
              }}
              onClick={onClick.bind(this, li)}
            />
          </div>
        </Item>
      ))}
    </Menu>
  );
};

export default ManageList;

const Menu = styled.ul`
  padding: 0 2rem 0 2rem;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding-top: 2rem;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: ${({ theme: { colors } }) => colors.deepGray};

  .svg-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
