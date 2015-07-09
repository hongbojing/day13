define(function(){
  function render(){
    var appDiv=document.getElementById('app');
    appDiv.innerHTML='<input id="kill-name"/><button id="add">Kill this person</button>';
  }

  return{render:render};
});
