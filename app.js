var p = document.getElementById("p");
var btn = document.getElementById("btn");




var musubi =    {
    imagesrc:"http://www.unclejerryskitchen.com/wp-content/uploads/2009/03/Video_Thumbnail-1024x1024.jpg",
    name: "Musubi",
    adjective: "Tasty",
    verb: "eat da musubi"
    };
var pizza =     {
        imagesrc:"https://www.cicis.com/media/1138/pizza_trad_pepperoni.png",
        name: "Pizza",
        adjective: "Tasty",
        verb: "eat da pizza"
    };

var soda =    {
        imagesrc:"http://cdn.phillymag.com/wp-content/uploads/2016/06/soda-tax-philadelphia-940x540.jpg",
        name: "Soda",
        adjective: "Tasty",
        verb: "drink da soda"
    }

var manapua =    { 
        imagesrc:"http://cookinghawaiianstyle.com/images/recipes/1313514828manapua.jpg",
        name: "manapua",
        adjective: "Tasty",
        verb: "eat da manapua"
    };

var chowmein =     {
        imagesrc:"https://dinnerthendessert.com/wp-content/uploads/2016/02/Classic-Chinese-Chow-Mein-5.jpg",
        name: "chowmein",
        adjective: "Tasty",
        verb: "eat da chowmein"
    };




var z = [musubi, pizza, soda, manapua, chowmein];


btn.addEventListener("click", function(){
    var x = Math.floor(Math.random() * 5 + 0);
    var imgchooser = z[x].imagesrc;
    btn.src = imgchooser;
    p.innerHTML = z[x].verb + " which is " + z[x].adjective;
});
   