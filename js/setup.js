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
var similarListElement = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('template').content;
var wizardItem = wizardTemplate.querySelector('.setup-similar-item');
var setupSimilar = document.querySelector('.setup-similar');
var COUNTWIZARDS = 4;


function getRandomCelValue(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

function cloneArray(array) {
  return array.concat();
}

function getRandomBetween(array, items) {
  var copyArray = cloneArray(array);
  var newArray = [];
  copyArray.sort(compareRandom);
  newArray.push(array[items]);
  return newArray;
}

function compareRandom() {
  return Math.random() - 0.5;
}

function createSimilarArray(countwizards) {
  var similarObj = {};
  for (var i = 0; i < countwizards; i++) {
    similarObj = {
      name: getRandomBetween(NAME, i),
      surname: getRandomBetween(SURNAME, i),
      COATCOLOR: COATCOLOR[getRandomCelValue(0, 5)],
      EYESCOLOR: EYESCOLOR[getRandomCelValue(0, 4)]
    };
    similarArray.push(similarObj);
  }
  renderWizards(similarArray);
}

function createWizard(wizard) {
  var wizardElement = wizardItem.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.COATCOLOR;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.COATCOLOR;

  return wizardElement;
}

function renderWizards(array) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < array.length; i++) {
    fragment.appendChild(createWizard(array[i]));
  }
  similarListElement.appendChild(fragment);
}

createSimilarArray(COUNTWIZARDS);
setupSimilar.classList.remove('hidden');
