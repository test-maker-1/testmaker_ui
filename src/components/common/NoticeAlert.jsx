import React, { PureComponent } from "react";
import styled from "styled-components";
import { styled as mstyled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import SVG from "./SVG";

let that = null; // 정적 메소드용

class NoticeAlert extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    that = this;
  }

  static open() {
    if (!that.state.open) that.setState({ open: true });
  } // open 여부를 소스 내에서 관리

  handleOnClose = () => this.setState({ open: false });

  setButtons() {
    const { btns } = this.props;

    return btns.map((oneBtn, idx) => {
      const onClick =
        oneBtn.hasOwnProperty("callback") && oneBtn.callback !== null
          ? oneBtn.callback
          : this.handleOnClose;

      return (
        <NoticeBtn key={`btn${idx}`} onClick={(e) => onClick(e)}>
          {oneBtn.name}
        </NoticeBtn>
      );
    });
  }

  render() {
    const { open } = this.state;
    const { icon, content } = this.props;

    if (!open) return null;

    return (
      <Modal>
        <ModalCloser onClick={this.handleOnClose} />
        <Section>
          {/* content */}
          <ModalMain>
            {icon && (
              <div className="icon">
                <SVG type={icon} />
              </div>
            )}
            <AlertText>{content}</AlertText>
          </ModalMain>
          {/* buttons */}
          <ModalFooter>{this.setButtons()}</ModalFooter>
        </Section>
      </Modal>
    );
  }
}

NoticeAlert.defaultProps = {
  icon: null,
  msg: "",
  btn: [],
};

const NoticeBtn = mstyled(Button)({
  flex: 1,
  margin: "0 8px 0 8px",
  borderRadius: "5px",
  fontSize: "1em",
  border: "1px solid #e5e8ec",
  background: "#e5e8ec",
}); // gui 입힐 때 수정 필요

const Modal = styled.div`
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  display: flex;
  place-content: center center;
  flex-wrap: wrap;

  max-width: ${({ theme: { widths } }) => widths.main}px;
  width: 100%;

  z-index: 100;
  background: rgba(138, 146, 158, 0.6);
`;

const Section = styled.div`
  position: relative;
  padding: 16px;
  width: 100%;
  border-radius: 10px;
  background-color: white;
  text-align: center;
`;

const ModalMain = styled.div`
  height: 134px;
  display: flex;
  flex-direction: column;
  place-content: center center;

  .icon {
    margin-bottom: 13px;
  }
`;

const AlertText = styled.p`
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl}rem;
  line-height: 30px;
  letter-spacing: -0.8px;
`;

const ModalFooter = styled.div`
  height: 48px;
  display: flex;
`;

const ModalCloser = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default NoticeAlert;
