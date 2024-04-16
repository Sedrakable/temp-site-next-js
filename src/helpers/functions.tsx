export const getRandomItemFromArray = (arr: any[]) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// Function to shuffle array using Fisher-Yates algorithm
export const shuffleArray = (array: any[]) => {
  if (!Array.isArray(array) || array.length > 0) {
    for (let i = array.length! - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
};
