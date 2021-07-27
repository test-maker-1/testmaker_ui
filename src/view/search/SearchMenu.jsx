import React from "react";

import { TitleBox } from "../../components/common";
import RecentList from "./RecentList";

const tempList = [
  {
    item: "방탄 소년단 아미 테스트",
  },
  {
    item: "사회 생활 부캐 테스트",
  },
  {
    item: "성격 테스트",
  },
];

function SearchMenu() {
  return (
    <div>
      <TitleBox title="최근 검색어">
        <RecentList recentList={tempList} />
      </TitleBox>
      <TitleBox title="인기 검색어"></TitleBox>
      <TitleBox title="인기 태그"></TitleBox>
    </div>
  );
}

export default SearchMenu;
