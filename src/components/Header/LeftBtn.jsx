import React from "react";
import styled from "styled-components";
import { SVG } from "../common";
import ENUM from "../../constants/Enum";
import usePage from "../../hooks/usePage";

import { BACK, SEARCH, LOGO, NOTHING } from "../../constants/headerInfo";

/*
 * type: string;
 */
const LeftBtn = ({ type = BACK }) => {
    const { goBack } = usePage();
    const onClickEvent = () => {
        switch (type) {
            case BACK:
                return goBack();
            default:
                return null;
        }
    };
    return <Button onClick={onClickEvent}>{leftBtn[type]}</Button>;
};

const leftBtn = {
    [BACK]: <SVG type={ENUM.BACK} style={{ width: "24", height: "24" }} />,
    [SEARCH]: <SVG type={ENUM.SEARCH} style={{ width: "24", height: "24" }} />,
    [NOTHING]: null,
};

const Button = styled.button``;

export default LeftBtn;
