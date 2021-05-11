import { Button, makeStyles } from "@material-ui/core";
import { SVG } from "../common";
import theme from "../../styles/theme";
import ENUM from "../../constants/Enum";

const { white, deepGray } = theme.colors;

const useStyles = makeStyles(() => ({
  addBtn: () => ({
    marginBottom: 16,
    padding: "12px 0",
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: "24px",
    letterSpacing: -0.5,
    color: deepGray,
    backgroundColor: white,
    borderRadius: 5,
  }),
}));

const BtnAddOption = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.addBtn}
      varient="text"
      fullWidth={true}
      startIcon={<SVG type={ENUM.ADD} />}
      onClick={onClick}
    >
      선택지 추가하기
    </Button>
  );
};

export default BtnAddOption;
