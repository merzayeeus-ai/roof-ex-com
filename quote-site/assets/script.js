document.addEventListener('DOMContentLoaded',function(){
  var form=document.getElementById('quote-form');
  if(!form)return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var data=new FormData(form);
    var params=new URLSearchParams();
    data.forEach(function(v,k){if(v)params.append(k,v)});
    window.location.href='https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=google_ads&'+params.toString();
  });
});