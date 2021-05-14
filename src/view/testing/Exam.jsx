import React, { memo, useMemo } from 'react'
import styled from 'styled-components'
import { ImageView, BtnField } from '../../components/common'
import theme from '../../styles/theme'

const Exam = memo(props => {
  const BtnStyle = useMemo(() => {
    return {
      width: '100%',
      margin: '8px 0px',
      height: '3.6em',
      fontSize: `${theme.fontSizes.md}rem`
    }
  }, [])
  const handleonClick = (id, e) => {
    console.log(id, e)
  }
  return (
    <div style={{ padding: '10px 1.25em' }}>
      <Question>
        내가 좋아하는 여행시는 어디일까요? <br /> 2주일 때는 아래로 내려주세요.
      </Question>
      <Box>
        <ImageView imageUrl={null} />
      </Box>
      <div>
        {['보라카이', '제주도', '스페인'].map(item => {
          return (
            <BtnField name={item} onClick={handleonClick} style={BtnStyle} />
          )
        })}
      </div>
    </div>
  )
})

const Question = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.extra}rem; /*24px*/
  line-height: 3.6rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: -1px;
  color: #697382;
  margin: 30px 0px 32px;
`

/* 374px * 212px : 1.7 */
const Box = styled.div`margin: 16px 0px;`

export default Exam
