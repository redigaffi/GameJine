var io = require('socket.io').listen(3030);
io.set('origins', '*:*');
objects = [];
mapping = [];

players = 0;
io.sockets.on('connection', function (socket) {

    socket.on('update', function(data){
     
        
       if(mapping[socket.id] == undefined){
            objects[players]    = data;
            mapping[socket.id]  = players;
            players++;
       }else{
            pId = mapping[socket.id];
            objects[pId] = data;
       }
        
        socket.emit("update", objects);
    });

    

    
});

/*function existsPlayer(name){
    
    for(var i = 0; i<objects.length; i++){
        var actName = objects[i].name;
        if(name == actName) return i;
    }
    
    return false;
}*/
 