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

while (coffee.hot)
{
  me.drink();
}

while (coffee.cold)
{
  me.sad();
}

while (coffee.empty)
{
  me.sad();
  coffee.refill();
  me.drink();
}
