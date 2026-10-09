const $ = s => document.querySelector(s);
const stage = $('#stage'), panel = $('#panel'), body = $('#p-body');
const soon = {s:'Sắp có'}, doing = {s:'Đang triển khai'};
const L = (t,href,s) => ({t,href,s});

const DATA = {
  hoc:{title:'Học tập', sub:'Tin học 3, 4, 5 theo sách Kết nối tri thức với cuộc sống.', origin:[0,40], groups:[
    {h:'Củng cố kiến thức', r:[L('Vào khu Học tập','hoc-tap/')]},
    {h:'Tin học 3', r:[L('Bài học','index-cu.html'),L('Ôn tập học kỳ I','ontapkhoi3hk1.html')]},
    {h:'Tin học 4', r:[L('Bài học','index-cu.html'),L('Ôn tập học kỳ I',null,'Sắp có')]},
    {h:'Tin học 5', r:[L('Bài học',null,'Sắp có'),L('Ôn tập học kỳ I','ontapkhoi5hk1.html')]},
    {h:'Chưa biết chọn khối nào?', r:[L('Trang chọn khối ôn tập','chon-khoi.html')]}
  ]},
  icdl:{title:'ICDL', sub:'Tin học Quốc tế: ôn luyện tại nhà, mọi lúc mọi nơi.', origin:[10,40], groups:[
    {h:'Khối 3 — First Step', r:[L('Luyện tập',null,'Sắp có')]},
    {h:'Khối 4 — Application Basic', r:[L('Luyện tập',null,'Sắp có')]},
    {h:'Khối 5 — Online Basic', r:[L('Luyện tập',null,'Sắp có')]}
  ]},
  kham:{title:'Khám phá', sub:'Lập trình, AI và công nghệ: học để làm chủ, dùng an toàn.', origin:[25,40], groups:[
    {h:'Lập trình', r:[L('Scratch',null,'Đang triển khai'),L('Python',null,'Sắp có')]},
    {h:'AI & Công nghệ', r:[L('AI trong học tập',null,'Sắp có'),L('AI & sáng tạo',null,'Sắp có'),L('An toàn số',null,'Sắp có'),L('Công nghệ mới',null,'Sắp có')]}
  ]},
  menu:{title:'Menu', sub:'', menu:true},
  project:{title:'Dự án', sub:'Sản phẩm của học sinh sẽ được trưng bày tại đây.', groups:[{h:'Chưa có dự án', r:[L('Dự án đầu tiên',null,'Sắp có')]}]},
  news:{title:'Thông báo', sub:'Chưa có thông báo mới.', groups:[]},
  contact:{title:'Liên hệ', sub:'Đ-LAB — Được xây từ những lớp học thật.', contact:true}
};

function render(k){
  const d = DATA[k]; let h = `<h2 id="p-title">${d.title}</h2>${d.sub?`<p class="sub">${d.sub}</p>`:''}`;
  if(d.menu) h += `<div class="menu-list"><button data-open="project">Dự án</button><button data-open="news">Thông báo</button><button data-open="contact">Liên hệ</button></div>`;
  if(d.contact) h += `<img class="pic" src="assets/img/thay-dinh-lop-hoc.jpg" alt="Thầy Định đang giảng bài Tin học trong phòng máy" loading="lazy">
    <p class="sub" style="margin-bottom:6px">Thầy Hàn Thuận Định — Giáo viên Tin học</p>
    <a class="big" href="tel:0776228879">0776 228 879</a><p class="sub" style="margin:0 0 6px">Điện thoại / Zalo</p>
    <a class="big" href="mailto:hanthuandinh@gmail.com">hanthuandinh@gmail.com</a>`;
  (d.groups||[]).forEach(g=>{
    h += `<div class="group"><h3>${g.h}</h3><div class="row">` + g.r.map(i =>
      i.href ? `<a class="item" href="${i.href}">${i.t}</a>`
             : `<span class="item off">${i.t} <span class="tag ${i.s==='Đang triển khai'?'go':''}">${i.s}</span></span>`).join('') + `</div></div>`;
  });
  body.innerHTML = h;
}

let last = null;
const wide = () => matchMedia('(min-width:761px)').matches;
function open(k, from){
  const d = DATA[k]; last = from || document.activeElement;
  render(k);
  document.querySelectorAll('.hot').forEach(x=>x.classList.remove('on'));
  if(d.origin && wide() && !matchMedia('(prefers-reduced-motion:reduce)').matches){
    stage.style.transformOrigin = d.origin[0]+'% '+d.origin[1]+'%';
    stage.style.setProperty('--z','1.06');
  }
  const hot = {hoc:'#h-hoc',icdl:'#h-icdl',kham:'#h-kham'}[k]; if(hot) $(hot).classList.add('on');
  panel.classList.add('open'); panel.setAttribute('aria-hidden','false');
  $('#close').focus();
}
function close(){
  panel.classList.remove('open'); panel.setAttribute('aria-hidden','true');
  stage.style.setProperty('--z','1');
  document.querySelectorAll('.hot').forEach(x=>x.classList.remove('on'));
  last && last.focus && last.focus();
}
document.addEventListener('click', e=>{
  const b = e.target.closest('[data-open]');
  if(b){ open(b.dataset.open, b.closest('.panel') ? last : b); return; }
  if(e.target.closest('#close')) close();
  else if(panel.classList.contains('open') && !e.target.closest('.panel,.top,.gates')) close();
});
document.addEventListener('keydown', e=>{ if(e.key==='Escape' && panel.classList.contains('open')) close(); });

// Phones: start the scroll on the centre of the artwork
addEventListener('load', ()=>{ if(!wide()){ const v=$('#viewport'); v.scrollLeft=(v.scrollWidth-v.clientWidth)/2; } });
