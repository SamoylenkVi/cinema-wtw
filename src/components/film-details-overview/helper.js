const RATING__LEVEL = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  AWESOME: 'Awesome',
};

const STARRING_MAX = 3;

export const calculateRatingLevel = (rating) => {
  if (rating < 3) {
    return RATING__LEVEL.BAD;
  }
  if (rating < 5) {
    return RATING__LEVEL.NORMAL;
  }
  if (rating < 8) {
    return RATING__LEVEL.GOOD;
  } if (rating < 10) {
    return RATING__LEVEL.VERY_GOOD;
  }
  return RATING__LEVEL.AWESOME;
};

export const createStarringList = (starring) => {
  let start = 'Starring:';

  for (let i = 0; i < starring.length; i++) {
    if (i === starring.length - 1) {
      start = `${start} ${starring[i]}`;
      break;
    }
    if (i === STARRING_MAX) {
      start = `${start} ${starring[i]} and other`;
      break;
    }
    start = `${start} ${starring[i]}, `;
  }
  return start;
};
