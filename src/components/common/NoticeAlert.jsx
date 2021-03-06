import React, { PureComponent } from "react";
import styled from "styled-components";

import { BtnField, BtnShare, SVG } from ".";
import { modalStyles } from "../../styles";

import { md } from "../../constants/Enum";
import ENUM from "../../constants/Enum";

const { SHARE } = ENUM;
let that = null; // 정적 메소드용
const initState = {
  open: false,
  mode: null,
  icon: null,
  text: "",
  btns: [],
};

class NoticeAlert extends PureComponent {
  constructor(props) {
    super(props);
    this.state = initState;
    that = this;
  }

  componentWillUnmount() {
    this.setState(initState);
  }

  static open(
    { icon, text, btns, shareInfo, onShareClick = null },
    mode = null
  ) {
    if (!that.state.open) {
      that.setState({
        open: true,
        icon,
        text,
        btns,
        shareInfo,
        onShareClick,
        mode,
      });
    }
  } // open 여부, 내용을 소스 내에서 관리

  closeCallBack = (callback, event) => {
    if (callback) callback(event);
    this.handleOnClose();
  };

  handleShareClick = (event, id) => {
    if (this.state.onShareClick) this.state.onShareClick(id, event);
    this.handleOnClose();
  };

  handleOnClose = () => this.setState({ ...initState, open: false });

  setButtons() {
    const { btns } = this.state;

    return btns.map((oneBtn, idx) => {
      const onClick =
        oneBtn.hasOwnProperty("callback") && oneBtn.callback !== null
          ? this.closeCallBack.bind(this, oneBtn.callback)
          : this.handleOnClose;
      const color = btns.length === 1 ? "blue" : idx ? "blue" : "skyBlue";

      return (
        <BtnField
          key={`btn-${idx}`}
          size={md}
          color={color}
          onClick={(e) => onClick(e)}
        >
          {oneBtn.name}
        </BtnField>
      );
    });
  }

  render() {
    const { open, text, mode, icon, btns, shareInfo = {} } = this.state;

    if (!open) return null;

    return (
      <Modal>
        <ModalCloser onClick={this.handleOnClose} />
        <Section>
          {/* content */}
          <ModalMain>
            {mode === SHARE ? (
              <>
                <AlertText>친구한테 공유할래요!</AlertText>
                <div>
                  <BtnShare
                    shareInfo={shareInfo}
                    onClick={this.handleShareClick}
                  />
                </div>
              </>
            ) : (
              <>
                {icon && (
                  <div className="icon">
                    <SVG type={icon} />
                  </div>
                )}
                <AlertText>{text}</AlertText>
              </>
            )}
          </ModalMain>
          {/* buttons */}
          {mode === SHARE ? (
            <LaterText onClick={this.handleOnClose}>나중에 할래요</LaterText>
          ) : (
            <ModalFooter btnLength={btns.length}>
              {this.setButtons()}
            </ModalFooter>
          )}
        </Section>
      </Modal>
    );
  }
}

const Modal = styled.div`
  ${modalStyles}
  z-index: ${({ theme: { zIndex } }) => zIndex.alert};
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
  padding: 16px 0 24px 0;
  display: flex;
  flex-direction: column;
  place-content: center center;

  .icon {
    margin-bottom: 13px;
  }
`;

const AlertText = styled.p`
  margin-bottom: 16px;
  font-weight: bold;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl}rem;
  line-height: 30px;
  letter-spacing: -0.8px;
`;

const ModalFooter = styled.div`
  height: 48px;
  display: flex;
  button:first-child {
    margin-right: ${({ btnLength }) => (btnLength > 1 ? 12 : 0)}px;
  }
`;

const ModalCloser = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
`;

const LaterText = styled.p`
  display: inline-block;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm}rem;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.5px;
  color: #697382;
  cursor: pointer;
`;

export default NoticeAlert;
