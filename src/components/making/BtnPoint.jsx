import React, { useState, memo, useMemo } from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import { ButtonGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { InputNumber } from "../../styles";
import theme from "../../styles/theme";

import useOpen from "../../hooks/useOpen";

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

const BtnPoint = ({ questionIdx, point, updateQuestion }) => {
  const { open: editing, onOpen: onEdit, onClose: onCancel } = useOpen();

  const onSetPoint = (e) => {
    const { name, value } = e.currentTarget;
    const pointValue = Number(value);

    if (point === pointValue) return;
    updateQuestion(name, pointValue, questionIdx);
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
  const btnStyle = useMemo(
    () =>
      !editing && point && point === Number(value)
        ? btnColors.selected
        : btnColors.unselected,
    [editing, point, value]
  );

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

    const handleOnChange = (e) => {
      const { value } = e.target;
      const regex = /^[0-9\b]{0,13}$/;

      if (!regex.test(value)) return; // prevent string
      if (value < 1 || value > 10) {
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
      <InputPoint
        inputMode="numeric"
        name="point"
        placeholder="직접 입력"
        value={value}
        active={point === value || editing}
        onClick={onEdit}
        onChange={handleOnChange}
        onBlur={onBlur}
      />
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

const InputPoint = styled(InputNumber)`
  margin-bottom: 0;
  padding: 6px 0;
  flex: 1;

  background: ${({ active }) => (active ? skyBlue : white)};
  color: ${({ active }) => (active ? blue : gray)};

  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 24px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm}rem;
`;

export default memo(BtnPoint);
