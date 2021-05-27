import React, { useEffect, useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfinScorll = ({ children, datas, getMoreDatas, isStop, ...other }) => {
  const [jsonData, setJsonData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const current_scroll = document.documentElement.scrollTop;

    if (current_scroll > 0) {
      //최상단 스크롤로 이동
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (jsonData.length !== datas.length) {
      setJsonData(datas);
      setHasMore(true);
    } else if (isStop && hasMore) {
      setHasMore(false);
    }
  }, [datas, isStop]);

  return (
    <div style={{ overflow: "visible", height: "auto" }}>
      <InfiniteScroll
        scrollThreshold="400px"
        dataLength={jsonData.length}
        next={getMoreDatas}
        hasMore={hasMore}
        style={{ overflow: "none" }}
        loader={
          <h3 style={{ paddingTop: "15px", textAlign: "center" }}>
            loading...
          </h3>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>FIN</b>
          </p>
        }
        {...other}
      >
        {children}
      </InfiniteScroll>
    </div>
  );
};

export default InfinScorll;
