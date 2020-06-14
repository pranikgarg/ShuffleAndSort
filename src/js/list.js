/**
 * This controller is to handle the list oprations
 * @name listController
 * @author Pranik Garg
 */
const listController = (() => {
  /**
   * Setting up list and color array according to the requirement
   * Note: We can test the application with different number of array items
   * but make sure same number of elements should be there in colors array as well
   * otehrwise random color will be displayed for those extra items
   */
  const listArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const colorArray = [
    "#000000",
    "#2B8EAD",
    "#333333",
    "#6F98A8",
    "#BFBFB2 ",
    "#BFBFBF",
    "#E5E2E2",
    "#2F454E",
    "#72C3DC",
  ];

  /**
   * This function returns a sorted array
   * Note: I have used inbuild array.sort method, we could use some sorting
   * algorithm as well (QuickSort etc.)
   * @name getSortedArray
   * @access public
   * @author Pranik Garg
   */
  const getSortedArray = () => listArray.sort((a, b) => a - b);

  /**
   * This function returns a shuffled array based on ramdom number
   * @name getShuffledArray
   * @access public
   * @author Pranik Garg
   */
  const getShuffledArray = () => {
    for (let i = listArray.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      const temp = listArray[i];
      listArray[i] = listArray[random];
      listArray[random] = temp;
    }
    return listArray;
  };

  /**
   * Here, we are using encapsulation concepts and returing only the required
   * properties/functions
   */
  return {
    getList: () => listArray,
    getColors: () => colorArray,
    getSortedArray,
    getShuffledArray,
  };
})();

export default listController;
