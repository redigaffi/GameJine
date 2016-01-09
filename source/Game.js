function Game(ctx){
    this.objects = [];
    this.img     = [];
    this.AllDrawed = false;
    this.ctx     = ctx;
    this.frame;
}

Game.prototype.imgHandler = function(){
   
    for(var i = 0; i<this.objects.length; i++){
        if(this.img[i] == undefined){
             
            var image = new Image();
            image.src = this.objects[i].img;
            var that  = this;
            var act   = i;
            image.onload = function(){
               that.img[act] = image;
            }
        }
    }
    
    
    if(this.objects.length != this.img.length){
        var difference = Math.abs(this.objects.length-this.img.length);
        this.img.splice(0,  difference);
        return false
        
    }else return true;
    
}

Game.prototype.clean = function(){
    ctx.clearRect ( 0 , 0 , 1800 , 900 );
}

Game.prototype.drawObjects = function(){
    
    if(this.imgHandler()){
        for(var i = 0; i<this.objects.length; i++){

            if(this.img[i] == undefined) continue;

            var object  = this.objects[i];
            var img     = this.img[i];
            img.src     = object.img;

            ctx.drawImage(img, (object.xLine*65), (object.yLine*65), object.xImg, object.yImg, object.x, object.y, object.width, object.height);      
        }
    }
}

Game.prototype.start = function(a){
   
    this.clean ();
    this.drawObjects();
    
    
    var that = this;
    this.frame = window.requestAnimationFrame( function(){that.start(); } );
    
}




