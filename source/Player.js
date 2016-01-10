/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Player(){
    
    this.name           = "Test1";
    this.race           = "Test";
    this.strength       = 50;
    this.intelligence   = 50;
    this.maxLife        = 150;
    this.life           = 150;
    this.player         = Object;
    Drawable.call(this);
    
    
    //this.keyHandler();
}


Player.prototype = new Drawable();
Player.prototype.constructor = Player;

Player.prototype.load = function(p){
    player = p;
    
}


Player.prototype.keyHandler = function(event){
    
    window.addEventListener("keydown", this.keyHandler, false);
    if(event == undefined) return;
    
    //console.log(Drawable.prototype.getX.call(this));
    
    if(this.player.xLine == this.player.xOffset) this.player.xLine = 0;
    
    switch(event.keyCode){

        // derecha 
        case 68:
            this.player.x += this.player.xSpeed;
            this.player.xLine++;
            this.player.yLine = 3;
        break;
        
        // izquierda
        case 65:
            this.player.x -= this.player.xSpeed;
            this.player.xLine++;
            this.player.yLine = 1;
        break;
        
        // abajo
        case 83:
            this.player.y += this.player.ySpeed;
            this.player.xLine++;
            this.player.yLine = 2;
        break;
        
        // ariba
        case 87:
            this.player.y -= this.player.ySpeed;
            this.player.xLine++;
            this.player.yLine = 0;
           
        break;
    }
    
}


