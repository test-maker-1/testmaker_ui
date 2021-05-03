import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme, color) => ({
    useBtn: {
        margin: "6px 0",
        width: "100%",
        borderRadius: "8px",
        fontSize: 16,
        fontWeight: "bold",
        background: "#EBEDF1",
        color: "#8A929E",
    },
}));

const LoginBtn = ({ btns, handleOnClick }) => {
    const classes = useStyles();

    return btns.map((oneBtn, idx) => {
        return (
            <Button
                className={classes.useBtn}
                key={`btn${idx}`}
                varient="text"
                onClick={(e) => {
                    handleOnClick(oneBtn, e);
                }}
            >
                {oneBtn}
            </Button>
        );
    });
};

export default LoginBtn;
