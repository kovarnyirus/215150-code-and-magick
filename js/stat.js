'use strict';
window.renderStatistics = function (ctx, names, times) {

  var HISTOGRAM_HEIGHT = 150;
  var COLUMN_WIDTH = 40;
  var INTERVAL = 50;
  var INITIAL_X = 120;
  var INITIAL_Y = 250;
  var INDENT_TEXT = 20;
  var COLOR_YOU = 'rgba(255, 0, 0, 1)';

  var renderCloud = function () {
    //  тень
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    //  облако
    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
    ctx.fillRect(100, 10, 420, 270);
    //  текст
    ctx.fillStyle = '#000';
    ctx.font = '16  px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  };

  var getMaxArrayValue = function (arr) {
    var max = -1;

    for (var i = 0; i < arr.length; i++) {
      if (times[i] > max) {
        max = times[i];
      }
    }

    return max;
  };

  var STEP = HISTOGRAM_HEIGHT / getMaxArrayValue(times);

  var getRandomValue = function (minValue, maxValue) {
    return Math.random() * (maxValue - minValue) + minValue;
  };

  var renderColumns = function (data) {
    for (var i = 0; i < data.length; i++) {
      var colorPlayers = 'rgba(0, 0, 255, alpha)'.replace('alpha', getRandomValue(0.4, 1));
      var positionX = INITIAL_X + (INTERVAL + COLUMN_WIDTH) * i;
      var columnHeight = data[i] * -STEP;

      if (names[i] === 'Вы') {
        ctx.fillStyle = COLOR_YOU;
      } else {
        ctx.fillStyle = colorPlayers;
      }
      ctx.fillRect(positionX, INITIAL_Y, COLUMN_WIDTH, columnHeight);
      ctx.fillStyle = '#000';
      ctx.globalAlpha = 1;
      ctx.fillText(names[i], positionX, INITIAL_Y + INDENT_TEXT);
      ctx.fillText(Math.round(data[i]), positionX, INITIAL_Y - INDENT_TEXT / 2 + columnHeight);
    }
  };

  renderCloud();
  renderColumns(times);
};
