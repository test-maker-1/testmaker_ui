import { multiple, mbti, weight } from './Enum'

export const [
  home,
  login,
  test,
  testing,
  picktest,
  preset,
  qna,
  result,
  detail,
  replay,
  preview,
  release,
  kakao,
  other,
  email,
  naver,
  google,
  register,
  emailAuth,
  profile,
  complete,
  findPw,
  pwSetting,
  welcome,
  comments,
  exam
] = [
  '',
  'login',
  'test',
  'testing',
  'pick-test',
  'preset',
  'qna',
  'result',
  'detail',
  'replay',
  'preview',
  'release',
  'kakao',
  'other',
  'email',
  'naver',
  'google',
  'register',
  'email-auth',
  'profile',
  'complete',
  'find-pw',
  'pw-setting',
  'welcome',
  'comments',
  'exam'
]

// https://www.notion.so/depromeet/Routing-URL-9a3efbefa3d84b679a23ea4a798a299f
export const seqTest = {
  [multiple]: [preset, qna, result, detail],
  [mbti]: [preset, qna, detail],
  [weight]: [preset, result, qna, detail],
  [testing]: [welcome, exam, result]
}

// export const loginModule = {
//     [login]: ["", kakao, other],
// };
