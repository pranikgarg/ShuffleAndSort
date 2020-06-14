import "../css/index.css";

/**
 * This controller is to handle the DOM manipulations
 * @name viewController
 * @author Pranik Garg
 */
const viewController = (() => {
  /**
   * This is a literal Object to contains all the required DOM class names
   * @access public
   * @author Pranik Garg
   */
  const DOMstrings = {
    list: ".content__list",
    shuffleBtn: ".button-shuffle",
    sortBtn: ".button-sort",
  };

  /**
   * This function returns the color value if list array is of same length otherwise
   * returns a ramndom color from colors array
   * @param {int} index
   * @param {array} list
   * @param {array} colors
   * @access private
   * @author Pranik Garg
   */
  const getColor = (index, list, colors) =>
    colors[list[index] - 1] ||
    colors[Math.floor(Math.random() * colors.length)];

  /**
   * This function returns the element list created based on diffrent devices
   * @param {array} list
   * @param {array} colors
   * @param {boolean} isMobile
   * @access private
   * @author Pranik Garg
   */
  const getList = (list, colors, isMobile) => {
    let str = "";
    if (!isMobile) {
      for (let i = 0; i < list.length; i++) {
        const color = getColor(i, list, colors);
        str += `<div class="content__list-item" style=background-color:${color}><span class="content__list-item--text">${list[i]}</span></div>`;
      }
    } else {
      for (let i = 0; i < list.length; i++) {
        const color = getColor(i, list, colors);
        str += `<div class="content__list-item"><span class="content__list-item--mobile" style=background-color:${color}></span><span class="content__list-item--text">${list[i]}</span></div>`;
      }
    }
    return str;
  };

  /**
   * This function add the element list to the DOM using document.querySelector
   * Before adding the list to the DOM this funciton clear the previous list as well
   * @param {array} list
   * @param {array} colors
   * @param {boolean} isMobile
   * @access public
   * @author Pranik Garg
   */
  const displayList = (list, colors, isMobile) => {
    const DOMStr = getList(list, colors, isMobile);
    clearList();
    document
      .querySelector(DOMstrings.list)
      .insertAdjacentHTML("beforeend", DOMStr);
  };

  /**
   * This function clears the list from the DOM
   * @access private
   * @author Pranik Garg
   */
  const clearList = () => {
    document.querySelector(DOMstrings.list).innerHTML = "";
  };

  /**
   * This function uses regex which returns a true or false value depending upon
   * whether or not user is browsing on mobile or desktop
   * @name isMobileDevice
   * @access public
   * @author Pranik Garg
   */
  const isMobileDevice = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  /**
   * Here, we are using encapsulation concepts and returing only the required
   * properties/functions
   */
  return {
    getDOMstrings: () => DOMstrings,
    displayList,
    isMobileDevice,
  };
})();

export default viewController;
