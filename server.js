var io = require('socket.io').listen(3030);
io.set('origins', '*:*');
objects = [];


io.sockets.on('connection', function (socket) {
    socket.on('update', function(data){
     
        getPlayer = existsPlayer(data.name);
        if(getPlayer === false){
            objects.push(data);
        }else{
            objects[getPlayer] = data;
        }
        
        socket.emit("update", objects);
    });
    
});

function existsPlayer(name){
    
    for(var i = 0; i<objects.length; i++){
        var actName = objects[i].name;
        if(name == actName) return i;
    }
    
    return false;
}
 