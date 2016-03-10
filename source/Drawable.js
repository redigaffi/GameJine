/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Drawable(){
    this.x      = 20;
    this.xSpeed = 5;
    this.y      = 20;
    this.ySpeed = 5;
    this.width  = 47;
    this.height = 65;
    this.img    = "";
    this.xImg   = 0;
    this.xOffset= 0;
    this.yImg   = 0;
    this.xLine  = 1;
    this.yLine  = 1;

}

Drawable.prototype.getX = function(){
    return this.x;
}

Drawable.prototype.setX = function(x){
    this.x = x;
}
