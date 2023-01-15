export const getXCoordNum = (constNum: number) => {
    const numDeci = 1280 / constNum;
    return Math.floor(window.innerWidth / numDeci);
  };

export const getYCoordNum = (constNum: number) => {
    const numDeci = 725 / constNum;
    return Math.floor(window.innerHeight / numDeci);
  };

  export const points = {
    first: { x: 200, y: 190, color: 'red' },
    second: { x: 410, y: 170, color: 'purple' },
    third: { x: 730, y: 195, color: 'yellow' },
    fourth: { x: 445, y: 295, color: 'green' },
    fifth: { x: 235, y: 350, color: 'black' },
    sixth: { x: 660, y: 305, color: 'cyan' },
  };