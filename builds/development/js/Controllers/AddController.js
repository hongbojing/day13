define(['Views/AddView','Models/Kill'],function(AddView,Kill){

  function start(){
    AddView.render();
    bindEvents();
  }

  function bindEvents(){
    document.getElementById('add').addEventListener('click',function(){
      var kills=JSON.parse(localStorage.kills);
      var killName=document.getElementById('kill-name').value;
      kills.push(new Kill(killName));
      localStorage.kills=JSON.stringify(kills);

      window.location.hash='#list';
    },false);
  }

  return{start:start};
});
