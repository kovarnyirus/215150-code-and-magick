'use strict';
window.renderStatistics = function (ctx, names, times) {
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

  var maxItemArr = function (arr) {
    var max = -1;
    for (var i = 0; i < arr.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  };


  var histogramHeight = 150;
  var columnWidth = 40;
  var interval = 50;
  var initialX = 120;
  var initialY = 250;
  var indentText = 20;
  var colorYou = 'rgba(255, 0, 0, 1)';
  var colorPlayers = 'rgb(0, 0, 255)';
  var step = histogramHeight / (maxItemArr(times) - 0);
  var randomValue = function (minValue, maxValue) {
    return Math.random() * (maxValue - minValue) + minValue;
  };

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = colorYou;
      ctx.globalAlpha = 1;
      ctx.fillRect(initialX + (interval + columnWidth) * i, initialY, columnWidth, times[i] * -step);
    } else {
      ctx.fillStyle = colorPlayers;
      ctx.globalAlpha = randomValue(0.1, 1);
      ctx.fillRect(initialX + (interval + columnWidth) * i, initialY, columnWidth, times[i] * -step);
    }
    ctx.fillStyle = '#000';
    ctx.globalAlpha = 1;
    ctx.fillText(names[i], initialX + (interval + columnWidth) * i, initialY + indentText);
    ctx.fillText(Math.round(times[i]), initialX + (interval + columnWidth) * i, initialY - indentText / 2 + times[i] * -step);
  }
};
