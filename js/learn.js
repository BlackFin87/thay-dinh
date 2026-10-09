(function(){
  var q=new URLSearchParams(location.search), k=q.get('k')||'3', b=+q.get('b')||0, root='../';
  var K=(window.DLAB&&window.DLAB.khoi||{})[k], $=function(s){return document.querySelector(s)};
  var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
  var out=$('#out'), ttl=$('#ttl'), lead=$('#lead');
  if(!K){ttl.textContent='Không tìm thấy khối học';out.innerHTML='<p class="empty">Em hãy quay lại <a href="index.html">trang Học tập</a> và chọn lại nhé.</p>';return;}
  var all=[];K.chude.forEach(function(c){c.bai.forEach(function(x){all.push({c:c.ten,x:x})})});
  var dir=k, cr='<p class="crumb"><a href="index.html">Học tập</a>'+(b?' › <a href="khoi.html?k='+esc(k)+'">'+esc(K.ten)+'</a>':'')+'</p>';
  $('#crumb').innerHTML=cr;
  if(!b){ /* danh sách bài của một khối */
    document.title=K.ten+' | Đ-LAB'; ttl.textContent=K.ten; lead.textContent='Củng cố kiến thức từng bài. Sách '+K.sach+'.';
    if(!K.chude.length){out.innerHTML='<p class="empty">Khối này đang được xây dựng. Em quay lại sau nhé!</p>';return;}
    var n=all.filter(function(a){return a.x.trangthai==='san-sang'}).length;
    out.innerHTML='<p class="progress">'+n+'/'+all.length+' bài đã sẵn sàng</p>'+K.chude.map(function(c){
      return '<section class="topic"><h2>'+esc(c.ten)+'</h2><ul class="lessons">'+c.bai.map(function(x){
        var on=x.trangthai==='san-sang', inner='<span class="no">'+x.so+'</span><span class="t">'+esc(x.ten)+'</span>'+(on?'':'<span class="tag">Sắp có</span>');
        return '<li>'+(on?'<a class="lesson" href="bai.html?k='+esc(k)+'&b='+x.so+'">'+inner+'</a>':'<div class="lesson off">'+inner+'</div>')+'</li>';
      }).join('')+'</ul></section>';}).join('');
    return;
  }
  var i=all.findIndex(function(a){return a.x.so===b}); if(i<0){ttl.textContent='Không tìm thấy bài';out.innerHTML='<p class="empty"><a href="khoi.html?k='+esc(k)+'">Về danh sách bài</a></p>';return;}
  var x=all[i].x; document.title='Bài '+x.so+'. '+x.ten+' | Đ-LAB'; ttl.textContent='Bài '+x.so+'. '+x.ten; lead.textContent=all[i].c;
  var h='';
  if(x.trangthai!=='san-sang'){h='<p class="empty">Bài này đang được chuẩn bị. Em quay lại sau nhé!</p>';}
  else{
    if(x.tomtat.length)h+='<section class="sec"><h2>Cần nhớ</h2><ol class="recall">'+x.tomtat.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ol></section>';
    if(x.video)h+='<section class="sec"><h2>Xem nhanh</h2><div class="embed"><iframe src="https://www.youtube-nocookie.com/embed/'+esc(x.video)+'" title="Video bài '+x.so+'" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div></section>';
    if(x.anh.length)h+='<section class="sec"><h2>Hình ảnh</h2><div class="gal">'+x.anh.map(function(a){return '<img src="'+root+'assets/bai/khoi'+esc(k)+'/'+esc(a)+'" alt="Hình minh hoạ bài '+x.so+'" loading="lazy">'}).join('')+'</div></section>';
    if(x.app)h+='<section class="sec"><h2>Thực hành</h2><div class="embed app"><iframe src="'+root+esc(x.app)+'" title="Ứng dụng bài '+x.so+'" sandbox="allow-scripts allow-forms allow-pointer-lock" loading="lazy"></iframe></div></section>';
  }
  var p=all[i-1], nx=all[i+1], link=function(a,t){return a&&a.x.trangthai==='san-sang'?'<a class="btn" href="bai.html?k='+esc(k)+'&b='+a.x.so+'">'+t+'</a>':'<span></span>'};
  out.innerHTML=h+'<div class="pn">'+link(p,'← Bài trước')+'<a class="btn" href="khoi.html?k='+esc(k)+'">Danh sách bài</a>'+link(nx,'Bài sau →')+'</div>';
})();
