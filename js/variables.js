
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var ScoreBoard = document.getElementById("sb");
var	TimerLabel = document.getElementById("timer");
var	GoalLabel = document.getElementById("goal");
var LvlLabel = document.getElementById("lvl");


var bg = new Image();
var gemTriangle = new Image();
var gemHexagon = new Image();
var gemOctagon = new Image();
var gemRectangle = new Image();
var gemStar = new Image();
var GameGrid;
var Score = 0;
var Timer = false;
var IsMoving = false;
var LVL = 1;
var GOAL = 50;
var Time = 60;
var BonusUsing = false;
var BonusNum = 1;




bg.src = "img1/bg.png";
gemTriangle.src = "img1/gem1.png";
gemHexagon.src = "img1/gem2.png";
gemOctagon.src = "img1/gem3.png";
gemRectangle.src = "img1/gem4.png";
gemStar.src = "img1/gem5.png";

const FIGURE_ID = [gemTriangle, gemHexagon, gemOctagon, gemRectangle, gemStar];
const GAME_GRIDSIZE = 8;
const GEM_MINNUM = 0, GEM_MAXNUM = 5;
const TILE_SIZE = 64;
const CONER_MARGIN = 0;
const TILE_SPEED = 8;
const UNDEF_KIND = -1;