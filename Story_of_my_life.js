console.log("story of my life")

var me = {};

me.eat = function(){
  console.log("yum");
};
me.sleep = function(){
  console.log("zzz");
};
me.dream_about_matthew_gray_gubler = function(){
  console.log("yum");
};
me.awake = function(){
  console.log("woke");
};
me.program = function(){
  console.log("click, click,click");
};
me.use_computer = function(){
  console.log("memes");
};


while (me.awake)
{
  me.use_computer();
}

while (me.sleep)
{
  me.dream_about_matthew_gray_gubler();
}

me.awake();
me.eat();
me.program();
me.sleep();
