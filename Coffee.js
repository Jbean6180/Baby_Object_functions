console.log("coffee = happiness")

var me = {};

me.drink = function(){
  console.log("*sip*");
};
me.sad = function(){
  console.log("*miniature violin*");
};

var coffee = {};

coffee.hot = function(){
  console.log("ssss");
};

coffee.cold = function(){
  console.log("*miniature violin*");
};

coffee.refill = function(){
  console.log("ssss");
};

coffee.empty = function(){
  console.log("*miniature violin*");
};

while (coffee.hot)// IGN 10/10
{
  me.drink();
}

while (coffee.cold)
{
  me.sad();
}

while (coffee.empty)//new coffee is made
{
  me.sad();
  coffee.refill();
  me.drink();
}
