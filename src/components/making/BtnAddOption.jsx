import React, { memo } from "react";
import { Button, makeStyles } from "@material-ui/core";

import { SVG } from "../common";
import theme from "../../styles/theme";

import useOption from "../../hooks/making/useOption";
import ENUM from "../../constants/Enum";

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
      startIcon={<SVG type={ENUM.ADD} />}
      onClick={() => addEmptyOption(questionIdx)}
    >
      선택지 추가하기
    </Button>
  );
};

export default memo(BtnAddOption);
