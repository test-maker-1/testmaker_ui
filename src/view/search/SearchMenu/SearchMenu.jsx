import React from "react";

import { TitleBox } from "../../../components/common";
import RecentList from "./RecentList";
import PopularList from "./PopularList";
import PopularTagList from "./PopularTagList";

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

const popularList = [
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

const tagList = [
  "우정테스트",
  "성격테스트",
  "성격",
  "성격파탄자",
  "재밌는",
  "우주하마",
  "음식",
  "선배",
  "뭐하지",
];

function SearchMenu() {
  return (
    <div>
      <TitleBox title="최근 검색어">
        <RecentList recentList={tempList} />
      </TitleBox>
      <TitleBox title="인기 검색어">
        <PopularList popularList={popularList} />
      </TitleBox>
      <TitleBox title="인기 태그" noline>
        <PopularTagList popularTagList={tagList} />
      </TitleBox>
    </div>
  );
}

export default SearchMenu;
