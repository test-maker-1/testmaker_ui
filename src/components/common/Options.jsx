import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  InputContainer,
  RadioWrap,
  InputWrap,
  OptionText
} from "../../styles/Options";

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
