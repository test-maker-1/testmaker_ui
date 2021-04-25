import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import {TitleBox, BtnField, BtnShare, UploadImg} from "../../../components/common";

class Step1 extends Component {
  handleChange = (a,b,c) => {
    console.log(a,b,c)
  }
  render() {
    return (
      <div>
        <BtnField name={"질문 추가하기"} onClick={this.handleChange}/>
    
        <BtnShare />
        <UploadImg />
        <TitleBox title="누구에게 공유하실건가요?">
          <Select
            native
            value={10}
            onChange={this.handleChange}
            label="Age"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </TitleBox>
        <TitleBox title="난이도를 골라주세요">
          <Select
            native
            value={10}
            onChange={this.handleChange}
            label="Age"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </TitleBox>
      </div>
    );
  }
}

export default Step1;