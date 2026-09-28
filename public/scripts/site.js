(function(){
  var TITLES={home:'Home',platform:'Platform',fms:'Freight Management System',tms:'Cario Fleet (TMS)',
    analytics:'Analytics & Reconciliation',integrations:'Integrations',architecture:'Architecture',
    ai:'AI capability',thesis:'The AI Freight Paper',insights:'Insights',customers:'Customers',
    numbers:'The numbers',governance:'Trust & governance',about:'About',faq:'Questions',
    contact:'Contact',privacy:'Privacy Policy'};
  var ACC={platform:'#0b95ff',fms:'#0b95ff',tms:'#22d3d8',analytics:'#01109c',integrations:'#0b95ff',
    architecture:'#22d3d8',ai:'#fd780c',thesis:'#01109c',insights:'#f2385a',customers:'#f2385a',
    numbers:'#f2385a',governance:'#01109c',about:'#0b95ff',faq:'#0b95ff',contact:'#fd780c',
    privacy:'#01109c',home:'#0b95ff'};
  var TABOF={platform:'platform',fms:'platform',tms:'platform',analytics:'platform',integrations:'platform',
    architecture:'platform',ai:'platform',thesis:'resources',insights:'resources',governance:'resources',
    numbers:'resources',faq:'about',about:'about',contact:'about',privacy:'about',customers:'customers'};
  var NEXT={platform:['fms','tms','analytics'],fms:['tms','integrations','analytics'],
    tms:['fms','architecture','customers'],analytics:['ai','architecture','customers'],
    integrations:['architecture','platform','fms'],architecture:['ai','integrations','governance'],
    ai:['governance','thesis','analytics'],thesis:['ai','insights','governance'],
    insights:['thesis','customers','faq'],customers:['numbers','faq','contact'],
    numbers:['customers','contact','faq'],governance:['ai','faq','about'],
    about:['customers','governance','contact'],faq:['contact','platform','about'],
    contact:['platform','customers','faq'],privacy:['about','governance','contact']};
  var secs=[].slice.call(document.querySelectorAll('section[data-pg]'));
  var idmap={};
  secs.forEach(function(s){idmap[s.id]=s.getAttribute('data-pg')});
  [].slice.call(document.querySelectorAll('[id]')).forEach(function(el){
    var p=el.closest?el.closest('section[data-pg]'):null;
    if(p&&!idmap[el.id])idmap[el.id]=p.getAttribute('data-pg');
  });
  var bar=document.getElementById('pgbar'),crumb=document.getElementById('crumbnow'),
      nextbox=document.getElementById('pgnext'),mob=document.getElementById('mob');
  function anchorFor(pg){for(var k in idmap){if(idmap[k]===pg)return k}return 'home'}
  function go(hash,push){
    var id=(hash||'').replace('#','');
    var pg=idmap[id]||'home';
    secs.forEach(function(s){s.classList.toggle('on',s.getAttribute('data-pg')===pg)});
    if(pg==='home'){bar.classList.remove('on')}
    else{
      bar.classList.add('on');
      bar.style.setProperty('--pgacc',ACC[pg]||'#0b95ff');
      crumb.textContent=TITLES[pg]||'';
      nextbox.innerHTML=(NEXT[pg]||[]).map(function(p){
        return '<a href="#'+anchorFor(p)+'">'+(TITLES[p]||p)+' &rarr;</a>'}).join('');
    }
    document.querySelectorAll('.nvt').forEach(function(a){
      a.classList.toggle('active',a.getAttribute('data-tab')===TABOF[pg])});
    if(mob)mob.classList.remove('on');
    var el=document.getElementById(id);
    var sec=secs.filter(function(s){return s.getAttribute('data-pg')===pg})[0];
    if(el&&sec&&el!==sec){setTimeout(function(){
      window.scrollTo(0,el.getBoundingClientRect().top+window.scrollY-100)},10)}
    else{window.scrollTo(0,0)}
    if(push&&location.hash!=='#'+id)history.pushState(null,'',id?'#'+id:'#home');
    document.title=(pg==='home'?'Cario | Freight Management System (FMS) & Transport Management System (TMS)'
      :(TITLES[pg]||'')+' | Cario');
  }
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href^="#"]');
    if(!a)return;
    var h=a.getAttribute('href');
    if(h==='#'||h==='#top')return;
    if(idmap[h.replace('#','')]!==undefined){e.preventDefault();go(h,true)}
  });
  window.addEventListener('popstate',function(){go(location.hash,false)});
  go(location.hash||'#home',false);
  var b=document.getElementById('burger');
  if(b)b.addEventListener('click',function(){mob.classList.toggle('on')});
})();

(function(){
  var rates=[['Carrier A','EXPRESS \u00B7 1 DAY','184.20',''],['Carrier B','ROAD \u00B7 2 DAY','142.65','LEAST COST'],
    ['Own Fleet','RUN 22 \u00B7 2 DAY','118.40','SELECTED'],['Carrier C','ROAD \u00B7 3 DAY','151.10','']];
  var box=document.getElementById('rates'); if(!box)return;
  rates.forEach(function(r,i){
    var d=document.createElement('div');
    d.className='rate'+(i===2?' pick':'');
    d.innerHTML='<div><div class="cn">'+r[0]+'</div><div class="sv">'+r[1]+'</div></div>'+
      '<div class="pr">'+r[2]+(r[3]?'<small>'+r[3]+'</small>':'')+'</div>';
    box.appendChild(d);
  });
})();

(function(){
  var items=['<b>SAP</b> \u00B7 S/4HANA &amp; Business One','<b>Dynamics 365</b> \u00B7 BC &amp; F&amp;O','<b>NetSuite</b> \u00B7 <b>Pronto</b> \u00B7 <b>Infor</b>',
  'Your <b>WMS</b> &amp; <b>3PL</b> systems','<b>Shopify</b> \u00B7 <b>Woo</b> \u00B7 <b>Magento</b>','Open <b>API</b> for everything else',
  '<b>1,000+</b> organizations','<b>500+</b> carriers connected','<b>Your own fleet</b>, natively','Built on <b>Microsoft Azure</b>'];
  var tk=document.getElementById('tk'); if(!tk)return;
  var html=items.map(function(i){return '<span>'+i+'</span>'}).join('');
  tk.innerHTML=html+html;
})();
