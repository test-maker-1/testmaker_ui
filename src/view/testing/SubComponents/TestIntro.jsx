import React, { memo, useCallback } from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
import { styled as mstyled } from '@material-ui/core/styles'
import { SVG, Tag, ImageView } from '../../../components/common'
import Enum from '../../../constants/Enum'

const TestIntro = memo(props => {
  const handleOnClick = useCallback(e => {
    props.openAlert('report')
  }, [])

  const handleOnDelete = () => {
    console.log('handleOnDelete')
  }

  return (
    <InfoContainer>
      <InfoTitle>
        <Title>우정 테스트</Title>
        <More>
          <SVG type={Enum.MORE} onClick={handleOnClick} />
        </More>
      </InfoTitle>
      <InfoUser>
        <InfoAva>
          <AvatarIcon alt='user' src='/static/images/avatar/1.jpg' />
        </InfoAva>
        <Partition>메이커짱짱</Partition>
        <SVG type={Enum.SPLIT} style={{ width: '12px', height: '12px' }} />
        <Partition>참여인원 1,000명</Partition>
      </InfoUser>
      <InfoImg>
        <ImageView imageUrl={null} />
      </InfoImg>
      {[
        { tag: '# 111' },
        { tag: 222 },
        { tag: '# 111' },
        { tag: 333 },
        { tag: '# 111' },
        { tag: '# 111' },
        { tag: '# 111' }
      ].map((tag, idx) => {
        return <Tag key={tag.tag} tag={tag.tag} onDelete={handleOnDelete} />
      })}
      <Inform>
        총 검사 시간은 12분 내외입니다. 혹 질문이 마음에 들지 않더라도 정직하게 답변하십시오. 가능하면 답변 시 '중립'을 선택하지
        마십시오.
      </Inform>
    </InfoContainer>
  )
})

const InfoContainer = styled.div`padding: 12px 2rem; /*20px*/`

const InfoTitle = styled.div`
  height: 3.6rem; /*36px*/
  line-height: 3.6rem;
`

const Title = styled.p`
  display: inline-block;
  float: left;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.extra}rem; /*24px*/
  font-weight: bold;
  letter-spacing: -1px;
  color: #697382;
`

const InfoAva = styled.div`
  display: inline-block;
  margin-right: 8px;
`

const AvatarIcon = mstyled(Avatar)({
  width: '32px',
  height: '32px'
})

const InfoUser = styled.div`margin-top: 7px;`

const InfoImg = styled.div`margin: 24px 0px;`

const More = styled.p`
  display: inline;
  float: right;
`

const Partition = styled.p`
  display: inline-block;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs}rem; /*14px*/
  line-height: 2.1rem; /*21px*/
  letter-spacing: -0.3px;
  &: last-child {
    margin-left: 8px;
  }
`

const Inform = styled.div`
  padding: 15px 0px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md}rem; /*16px*/
  line-height: 2.5rem; /*25px*/
  letter-spacing: -0.5px;
  color: #697382;
`

export default TestIntro
