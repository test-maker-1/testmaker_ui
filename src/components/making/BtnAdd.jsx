import { Button, makeStyles } from "@material-ui/core";
import { SVG } from "../common";
import theme from "../../styles/theme";
import ENUM from "../../constants/Enum";

const useStyles = makeStyles(() => ({
  addBtn: () => ({
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

const BtnAdd = ({ onAdd, children }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.addBtn}
      startIcon={<SVG type={ENUM.ADD} />}
      onClick={onAdd}
    >
      {children}
    </Button>
  );
};

export default BtnAdd;
