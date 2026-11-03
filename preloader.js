(function(){
  var pl=document.getElementById('preloader');
  if(!pl)return;
  document.body.classList.add('pl-lock');
  var start=Date.now(),MIN=600,hidden=false;
  function hide(){
    if(hidden)return;hidden=true;
    var wait=Math.max(0,MIN-(Date.now()-start));
    setTimeout(function(){
      pl.classList.add('done');
      document.body.classList.remove('pl-lock');
      setTimeout(function(){if(pl.parentNode)pl.parentNode.removeChild(pl)},700);
    },wait);
  }
  if(document.readyState==='complete')hide();
  else window.addEventListener('load',hide);
  setTimeout(hide,5000); // safety net: never block the page
  window.addEventListener('pageshow',function(e){if(e.persisted)hide()});
})();
