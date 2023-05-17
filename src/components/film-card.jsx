import React, {
  useState, useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { REGEX_ALT } from '../constants';
import { createAltText } from '../utils/film-card';
import { VideoPlayer } from './video-player.jsx';

export const FilmCard = ({
  name, previewImage, previewVideoLink, id, onMouseEnter,
}) => {
  const videoRef = React.createRef();

  const altText = createAltText(previewImage, REGEX_ALT);
  const [isVideo, setVideo] = useState(false);
  const [isVideoError, setVideoError] = useState(false);

  const playVideo = () => {
    if (onMouseEnter) {
      onMouseEnter(id);
    }
    setVideo(!isVideo);
  };

  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(!isVideoError);
      });
    }
  }, [isVideo]);

  return (
    <article onMouseEnter={playVideo} onMouseLeave={playVideo} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        {isVideo
          ? <VideoPlayer src={previewVideoLink} ref={videoRef} />
          : <img src={previewImage} alt={altText} width="280" height="175" />
        }
        {isVideoError && <img src={previewImage} alt={altText} width="280" height="175" />}
      </div>
      <h3 className="small-movie-card__title">
        <Link
          to={`/films/${id}`}
          className={cn('small-movie-card__link', { 'small-movie-card__link-video': isVideo })}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  id: PropTypes.string,
  onMouseEnter: PropTypes.func,
};
