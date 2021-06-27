import React, { memo } from "react";
import styled from "styled-components";
import { Button, makeStyles } from "@material-ui/core";

import useOption from "../../hooks/making/useOption";
import theme from "../../styles/theme";
import { ReactComponent as Add } from "../../resources/svg/add.svg";

const { ivory, titleGray } = theme.colors;

const useStyles = makeStyles(() => ({
  addBtn: () => ({
    marginBottom: 16,
    padding: "12px 0",
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: "24px",
    letterSpacing: -0.5,
    color: titleGray,
    backgroundColor: ivory,
    borderRadius: 5,
  }),
}));

const BtnAddOption = ({ questionIdx }) => {
  const classes = useStyles();
  const { addEmptyOption } = useOption();

  return (
    <Button
      className={classes.addBtn}
      varient="text"
      fullWidth={true}
      startIcon={<StyledAdd className="icon-svg" />}
      onClick={() => addEmptyOption(questionIdx)}
    >
      선택지 추가하기
    </Button>
  );
};

const StyledAdd = styled(Add)`
  path {
    stroke: ${titleGray};
  }
`;

export default memo(BtnAddOption);
