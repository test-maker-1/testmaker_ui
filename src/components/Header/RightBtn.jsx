import React from "react";
import styled from "styled-components";
import { SVG } from "../common";
import ENUM from "../../constants/Enum";
import { MENU, SEARCH, NOTHING } from "../../constants/headerInfo";

/*
 * type: string;
 * onToggleMenu: function;
 */
const RightBtn = ({ type = MENU, onToggleMenu }) => {
    if (type === NOTHING) return null;

    const onClickEvent = () => {
        if (type === MENU) onToggleMenu();
    };

    return <Button onClick={onClickEvent}>{rightBtn[type]}</Button>;
};

const rightBtn = {
    [MENU]: <SVG type={ENUM.MENU} style={{ width: "24", height: "24" }} />,
    [SEARCH]: <SVG type={ENUM.SEARCH} style={{ width: "24", height: "24" }} />,
};

const Button = styled.button``;

export default RightBtn;
