import React, { Component } from 'react';
import BottomBtn from "../../../components/frame/BottomBtn";
import {TitleBox, BtnField, BtnShare, UploadImg} from "../../../components/common";

class MultiplePreset extends Component {
  handleChange = (a,b,c) => {
    console.log(a,b,c)
  }
  render() {
    return (
      <div>
        <h1>임시 테스트 페이지</h1>
        <BtnField name={"질문 추가하기"} onClick={this.handleChange}/>
        <BtnShare />
        <UploadImg />
        <TitleBox title="누구에게 공유하실건가요?">
          <div>TEST AREA</div>
        </TitleBox>
        <TitleBox title="난이도를 골라주세요">
          <div>TEST AREA</div>
        </TitleBox>
        <BottomBtn btnArr={[{name: "left", type: "picktest", customClick: this.handleChange}, {name: "right", type: "home"}]}/>
      </div>
    );
  }
}

export default MultiplePreset;