define(['Views/ListView'],function(ListView){

  function start(){
    var kills=JSON.parse(localStorage.kills);
    ListView.render({kills:kills});
  }

  return{start:start};

});
