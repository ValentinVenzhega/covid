import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
  return (
    <ContentLoader
      speed={2}
      width={350}
      height={310}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="134" cy="121" r="104" />
      <rect x="0" y="248" rx="6" ry="6" width="280" height="26" />
      <rect x="2" y="283" rx="6" ry="6" width="280" height="51" />
      <rect x="0" y="348" rx="6" ry="6" width="87" height="33" />
      <rect x="137" y="342" rx="20" ry="20" width="140" height="46" />
    </ContentLoader>
  );
};

export { LoadingBlock };
