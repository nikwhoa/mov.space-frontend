import React from 'react';
import { PropTypes } from 'prop-types';

// eslint-disable-next-line react/prop-types
const RenderMainScreenMedia = ({ fileType, fileUrl }) => {
  if (fileType === 'video') {
    return (
      <video autoPlay muted loop id='main-video' playsInline>
        <source src={fileUrl} />
      </video>
    );
  }

  return (
    <div className='main-screen-media-image' style={{ backgroundImage: `url(${fileUrl})` }}>
      {/* <img src={settings.mainScreenMedia.fileUrl} alt='main-screen-media' /> */}
    </div>
  );
};

export default RenderMainScreenMedia;
