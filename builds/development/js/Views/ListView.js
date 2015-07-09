define(function(){

  function render(parameters){
    var appDiv=document.getElementById('app');

    var kills=parameters.kills;

    var html='<ul>';
    for(var i=0,len=kills.length;i<len;i++){
      html+='<li>'+kills[i].name+'</li>';
    }
    html+='</ul>';

    appDiv.innerHTML=html;

  }

  return{render:render};

});
