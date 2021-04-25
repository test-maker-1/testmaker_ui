import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 9px;
`;

export const InputContainer = styled.div`
  margin-right: 9px;
  flex: 1;
  display: flex;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  border-radius: 5px;
`;

export const RadioWrap = styled.div`
  display: flex;
  padding: 20px 13px;
  border-right: 1px solid #f1f2f4;

  .check-answer {
    margin: auto;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const InputWrap = styled.div`
  padding: 15px 9px;
  flex: 1;
`;

export const OptionText = styled.textarea`
  width: 100%;
  font-size: 16px;
  color: #697382;
  resize: none;
`;
