import { Button, makeStyles } from "@material-ui/core";
import { SVG } from "../common";
import ENUM from "../../constants/Enum";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  addBtn: (props) => ({
    padding: "20px 0",
    width: "100%",
    fontFamily: "Noto Sans KR",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: "27px",
    letterSpacing: -0.5,
    border: `1px solid #E5E8EC`,
    color: theme.colors.deepGray,
  }),
}));

const BtnAdd = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.addBtn}
      startIcon={<SVG type={ENUM.ADD} />}
      onClick={onClick}
    >
      질문 추가하기
    </Button>
  );
};

export default BtnAdd;
