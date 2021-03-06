/* eslint-disable */
import React from 'react';

function MegaphoneIcon(props) {

  return (
    <svg x="0px" y="0px"
         width={props.size} height={props.size} viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
      <g>
        <path d="M64,54h-3.342l-15.5-12H6.586L0,35.414V22.586L6.586,16h38.572l15.5-12H64V54z M61.342,52H62V6h-0.658l-15.5,12H7.414
		L2,23.414v11.172L7.414,40h38.428L61.342,52z"/>
      </g>
      <g>
        <polygon
          points="18.589,60 10.538,60 18.068,40.638 19.932,41.362 13.462,58 17.411,58 27.126,40.514 28.874,41.486 	"/>
      </g>
      <g>
        <rect x="42" y="17" width="2" height="24"/>
      </g>
      <g>
        <rect x="35" y="17" width="2" height="24"/>
      </g>
    </svg>
  );
}

MegaphoneIcon.propTypes = {
  size: React.PropTypes.string,
};

export default MegaphoneIcon;