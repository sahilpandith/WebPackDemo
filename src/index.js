import _ from "lodash";
import myName from "./myName";
import './style.css';
import dogIcon from './dog.svg';
import Data from './data.xml';
import Notes from './data.csv';
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = myName('Hachiko');
    element.classList.add('hello');
  
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = dogIcon;

    element.appendChild(myIcon);
  
    console.log(Data);
    console.log(Notes);

    return element;
  }
  
  document.body.appendChild(component());