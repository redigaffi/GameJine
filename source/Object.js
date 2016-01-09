/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Object(){
    this.isRigid = false;
    this.name    = "";
    this.type    = "";
}

Object.prototype = new Drawable();
Object.prototype.constructor = Object;