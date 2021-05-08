import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme, color) => ({
    useBtn: {
        margin: "6px 0",
        width: "100%",
        height: "54px",
        padding: "12px",
        borderRadius: "8px",
        fontSize: 18,
        fontWeight: "bold",
        background: "#EBEDF1",
        color: "#8A929E",
        letterSpacing: "-0.5px",
        lineHeight: "27px",
    },
}));

const LoginBtn = ({ btns, handleOnClick }) => {
    const classes = useStyles();

    return btns.map((oneBtn, idx) => {
        return (
            <Button
                type="submin"
                className={classes.useBtn}
                key={`btn${idx}`}
                varient="text"
                onClick={(e) => {
                    if (!handleOnClick) return;
                    handleOnClick(oneBtn, e);
                }}
            >
                {oneBtn}
            </Button>
        );
    });
};

export default LoginBtn;
