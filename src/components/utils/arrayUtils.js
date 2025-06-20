/**
 * array shuffle function
 *
 * A simple function to shuffle an array in place.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {Array} array - The array to shuffle.
 *
 * @returns {Array} A new shuffled array.
 */
export function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;
  const newArray = [...array];
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }
  return newArray;
}
