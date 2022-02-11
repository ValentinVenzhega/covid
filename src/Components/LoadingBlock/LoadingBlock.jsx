import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
  return (
    <ContentLoader
      speed={2}
      width={350}
      height={310}
      viewBox="0 0 280 460"
      backgroundColor="var(--color)"
      foregroundColor="#ecebeb">
      <circle cx="134" cy="121" r="104" />
      <rect x="0" y="248" rx="6" ry="6" width="280" height="26" />
      <rect x="2" y="283" rx="6" ry="6" width="280" height="51" />
      <rect x="0" y="342" rx="6" ry="6" width="280" height="51" />
    </ContentLoader>
  );
};

export { LoadingBlock };
