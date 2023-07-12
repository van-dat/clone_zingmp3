import React, { memo } from 'react';
import {RotatingLines} from  'react-loader-spinner'
const Loading = () => {
    return (
        <RotatingLines
        strokeColor="grey"
        strokeWidth="3"
        animationDuration="0.75"
        width="38"
        visible={true}
      />
    );
}

export default memo(Loading);
