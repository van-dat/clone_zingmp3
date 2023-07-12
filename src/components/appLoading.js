import React, { memo } from "react";
import { Rings } from "react-loader-spinner";

const AppLoading = () => {
  return (
    <Rings
      height="80"
      width="80"
      color="#170f23"
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
};

export default memo(AppLoading);
