(() => {
if (customElements.get('runway-section')) return;
const A = 'https://reel-ref-try-the-look.vercel.app/assets/';
const SHOP = 'https://nike-makknzjs.myshopify.com';
const SID = 'template--28035983671601__the_runway_wdM8BG';
const SH = ['40','41','42','43','44','45','46'], AP = ['S','L','M','XL'];
const P = {
  'tatum-5-orbit-copy': {n:'Air Jordan 12 Retro', v:'Nikey | Password: 1', p:149, img:'source-tatum-5-orbit-copy.webp', h:400, mh:160, leg:'Shoe size', vals:SH, ids:[57015167025457,57015167058225,57015167090993,57015167123761,57015167156529,57015167189297,57015167222065]},
  'tshirt': {n:'Tshirt', v:'Nike', p:199, img:'source-tshirt.webp', h:563, mh:225, leg:'Size', vals:AP, ids:[56835911582001,56835911614769,56835911647537,56835911680305]},
  'sweatshirt': {n:'Sweatshirt', v:'Nike', p:199, img:'source-sweatshirt.webp', h:581, mh:232, leg:'Size', vals:AP, ids:[56835806396721,56835806429489,56835806462257,56835806495025]},
  'tatum-5-orbit': {n:'Tatum 5 Orbit', v:'Nikey | Password: 1', p:149, img:'source-tatum-5-orbit.webp', h:400, mh:160, leg:'Shoe size', vals:SH, ids:[57015166730545,57015166763313,57015166796081,57015166828849,57015166861617,57015166894385,57015166927153]},
  'hoodie-black': {n:'Hoodie Black', v:'Nike', p:199, img:'source-hoodie-black.webp', h:536, mh:214, leg:'Size', vals:AP, ids:[56836251681073,56836251713841,56836251746609,56836251779377]},
  'sweatshirt-plus': {n:'Sweatshirt Plus', v:'Nike', p:199, img:'source-sweatshirt-plus.webp', h:610, mh:244, leg:'Size', vals:AP, ids:[56836143743281,56836143776049,56836143808817,56836143841585]},
  'hoodie': {n:'Hoodie', v:'Nike', p:199, img:'source-hoodie.webp', h:555, mh:222, leg:'Size', vals:AP, ids:[56836002185521,56836002218289,56836002251057,56836002283825]},
  'wide-leg-denim': {n:'Wide Leg Denim', v:'Nike · Placeholder', p:129, img:null, h:500, mh:200, leg:'Waist', vals:['28','30','32','34','36'], ids:[90000000000028,90000000000030,90000000000032,90000000000034,90000000000036], url:SHOP+'/collections/all'},
  'air-jordan-12-retro-copy': {n:'Luka 5', v:'Nikey | Password: 1', p:149, img:'source-air-jordan-12-retro-copy.webp', h:400, mh:160, leg:'Shoe size', vals:SH, ids:[57015176364337,57015176397105,57015176429873,57015176462641,57015176495409,57015176528177,57015176560945]}
};
const PINS = [[50,28],[48,58],[45,88]];
const PANTS = 'wide-leg-denim', PANTS_PIN = [50,74];
const L = [
  {n:'The City Edit', m:1, k:'bndthK', d:'A charcoal knit and easy denim.', p:['tatum-5-orbit-copy','tshirt','sweatshirt'], pins:[[47,27],[48,58],[45,96]]},
  {n:'Gallery Opening', m:5, k:'XckgG6', d:'A clean white tee and relaxed denim.', p:['tatum-5-orbit','hoodie-black','tshirt'], tag:2},
  {n:'Gallery Opening', m:4, k:'rLfAhC', d:'Olive knitwear. A grounded palette.', p:['sweatshirt-plus','tatum-5-orbit','tshirt'], tag:2},
  {n:'Studio Day', m:6, k:'FKg67q', d:'Black, white and laid-back denim.', p:['hoodie-black','tatum-5-orbit-copy','tshirt']},
  {n:'Studio Day', m:3, k:'8KREEE', d:'Burgundy layers. A tailored perspective.', p:['sweatshirt','tatum-5-orbit','tshirt']},
  {n:'Studio Day', m:2, k:'N3bfm9', d:'A grey crew and your favourite denim.', p:['hoodie','air-jordan-12-retro-copy','tshirt']}
];
L.forEach(l=>{ l.p.push(PANTS); l.pins=(l.pins||PINS).concat([PANTS_PIN]); });
const purl = id => P[id].url || SHOP+'/products/'+id;
const CATALOG = {
  source: SHOP + '/pages/runway',
  looks: L.map(l => ({name:l.n, description:l.d, image:A+'original-look-'+l.m+'.webp', products:l.p.slice()})),
  items: Object.keys(P).map(id => ({id, name:P[id].n, type:'From the original lookbook', price:P[id].p, image:P[id].img?A+P[id].img:'', sizes:P[id].vals.slice(), variants:P[id].ids.map((v,i)=>({id:v,a:true,o:[P[id].vals[i]]})), url:purl(id)}))
};
const fmt = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'});
const money = n => fmt.format(n);
const pad = n => String(n).padStart(2,'0');
const clamp = (v,a,b) => Math.min(b, Math.max(a, v));
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

const SVG = {
  prev:'<svg width="26" height="14" viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M25 7H1M7 1L1 7l6 6"/></svg>',
  next:'<svg width="26" height="14" viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 7h24M19 1l6 6-6 6"/></svg>',
  play:'<svg class="rw__i-play" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z"/></svg>',
  pause:'<svg class="rw__i-pause" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 4.5h3.5v15H6.5zM14 4.5h3.5v15H14z"/></svg>',
  plus:'<svg class="rw__add-plus" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true"><path d="M12 4v16M4 12h16"/></svg>',
  check:'<svg class="rw__add-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 12.5l5 5L19.5 7"/></svg>',
  spin:'<svg class="rw__add-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M12 3a9 9 0 1 1-9 9"/></svg>',
  x:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>',
  ctaArrow:'<svg class="rw__cta-arrow" width="22" height="12" viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 7h24M19 1l6 6-6 6"/></svg>',
  ctaSpin:'<svg class="rw__cta-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12 3a9 9 0 1 1-9 9"/></svg>'
};
const TOKENS = '--rw-c-stage:#ffffff;--rw-c-panel:#ffffff;--rw-c-text:#151413;--rw-c-muted:#66625c;--rw-c-accent:#0e0e0e;--rw-c-on-accent:#ffffff;--rw-c-line:#c8c8c8;--rw-card:#DFDFDF;--rw-hf:var(--font-heading--family, inherit);--rw-hw:400;--rw-h-d:46px;--rw-h-m:24px;--rw-sub-d:12px;--rw-sub-m:12px;--rw-eyebrow-d:11px;--rw-eyebrow-m:10px;--rw-label-d:10px;--rw-label-m:9px;--rw-chip-d:17px;--rw-chip-m:18px;--rw-ph-d:18px;--rw-ph-m:16px;--rw-pt-size-d:13px;--rw-pt-size-m:12px;--rw-price-d:12px;--rw-price-m:12px;--rw-opt-d:11px;--rw-opt-m:11px;--rw-total-d:16px;--rw-total-m:16px;--rw-thumb-d:92px;--rw-thumb-m:62px;--rw-tag-top:18px;--rw-tag-left:0px;--rw-thumb-radius:0px;--rw-morph:900ms;--rw-bar-r:20px;--rw-panel-w:380px;--rw-panel-pad-d:32px;--rw-radius:0px;--rw-max:none;--rw-speed:5s;--rw-ax:40%;--rw-btn-radius:0px;--rw-pill-radius:30px;--rw-add-radius:20px';
const ATTRS = {'data-feel':'balanced','data-blur':'true','data-mblur':'true','data-style':'ring','data-mstyle':'ring','data-fit':'true','data-height-mode':'original','data-height-vh':'100','data-mheight-mode':'custom','data-mheight-vh':'109','data-reflect':'false','data-autoplay':'true','data-speed':'5000','data-after-add':'stay','data-bundle-code':'','data-msg-choose':'Pick a size for: [items]','data-msg-error':'Couldn’t add to bag. Please try again.','data-msg-soldout':'Sold out'};

function modelImg(l, lazy){
  const s = A+'model-'+l.m+'-640.webp';
  return `<img src="${s}" srcset="${s} 640w, ${A}original-look-${l.m}.webp 1080w" sizes="(min-width: 1800px) 540px, (min-width: 750px) 420px, 320px" loading="${lazy?'lazy':'eager'}" decoding="async" width="1100" height="1956" draggable="false" data-model-image alt="${l.n}">`;
}
function build(){
  const body = L.map((l,i)=>`<div class="rw__model" data-rw-model data-index="${i}" aria-hidden="true"><span class="rw__shadow"></span><div class="rw__figure" style="--rw-ar:0.5625"><div class="rw__art">${modelImg(l)}<button class="rw__hit" data-rw-go="${i}" aria-label="Look ${i+1}: ${l.n}" tabindex="-1"></button></div></div></div>`).join('');
  const heroes = L.map((l,i)=>{
    const pins = l.pins.map((pt,j)=>{const nm=P[l.p[j]].n;return `<button class="rw__pin" data-rw-pin="${j+1}" data-tip="${nm}" style="left:${pt[0]}%;top:${pt[1]}%;--pi:${j+1}" aria-label="${j+1}: ${nm}" tabindex="-1"><span class="rw__pin-dot">${j+1}</span></button>`;}).join('');
    return `<div class="rw__hero${i===0?' is-on':''}" data-rw-hero data-index="${i}" data-name="${l.n}" data-label="Look ${i+1}: ${l.n}" data-probe="${A}model-${l.m}-640.webp"${i?' aria-hidden="true"':''}><div class="rw__morph"><span class="rw__shadow"></span><div class="rw__figure" style="--rw-ar:0.5625"><div class="rw__art">${modelImg(l)}<button class="rw__zoom" data-rw-zoom aria-label="View look: ${l.n}" tabindex="-1"></button><div class="rw__pins">${pins}</div></div></div></div></div>`;
  }).join('');
  const ticks = L.map((l,i)=>`<button class="rw__tick" data-rw-tick="${i}" aria-current="${i===0}" aria-label="Look ${i+1}: ${l.n}"><span class="rw__tick-bar"></span><span class="rw__tick-label">${pad(i+1)}<span class="rw__tick-name">&nbsp;&nbsp;${l.n}</span></span></button>`).join('');
  const panels = L.map((l,i)=>{
    const items = l.p.map((id,j)=>{
      const pr=P[id], n=j+1, pid=`Picker-${SID}-look_${l.k}-${n}`, oname=`Opt-${SID}-look_${l.k}-${n}-1`, url=purl(id);
      const thumb = pr.img ? `<img src="${A+pr.img}" width="400" height="${pr.h}" loading="lazy" decoding="async" alt="">` : '<span class="rw__ph">Pants</span>';
      const sthumb = pr.img ? `<img src="${A+pr.img}" width="160" height="${pr.mh}" loading="lazy" decoding="async" alt="">` : '<span class="rw__ph rw__ph--s">Pants</span>';
      const pills = pr.vals.map((v,x)=>`<label class="rw__pill"><input type="radio" name="${oname}" value="${v}" data-rw-option="0"${x===0?' checked':''}><span class="rw__pill-label">${v}</span></label>`).join('');
      const vars = JSON.stringify(pr.ids.map((v,x)=>({id:v,a:true,o:[pr.vals[x]]})));
      return `<li class="rw__item" data-rw-card="${n}" style="--i:${n}" data-title="${pr.n}">${l.tag===n?'<span class="rw__tag"><span class="rw__tag-text">New</span></span>':''}<a class="rw__media" href="${url}" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">${thumb}<span class="rw__num">${n}</span></a><div class="rw__info"><span class="rw__type">${pr.v}</span><a class="rw__name" href="${url}" target="_blank" rel="noopener noreferrer">${pr.n}</a><span class="rw__price"><span>${money(pr.p)}</span></span></div><button class="rw__add" data-rw-add aria-expanded="false" aria-controls="${pid}" aria-label="Add to bag: ${pr.n}" data-added-label="Added to bag: ${pr.n}">${SVG.plus}${SVG.check}${SVG.spin}</button><div class="rw__picker" id="${pid}" data-rw-picker hidden><div class="rw__picker-head">${sthumb}<div class="rw__picker-meta"><span class="rw__picker-title">${pr.n}</span><span class="rw__picker-price">${money(pr.p)}</span></div><button class="rw__pick-close" data-rw-pick-close aria-label="Close">${SVG.x}</button></div><fieldset class="rw__opt"><legend class="rw__opt-name">${pr.leg}</legend><div class="rw__opt-values">${pills}</div></fieldset><button class="rw__confirm" data-rw-confirm><span data-rw-confirm-label data-add="Add to bag">Add to bag</span><span class="rw__sr"> — ${pr.n}</span></button><script type="application/json" data-rw-variants>${vars}</script></div></li>`;
    }).join('');
    const cnt=l.p.length, tot=l.p.reduce((s,id)=>s+P[id].p,0), bun=money(Math.round(tot*90)/100);
    return `<div class="rw__look-panel${i===0?' is-in':''}" data-rw-panel="${i}"${i?' hidden':''}><div class="rw__mhead"><span class="rw__mhead-title">${l.n}</span><span class="rw__label">${cnt} pieces</span></div><ul class="rw__items" role="list">${items}</ul><div class="rw__bundle has-rule"><p class="rw__msg" data-rw-msg role="status" aria-live="polite"></p><div class="rw__bundle-row"><div class="rw__bundle-copy"><span class="rw__bundle-title">Complete the look</span><span class="rw__bundle-note">Bundle all ${cnt} and save 10%</span></div><div class="rw__bundle-price"><s>${money(tot)}</s><strong>${bun}</strong></div></div><button class="rw__cta" data-rw-all><span class="rw__cta-add">Add full look to bag</span><span class="rw__cta-m">Add full look — ${bun}</span><span class="rw__cta-done">Full look in your bag</span>${SVG.ctaArrow}${SVG.ctaSpin}</button></div><template data-rw-pieces-text>${cnt} pieces</template></div>`;
  }).join('');
  return `<div class="rw__sticky"><div class="rw__grid"><div class="rw__left"><div class="rw__head"><div class="rw__intro"><h2 class="rw__title">Try the Look.</h2><p class="rw__sub">Six looks, styled head to toe. Tap a pin to see the piece.</p></div><span class="rw__sr" aria-live="polite" aria-atomic="true" data-rw-live></span></div><div class="rw__stage" data-rw-stage tabindex="0" role="region" aria-roledescription="carousel" aria-label="Try the Look. — use arrow keys or swipe to change look"><div class="rw__actors" data-rw-actors>${body}</div><div class="rw__heroes" data-rw-heroes>${heroes}</div><span class="rw__sweep"></span><span class="rw__cursor" data-rw-cursor><span class="rw__cursor-in"><span class="rw__cursor-label rw__cursor-drag">Drag</span><span class="rw__cursor-label rw__cursor-view">View</span></span></span><span class="rw__walk"><span class="rw__walk-line"></span></span></div><div class="rw__controls"><button class="rw__icon" data-rw-prev aria-label="Previous look">${SVG.prev}</button><div class="rw__ticks">${ticks}</div><button class="rw__icon rw__auto" data-rw-auto aria-pressed="false" aria-label="Autoplay">${SVG.play}${SVG.pause}</button><button class="rw__icon" data-rw-next aria-label="Next look">${SVG.next}</button></div><div class="rw__lb" data-rw-lb data-word="Look" role="region" aria-label="View look" aria-hidden="true"><div class="rw__lb-stage" data-rw-lb-stage></div><div class="rw__lb-top"><p class="rw__lb-cap"><span class="rw__lb-kicker" data-rw-lb-kicker></span><span class="rw__lb-name" data-rw-lb-name></span></p><button class="rw__lb-close" data-rw-zoom-close aria-label="Close">${SVG.x}</button></div><p class="rw__lb-hint">Tap a dot to shop the piece</p></div></div><aside class="rw__panel has-rule"><div class="rw__panel-inner"><div class="rw__panel-head"><h3 class="rw__panel-title">In this look</h3><span class="rw__label" data-rw-pieces>${L[0].p.length} pieces</span></div>${panels}</div></aside></div></div>`;
}

/* ---------- styling bag ---------- */
const Bag = {
  KEY:'runway-styling-bag-v3', entries:[], bound:false, cat:null, idx:null, toastT:0,
  load(){
    try{ const raw=JSON.parse(localStorage.getItem(this.KEY)||'[]');
      this.entries = Array.isArray(raw) ? raw.filter(e=>e&&Number.isSafeInteger(e.id)&&Number.isSafeInteger(e.quantity)&&e.quantity>=1&&e.quantity<=20).slice(0,50).map(e=>({id:e.id,quantity:e.quantity})) : [];
    }catch(e){ this.entries=[]; }
  },
  save(){ try{ localStorage.setItem(this.KEY, JSON.stringify(this.entries)); }catch(e){} },
  async catalog(){
    if(this.cat) return this.cat;
    let c; try{ c = JSON.parse(JSON.stringify(CATALOG)); }catch(e){ throw new Error('The product list could not load.'); }
    const ok = c && Array.isArray(c.items) && c.items.every(it=>typeof it.id==='string'&&typeof it.name==='string'&&Number.isFinite(it.price)&&it.price>=0&&Array.isArray(it.variants)&&it.variants.every(v=>Number.isSafeInteger(v.id)&&typeof v.a==='boolean'&&Array.isArray(v.o)&&v.o.every(s=>typeof s==='string')));
    if(!ok) throw new Error('The product list is unavailable.');
    this.idx = new Map(); c.items.forEach(it=>it.variants.forEach(v=>this.idx.set(v.id,{item:it,variant:v})));
    return this.cat = c;
  },
  async add(items){
    await this.catalog();
    for(const it of items){ const m=this.idx.get(it.id); if(!m||!m.variant.a) throw new Error('Please choose an available size.'); }
    for(const it of items){ const e=this.entries.find(x=>x.id===it.id); if(e) e.quantity=Math.min(20,e.quantity+1); else this.entries.push({id:it.id,quantity:1}); }
    this.entries=this.entries.slice(0,50); this.save(); this.render();
    this.toast(items.length>1?'Look saved to your styling bag':'Piece saved to your styling bag');
  },
  toast(t){ const el=document.getElementById('bag-status'); if(!el) return; el.textContent=t; el.classList.add('is-on'); clearTimeout(this.toastT); this.toastT=setTimeout(()=>el.classList.remove('is-on'),2500); },
  async render(){
    const total=this.entries.reduce((s,e)=>s+e.quantity,0);
    document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=total);
    const list=document.getElementById('bag-items'); if(!list) return;
    let sum=0; list.replaceChildren();
    if(!this.entries.length){ const p=document.createElement('p'); p.className='bag-note'; p.textContent='Your styling bag is empty. Choose a size beside a piece to save it.'; list.append(p); }
    else { await this.catalog();
      this.entries.forEach(e=>{ const m=this.idx.get(e.id); if(!m) return; const {item,variant}=m;
        if(new URL(item.url).hostname!=='nike-makknzjs.myshopify.com') throw new Error('Unexpected product link');
        sum+=item.price*e.quantity;
        const row=document.createElement('div'); row.className='bag-row';
        let img; if(item.image){ img=document.createElement('img'); img.src=item.image; img.alt=item.name; } else { img=document.createElement('span'); img.className='bag-ph'; img.textContent='Pants'; }
        const d=document.createElement('div'); const h=document.createElement('h3'); h.textContent=item.name;
        const p=document.createElement('p'); p.textContent=`Size ${variant.o[0]} · Quantity ${e.quantity} · ${money(item.price)}`;
        const a=document.createElement('a'); a.href=item.url; a.target='_blank'; a.rel='noopener noreferrer'; a.textContent='View original piece ↗';
        d.append(h,p,a);
        const b=document.createElement('button'); b.type='button'; b.textContent='×'; b.setAttribute('aria-label','Remove '+item.name);
        b.addEventListener('click',()=>{ this.entries=this.entries.filter(x=>x!==e); this.save(); this.render(); });
        row.append(img,d,b); list.append(row);
      });
    }
    const t=document.getElementById('bag-total'); if(t) t.textContent=this.entries.length?'Reference subtotal '+money(sum):'';
    const ex=document.getElementById('export-bag'); if(ex) ex.disabled=!this.entries.length;
  },
  async exportList(){
    await this.catalog();
    const lines=this.entries.map(e=>{const m=this.idx.get(e.id); return m?`${m.item.name} · Size ${m.variant.o[0]} · Quantity ${e.quantity}\n${m.item.url}`:null;}).filter(Boolean);
    const txt=['RUNWAY — STYLING SHORTLIST','Reference prices; no order or payment has been placed.','',...lines].join('\n\n');
    const url=URL.createObjectURL(new Blob([txt],{type:'text/plain;charset=utf-8'}));
    const a=document.createElement('a'); a.href=url; a.download='runway-outfit-shortlist.txt'; document.body.append(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  },
  bind(tries=0){
    if(this.bound) return;
    const open=document.getElementById('open-bag'), dlg=document.getElementById('bag-dialog');
    if(!open||!dlg){ if(tries<120) requestAnimationFrame(()=>this.bind(tries+1)); return; }
    this.bound=true; this.load(); this.render();
    open.addEventListener('click',async()=>{ await this.render(); if(!dlg.open) dlg.showModal(); });
    document.getElementById('close-bag')?.addEventListener('click',()=>dlg.close());
    document.getElementById('export-bag')?.addEventListener('click',()=>this.exportList());
    dlg.addEventListener('click',e=>{ if(e.target!==dlg) return; const r=dlg.getBoundingClientRect(); if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) dlg.close(); });
  }
};
window.RunwayBag = Bag;

/* ---------- header Shop dropdown ---------- */
const ShopMenu = {
  bound:false,
  bind(tries=0){
    if(this.bound) return;
    const root=document.querySelector('.nav-shop'); if(!root){ if(tries<120) requestAnimationFrame(()=>this.bind(tries+1)); return; }
    this.bound=true;
    const btn=root.querySelector('.nav-shop__btn'), menu=root.querySelector('.nav-shop__menu');
    let t=0;
    const set=on=>{ clearTimeout(t); root.classList.toggle('is-open',on); btn.setAttribute('aria-expanded',String(on)); menu.setAttribute('aria-hidden',String(!on)); };
    btn.addEventListener('click',e=>{ e.stopPropagation(); set(!root.classList.contains('is-open')); });
    if(matchMedia('(hover: hover) and (pointer: fine)').matches){
      root.addEventListener('pointerenter',e=>{ if(e.pointerType==='mouse') set(true); });
      root.addEventListener('pointerleave',e=>{ if(e.pointerType==='mouse'){ clearTimeout(t); t=setTimeout(()=>set(false),160); } });
    }
    document.addEventListener('click',e=>{ if(!root.contains(e.target)) set(false); });
    document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&root.classList.contains('is-open')){ set(false); btn.focus(); } });
    menu.addEventListener('click',e=>{ const a=e.target.closest('a'); if(!a) return; set(false); if(a.dataset.shopCat){ e.preventDefault(); Shop.show(a.dataset.shopCat,a.dataset.shopItem); } });
  }
};

/* ---------- in-page shop (Shirts / Pants / Shoes) ---------- */
const CATS = [
  {k:'shirts', n:'Shirts', ids:['tshirt','sweatshirt','sweatshirt-plus','hoodie','hoodie-black']},
  {k:'pants', n:'Pants', ids:['wide-leg-denim']},
  {k:'shoes', n:'Shoes', ids:['tatum-5-orbit-copy','tatum-5-orbit','air-jordan-12-retro-copy']}
];
const Shop = {
  bound:false, cat:'all',
  bind(tries=0){
    if(this.bound) return;
    const root=document.getElementById('shop'); if(!root){ if(tries<120) requestAnimationFrame(()=>this.bind(tries+1)); return; }
    this.bound=true; this.root=root;
    const total=CATS.reduce((s,c)=>s+c.ids.length,0);
    const tab=(k,n,c)=>`<button class="shop__tab" data-shop-tab="${k}" role="tab" aria-selected="${k==='all'}"><span>${n}</span><span class="shop__tab-n">${pad(c)}</span></button>`;
    const card=(id,k)=>{ const pr=P[id], url=purl(id), nm='shop-opt-'+id;
      const pills=pr.vals.map((v,x)=>`<label class="shop__pill"><input type="radio" name="${nm}" value="${pr.ids[x]}"${x===0?' checked':''}><span>${v}</span></label>`).join('');
      return `<li class="shop__card" id="shop-p-${id}" data-title="${pr.n}"><a class="shop__media" href="${url}" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">${pr.img?`<img src="${A+pr.img}" width="400" height="${pr.h}" loading="lazy" decoding="async" alt="">`:'<span class="rw__ph">Pants</span>'}</a><div class="shop__info"><span class="shop__type">${pr.v}</span><a class="shop__name" href="${url}" target="_blank" rel="noopener noreferrer">${pr.n}</a><span class="shop__price">${money(pr.p)}</span></div><fieldset class="shop__opt"><legend>${pr.leg}</legend><div class="shop__pills">${pills}</div></fieldset><button class="shop__add" data-shop-add><span>Add to bag</span><span class="rw__sr"> — ${pr.n}</span></button></li>`; };
    root.innerHTML=`<div class="shop__head"><div class="shop__intro"><h2 class="shop__title">Shop the pieces.</h2><p class="shop__sub">Every piece from the runway, by category.</p></div><div class="shop__tabs" role="tablist" aria-label="Categories">${tab('all','All',total)}${CATS.map(c=>tab(c.k,c.n,c.ids.length)).join('')}</div></div>${CATS.map(c=>`<div class="shop__cat" id="shop-${c.k}" data-shop-sec="${c.k}"><div class="shop__cat-head"><h3 class="shop__cat-title">${c.n}</h3><span class="shop__count">${c.ids.length} ${c.ids.length===1?'piece':'pieces'}</span></div><ul class="shop__grid" role="list">${c.ids.map(id=>card(id,c.k)).join('')}</ul></div>`).join('')}`;
    root.addEventListener('click',async e=>{
      const t=e.target.closest('[data-shop-tab]'); if(t){ this.filter(t.dataset.shopTab); return; }
      const b=e.target.closest('[data-shop-add]'); if(!b||b.classList.contains('is-loading')) return;
      const c=b.closest('.shop__card'), id=+c.querySelector('input:checked').value;
      b.classList.add('is-loading');
      try{ await Bag.add([{id,quantity:1}]); b.classList.add('is-added'); b.firstElementChild.textContent='Added to bag'; clearTimeout(b._t); b._t=setTimeout(()=>{ b.classList.remove('is-added'); b.firstElementChild.textContent='Add to bag'; },2200); }
      catch(err){ Bag.toast((err&&err.message)||'Couldn’t add to bag. Please try again.'); }
      b.classList.remove('is-loading');
    });
    const m=location.hash.match(/^#shop-(shirts|pants|shoes)$/); if(m) setTimeout(()=>this.show(m[1]),400);
  },
  filter(k){
    this.cat=k;
    this.root.querySelectorAll('[data-shop-tab]').forEach(t=>t.setAttribute('aria-selected',String(t.dataset.shopTab===k)));
    this.root.querySelectorAll('[data-shop-sec]').forEach(s=>{ const on=k==='all'||s.dataset.shopSec===k; s.hidden=!on; if(on){ s.classList.remove('is-in'); void s.offsetWidth; s.classList.add('is-in'); } });
  },
  show(k,item){
    if(!this.root) return; this.filter(k);
    const el=item?document.getElementById('shop-p-'+item):this.root;
    const top=el.getBoundingClientRect().top+scrollY-(item?120:0);
    scrollTo({top,behavior:reduced()?'auto':'smooth'});
    try{ history.replaceState(null,'',k==='all'?'#shop':'#shop-'+k); }catch(e){}
    if(item){ el.classList.remove('is-flash'); void el.offsetWidth; el.classList.add('is-flash'); }
  }
};

/* ---------- section ---------- */
const HOST_VARS = ['--rw-panel','--rw-text','--rw-muted','--rw-line','--rw-accent','--rw-on-accent','--rw-btn-bg','--rw-btn-fg','--rw-btn-radius','--rw-pill-radius','--rw-bar-r','--rw-thumb-radius','--rw-pt-size','--rw-price','--rw-opt','--rw-ease','--rw-ease-sheet','--rw-ease-spring'];

class RunwaySection extends HTMLElement {
  connectedCallback(){
    if(this._on) return; this._on = true;
    if(!this.id) this.id = 'Runway-' + SID;
    this.classList.add('rw','rw--add-icon','rw--popup','rw--list','has-dividers','has-border');
    for(const k in ATTRS) if(!this.hasAttribute(k)) this.setAttribute(k, ATTRS[k]);
    this.style.cssText = TOKENS + ';' + (this.style.cssText||'');
    this.innerHTML = build();
    Bag.bind(); ShopMenu.bind(); Shop.bind();
    this.init();
  }
  disconnectedCallback(){
    this._on = false;
    cancelAnimationFrame(this.raf); cancelAnimationFrame(this.craf); cancelAnimationFrame(this.mRaf); clearTimeout(this.timer); clearTimeout(this.rzT); clearTimeout(this.lbT);
    this.io?.disconnect(); this.io2?.disconnect(); this.ro?.disconnect();
    removeEventListener('resize', this._resize); document.removeEventListener('visibilitychange', this._vis);
    if(this.sheetCard) this.closeSheet(); this.host?.remove(); this.host=null;
    this.innerHTML='';
  }
  $(s,r=this){ return r.querySelector(s); }
  $$(s,r=this){ return [...r.querySelectorAll(s)]; }

  init(){
    this.rm = reduced();
    this.n = L.length; this.N = this.n * Math.ceil(8/this.n);
    this.K = 95; this.C = 2*Math.sqrt(95); this.lag = .04;
    this.speed = +this.dataset.speed || 5000;
    this.blurOn = this.dataset.blur === 'true';
    this.start = this.rm ? 0 : 1.15;
    this.stage = this.$('[data-rw-stage]'); this.actors = this.$('[data-rw-actors]');
    this.heroes = this.$$('[data-rw-hero]'); this.ticks = this.$$('[data-rw-tick]');
    this.panels = this.$$('[data-rw-panel]'); this.live = this.$('[data-rw-live]');
    this.pieces = this.$('[data-rw-pieces]'); this.lb = this.$('[data-rw-lb]'); this.lbStage = this.$('[data-rw-lb-stage]');
    this.panel = this.$('.rw__panel'); this.cursor = this.$('[data-rw-cursor]');
    const orig = this.$$('[data-rw-model]');
    for(let a=this.n; a<this.N; a++){ const c=orig[a%this.n].cloneNode(true); c.setAttribute('data-rw-clone',''); c.querySelectorAll('img').forEach(i=>i.loading='lazy'); this.actors.append(c); }
    this.bodies = this.$$('[data-rw-model]').map((el,a)=>{ el._b=a; return {el,a,look:a%this.n,w:0,blur:-1,x:0,g:0,v:0,goal:0,trip:false,from:0}; });
    this.$$('[data-model-image]').forEach(img=>this.decode(img));
    // panel cards
    this.$$('.rw__item').forEach(card=>{
      const pk=this.$('[data-rw-picker]',card); card._pk=pk; pk._card=card;
      try{ card._vars=JSON.parse(this.$('[data-rw-variants]',pk).textContent); }catch(e){ card._vars=[]; }
      this.updateCard(card,false);
    });
    this.index=0; this.target=0; this.cur=-this.start; this.vel=0; this.still=null;
    this.playing=false; this.engaged=false; this.panelHover=false; this.zoomed=false; this.dragging=false; this.visible=false;
    this.mob = null;
    this.measure();
    this.setIndex(0, true);
    this.bindEvents();
    this.classList.add('rw--js');
    if(this.rm) this.classList.add('is-revealed');
    else { this.io2 = new IntersectionObserver(es=>{ if(es.some(e=>e.isIntersecting)){ this.io2.disconnect(); requestAnimationFrame(()=>requestAnimationFrame(()=>this.classList.add('is-revealed'))); } },{threshold:0,rootMargin:'0px 0px -22% 0px'}); this.io2.observe(this); }
    this.io = new IntersectionObserver(es=>{ this.visible = es[es.length-1].isIntersecting; if(this.visible) this.kick(); },{threshold:0}); this.io.observe(this);
    this.probeFeet();
    if(this.dataset.autoplay==='true' && !this.rm && !(window.Shopify&&Shopify.designMode)) this.play(true);
    this.renderAll();
  }
  decode(img){
    const ok=()=>img.classList.add('is-decoded');
    if(img.decode) img.decode().then(ok).catch(()=>{ if(img.naturalWidth) ok(); else img.addEventListener('load',ok,{once:true}); });
    else if(img.complete && img.naturalWidth) ok(); else img.addEventListener('load',ok,{once:true});
  }
  probeFeet(){
    this.heroes.forEach((h,i)=>{
      const im=new Image(); im.crossOrigin='anonymous';
      im.onload=()=>{ try{
        const w=48, hh=Math.max(1,Math.round(im.naturalHeight*w/im.naturalWidth));
        const c=document.createElement('canvas'); c.width=w; c.height=hh; const x=c.getContext('2d'); x.drawImage(im,0,0,w,hh);
        const d=x.getImageData(0,0,w,hh).data; let last=-1;
        for(let y=hh-1;y>=0&&last<0;y--) for(let q=0;q<w;q++) if(d[(y*w+q)*4+3]>40){ last=y; break; }
        if(last<0) return;
        const f=clamp((hh-1-last)/hh,0,.4).toFixed(4);
        h.style.setProperty('--rw-foot',f);
        this.bodies.forEach(b=>{ if(b.look===i) b.el.style.setProperty('--rw-foot',f); });
      }catch(e){} };
      im.src=h.dataset.probe;
    });
  }
  headerH(){
    const set=new Set(document.querySelectorAll('.shopify-section-group-header-group, #shopify-section-header, #shopify-section-announcement-bar'));
    let s=0; set.forEach(el=>{ if(el.contains(this)) return; const cs=getComputedStyle(el); if(cs.display==='none'||cs.visibility==='hidden') return; s+=el.offsetHeight; }); return s;
  }
  measure(){
    if(!innerWidth||!innerHeight){ cancelAnimationFrame(this.mRaf); this.mRaf=requestAnimationFrame(()=>this.measure()); return; }
    const mob = innerWidth <= 749;
    if(mob !== this.mob){
      const first = this.mob === null; this.mob = mob; this.mode = mob ? (this.dataset.mstyle==='ring'?'ring':'classic') : 'ring';
      if(!mob && this.sheetCard) this.closeSheet();
      if(!first){ this.cur=this.target; this.vel=0; }
      this.bodies.forEach(b=>{ b.goal=this.wrapN(b.a-this.target); b.x=b.g=b.goal+(first?this.start:0); b.v=0; b.trip=false; });
    }
    let fh;
    if(mob){ if(!this.vhL || this.vwL!==innerWidth || Math.abs(innerHeight-this.vhL)>=160){ this.vhL=innerHeight; this.vwL=innerWidth; } fh=this.vhL*clamp(+this.dataset.mheightVh||109,50,120)/100; }
    else fh=Math.max(380, innerHeight-this.headerH());
    this.style.setProperty('--rw-frame-h', Math.round(fh)+'px');
    const r=this.stage.getBoundingClientRect(); this.W=r.width; this.H=r.height;
    const ring=this.mode==='ring'; this.fs=ring?1.08:1;
    const mh = ring ? Math.max(200,Math.round((this.H-34-18)/1.08)) : Math.max(200,Math.round(this.H-(mob?24:36)-18));
    this.stage.style.setProperty('--rw-model-h', mh+'px');
    this.stage.style.setProperty('--rw-fs', this.fs);
    this.hx = ring ? .5*this.W : (mob?.3:.4)*this.W; this.hy = ring ? 34 : (mob?22:36);
    this.stage.style.setProperty('--rw-hx', this.hx+'px'); this.stage.style.setProperty('--rw-hy', this.hy+'px');
    this.style.setProperty('--rw-ax', (this.W?this.hx/this.W*100:40).toFixed(2)+'%');
    this.bodies.forEach(b=>b.w=b.el.offsetWidth);
    this.unit = ring ? Math.max(mob?90:120, .3*this.W) : Math.max(90, this.W*(mob?.32:.125)*1.6);
    if(this.zoomed) this.sizeLb();
    if(!this.H){ cancelAnimationFrame(this.mRaf); this.mRaf=requestAnimationFrame(()=>this.measure()); }
    this.renderAll(); this.kick();
  }
  wrapN(v){ const N=this.N; return ((v%N)+N)%N; }
  put(s,x,b,sc,op,bl,z){
    const hw=s.w*sc/2; if(x+hw<-4 || x-hw>this.W+4) op=0;
    const st=s.el.style; op=Math.round(clamp(op,0,1)*1000)/1000;
    st.transform=`translate3d(${x.toFixed(2)}px,${(-b).toFixed(2)}px,0) translateX(-50%) scale(${sc.toFixed(4)})`;
    st.opacity=op; st.zIndex=z; st.visibility=op<.01?'hidden':''; st.pointerEvents=op<.5?'none':'';
    bl=this.blurOn?Math.round(bl*10)/10:0; if(bl<=.05) bl=0;
    if(bl!==s.blur){ s.blur=bl; st.filter=bl?`blur(${bl}px)`:''; }
  }
  renderAll(){
    if(!this.W) return;
    const still=this.still;
    if(this.mode==='ring'){
      const W=this.W,H=this.H,cx=.5*W,R=(this.mob?.72:.62)*W,Pp=(this.mob?1.9:1.65)*W,floor=H-34,hor=.36*H,step=2*Math.PI/this.N,fs=this.fs;
      for(const s of this.bodies){
        let ph=((s.a-this.cur)*step)%(2*Math.PI); if(ph>Math.PI) ph-=2*Math.PI; if(ph<=-Math.PI) ph+=2*Math.PI;
        const z=R*(1-Math.cos(ph)), persp=Pp/(Pp+z), sl=Math.abs(ph)/step;
        const sc=persp*(1+(fs-1)*clamp(1-sl,0,1)), x=cx+R*Math.sin(ph)*persp, feet=hor+(floor-hor)*persp;
        const bl=sl<=1?1.8*sl:Math.min(1.8+(sl-1)*2,6.5);
        let op=clamp((Math.cos(ph)+.55)/.3,0,1); if(still && sl<.02) op=0;
        this.put(s,x,H-feet,sc,op,bl,Math.round(sc*1000));
      }
    } else {
      const W=this.W, m=this.mob, ax=m?.3:.4, ay=m?22:36, sx=m?.32:.125, sy=m?22:58, sr=.76, ex=m?.55:.38, d=m?4:5;
      for(const s of this.bodies){
        let k=s.x, e=-1;
        if(s.trip){ const span=s.goal-s.from, u=clamp(Math.abs(s.x-s.from)/(Math.abs(span)||1),0,1);
          if(span>0){ if(u<.5) e=2*u*1.4; else k=s.goal+2*(1-u); }
          else { if(u<.5) k=s.from+2*u; else e=2*(1-u)*1.4; } }
        else if(k<0) e=Math.min(-k,1.4);
        if(e>=0) this.put(s,W*(ax-ex*e),ay-22*e,1+.14*e,Math.max(0,1-1.05*e),4*Math.min(e,1),1100);
        else { let op=k<=d-1?1-.13*k:Math.max(0,.61*(d-k)); if(still && Math.abs(k)<.02) op=0;
          this.put(s,W*(ax+sx*k),ay+sy*k,Math.pow(sr,k),op,Math.min(.9*k,3.2),1000-Math.round(10*k)); }
      }
    }
  }
  setStill(v){ if(v===this.still) return; this.still=v; this.classList.toggle('rw--still',v); }
  kick(){ if(this.raf||!this.visible||document.hidden) return; this.last=0; this.raf=requestAnimationFrame(t=>this.frame(t)); }
  frame(t){
    this.raf=0;
    const dt=this.last?Math.min(.034,(t-this.last)/1000):1/60; this.last=t;
    let settled=true; const K=this.K,C=this.C,h=dt/3;
    if(this.mode==='ring'){
      if(this.rm){ this.cur=this.target; this.vel=0; }
      else for(let i=0;i<3;i++){ const acc=-K*(this.cur-this.target)-C*this.vel; this.vel+=acc*h; this.cur+=this.vel*h; }
      if(Math.abs(this.cur-this.target)<=.0005 && Math.abs(this.vel)<=.0005){ this.cur=this.target; this.vel=0; } else settled=false;
    } else {
      for(const s of this.bodies){
        const goal=this.wrapN(s.a-this.target);
        if(Math.abs(goal-s.goal)>this.N/2){ s.trip=true; s.from=s.x; }
        s.goal=goal;
        if(this.rm){ s.x=s.g=goal; s.v=0; s.trip=false; continue; }
        const tau=this.dragging?.016:s.trip?.1:.03+this.lag*Math.min(goal,4);
        s.g+=(goal-s.g)*(1-Math.exp(-dt/tau));
        for(let i=0;i<3;i++){ const acc=-K*(s.x-s.g)-C*s.v; s.v+=acc*h; s.x+=s.v*h; }
        if(s.trip && Math.abs(s.x-goal)<.02) s.trip=false;
        if(Math.abs(s.x-goal)<.0006 && Math.abs(s.v)<.0006 && Math.abs(s.g-goal)<.0006){ s.x=s.g=goal; s.v=0; s.trip=false; } else settled=false;
      }
    }
    const moving=!settled||this.dragging;
    this.setStill(!moving);
    this.renderAll();
    if(moving) this.kick();
  }
  rank(a){ const r=Math.round(this.target); if(this.mode==='ring'){ let k=this.wrapN(a-r); if(k>this.N/2) k-=this.N; return k; } return this.wrapN(a-r); }
  updateA11y(){
    const lim=this.mode==='ring'?2:3;
    this.bodies.forEach(s=>{ const k=this.rank(s.a), on=k!==0&&Math.abs(k)<=lim, hit=s.el.querySelector('.rw__hit');
      hit.tabIndex=on?0:-1; if(on) s.el.removeAttribute('aria-hidden'); else s.el.setAttribute('aria-hidden','true'); });
  }
  setIndex(i, silent){
    const prev=this.index; this.index=i; this.updateA11y(); this.kick();
    this.style.setProperty('--rw-progress', ((i+1)/this.n).toFixed(3));
    if(silent){ this.heroes.forEach((h,j)=>{ h.querySelector('.rw__zoom').tabIndex=j===i?0:-1; }); this.ticks.forEach((t,j)=>{t.setAttribute('aria-current',String(j===i)); t.classList.toggle('is-past',j<i);}); return; }
    if(i===prev) return;
    this.closeLb(); if(this.mob) this.closeSheet();
    this.heroes.forEach((h,j)=>{ h.classList.toggle('is-on',j===i); h.classList.toggle('was',j===prev); if(j===i) h.removeAttribute('aria-hidden'); else h.setAttribute('aria-hidden','true'); h.querySelector('.rw__zoom').tabIndex=j===i?0:-1; });
    if(!this.rm){ this.stage.classList.remove('is-sweep'); void this.stage.offsetWidth; this.stage.classList.add('is-sweep'); }
    this.live.textContent=`Look ${i+1}: ${L[i].n}`;
    this.ticks.forEach((t,j)=>{ t.setAttribute('aria-current',String(j===i)); t.classList.toggle('is-past',j<i); });
    this.panels.forEach((p,j)=>{ p.hidden=j!==i; p.classList.remove('is-in'); });
    void this.panels[i].offsetWidth; this.panels[i].classList.add('is-in');
    const tpl=this.panels[i].querySelector('template[data-rw-pieces-text]');
    this.pieces.textContent=tpl?tpl.content.textContent.trim():'';
    this.pieces.classList.remove('is-swap'); void this.pieces.offsetWidth; this.pieces.classList.add('is-swap');
    this.clearHot(); this.restartBar();
  }
  moveTo(T){ this.target=T; this.setStill(false); this.setIndex(((T%this.n)+this.n)%this.n); this.updateA11y(); this.kick(); }
  next(){ this.moveTo(Math.round(this.target)+1); }
  prev(){ this.moveTo(Math.round(this.target)-1); }
  go(i){ let d=((i-this.index)%this.n+this.n)%this.n; if(d>this.n/2) d-=this.n; this.moveTo(Math.round(this.target)+d); }

  play(on){ this.playing=on; this.classList.toggle('is-playing',on); this.$('[data-rw-auto]').setAttribute('aria-pressed',String(on)); this.restartBar(); }
  restartBar(){
    clearTimeout(this.timer);
    this.ticks.forEach(t=>t.classList.remove('is-run')); void this.offsetWidth;
    if(!this.playing) return;
    this.ticks[this.index].classList.add('is-run');
    this.timer=setTimeout(()=>{ if(this.playing&&this.visible&&!this.dragging&&!document.hidden&&!this.panelHover&&!this.zoomed&&!this.engaged) this.next(); else this.restartBar(); }, this.speed);
  }
  engage(){ this.engaged=true; if(this.playing) this.play(false); }

  bindEvents(){
    const click=e=>this.onClick(e);
    this.addEventListener('click',click);
    this.addEventListener('click',e=>{ if(this.suppress){ e.stopPropagation(); e.preventDefault(); } },true);
    this.addEventListener('change',e=>this.onChange(e));
    this.addEventListener('keydown',e=>{
      if(e.key==='Escape'){ if(this.sheetCard){ this.closeSheet(true); } else if(this.zoomed) this.closeLb(); return; }
      if(e.target===this.stage){ if(e.key==='ArrowRight'){ e.preventDefault(); this.next(); } else if(e.key==='ArrowLeft'){ e.preventDefault(); this.prev(); } }
    });
    this.panel.addEventListener('click',e=>{ if(e.target.closest('button,a,input,select,label')) this.engage(); });
    this.panel.addEventListener('pointerenter',e=>{ if(e.pointerType==='mouse'){ this.panelHover=true; } });
    this.panel.addEventListener('pointerleave',e=>{ if(e.pointerType==='mouse'){ this.panelHover=false; this.restartBar(); } });
    this.panel.addEventListener('pointerover',e=>{ if(e.pointerType!=='mouse') return; const c=e.target.closest('.rw__item'); if(c&&c!==this.hoverCard){ this.hoverCard=c; this.hot(+c.dataset.rwCard); } });
    this.panel.addEventListener('pointerout',e=>{ if(e.pointerType!=='mouse'||!this.hoverCard) return; if(e.relatedTarget&&this.hoverCard.contains(e.relatedTarget)) return; if(e.target.closest('.rw__item')!==this.hoverCard) return; this.hoverCard=null; this.clearHot(); });
    // drag
    const st=this.stage;
    st.addEventListener('pointerdown',e=>this.onDown(e));
    st.addEventListener('pointermove',e=>this.onMove(e));
    st.addEventListener('pointerup',e=>this.onUp(e));
    st.addEventListener('pointercancel',e=>this.onUp(e));
    st.addEventListener('wheel',e=>this.onWheel(e),{passive:false});
    // cursor
    if(matchMedia('(hover: hover) and (pointer: fine)').matches) this.initCursor(); else this.cursor.remove();
    this._resize=()=>{ clearTimeout(this.rzT); this.rzT=setTimeout(()=>this.measure(),120); };
    addEventListener('resize',this._resize);
    this._vis=()=>{ if(!document.hidden) this.kick(); };
    document.addEventListener('visibilitychange',this._vis);
    this.ro=new ResizeObserver(()=>requestAnimationFrame(()=>{ if(!this._on) return; const r=this.stage.getBoundingClientRect(); if(!r.height||Math.abs(r.width-this.W)>.5||Math.abs(r.height-this.H)>.5||(innerWidth<=749)!==this.mob) this.measure(); }));
    this.ro.observe(st); this.ro.observe(document.documentElement);
    setTimeout(()=>this.measure(),300);
  }
  onClick(e){
    const t=e.target, q=s=>t.closest(s);
    if(q('[data-rw-pick-close]')) return this.closeSheet(true);
    if(q('[data-rw-zoom-close]')) return this.closeLb();
    if(this.zoomed && (t===this.lb||t===this.lbStage)) return this.closeLb();
    if(q('[data-rw-zoom]')) return this.openLb();
    if(q('[data-rw-next]')) return this.next();
    if(q('[data-rw-prev]')) return this.prev();
    const tk=q('[data-rw-tick]'); if(tk) return this.go(+tk.dataset.rwTick);
    if(q('[data-rw-auto]')){ if(!this.playing) this.engaged=false; return this.play(!this.playing); }
    const pin=q('[data-rw-pin]'); if(pin){ this.engage(); return this.hot(+pin.dataset.rwPin,true); }
    const go=q('[data-rw-go]'); if(go){ const b=go.closest('[data-rw-model]')._b, k=this.rank(b); if(k!==0&&Math.abs(k)<6) this.moveTo(Math.round(this.target)+k); else this.openLb(); return; }
    const cf=q('[data-rw-confirm]'); if(cf){ const c=cf.closest('[data-rw-picker]')._card; c.dataset.touched='1'; if(c.dataset.selected) this.addCards([c]); return; }
    const ad=q('[data-rw-add]'); if(ad){ const c=ad.closest('.rw__item'); if(c.classList.contains('is-added')||c.classList.contains('is-loading')) return; c.classList.contains('is-picking')?this.closePicker(c):this.openPicker(c); return; }
    if(q('[data-rw-all]')) return this.addAll();
  }
  onChange(e){
    const r=e.target; this.engage();
    if(!r.matches('input[data-rw-option]')) return;
    const pk=r.closest('[data-rw-picker]'); if(pk&&pk._card) this.updateCard(pk._card,true);
  }
  updateCard(card,touched){
    const pk=card._pk, vars=card._vars, sel=pk.querySelector('input[data-rw-option]:checked')?.value;
    const match=vars.find(v=>v.a&&v.o[0]===sel);
    pk.querySelectorAll('.rw__pill').forEach(l=>{ const v=l.querySelector('input').value; l.classList.toggle('is-unavailable',!vars.some(x=>x.a&&x.o[0]===v)); });
    const btn=pk.querySelector('[data-rw-confirm]'), lab=pk.querySelector('[data-rw-confirm-label]');
    btn.disabled=!match; lab.textContent=match?lab.dataset.add:this.dataset.msgSoldout;
    card.dataset.selected=match?match.id:''; if(touched) card.dataset.touched='1';
  }
  openPicker(card){
    if(this.mob) return this.openSheet(card);
    card._pk.hidden=false; card.classList.add('is-picking'); card.querySelector('[data-rw-add]').setAttribute('aria-expanded','true');
    card._pk.querySelector('input:checked')?.focus({preventScroll:true}); this.reveal(card);
  }
  closePicker(card){
    if(card===this.sheetCard) return this.closeSheet();
    card._pk.hidden=true; card.classList.remove('is-picking'); const b=card.querySelector('[data-rw-add]'); if(!card.classList.contains('is-added')) b.setAttribute('aria-expanded','false');
  }
  ensureHost(){
    if(this.host) return this.host;
    const h=document.createElement('div'); h.className='rw-sheet-host';
    h.innerHTML='<button class="rw__pick-scrim" data-rw-pick-close tabindex="-1" aria-hidden="true"></button>';
    h.addEventListener('click',e=>this.onClick(e)); h.addEventListener('change',e=>this.onChange(e));
    h.addEventListener('keydown',e=>{ if(e.key==='Escape') this.closeSheet(true); });
    document.body.append(h); return this.host=h;
  }
  openSheet(card){
    this.closeSheet(); const h=this.ensureHost(), cs=getComputedStyle(this);
    HOST_VARS.forEach(v=>h.style.setProperty(v,cs.getPropertyValue(v))); h.style.fontFamily=cs.fontFamily; h.style.color=cs.color;
    h.append(card._pk); card._pk.hidden=false; void h.offsetWidth; h.classList.add('is-open');
    this.sheetCard=card; card.classList.add('is-picking'); card.querySelector('[data-rw-add]').setAttribute('aria-expanded','true');
    this.classList.add('rw--picking'); card._pk.querySelector('input:checked')?.focus({preventScroll:true});
  }
  closeSheet(focusBack){
    const card=this.sheetCard; if(!card) return; this.sheetCard=null;
    card._pk.hidden=true; card.append(card._pk); this.host?.classList.remove('is-open');
    card.classList.remove('is-picking'); const b=card.querySelector('[data-rw-add]'); if(!card.classList.contains('is-added')) b.setAttribute('aria-expanded','false');
    this.classList.remove('rw--picking'); if(focusBack) b.focus({preventScroll:true});
  }
  msg(panel,t){ const m=panel.querySelector('[data-rw-msg]'); m.textContent=''; if(t){ void m.offsetWidth; m.textContent=t; } }
  async addCards(cards){
    const panel=cards[0].closest('[data-rw-panel]'); this.msg(panel,'');
    cards.forEach(c=>c.classList.add('is-loading'));
    try{
      await Bag.add(cards.map(c=>({id:+c.dataset.selected,quantity:1})));
      cards.forEach(c=>{ c.classList.remove('is-loading'); c.classList.add('is-added'); this.closePicker(c); const b=c.querySelector('[data-rw-add]'); b.setAttribute('aria-label',b.dataset.addedLabel); b.removeAttribute('aria-expanded'); });
      if(this.mob&&!this.rm&&navigator.vibrate) try{ navigator.vibrate(12); }catch(e){}
    }catch(err){ cards.forEach(c=>c.classList.remove('is-loading')); this.msg(panel,(err&&err.message)||this.dataset.msgError); }
    this.checkComplete(panel);
  }
  checkComplete(panel){
    const cards=[...panel.querySelectorAll('.rw__item')];
    if(cards.length>=2&&cards.every(c=>c.classList.contains('is-added'))){ panel.classList.add('is-complete'); this.msg(panel,''); }
  }
  async addAll(){
    const panel=this.panels[this.index], cta=panel.querySelector('[data-rw-all]');
    if(panel.classList.contains('is-complete')||cta.classList.contains('is-loading')) return;
    this.msg(panel,'');
    const cards=[...panel.querySelectorAll('.rw__item')].filter(c=>!c.classList.contains('is-added'));
    const ready=cards.filter(c=>c.dataset.touched&&c.dataset.selected), pending=cards.filter(c=>!ready.includes(c));
    if(ready.length){ cta.classList.add('is-loading'); await this.addCards(ready); cta.classList.remove('is-loading'); }
    if(pending.length){
      if(this.mob) this.openPicker(pending[0]); else pending.forEach(c=>{ if(!c.classList.contains('is-picking')) this.openPicker(c); });
      this.reveal(pending[0]);
      this.msg(panel,this.dataset.msgChoose.replace('[items]',pending.map(c=>c.dataset.title).join(', ')));
    }
  }
  clearHot(){ this.querySelectorAll('.is-hot').forEach(el=>el.classList.remove('is-hot')); }
  hot(n,scroll){
    this.clearHot();
    const root=this.zoomed?this.lbStage:this.heroes[this.index];
    root.querySelector(`[data-rw-pin="${n}"]`)?.classList.add('is-hot');
    const card=this.panels[this.index].querySelector(`[data-rw-card="${n}"]`);
    if(card){ card.classList.add('is-hot'); if(scroll) this.reveal(card); }
  }
  reveal(card){
    const list=card.closest('.rw__items'), behavior=this.rm?'auto':'smooth';
    if(list.scrollWidth>list.clientWidth+1){ const cr=card.getBoundingClientRect(), lr=list.getBoundingClientRect(); list.scrollBy({left:cr.left-lr.left-20,behavior}); }
    else if(list.scrollHeight>list.clientHeight+1) list.scrollTo({top:card.offsetTop-list.offsetTop-12,behavior});
    else { const r=card.getBoundingClientRect(); if(r.top<0||r.bottom>innerHeight-140) scrollBy({top:r.top-.3*innerHeight,behavior}); }
  }

  sizeLb(){
    const w=this.lbStage.firstElementChild; if(!w) return;
    const r=this.lbStage.getBoundingClientRect(), h=Math.max(160,Math.min(r.height,r.width/.5625));
    w.style.setProperty('--rw-model-h',h+'px'); w.querySelectorAll('img').forEach(i=>i.sizes=Math.round(h*.5625)+'px');
  }
  openLb(){
    if(this.zoomed) return; this.engage(); this.clearHot(); clearTimeout(this.lbT);
    const hero=this.heroes[this.index], fig=hero.querySelector('.rw__figure');
    const w=document.createElement('div'); w.className='rw__lb-model';
    w.append(hero.querySelector('.rw__shadow').cloneNode(true), fig.cloneNode(true));
    w.querySelector('.rw__zoom')?.remove();
    w.querySelectorAll('.rw__pin').forEach(p=>{ p.tabIndex=0; p.classList.remove('is-hot'); });
    w.querySelectorAll('img').forEach(i=>{ i.loading='eager'; i.classList.add('is-decoded'); });
    const ft=hero.style.getPropertyValue('--rw-foot'); if(ft) w.style.setProperty('--rw-foot',ft);
    this.lbStage.replaceChildren(w); this.sizeLb();
    this.$('[data-rw-lb-kicker]').textContent=this.lb.dataset.word+' '+pad(this.index+1);
    this.$('[data-rw-lb-name]').textContent=L[this.index].n;
    this.zoomed=true; this.classList.add('rw--zoom'); this.lb.setAttribute('aria-hidden','false');
    if(!this.rm){
      const a=fig.getBoundingClientRect(), b=w.querySelector('.rw__figure').getBoundingClientRect();
      if(b.height){
        this.lbAt=`translate3d(${a.left-b.left}px,${a.bottom-b.bottom}px,0) scale(${a.height/b.height})`;
        w.style.transformOrigin='0 100%'; w.style.transition='none'; w.style.transform=this.lbAt;
        void w.offsetWidth; w.style.transition=''; w.style.transform='';
      }
    }
    this.$('[data-rw-zoom-close]').focus({preventScroll:true});
  }
  closeLb(){
    if(!this.zoomed) return; this.zoomed=false;
    const w=this.lbStage.firstElementChild; if(w&&!this.rm&&this.lbAt) w.style.transform=this.lbAt;
    const had=this.lb.contains(document.activeElement);
    this.classList.remove('rw--zoom'); this.lb.setAttribute('aria-hidden','true'); this.clearHot();
    this.lbT=setTimeout(()=>{ if(!this.zoomed) this.lbStage.replaceChildren(); },950);
    if(had) this.stage.focus({preventScroll:true});
    this.restartBar();
  }

  onDown(e){
    if((e.pointerType==='mouse'&&e.button!==0)||this.zoomed) return;
    this.d={x:e.clientX,y:e.clientY,t:this.target,id:e.pointerId,drag:false,samples:[{x:e.clientX,time:e.timeStamp}]};
  }
  onMove(e){
    const d=this.d; if(!d||e.pointerId!==d.id) return;
    if(e.pointerType==='mouse'&&!(e.buttons&1)) return this.onUp(e);
    const dx=e.clientX-d.x, dy=e.clientY-d.y;
    if(!d.drag){
      if(Math.abs(dx)>8&&Math.abs(dx)>1.2*Math.abs(dy)){ d.drag=true; this.dragging=true; this.classList.add('is-dragging'); try{ this.stage.setPointerCapture(e.pointerId); }catch(x){} this.cursor?.classList.remove('is-view','is-link'); }
      else { if(Math.abs(dy)>10) this.d=null; return; }
    }
    d.samples.push({x:e.clientX,time:e.timeStamp}); if(d.samples.length>6) d.samples.shift();
    this.target=d.t-dx/this.unit; this.setStill(false); this.updateA11y(); this.kick();
  }
  onUp(e){
    const d=this.d; if(!d||e.pointerId!==d.id) return; this.d=null;
    if(!d.drag) return;
    this.dragging=false; this.classList.remove('is-dragging');
    this.suppress=true; setTimeout(()=>this.suppress=false,60);
    const f=d.samples[0], l=d.samples[d.samples.length-1], vx=l.time>f.time?(l.x-f.x)/(l.time-f.time):0;
    const dx=(e.clientX||l.x)-d.x, sign=-1, from=Math.round(d.t);
    if(this.mob){ if(Math.abs(dx)>30||Math.abs(vx)>.3) this.moveTo(from+sign*(dx>0?1:-1)); else this.moveTo(from); }
    else { let i=Math.round(this.target+sign*vx*160/this.unit); if(i===from&&Math.abs(vx)>.3) i=from+(vx>0?-1:1); i=clamp(i,from-2,from+2); this.moveTo(i); }
  }
  onWheel(e){
    if(Math.abs(e.deltaX)<=Math.abs(e.deltaY)||this.zoomed) return;
    e.preventDefault(); if(this.wLock) return;
    this.wAcc=(this.wAcc||0)+e.deltaX;
    if(Math.abs(this.wAcc)>45){ this.wAcc>0?this.next():this.prev(); this.wAcc=0; this.wLock=true; setTimeout(()=>this.wLock=false,520); }
  }
  initCursor(){
    this.classList.add('rw--cursor'); const c=this.cursor; let x=0,y=0,tx=0,ty=0,on=false;
    const loop=()=>{ const k=this.rm?1:.18; x+=(tx-x)*k; y+=(ty-y)*k; c.style.transform=`translate3d(${x}px,${y}px,0)`; this.craf=Math.hypot(tx-x,ty-y)>.2?requestAnimationFrame(loop):0; };
    this.stage.addEventListener('pointermove',e=>{
      if(e.pointerType!=='mouse') return; const r=this.stage.getBoundingClientRect(); tx=e.clientX-r.left; ty=e.clientY-r.top;
      if(!on){ on=true; x=tx; y=ty; c.classList.add('is-on'); }
      const dr=this.dragging; c.classList.toggle('is-view',!dr&&!!e.target.closest('.rw__zoom')); c.classList.toggle('is-link',!dr&&!!e.target.closest('.rw__pin,.rw__hit'));
      if(!this.craf) this.craf=requestAnimationFrame(loop);
    });
    this.stage.addEventListener('pointerleave',()=>{ on=false; c.classList.remove('is-on','is-link','is-view'); });
  }
}
customElements.define('runway-section', RunwaySection);
})();
