export const formatRunTime = (time) => {
  const hour = Math.floor(time / 60);
  const minute = Math.floor(time % 60);

  return `${hour}h ${minute}m`;
};
