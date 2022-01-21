"use strict";
/** @type {CanvasRenderingContext2D} */
let context;

setupCanvasContext();

export default context;

export function setupCanvasContext() {
    //get a reference to the canvas element and configure it to fill the whole window.
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = 300;
    context = canvas.getContext("2d");
}

window.onresize = reload;

function reload() {
    location.reload();
}