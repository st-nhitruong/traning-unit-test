export const isAscending = (arr) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    return false;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i] || isNaN(arr[i])) {
      return false;
    }
  }
  return true;
};
