"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

square();
DrawSpaceInvader();

function square() {

    context.beginPath();
    context.rect(25, 0, 300, 300);
    context.fillStyle = "black"
    context.fill();
    context.stroke();

}

function DrawSpaceInvader() {

    context.beginPath();
    context.rect(50, 50, 50, 50);
    context.rect(100, 50, 50, 50);
    context.rect(100, 100, 50, 50);
    context.rect(50, 150, 50, 50);
    context.rect(150, 150, 50, 50);
    context.rect(150, 200, 50, 50);
    context.rect(100, 200, 50, 50);
    context.rect(200, 200, 50, 50);
    context.rect(250, 150, 50, 50);
    context.rect(200, 100, 50, 50);
    context.rect(200, 50, 50, 50);
    context.rect(250, 50, 50, 50);
    context.strokeStyle = "#66FF00"
    context.fillStyle = "#66FF00"
    context.fill();
    context.stroke();

}