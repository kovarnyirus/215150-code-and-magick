'use strict';
window.renderStatistics = function (ctx, names, times) {
  var HISTOGRAM_HEIGHT = 150;
  var COLUMN_WIDTH = 40;
  var INTERVAL = 50;
  var INITIAL_X = 120;
  var INITIAL_Y = 250;
  var INDENT_TEXT = 20;
  var COLOR_YOU = 'rgba(255, 0, 0, 1)';
  var COLOR_SHADOW_CLOUD = 'rgba(0, 0, 0, 0.7)';
  var COLOR_CLOUD = 'rgba(256, 256, 256, 1.0)';
  var CLOUD_INITIAL_X = 100;
  var CLOUD_INITIAL_Y = 10;
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var TITLE_INITIAL_X = 120;
  var TITLE_INITIAL_Y = 40;
  var FOUNT_SIZE_TEXT = 16;
  var STEP = HISTOGRAM_HEIGHT / getMaxArrayValue(times);

  var renderCloud = function () {
    //  тень
    ctx.fillStyle = COLOR_SHADOW_CLOUD;
    ctx.fillRect(CLOUD_INITIAL_X + 10, CLOUD_INITIAL_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT);
    //  облако
    ctx.fillStyle = COLOR_CLOUD;
    ctx.fillRect(CLOUD_INITIAL_X, CLOUD_INITIAL_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
    //  текст
    ctx.fillStyle = '#000';
    ctx.font = 'FOUNT_SIZE_TEXT  px PT Mono';
    ctx.fillText('Ура вы победили!', TITLE_INITIAL_X, TITLE_INITIAL_Y);
    ctx.fillText('Список результатов:', TITLE_INITIAL_X, TITLE_INITIAL_Y + 20);
  };

  function getMaxArrayValue (arr) {
    var max = -1;

    for (var i = 0; i < arr.length; i++) {
      if (times[i] > max) {
        max = times[i];
      }
    }

    return max;
  };

  function getRandomColor () {
    return 'rgba(0, 0, 255, alpha)'.replace('alpha', getRandomValue(0.4, 1));
  }

  var getRandomValue = function (minValue, maxValue) {
    return Math.random() * (maxValue - minValue) + minValue;
  };

  function getColumnColor (name) {
    if (name === 'Вы') {
      ctx.fillStyle = COLOR_YOU;
    } else {
      ctx.fillStyle = getRandomColor();
    }
  };

  var renderColumns = function (timesArray) {
    for (var i = 0; i < timesArray.length; i++) {
      var positionX = INITIAL_X + (INTERVAL + COLUMN_WIDTH) * i;
      var columnHeight = timesArray[i] * -STEP;
      var namePlayer = names[i]

      getColumnColor(namePlayer);
      ctx.fillRect(positionX, INITIAL_Y, COLUMN_WIDTH, columnHeight);
      ctx.fillStyle = '#000';
      ctx.globalAlpha = 1;
      ctx.fillText(names[i], positionX, INITIAL_Y + INDENT_TEXT);
      ctx.fillText(Math.round(timesArray[i]), positionX, INITIAL_Y - INDENT_TEXT / 2 + columnHeight);
    }
  };

  renderCloud();
  renderColumns(times);
};
