// Lógica de renderizado: barras, radar, proyectos y fondo animado

const fmt=v=>String(v).replace(".",",");
document.getElementById("bars").innerHTML=LANGS.map(([n,v])=>
  `<div class="bar-row"><span class="lbl">${n}</span><div class="track"><div class="fill" style="width:${v/5*100}%"></div></div><span class="val">${fmt(v)}</span></div>`).join("");

document.getElementById("projects").innerHTML=PROJECTS.map(p=>`<article class="proj${p.wide?" wide":""}">
  <span class="cat${p.live?" live":""}">${p.c}</span><h3>${p.t}</h3><p>${p.d}</p>
  <div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div>
  <div class="plinks">${p.links.map(([l,u])=>`<a href="${u}" target="_blank" rel="noopener">${l} ↗</a>`).join("")}</div></article>`).join("");

// Radar
(function(){
  const svg=document.getElementById("radar"),VW=640,VH=500,cx=VW/2,cy=VH/2,R=165,n=AREAS.length,ns="http://www.w3.org/2000/svg";
  svg.setAttribute("viewBox",`0 0 ${VW} ${VH}`);
  const mk=(t,a)=>{const e=document.createElementNS(ns,t);for(const k in a)e.setAttribute(k,a[k]);svg.append(e);return e};
  const pt=(i,v)=>{const a=-Math.PI/2+i*2*Math.PI/n;return[cx+Math.cos(a)*R*v/5,cy+Math.sin(a)*R*v/5]};
  for(let k=1;k<=5;k++) mk("polygon",{points:AREAS.map((_,i)=>pt(i,k).join(",")).join(" "),fill:k%2?"none":"var(--accent-soft)","fill-opacity":.35,stroke:"var(--line)"});
  [1,3,5].forEach(k=>{const [x,y]=pt(0,k);mk("text",{x:x+6,y:y+4,"font-size":11,"font-family":"JetBrains Mono, monospace",fill:"var(--muted)"}).textContent=k});
  AREAS.forEach(([name,v],i)=>{
    const [x,y]=pt(i,5);mk("line",{x1:cx,y1:cy,x2:x,y2:y,stroke:"var(--line)"});
    const [lx,ly]=pt(i,5.75);
    const side=Math.abs(lx-cx)<8?"middle":(lx>cx?"start":"end");
    const top=ly<cy-R*.9, bot=ly>cy+R*.9;
    const y0=top?ly-14:bot?ly+10:ly-4;
    mk("text",{x:lx,y:y0,"font-size":15,"font-weight":600,"font-family":"Public Sans, system-ui, sans-serif",fill:"var(--fg)","text-anchor":side}).textContent=name;
    mk("text",{x:lx,y:y0+17,"font-size":12.5,"font-family":"JetBrains Mono, monospace",fill:"var(--accent-2)","text-anchor":side}).textContent=String(v).replace(".",",")+" / 5";
  });
  mk("polygon",{points:AREAS.map(([,v],i)=>pt(i,v).join(",")).join(" "),fill:"var(--accent)","fill-opacity":.28,stroke:"var(--accent)","stroke-width":2.5,"stroke-linejoin":"round"});
  AREAS.forEach(([,v],i)=>{const [x,y]=pt(i,v);mk("circle",{cx:x,cy:y,r:5,fill:"var(--accent-2)",stroke:"var(--surface)","stroke-width":2})});
})();

// Fondo del hero: tres clústeres (azul, rosa, amarillo) y una recta de regresión
(function(){
  const cv=document.getElementById("cloud"),ctx=cv.getContext("2d");
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  let pts=[],W=0,H=0,t=0;
  function rnd(s){return()=>{s=(s*16807)%2147483647;return s/2147483647}}
  const gauss=r=>(r()+r()+r()-1.5);
  function seed(){
    const r=rnd(42);pts=[];
    const C=[{x:.58,y:.68,k:"--accent",n:60},{x:.78,y:.42,k:"--accent-2",n:45},{x:.93,y:.22,k:"--accent-3",n:35}];
    C.forEach(c=>{for(let i=0;i<c.n;i++)pts.push({x:c.x+gauss(r)*.075,y:c.y+gauss(r)*.11,k:c.k,ph:r()*6.28,s:1.8+r()*2.6})});
    for(let i=0;i<40;i++){const x=r();pts.push({x:.45+x*.55,y:.8-x*.6+gauss(r)*.15,k:"--sky",ph:r()*6.28,s:1.4+r()*1.8})}
  }
  function size(){const d=devicePixelRatio||1;W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0)}
  function draw(){
    const cs=getComputedStyle(document.documentElement),col=k=>cs.getPropertyValue(k).trim();
    ctx.clearRect(0,0,W,H);
    const narrow=W<720;
    pts.forEach(p=>{
      const dx=reduce?0:Math.sin(t*.6+p.ph)*4,dy=reduce?0:Math.cos(t*.5+p.ph)*4;
      ctx.globalAlpha=narrow?.22:.55;ctx.fillStyle=col(p.k);
      ctx.beginPath();ctx.arc(p.x*W+dx,p.y*H+dy,p.s,0,6.283);ctx.fill();
    });
    ctx.globalAlpha=narrow?.3:.75;ctx.strokeStyle=col("--accent-2");ctx.lineWidth=2;ctx.setLineDash([6,6]);
    ctx.beginPath();ctx.moveTo(.45*W,.8*H);ctx.lineTo(1.02*W,.8*H-.6*H*1.04);ctx.stroke();ctx.setLineDash([]);ctx.globalAlpha=1;
  }
  function loop(){t+=.016;draw();requestAnimationFrame(loop)}
  seed();size();addEventListener("resize",()=>{size();draw()});
  if(reduce) draw(); else loop();
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change",draw);
})();
