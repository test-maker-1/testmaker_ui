import React, { PureComponent } from "react";
import styled from "styled-components";
import { BtnField, SVG } from ".";
import { md } from "../../constants/Enum";

let that = null; // 정적 메소드용

class NoticeAlert extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      content: "",
    };
    that = this;
  }

  static open(content) {
    if (!that.state.open) {
      that.setState({ content, open: true });
    }
  } // open 여부, 내용을 소스 내에서 관리

  handleOnClose = () => this.setState({ open: false });

  setButtons() {
    const { btns } = this.props;

    return btns.map((oneBtn, idx) => {
      const onClick =
        oneBtn.hasOwnProperty("callback") && oneBtn.callback !== null
          ? oneBtn.callback
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
    const { open, content } = this.state;
    const { icon, btns } = this.props;

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
          <ModalFooter btnLength={btns.length}>{this.setButtons()}</ModalFooter>
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

export default NoticeAlert;
