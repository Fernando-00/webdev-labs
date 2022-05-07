let headerFontSize = 2.0;
let contentFontSize = 1.0;


const makeBigger = () => {
   headerFontSize += 0.1;
   contentFontSize += 0.1;
   document.querySelector('h1').style.fontSize = headerFontSize.toString() + '2em';
   document.querySelector('p').style.fontSize = contentFontSize.toString() + '1em';


};

const makeSmaller = () => {
   headerFontSize -= 0.1;
   contentFontSize -= 0.1;
   document.querySelector('h1').style.fontSize = headerFontSize.toString() + '2em';
   document.querySelector('p').style.fontSize = contentFontSize.toString() + '1em';


};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

