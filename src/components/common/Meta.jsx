import React from "react";
// import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    </div>
  );
};

Meta.defaultProps = {
  title: "오늘의 테스트 | Today' Test",
  description: "",
  keywords: "Today' Test, 오늘의 테스트",
};

export default Meta;
