export const capitalizeFirstLetter = (string) => {
  return (
    (string &&
      typeof string === 'string' &&
      string.charAt(0).toUpperCase() + string.slice(1)) ||
    '-'
  );
};
