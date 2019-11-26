let clickedEyes = 'eyes1';
let clickedNose = 'nose1';
let clickedMouth = 'mouth1';
let clickedColor = '757175';
let avi = document.getElementById('avatarImage');

const changeEyes = (evt) =>{
    clickedEyes = evt.target.id;
    console.log('You clicked ' + clickedEyes);
    avi.src = `https://api.adorable.io/avatars/face/${clickedEyes}/${clickedNose}/${clickedMouth}/${clickedColor}`;
}

const changeNose = (evt) =>{
    clickedNose = evt.target.id;
    console.log('You clicked ' + clickedNose);
    avi.src = `https://api.adorable.io/avatars/face/${clickedEyes}/${clickedNose}/${clickedMouth}/${clickedColor}`;
}

const changeMouth = (evt) =>{
    clickedMouth = evt.target.id;
    console.log('You clicked ' + clickedMouth);
    avi.src = `https://api.adorable.io/avatars/face/${clickedEyes}/${clickedNose}/${clickedMouth}/${clickedColor}`;
}

const changeColor = (evt) =>{
    clickedColor = evt.target.id;
    console.log('You clicked ' + clickedColor);
    avi.src = `https://api.adorable.io/avatars/face/${clickedEyes}/${clickedNose}/${clickedMouth}/${clickedColor}`;
}

const eyeButton1 = document.getElementById('eyes1');
const eyeButton2 = document.getElementById('eyes2');
const eyeButton3 = document.getElementById('eyes3');
const eyeButton4 = document.getElementById('eyes4');
const eyeButton5 = document.getElementById('eyes5');
const eyeButton6 = document.getElementById('eyes6');
const eyeButton7 = document.getElementById('eyes7');
const eyeButton8 = document.getElementById('eyes9');
const eyeButton9 = document.getElementById('eyes10');

const noseButton1 = document.getElementById('nose2');
const noseButton2 = document.getElementById('nose3');
const noseButton3 = document.getElementById('nose4');
const noseButton4 = document.getElementById('nose5');
const noseButton5 = document.getElementById('nose6');
const noseButton6 = document.getElementById('nose7');
const noseButton7 = document.getElementById('nose8');
const noseButton8 = document.getElementById('nose9');

const mouthButton1 = document.getElementById('mouth1');
const mouthButton2 = document.getElementById('mouth3');
const mouthButton3 = document.getElementById('mouth5');
const mouthButton4 = document.getElementById('mouth6');
const mouthButton5 = document.getElementById('mouth7');
const mouthButton6 = document.getElementById('mouth9');
const mouthButton7 = document.getElementById('mouth10');
const mouthButton8 = document.getElementById('mouth11');

const colorButton1 = document.getElementById('663399');
const colorButton2 = document.getElementById('D32208');
const colorButton3 = document.getElementById('0900E4');
const colorButton4 = document.getElementById('01A02F');
const colorButton5 = document.getElementById('757175');

const populateButtons = () => {
    console.log('hi')
    eyeButton1.innerHTML = 'Eyes 1';
    eyeButton2.innerHTML = 'Eyes 2';
    eyeButton3.innerHTML = 'Eyes 3';
    eyeButton4.innerHTML = 'Eyes 4';
    eyeButton5.innerHTML = 'Eyes 5';
    eyeButton6.innerHTML = 'Eyes 6';
    eyeButton7.innerHTML = 'Eyes 7';
    eyeButton8.innerHTML = 'Eyes 8';
    eyeButton9.innerHTML = 'Eyes 9';

    noseButton1.innerHTML = 'Nose 1';
    noseButton2.innerHTML = 'Nose 2';
    noseButton3.innerHTML = 'Nose 3';
    noseButton4.innerHTML = 'Nose 4';
    noseButton5.innerHTML = 'Nose 5';
    noseButton6.innerHTML = 'Nose 6';
    noseButton7.innerHTML = 'Nose 7';
    noseButton8.innerHTML = 'Nose 8';
    
    mouthButton1.innerHTML = 'Mouth 1';
    mouthButton2.innerHTML = 'Mouth 2';
    mouthButton3.innerHTML = 'Mouth 3';
    mouthButton4.innerHTML = 'Mouth 4';
    mouthButton5.innerHTML = 'Mouth 5';
    mouthButton6.innerHTML = 'Mouth 6';
    mouthButton7.innerHTML = 'Mouth 7';
    mouthButton8.innerHTML = 'Mouth 8';

    colorButton1.innerHTML = 'Purple';
    colorButton2.innerHTML = 'Red';
    colorButton3.innerHTML = 'Blue';
    colorButton4.innerHTML = 'Green';
    colorButton5.innerHTML = 'Grey';
}

const addListeners = () => {
    eyeButton1.addEventListener('click', changeEyes);
    eyeButton2.addEventListener('click', changeEyes);
    eyeButton3.addEventListener('click', changeEyes);
    eyeButton4.addEventListener('click', changeEyes);
    eyeButton5.addEventListener('click', changeEyes);
    eyeButton6.addEventListener('click', changeEyes);
    eyeButton7.addEventListener('click', changeEyes);
    eyeButton8.addEventListener('click', changeEyes);
    eyeButton9.addEventListener('click', changeEyes);
    
    noseButton1.addEventListener('click', changeNose);
    noseButton2.addEventListener('click', changeNose);
    noseButton3.addEventListener('click', changeNose);
    noseButton4.addEventListener('click', changeNose);
    noseButton5.addEventListener('click', changeNose);
    noseButton6.addEventListener('click', changeNose);
    noseButton7.addEventListener('click', changeNose);
    noseButton8.addEventListener('click', changeNose);
    
    mouthButton1.addEventListener('click', changeMouth);
    mouthButton2.addEventListener('click', changeMouth);
    mouthButton3.addEventListener('click', changeMouth);
    mouthButton4.addEventListener('click', changeMouth);
    mouthButton5.addEventListener('click', changeMouth);
    mouthButton6.addEventListener('click', changeMouth);
    mouthButton7.addEventListener('click', changeMouth);
    mouthButton8.addEventListener('click', changeMouth);

    colorButton1.addEventListener('click', changeColor);
    colorButton2.addEventListener('click', changeColor);
    colorButton3.addEventListener('click', changeColor);
    colorButton4.addEventListener('click', changeColor);
    colorButton5.addEventListener('click', changeColor);
}

populateButtons();
addListeners();