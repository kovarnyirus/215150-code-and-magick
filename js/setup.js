'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAME = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COATCOLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYESCOLOR = [
  'BLACK',
  'RED',
  'BLUE',
  'YELLOW',
  'GREEN'
];
var similarArray = [];
var similarObj = {};
var similarListElement = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('template').content;
var wizardItem = wizardTemplate.querySelector('.setup-similar-item');
var setupSimilar = document.querySelector('.setup-similar');


function getRandomCelValue(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

function createSimilarArray() {
  for (var i = 0; i < 4; i++) {
    similarObj = {
      name: NAME.pop(),
      surname: SURNAME.pop(),
      COATCOLOR: COATCOLOR[getRandomCelValue(0, 5)],
      EYESCOLOR: EYESCOLOR[getRandomCelValue(0, 4)]
    };
    similarArray.push(similarObj);
  }
}

function createWizard(wizard) {
  var wizardElement = wizardItem.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.COATCOLOR;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.COATCOLOR;

  return wizardElement;
}

function renderWizard(array) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < array.length; i++) {
    fragment.appendChild(createWizard(array[i]));
  }
  similarListElement.appendChild(fragment);
}

createSimilarArray();
renderWizard(similarArray);
setupSimilar.classList.remove('hidden');
