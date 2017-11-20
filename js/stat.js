'use strict'
window.renderStatistics = function (ctx, names, times) {
//тень
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
//облако
    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
    ctx.fillRect(100, 10, 420, 270);
    //текст
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.font = '16  px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
};