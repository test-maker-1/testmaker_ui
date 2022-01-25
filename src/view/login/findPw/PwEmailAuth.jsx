import React from "react";
import styled from "styled-components";
// import { Button } from "@material-ui/core";
// import { NEXT } from "../../../constants/Enum";
// import { Title, Input, MarginBox } from "../Email";
// import usePage from "../../../hooks/usePage";
// import { BtnField } from "../../../components/common";

import { PageContainer } from "../Login";
import theme from "../../../styles/theme";
import { makeStyles } from "@material-ui/core/styles";

const { skyBlue, blue } = theme.colors;
const sizes = {
  fontSize: `${theme.fontSizes.sm}rem`,
  padding: "1.35rem",
  width: `calc(100% - 11.6rem)`,
};

export const useStyles = makeStyles((theme, color) => ({
  useBtn: {
    margin: "6px 0",
    width: sizes.width,
    borderRadius: "0 10px 10px 0",
    fontSize: sizes.fontSize,
    fontWeight: "bold",
    background: skyBlue,
    color: blue,
    letterSpacing: "-0.5px",
    padding: sizes.padding,
  },
}));

const PwEmailAuth = (props) => {
  // const classes = useStyles();
  // const { replace } = usePage();
  // const [email, setEmail] = useState("");
  // const [authNumber, setAuthNumber] = useState("");
  // const [errors, setErrors] = useState({});

  // const getAuthNumber = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     // email 백엔드에 넘겨줘
  //   },
  //   [email]
  // );

  // const onComplete = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     // email,authNumber
  //     return replace("/login/find-pw/pw-setting");
  //   },
  //   [email, authNumber, replace]
  // );

  return (
    <PageContainer>
      {/* <Title>인증번호를 보내드려요</Title>
      <EmailForm onSubmit={getAuthNumber} errors={errors}>
        <EmailInput
          type="email"
          placeholder="이메일을 적어주세요"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="email-input"
        />
        <Button type="submit" className={classes.useBtn}>
          인증번호 받기
        </Button>
      </EmailForm>

      <AuthForm onSubmit={onComplete} errors={errors}>
        <Input
          type="text"
          placeholder="인증번호를 적어주세요"
          onChange={(e) => setAuthNumber(e.target.value)}
          required
          className="auth-input"
        />

        <MarginBox>
          <BtnField type="submit" name={NEXT} color="blue" onClick={null} />
        </MarginBox>
      </AuthForm> */}
    </PageContainer>
  );
};

export default PwEmailAuth;

// const EmailForm = styled.form`
//   display: flex;

//   .email-input {
//     &:focus {
//       outline: none;
//       ${({ errors }) => {
//         if (errors.email)
//           return css`
//             box-shadow: 0 0 0 1px #ff5146;
//           `;
//         else
//           return css`
//             box-shadow: 0 0 0 1px #697382;
//           `;
//       }}
//     }
//   }
// `;

// const AuthForm = styled.form`
//   .auth-input {
//     &:focus {
//       outline: none;
//       ${({ errors }) => {
//         if (errors.email)
//           return css`
//             box-shadow: 0 0 0 1px #ff5146;
//           `;
//         else
//           return css`
//             box-shadow: 0 0 0 1px #697382;
//           `;
//       }}
//     }
//   }
// `;

export const EmailInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 10px 0 0 10px;
  background: ${({ theme: { colors } }) => colors.white};
  height: 5.4rem;
  margin: 6px 0;
  font-size: 1.5rem; /* 15px */
  color: ${({ theme: { colors } }) => colors.darkGray};
  line-height: 22px;
  padding: 1.35rem;
  &::placeholder {
    color: ${({ theme: { colors } }) => colors.gray};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1pt #697382;
  }
`;
