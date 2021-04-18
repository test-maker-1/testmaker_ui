import React, {Component} from 'react'
import styled from "styled-components";

//414  * 56
const HBox = styled.div`
  width: 100%;
  height: 56px;
  alignment: center;
  border: 1px solid black;
`;

class Header extends Component {
  render () {
    return <HBox>Header</HBox>
  }
}

export default Header