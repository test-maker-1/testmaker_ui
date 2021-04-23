import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import addIcon from "../../resources/add.svg";

const useStyles = makeStyles((theme, color) => ({
  addChoiceBtn: {
    padding: "26px 0",
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    color: "#8A929E"
  }
}));

// onClick: function;
export const AddOptionBtn = ({ onClick }) => {
  const classes = useStyles("black");

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
