import React, {
  useState, useRef,
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
  const videoRef = useRef();

  const altText = createAltText(previewImage, REGEX_ALT);
  const [isVideo, setIsVideo] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);

  const playVideo = () => {
    if (onMouseEnter) {
      onMouseEnter(id);
    }
    setIsVideo(true);

    if (isVideo && videoRef.current) {
      setIsVideoError(false);

      videoRef.current.play().catch(() => {
        setIsVideoError(true);
      });
    }
  };

  const stopVideo = () => {
    setIsVideo(false);
  };

  return (
    <article onMouseEnter={playVideo} onMouseLeave={stopVideo} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        {(isVideo && !isVideoError)
          ? <VideoPlayer src={previewVideoLink} ref={videoRef} />
          : <img src={previewImage} alt={altText} width="280" height="175" />
        }
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
