
require(['Models/Kill','Controllers/ListController','Controllers/AddController','Router'],function(Kill,ListController,AddController,Router){
  var kills=[new Kill('Light Yagami'),
             new Kill('Ryuk'),
             new Kill('L')
            ];
  for(var i=0,len=kills.length;i<len;i++){
    console.log(kills[i].name);
  }
  localStorage.kills=JSON.stringify(kills);
  Router.startRouting();
  ListController.start();

  AddController.start();
  console.log(window.location.hash);

});




