import styled from "styled-components";

export const Container = styled.li`
  height: 48px;
  display: flex;
  align-items: center;
  margin-bottom: 9px;
  border-radius: 5px;
  background-color: ${({ theme: { colors }, bgColor }) => colors[bgColor]};
`;

export const InputContainer = styled.div`
  margin-right: 9px;
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

export const CheckWrap = styled.div`
  display: flex;
  padding: 12px;
  border-right: 1px solid ${({ theme: { colors } }) => colors.ivory};
`;

export const InputWrap = styled.div`
  padding: 0 9px;
  flex: 1;
`;

export const OptionText = styled.textarea`
  width: 100%;
  font-size: 16px;
  color: ${({ theme: { colors }, color }) => colors[color]};
  background-color: transparent;
  resize: none;

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.gray};
  }
`;

export const CancelWrap = styled(CheckWrap)`
  border-right: none;
  border-left: 1px solid ${({ theme: { colors } }) => colors.ivory};
`;
