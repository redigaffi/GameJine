/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Player(a){
    this.name           = "Test";
    this.race           = "Test";
    this.strength       = 50;
    this.intelligence   = 50;
    this.maxLife        = 150;
    this.life           = 150;
    //this.keyHandler();
}

Player.prototype = new Drawable();
Player.prototype.constructor = Player;

Player.prototype.keyHandler = function(event){
    window.addEventListener("keydown", this.keyHandler, false);
    if(event == undefined) return;
    
    switch(event.keyCode){

        // derecha 
        case 68:
            this.x += this.xSpeed;
        break;
        
        // izquierda
        case 65:
            this.x -= this.xSpeed;
        break;
        
        // abajo
        case 83:
            this.y += this.ySpeed;
        break;
        
        // ariba
        case 87:
            console.log( Drawable.getX()  );
            
        break;
    }
    
}


