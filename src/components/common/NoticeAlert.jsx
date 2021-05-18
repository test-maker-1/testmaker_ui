import React, { PureComponent } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { styled as mstyled } from "@material-ui/core/styles";
// import warning from "./warning.svg";

let that = null;
class NoticeAlert extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    that = this; //정적 메소드용
  }

  static open() {
    //open 여부를 소스 내에서 관리
    if (!that.state.open) that.setState({ open: true });
  }

  handleOnClose = () => {
    this.setState({ open: false });
  };

  setIcon = () => {
    //string 으로 받은 icon 타입에 따라 출력
    const { icon } = this.props;

    if (icon === "warn") return "WARN";
    else return "WARN";
  };

  setButtons() {
    const { btns, handleOnClick } = this.props;

    return btns.map((oneBtn, idx) => {
      return (
        <NoticeBtn
          key={`btn${idx}`}
          onClick={(event) => {
            this.setState({ open: false }, () =>
              handleOnClick(oneBtn.id, event)
            );
          }}
        >
          {oneBtn}
        </NoticeBtn>
      );
    });
  }

  render() {
    const { open } = this.state;
    const { content } = this.props;

    return (
      <>
        {open ? (
          <Modal>
            <ModalCloser onClick={this.handleOnClose} />
            <Section>
              <ModalMain>
                <NoticeContainer>
                  <Notice>
                    {/* <img src={warning} alt="warning" /> */}
                    <div>{this.setIcon()}</div>
                    <div>{content}</div>
                  </Notice>
                </NoticeContainer>
              </ModalMain>
              <ModalFooter>{this.setButtons()}</ModalFooter>
            </Section>
          </Modal>
        ) : null}
      </>
    );
  }
}

const NoticeBtn = mstyled(Button)({
  flex: 1,
  margin: "0 8px 0 8px",
  borderRadius: "5px",
  fontSize: "1em",
  border: "1px solid #e5e8ec",
  background: "#e5e8ec",
});

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

export default NoticeAlert;
