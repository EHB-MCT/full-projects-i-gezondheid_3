"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let stars = [];
let xMouse;
let yMouse;
let windX = 0;
let windY = 0;
setup();
update();

function setup() {
    window.onmousemove = mouseMove;
    context.textAlign = "center";
    context.font = "bold 68pt Arial";
}

function update() {
    creatStar();
    context.fillStyle = "#3AAFA9";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "white";
    context.fillText("LOGO", width / 2, height / 2 + 24);

    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        let color = Utils.hsla(star.hue, 100, 50, star.opacity);
        star.y += star.speed;
        star.x -= Math.random() * windX;
        let dis = Utils.calculateDistance(xMouse, yMouse, star.x, star.y);
        if (dis < 110) {
            let color = Utils.hsla(star.hue + 20, 100, 50, star.opacity);
            drawHeart(star.x, star.y, star.size / 2, color);

        } else {
            drawStar(star.x, star.y, star.size, color);
        }
    }
    /*deze loop is om de sterren (array) van het scherm te verwijderen*/
    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        if (star.y > height * 5 / 7 + star.size) {
            stars.splice(i, 1);
        }
    }
    requestAnimationFrame(update);
}
/*
Deze functie is om sterren te tekenen
*/
function drawStar(x, y, radius, hsla) {
    context.fillStyle = hsla;
    context.beginPath();
    context.moveTo(x, y - radius);
    context.arcTo(x, y, x + radius, y, radius);
    context.arcTo(x, y, x, y + radius, radius);
    context.arcTo(x, y, x - radius, y, radius);
    context.arcTo(x, y, x, y - radius, radius);
    context.fill();
}
/*
Deze functie is om harten te tekenen
*/
function drawHeart(x, y, size, hsla) {
    context.fillStyle = hsla;
    context.beginPath();
    context.moveTo(x, y - size / 2);
    context.bezierCurveTo(x, y - size * 2.5, x + size * 4, y - size / 3, x, y + size * 2);
    context.moveTo(x, y - size / 2);
    context.bezierCurveTo(x, y - size * 2.5, x - size * 4, y - size / 3, x, y + size * 2);
    context.fill();
}
/*
Met deze functie kunnen we de eigenschappen van sterren zien
 */
function creatStar() {
    let star = {
        x: Utils.randomNumber(0, width),
        y: -25,
        hue: Utils.randomNumber(150, 200),
        size: Utils.randomNumber(5, 15),
        speed: Math.random() * 2,
        opacity: Utils.randomNumber(10, 70)
    };
    stars.push(star);
}
/**
 * 
 * @param {MouseEvent} e 
 */
function mouseMove(e) {
    xMouse = e.x;
    yMouse = e.y;
    windX = (width / 2 - xMouse) / 200;
}