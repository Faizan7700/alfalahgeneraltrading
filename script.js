
const menu=document.querySelector('.menu');
const nav=document.querySelector('.navlinks');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false');});
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('enquiryForm')?.addEventListener('submit',function(e){
  e.preventDefault();
  const f=new FormData(this);
  const subject=encodeURIComponent('Business Enquiry - '+(f.get('company')||f.get('name')));
  const body=encodeURIComponent(`Full Name: ${f.get('name')}
Company: ${f.get('company')}
Email: ${f.get('email')}
Phone: ${f.get('phone')}

Requirement:
${f.get('message')}`);
  window.location.href=`mailto:info@alfalahgeneraltrading.com?subject=${subject}&body=${body}`;
});
