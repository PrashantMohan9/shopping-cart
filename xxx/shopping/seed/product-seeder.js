var Product = require('../models/product');
var mongoose=require('mongoose');



const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};


mongoose.connect('mongodb://localhost:27017/shopping', option).then(function(){
    //connected successfully
}, function(err) {
    //err handle
});



 var products =[
     new Product({
     imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
     title:'Gothic Video game',
     description:'Awesome Game ',
     price:10
 }),
     new Product({
         imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
         title:'Mini game',
         description:'Awesome Game ',
         price:20
     }),

     new Product({
         imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
         title:'mini game',
         description:'Awesome Game ',
         price:30
     }),

 ];

 var done=0;
 for (var i=0; i<products.length;i++)
{
    products[i].save( function (err, result) {
     done++;
     if(done===products.length) {
         exit();
     }
    });
}
function exit() {
     mongoose.disconnect();

}
