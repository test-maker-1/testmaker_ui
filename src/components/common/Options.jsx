import styled from "styled-components";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import addIcon from "../../resources/add.svg";
import cancleIcon from "../../resources/cancle.svg";

const useStyles = makeStyles((theme, color) => ({
  addChoiceBtn: {
    padding: "26px 0",
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    color: "#8A929E"
  }
}));

/*
 * questionId: number;
 * value: string;
 * answer: string;
 */
export const Option = ({ questionId, value, answer }) => {
  const isAnswer = answer === value;
  const [defaultBg, selectedBg] = ["#e5e8ec", "#fafafa"];

  return (
    <Container>
      <InputContainer bgColor={isAnswer ? defaultBg : selectedBg}>
        <RadioWrap>
          <input type="radio" className="check-answer" name={questionId} />
        </RadioWrap>
        <InputWrap>
          <OptionText
            placeholder="선택지를 입력해주세요"
            defaultValue={value}
            rows={1}
          />
        </InputWrap>
      </InputContainer>
      <button>
        <img src={cancleIcon} alt="remove option" />
      </button>
    </Container>
  );
};

// onClick: function;
export const AddOptionBtn = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.addChoiceBtn}
      varient="text"
      startIcon={<img src={addIcon} alt="add option" />}
      onClick={onClick}
    >
      선택지 추가하기
    </Button>
  );
};

const Container = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 9px;
`;

const InputContainer = styled.div`
  margin-right: 9px;
  flex: 1;
  display: flex;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  border-radius: 5px;
`;

const RadioWrap = styled.div`
  display: flex;
  padding: 20px 13px;
  border-right: 1px solid #f1f2f4;

  .check-answer {
    margin: auto;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const InputWrap = styled.div`
  padding: 15px 9px;
  flex: 1;
`;

const OptionText = styled.textarea`
  width: 100%;
  font-size: 16px;
  color: #697382;
  resize: none;
`;
