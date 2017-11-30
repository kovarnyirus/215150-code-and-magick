'use strict';
window.renderStatistics = function (ctx, names, times) {
  var HISTOGRAM_HEIGHT = 150;
  var COLUMN_WIDTH = 40;
  var INTERVAL = 50;
  var INNER_INDENT = 20;
  var FOUNT_SIZE = 16;
  var CLOUD_SHIFT = 10;
  var CLOUD_INITIAL_X = 100;
  var CLOUD_INITIAL_Y = 10;
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var LINE_HEIGHT = FOUNT_SIZE * 1.25;
  var TEXT_INDENT = LINE_HEIGHT;
  var COLOR_YOU = 'rgba(255, 0, 0, 1)';
  var COLOR_BLACK = '#000';
  var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var CLOUD_COLOR = 'rgba(256, 256, 256, 1.0)';
  var TITLE_INITIAL_X = CLOUD_INITIAL_X + INNER_INDENT;
  var TITLE_INITIAL_Y = FOUNT_SIZE + LINE_HEIGHT;
  var INITIAL_X = CLOUD_INITIAL_X + INNER_INDENT;
  var INITIAL_Y = CLOUD_HEIGHT - INNER_INDENT;
  var STEP = HISTOGRAM_HEIGHT / getMaxArrayValue(times);

  var renderCloud = function () {
    //  тень
    ctx.fillStyle = CLOUD_SHADOW_COLOR;
    ctx.fillRect(CLOUD_INITIAL_X + CLOUD_SHIFT, CLOUD_INITIAL_Y + CLOUD_SHIFT, CLOUD_WIDTH, CLOUD_HEIGHT);
    //  облако
    ctx.fillStyle = CLOUD_COLOR;
    ctx.fillRect(CLOUD_INITIAL_X, CLOUD_INITIAL_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
    //  текст
    ctx.fillStyle = COLOR_BLACK;
    ctx.font = FOUNT_SIZE + 'px PT Mono';
    ctx.fillText('Ура вы победили!', TITLE_INITIAL_X, TITLE_INITIAL_Y);
    ctx.fillText('Список результатов:', TITLE_INITIAL_X, TITLE_INITIAL_Y + LINE_HEIGHT);
  };

  function getMaxArrayValue(arr) {
    var max = -1;

    for (var i = 0; i < arr.length; i++) {
      if (times[i] > max) {
        max = times[i];
      }
    }

    return max;
  }

  function getRandomColor() {
    return 'rgba(0, 0, 255, alpha)'.replace('alpha', getRandomValue(0.4, 1));
  }

  var getRandomValue = function (minValue, maxValue) {
    return Math.random() * (maxValue - minValue) + minValue;
  };

  function getColumnColor(name) {
    if (name === 'Вы') {
      return COLOR_YOU;
    } else {
      return getRandomColor();
    }
  }

  var renderColumns = function (timesArray) {
    for (var i = 0; i < timesArray.length; i++) {
      var positionX = INITIAL_X + (INTERVAL + COLUMN_WIDTH) * i;
      var columnHeight = timesArray[i] * -STEP;

      ctx.fillStyle = getColumnColor(names[i]);
      ctx.fillRect(positionX, INITIAL_Y, COLUMN_WIDTH, columnHeight);
      ctx.fillStyle = COLOR_BLACK;
      ctx.globalAlpha = 1;
      ctx.fillText(names[i], positionX, INITIAL_Y + TEXT_INDENT);
      ctx.fillText(Math.round(timesArray[i]), positionX, INITIAL_Y - TEXT_INDENT / 2 + columnHeight);
    }
  };

  renderCloud();
  renderColumns(times);
};
