import React, { useState, useRef } from 'react';
import styled from "styled-components";
import {BtnField} from "./BtnField";

export const UploadImg = (props) => {
  const fileInput = useRef();
  const [list, setList] = useState([]);
  const [imgURL, setImgURL] = useState("");
  const [isHover, setHover] = useState(false);

  const handleOnCick = (event) => {
    //upload image
    fileInput.current.click();
  }

  const handleOnUpload = (event) => {
    const files = event.target.files;
    const fileArr = Array.prototype.slice.call(files);
    const reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      console.log("onload",e)
      setList(fileArr);
      setImgURL(e.target.result);
    };

    document.getElementById("uploadImage").value = null;  //init
  }

  const handleEnter = (event) => setHover(true);
  const handleLeave = (event) => setHover(false);

  const handleModClick = (event) => handleOnCick({});
  const handleDelClick = (event) => {
    setList([]);
    setImgURL("");
  }

  return (
    <>
      {list.length === 0 ?
        <BtnField reverse name={"사진 추가하기"} style={addBtnStyle} onClick={handleOnCick}/>
        :
        <div style={{position: "relative", width:"374px", height: "169px"}}>
        <DimmImg isHover={isHover} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          <img src={imgURL} alt={"이미지"} style={imgStyle}/>
          {isHover && 
            <Dimmed>
              <BtnField name={"수정"} style={{marginRight: "8px", ...btnStyle}} onClick={handleModClick}/>
              <BtnField name={"삭제"} style={btnStyle} onClick={handleDelClick}/>
            </Dimmed>
          }
        </DimmImg>
        </div>
      }
      {/* required multiple */}
      <input type="file" id="uploadImage" ref={fileInput} accept="img/*"  onChange={handleOnUpload} style={{ width: 0, display: "none" }}/>
    </>
  );
}

const DimmImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: ${({isHover}) => isHover ? "0.3" : "1"};
`;

const Dimmed = styled.div`
  position: absolute;
  top: 50px;
  left: 104px;
`;

const addBtnStyle = {
  height: "40", 
  fontSize: "16px", 
  lineHeight: "23px",
  fontWeight: "bold",
}

const imgStyle = {
  width: "100%",
  height: "100%"
}

const btnStyle= {
  backgroundColor:"#EBEDF1",
  width:"80px",
  height:"80px",
  borderRadius: "40px",
  opacity: "0.8"
}

  // color: #8A929E;
  // background: #EBEDF1;
  // opacity: 0.8;