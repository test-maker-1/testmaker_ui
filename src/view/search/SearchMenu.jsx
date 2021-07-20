import React from "react";

import { TitleBox } from "../../components/common";
import RecentList from "./RecentList";

function SearchMenu() {
  return (
    <div>
      <TitleBox title="최근 검색어">
        <RecentList />
      </TitleBox>
      <TitleBox title="인기 검색어"></TitleBox>
      <TitleBox title="인기 태그"></TitleBox>
    </div>
  );
}

export default SearchMenu;
