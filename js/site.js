/* Injects the shared header/footer. Each page sets <body data-root="../" data-page="hoc-tap"> */
(function(){
  var b=document.body, root=b.dataset.root||'', cur=b.dataset.page||'';
  var nav=[['','Trang chủ','home'],['hoc-tap/','Học tập','hoc-tap'],['icdl/','ICDL','icdl'],['lap-trinh/','Lập trình','lap-trinh'],['ai-cong-nghe/','AI & Công nghệ','ai-cong-nghe']];
  var h='<header class="site-header"><div class="wrap"><a class="logo" href="'+root+'" aria-label="Đ-LAB — Trang chủ"><img src="'+root+'assets/img/dlab-wordmark.png" alt="Đ-LAB" height="38"></a><nav class="site-nav" aria-label="Điều hướng chính">'+
    nav.map(function(n){return '<a href="'+root+n[0]+'"'+(n[2]===cur?' aria-current="page"':'')+'>'+n[1]+'</a>'}).join('')+'</nav></div></header>';
  var f='<footer class="site-footer"><div class="wrap">© Thầy Hàn Thuận Định — Giáo viên Tin học · Đ-LAB: Nơi ý tưởng được tạo nên</div></footer>';
  b.insertAdjacentHTML('afterbegin',h); b.insertAdjacentHTML('beforeend',f);
})();
