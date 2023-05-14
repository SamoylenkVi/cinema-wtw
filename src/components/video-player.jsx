import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const VideoPlayer = forwardRef(({ src }, ref) => (
    <video
      className="small-movie-card__video"
      muted
      autoPlay
      ref={ref}
    >
  <source src={src} type="video/mp4" />
  </video>
));

VideoPlayer.displayName = 'VideoPlayer';

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};
