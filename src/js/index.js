import listController from "./list";
import viewController from "./view";

/**
 * This controller is to handle the main implementation and consumes both the
 * above modules as parameters and use all the exposed funcitons from those modules
 * @param {Object} listCtrl listController
 * @param {Object} UICtrl UIController
 * @name controller
 * @author Pranik Garg
 */
const controller = ((listCtrl, UICtrl) => {
  /**
   * This funcition is to set event listner of DOM elements
   * @name setupEventListners
   * @author Pranik Garg
   */
  const setupEventListners = () => {
    let DOM = UICtrl.getDOMstrings();

    //This event is triggered on window resize
    window.addEventListener("resize", ctrlOnResize);

    //This event is triggered on button clicks
    document
      .querySelector(DOM.shuffleBtn)
      .addEventListener("click", ctrlShuffleList);
    document.querySelector(DOM.sortBtn).addEventListener("click", ctrlSortList);
  };

  /**
   * This function is called after getting the specific list (sorted/shuffled)
   * @name ctrlMain
   * @param {array} list
   * @author Pranik Garg
   */
  const ctrlMain = (list) => {
    // Getting the colors
    const colors = listCtrl.getColors();
    // Getting if user is browsing on mobile of desktop
    const isMobile = UICtrl.isMobileDevice();
    // Called displayList function from UIController to display the list on browser
    UICtrl.displayList(list, colors, isMobile);
  };

  const ctrlShuffleList = () => {
    // Getting the shuffled list from listController
    const list = listCtrl.getShuffledArray();
    // Called the main controller to display the list
    ctrlMain(list);
  };

  const ctrlSortList = () => {
    // Getting the sorted list from listController
    const list = listCtrl.getSortedArray();
    // Called the main controller to display the list
    ctrlMain(list);
  };

  const ctrlOnResize = () => {
    // Getting the changed list (sorted/shuffled) based on last operaiton from listController
    const list = listCtrl.getList();
    // Called the main controller to display the list
    ctrlMain(list);
  };

  /**
   * Here, we are using encapsulation concepts and returing only the required
   * properties/functions
   */
  return {
    /**
     * This function is to initialize the application
     * By dafult, sorted list will be called
     */
    init: () => {
      console.log("Application has started");
      ctrlSortList();
      setupEventListners();
    },
  };
})(listController, viewController);

// Here, the application is started and called the iniitalize function
controller.init();
