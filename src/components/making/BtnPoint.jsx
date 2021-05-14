import React, { useState, memo } from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import { ButtonGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import useMaking from "../../hooks/useMaking";
import useOpen from "../../hooks/useOpen";
import theme from "../../styles/theme";

const { blue, skyBlue, white, gray } = theme.colors;

const btnColors = {
  selected: {
    bgColor: skyBlue,
    color: blue,
  },
  unselected: {
    bgColor: white,
    color: gray,
  },
};

const useStyles = makeStyles(() => ({
  btn: ({ bgColor, color }) => ({
    padding: "6px 0",
    fontSize: `${theme.fontSizes.sm}rem`,
    fontWeight: "bold",
    letterSpacing: -0.5,
    lineHeight: "24px",
    color: color,
    backgroundColor: bgColor,
    "&:hover": {
      backgroundColor: bgColor,
    },
  }),
}));

/*
 * questionIdx: number;
 * point: number;
 */
const BtnPoint = ({ questionIdx, point }) => {
  const { open: editing, onOpen: onEdit, onClose: onCancel } = useOpen();
  const { updateQuestion } = useMaking();

  const onSetPoint = (e) => {
    const { name, value } = e.currentTarget;
    updateQuestion(name, Number(value), questionIdx);
    onCancel();
  };

  return (
    <BtnGroup>
      <Btn point={point} editing={editing} value={1} onClick={onSetPoint} />
      <Btn point={point} editing={editing} value={2} onClick={onSetPoint} />
      <BtnEdit
        questionIdx={questionIdx}
        point={point}
        editing={editing}
        onEdit={onEdit}
        onUpdate={updateQuestion}
        onCancel={onCancel}
      />
    </BtnGroup>
  );
};

const Btn = memo(({ point, editing, value, onClick }) => {
  const btnStyle =
    !editing && point && point === Number(value)
      ? btnColors.selected
      : btnColors.unselected;

  const classes = useStyles(btnStyle);

  return (
    <Button
      name="point"
      className={classes.btn}
      value={value}
      onClick={onClick}
    >{`${value}점`}</Button>
  );
});

const BtnEdit = memo(
  ({ questionIdx, point, editing, onEdit, onUpdate, onCancel }) => {
    const isFreePoint = point && ![1, 2].includes(point);
    const [value, setValue] = useState(isFreePoint ? point : "");

    const btnStyle =
      point === value || editing ? btnColors.selected : btnColors.unselected;
    const classes = useStyles(btnStyle);

    const handleOnChange = (e) => {
      const { value } = e.target;
      const regex = /^[0-9\b]{0,13}$/;

      if (!regex.test(value)) return; // prevent string
      if (value < 1) {
        setValue("");
        return;
      } // prevent value < 0

      setValue(value);
    };

    const onBlur = (e) => {
      const { name, value } = e.target;

      if (value === "") {
        onCancel();
        onUpdate(name, null, questionIdx);
        return;
      }

      onUpdate(name, Number(value), questionIdx);
    };

    return (
      <Button
        component="label"
        className={classes.btn}
        disableFocusRipple
        onClick={onEdit}
      >
        <InputPoint
          name="point"
          placeholder="직접 입력"
          value={value}
          onChange={handleOnChange}
          onBlur={onBlur}
        />
      </Button>
    );
  }
);

const BtnGroup = styled(ButtonGroup)`
  margin-bottom: 16px;
  width: 100%;
  border: none;

  button,
  label {
    flex: 1;
    border: none;
  }
`;

const InputPoint = styled.input`
  all: inherit;
  text-align: center;

  &::placeholder {
    all: inherit;
  }
`;

export default memo(BtnPoint);
