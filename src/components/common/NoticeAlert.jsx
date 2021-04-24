import React, { useCallback } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import warning from "./warning.svg";

const useStyles = makeStyles((theme, color) => ({
    leftBtn: {
        flex: 1,
        margin: "0 8px 0 8px",
        borderRadius: "5px",
        fontSize: "1em",
        border: "1px solid #e5e8ec",
        background: "#e5e8ec",
    },
    rightBtn: {
        flex: 1,
        margin: "0 8px 0 8px",
        borderRadius: "5px",
        fontSize: "1em",
        border: "1px solid #e5e8ec",
        background: "#e5e8ec",
    },
}));

const NoticeAlert = ({
    open,
    close,
    content,
    left,
    right,
    onClickLeftBtn,
    onClickRightBtn,
}) => {
    const classes = useStyles();

    const onClickLeft = useCallback(() => {
        onClickLeftBtn();
    }, [onClickLeftBtn]);

    const onClickRight = useCallback(() => {
        onClickRightBtn();
    }, [onClickRightBtn]);

    return (
        <>
            {open ? (
                <Modal>
                    <ModalCloser onClick={close} />
                    <Section>
                        <ModalMain>
                            <NoticeContainer>
                                <Notice>
                                    {/* <img src={warning} alt="warning" /> */}
                                    <div>🚫</div>
                                    <div>{content}</div>
                                </Notice>
                            </NoticeContainer>
                        </ModalMain>
                        <ModalFooter>
                            <Button
                                className={classes.leftBtn}
                                onClick={onClickLeft}
                            >
                                {left}
                            </Button>

                            <Button
                                className={classes.rightBtn}
                                onClick={onClickRight}
                            >
                                {right}
                            </Button>
                        </ModalFooter>
                    </Section>
                </Modal>
            ) : null}
        </>
    );
};

export default NoticeAlert;

const Modal = styled.div`
    position: fixed;
    display: -webkit-box;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    top: 0;
    left: 50%;
    right: 0;
    bottom: 0;
    transform: translateX(-50%);
    max-width: ${({ theme: { widths } }) => widths.main}px;
    width: 100%;
    z-index: 99;
    background: rgba(138, 146, 158, 0.6);
`;

const Section = styled.div`
    position: absolute;
    min-width: -webkit-fill-available;
    margin: 0 20px;
    height: 214px;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;
    text-align: center;
`;

const ModalMain = styled.div`
    height: 142px;
    display: table;
    width: 100%;
`;

const NoticeContainer = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
`;

const Notice = styled.div`
    display: inline-block;
    div {
        font-size: 20px;
        line-height: 30px;
    }
`;

const ModalFooter = styled.div`
    margin: 8px 16px;
    height: 40px;
    display: flex;
`;

const ModalCloser = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;
