"use client";
import React,{useEffect,useState} from "react";
type Lang="fr"|"en";
type Props={number:number;lang:Lang;active:boolean;onNavigate:(n:number)=>void};
const copy={
fr:{
welcome:"Bonjour, moi c'est Thony.",intro:"J'accompagne les marques dans la gestion quotidienne de leurs opérations Amazon Vendor et Seller Central, sur les marchés européens.",
aboutTitle:"Bonjour, moi c'est Thony.",aboutA:"J'ai commencé dans le service client avant de me spécialiser dans les opérations Amazon. Après plusieurs années en agence, je travaille aujourd'hui en indépendant.",aboutB:"Ce que j'aime ? Comprendre ce qui bloque, trouver des solutions et faire avancer les choses.",aboutNext:"Découvrir ce que je fais",
serviceHeadline:"Amazon, au quotidien.",serviceIntro:"Un accompagnement régulier ou un coup de main sur un sujet précis.",offerNames:["Gestion opérationnelle","Catalogue & contenus","Résolution de problèmes"],offerDesc:["Offres, commandes, disponibilité, dossiers Amazon et suivi quotidien de votre compte.","Fiches produits, variations, contenus A+, corrections et adaptations aux marchés européens.","Un problème sur Amazon ? Je cherche la cause, engage les démarches possibles et assure le suivi."],servicePlay:"À L'ANTENNE",servicePause:"Pause",serviceResume:"Reprendre",serviceContact:"Parlons de votre compte",
howTitle:"Et concrètement, on travaille comment ?",howIntro:"Quelques réponses, sans grand discours.",q:["Comment on commence ?","Et une fois le travail lancé ?","Comment je suis l'avancement ?","Vous utilisez l'IA ?"],a:["Vous me parlez de votre activité et de ce dont vous avez besoin. Je regarde ensuite votre compte Amazon et on définit ensemble les priorités.","Je prends en charge les actions convenues et je vérifie ce qui a réellement changé. Une modification soumise n'est pas forcément publiée.","Comme ça vous arrange : vos outils habituels, un e-mail ou un petit message. Je vous informe de ce qui avance et de ce qui bloque.","Oui, régulièrement. Pour analyser, organiser et gagner du temps. Mais je contrôle les informations et les changements avant de les appliquer."],qShort:["Démarrer","Actions","Échanges","L'IA"],howFooter:"On fixe les priorités ensemble. Je m'occupe du suivi et vous savez où on en est.",howAsk:"VOUS DEMANDEZ",howReply:"THONY RÉPOND",
contactTitle:"On en discute ?",contactDesc:"Besoin d'un coup de main sur Amazon ou d'un suivi régulier ? Écrivez-moi quelques mots sur votre projet. On verra ensemble comment je peux vous aider.",contactEmail:"M'envoyer un e-mail",contactLinkedin:"Me retrouver sur LinkedIn",contactMeta:"À distance · Marchés européens · FR / EN",portraitLabel:"PORTRAIT / THONY MAHERISON",back:"Retour à l'accueil",next:"CH 02 / MES SERVICES",linkedinPending:"Lien LinkedIn à confirmer"
},en:{
welcome:"Hello, I'm Thony.",intro:"I help brands manage their day-to-day Amazon Vendor and Seller Central operations across European marketplaces.",
aboutTitle:"Hi, I'm Thony.",aboutA:"I started in customer support before moving into Amazon operations. After several years at an agency, I now work independently.",aboutB:"What I enjoy most? Figuring out what's wrong, finding practical solutions, and moving things forward.",aboutNext:"See what I do",
serviceHeadline:"Amazon, day by day.",serviceIntro:"Ongoing support or an extra pair of hands when you need one.",offerNames:["Account operations","Catalog & content","Troubleshooting"],offerDesc:["Offers, orders, availability, Amazon cases and the day-to-day work that keeps your account running.","Listings, variations, A+ content, fixes and adaptations across European marketplaces.","Something stuck on Amazon? I investigate, take the steps available and keep you updated."],servicePlay:"NOW PLAYING",servicePause:"Pause",serviceResume:"Resume",serviceContact:"Let's talk about your account",
howTitle:"So, how do we work together?",howIntro:"A few answers, no sales pitch.",q:["How do we get started?","What happens next?","How do I stay updated?","Do you use AI?"],a:["Tell me about your business and what you need. I'll look at your Amazon account and we'll agree on the priorities.","I handle the agreed tasks and check what has actually changed. A submitted update isn't necessarily a live update.","Your usual tools, email or a quick message — whatever works for you. You'll know what's moving and what's blocked.","Yes, regularly. It helps me analyze, organize and save time, but I check the information and changes before using them."],qShort:["Getting started","Actions","Updates","AI"],howFooter:"We set priorities together. I handle the follow-up, and you know where things stand.",howAsk:"YOU ASK",howReply:"THONY ANSWERS",
contactTitle:"Let's talk.",contactDesc:"Need an extra pair of hands on Amazon, or ongoing operational support? Tell me a little about your brand and what you're working on. We'll see how I can help.",contactEmail:"Send me an email",contactLinkedin:"Find me on LinkedIn",contactMeta:"Remote · European marketplaces · FR / EN",portraitLabel:"PORTRAIT / THONY MAHERISON",back:"Back to welcome",next:"CH 02 / WHAT I DO",linkedinPending:"LinkedIn link pending"
}};
const mono:React.CSSProperties={fontFamily:"'VT323',monospace",fontSize:"clamp(16px,2cqw,25px)",letterSpacing:".12em"};
const ink="#f2f6f0",mint="#c8f3ae";
const action:React.CSSProperties={border:"1px solid #6a936e",borderRadius:24,padding:"10px 17px",fontSize:"clamp(13px,1.3cqw,16px)",background:"transparent",color:ink,cursor:"pointer"};
function Top({n,label}:{n:number;label:string}){return <div className="port-top"><span>CH 0{n} / {label}</span><span>● ON AIR</span></div>}
function Portrait(){const [broken,setBroken]=useState(false);return <div className="port-portrait">{!broken?<img src="/images/thony-portrait.jpg" alt="Portrait de Thony Maherison" onError={()=>setBroken(true)}/>:<div className="port-fallback">TH<span>O</span>NY</div>}</div>}
function Motion({mode}:{mode:number}){return <div className={"port-motion mode-"+mode} aria-hidden="true"><div className="port-orb a"/><div className="port-orb b"/><div className="port-motion-card"><i/><i/><i/></div><div className="port-motion-track"><i/><i/><i/><i/></div></div>}
export default function PortfolioChannel({number,lang,active,onNavigate}:Props){
 const t=copy[lang];
 const [offer,setOffer]=useState(0),[paused,setPaused]=useState(false),[progress,setProgress]=useState(0),[question,setQuestion]=useState(0);
 useEffect(()=>{if(number!==2||!active||paused)return;const id=window.setInterval(()=>setProgress(p=>{if(p>=98){setOffer(x=>(x+1)%3);return 0}return p+2}),180);return()=>window.clearInterval(id)},[number,active,paused]);
 if(number<1||number>4)return null;
 return <section id={`ch-0${number}`} data-ch={number} className={"port-channel port-ch-"+number} aria-label={["","About Me","What I Do","How I Work","Contact"][number]}>
 <style>{`
 .port-channel{--port-mint:#c8f3ae;position:relative;box-sizing:border-box;min-height:100%;height:auto;scroll-snap-align:start;background:#11191b;color:#f2f6f0;padding:clamp(27px,4cqw,52px) clamp(24px,5cqw,65px);display:flex;flex-direction:column;gap:clamp(16px,2.4cqw,30px);overflow:hidden}
 .port-top{display:flex;align-items:center;justify-content:space-between;gap:12px;font:clamp(16px,1.8cqw,23px)/1.1 'VT323',monospace;letter-spacing:.13em;color:var(--port-mint)}
 .port-about{display:grid;grid-template-columns:minmax(0,1.9fr) minmax(140px,.85fr);gap:clamp(20px,5cqw,65px);align-items:center;flex:1}
 .port-about h2,.port-how h2,.port-contact h2{font-size:clamp(35px,5.5cqw,75px);line-height:1.01;letter-spacing:-.065em;font-weight:500;margin:0 0 22px}
 .port-about p{font-size:clamp(16px,1.68cqw,22px);line-height:1.48;max-width:750px;margin:0 0 17px}
 
 .port-ch-1{background:radial-gradient(ellipse at 82% 40%,#24413355,transparent 43%),linear-gradient(145deg,#11191b,#0e1317);gap:clamp(12px,1.7cqw,22px);padding-top:clamp(20px,3cqw,38px);padding-bottom:clamp(20px,3cqw,36px)}
 .port-ch-1 .port-about{grid-template-columns:minmax(0,2.3fr) minmax(150px,.8fr);gap:clamp(18px,3cqw,40px);align-items:center}
 .port-ch-1 .port-about h2{font-size:clamp(27px,3.3cqw,48px);line-height:1.08;margin:9px 0 clamp(11px,1.5cqw,20px)}
 .port-cinema-eyebrow{font-family:'VT323',monospace;letter-spacing:.14em;font-size:clamp(15px,1.45cqw,19px);color:#a8d2aa}
 .port-cinema-story{display:flex;flex-direction:column;gap:clamp(7px,1cqw,12px)}
 .port-ch-1 .port-cinema-story p{font-size:clamp(15px,1.27cqw,18px);line-height:1.44;max-width:790px;margin:0;color:#d7dfd9;font-weight:400}
 .port-cinema-story strong{font-weight:600;color:var(--port-mint);text-decoration:none}
 .port-cinema-portrait{align-self:center}
 .port-cinema-enter{animation:portCinemaAppear .75s ease-out both}
 .port-cinema-story p:nth-child(1){animation-delay:.06s}
 .port-cinema-story p:nth-child(2){animation-delay:.16s}
 .port-cinema-story p:nth-child(3){animation-delay:.26s}
 .port-cinema-story p:nth-child(4){animation-delay:.36s}
 .port-cinema-story p:nth-child(5){animation-delay:.46s}
 @keyframes portCinemaAppear{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
 @media(max-width:780px){.port-ch-1 .port-about{grid-template-columns:1fr}.port-cinema-portrait{order:-1;justify-self:start;display:flex;align-items:center;gap:16px}.port-cinema-portrait .port-portrait{width:100px;height:100px}.port-ch-1 .port-cinema-story p{font-size:15px;line-height:1.46}.port-ch-1 .port-about h2{font-size:34px}.port-ch-1{padding:22px 20px}}
 @media(prefers-reduced-motion:reduce){.port-cinema-enter{animation:none!important}}
 .port-portrait{width:100%;max-width:290px;aspect-ratio:1/1;border-radius:50%;border:4px solid #a7ce9c;box-shadow:0 0 0 12px #b5e4a714,0 0 60px #b7f6c521;overflow:hidden;margin:auto;background:#25372c}
 .port-portrait img{display:block;width:100%;height:100%;object-fit:cover;filter:saturate(.83) contrast(1.06)}
 .port-fallback{height:100%;display:grid;place-items:center;font-size:48px;font-weight:700;letter-spacing:-.08em}.port-fallback span{color:var(--port-mint)}
 .port-foot{display:flex;justify-content:space-between;align-items:center;gap:15px;flex-wrap:wrap;margin-top:auto;padding-top:12px;border-top:1px solid #47624b;font:clamp(14px,1.5cqw,19px) 'VT323',monospace;letter-spacing:.1em;color:#bed6c1}
 .port-foot button{border:0;background:none;color:var(--port-mint);cursor:pointer;font:inherit}
 .port-ch-2{padding:0;background:#112024;min-height:100%;isolation:isolate;justify-content:space-between}
 .port-motion{position:absolute;inset:0;z-index:-1;overflow:hidden;background:radial-gradient(circle at 67% 42%,#245447 0,transparent 40%),linear-gradient(120deg,#0e2025,#122b2a,#0a141b)}
 .port-orb{position:absolute;border:2px solid #c0f5bd55;border-radius:50%;width:36cqw;height:36cqw;top:13%;left:56%;animation:portSpin 14s linear infinite}
 .port-orb.b{width:20cqw;height:20cqw;left:63%;top:26%;animation-direction:reverse;animation-duration:9s}
 .port-motion.mode-1 .port-orb{border-radius:24%;transform:rotate(20deg);border-color:#9bd5ff66}
 .port-motion.mode-2 .port-orb{border-style:dashed;border-color:#efc79b77}
 .port-motion-card{position:absolute;left:60%;top:40%;width:27%;height:21%;background:#caf6d715;border:1px solid #b7f2bd7a;border-radius:18px;transform:rotate(-8deg);animation:portFloat 5s ease-in-out infinite;padding:15px;display:flex;flex-direction:column;gap:11px}
 .port-motion-card i{height:9px;border-radius:9px;background:#d5ffdf7d}.port-motion-card i:nth-child(2){width:75%}.port-motion-card i:nth-child(3){width:52%}
 .port-motion-track{position:absolute;right:8%;top:20%;display:flex;gap:13px}.port-motion-track i{width:10px;height:10px;background:#c1efcd77;border-radius:50%;animation:portPulse 2s ease-in-out infinite}.port-motion-track i:nth-child(2){animation-delay:.4s}.port-motion-track i:nth-child(3){animation-delay:.8s}.port-motion-track i:nth-child(4){animation-delay:1.2s}
 .port-broadcast{position:relative;min-height:100%;display:flex;flex-direction:column;padding:clamp(20px,3cqw,42px) clamp(20px,3cqw,42px) clamp(10px,1.5cqw,22px);gap:10px}
 .port-broadcast .port-headline{flex:1;display:flex;align-items:center;font-size:clamp(40px,5.4cqw,78px);font-weight:500;letter-spacing:-.07em;line-height:1.02;text-shadow:0 5px 30px #000b}
 .port-epg{border:1px solid #afd6b055;background:#101f19e6;backdrop-filter:blur(10px);border-radius:12px;overflow:hidden;margin-top:auto;transform:translateY(18px)}
 .port-epg-top{padding:10px 17px;border-bottom:1px solid #afd6b033;display:flex;justify-content:space-between;color:var(--port-mint);font:clamp(14px,1.4cqw,18px) 'VT323',monospace;letter-spacing:.12em}
 .port-epg-body{padding:11px 17px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:16px;align-items:center}
 .port-epg h3{margin:0 0 6px;font-size:clamp(22px,2.6cqw,35px);font-weight:500}.port-epg p{margin:0;max-width:670px;line-height:1.44;font-size:clamp(14px,1.35cqw,18px)}
 .port-offer-nav{display:flex;gap:7px;flex-wrap:wrap}.port-offer-nav button{border:1px solid #79967c;background:transparent;color:#f2f6f0;border-radius:7px;padding:8px 10px;cursor:pointer}.port-offer-nav button[aria-pressed=true]{background:var(--port-mint);color:#102019}
 .port-progress{height:3px;background:#49644e}.port-progress i{display:block;height:100%;background:var(--port-mint)}
 .port-how{flex:1;display:flex;flex-direction:column;justify-content:center;gap:16px}.port-how h2{margin-bottom:0}.port-q{border:1px solid #4f7053;border-radius:12px;overflow:hidden}.port-q-question{background:#2b4434;padding:14px 20px}.port-q-question strong{display:block;margin-top:8px;font-weight:500;font-size:clamp(21px,2.4cqw,34px)}.port-q-answer{background:#1d2e23;padding:16px 20px;font-size:clamp(16px,1.7cqw,21px);line-height:1.54;min-height:80px}.port-q-menu{display:flex;gap:8px;flex-wrap:wrap}.port-q-menu button{background:#213426;border:1px solid #527758;border-radius:22px;padding:10px 14px;color:#f2f6f0;cursor:pointer}.port-q-menu button[aria-pressed=true]{background:var(--port-mint);color:#0a1a10}
 .port-contact{flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:19px;text-align:center}.port-contact h2{margin:0}.port-contact p{max-width:660px;line-height:1.55;font-size:clamp(17px,1.9cqw,24px);margin:0}.port-contact-actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:center}.port-contact-actions a{display:inline-flex;text-decoration:none;align-items:center;justify-content:center;padding:13px 22px;border-radius:28px;background:var(--port-mint);color:#112019;font-weight:600;border:1px solid #b5eaa9}.port-contact-actions a.secondary{background:transparent;color:#eaf4ea}.port-contact-actions a[aria-disabled=true]{opacity:.5;cursor:not-allowed}
 @keyframes portSpin{to{transform:rotate(360deg)}}@keyframes portFloat{50%{translate:0 -20px}}@keyframes portPulse{50%{opacity:.2;scale:.7}}
 @media(max-width:780px){.port-channel{padding:35px 22px}.port-about{grid-template-columns:minmax(0,1fr);gap:20px}.port-portrait{max-width:175px}.port-about h2,.port-how h2,.port-contact h2{font-size:clamp(33px,9vw,53px)}.port-about p{font-size:16px}.port-ch-2{padding:0}.port-broadcast{padding:25px 18px}.port-broadcast .port-headline{font-size:clamp(38px,9vw,56px)}.port-epg-body{grid-template-columns:1fr}.port-offer-nav{justify-content:flex-start}.port-contact p{font-size:16px}}
 @media(prefers-reduced-motion:reduce){.port-motion *{animation:none!important}.port-motion{background:#172a27}}
 `}</style>
 <Top n={number} label={["","ABOUT ME","WHAT I DO","HOW I WORK","CONTACT"][number]}/>
 {number===1&&<>
 <div className="port-about">
  <div className="port-cinema-copy">
    <div className="port-cinema-eyebrow">THE PERSON BEHIND THE SCREEN <span aria-hidden="true">/ 01</span></div>
    <h2 className={active?"port-cinema-enter":""}>{t.aboutTitle}</h2>
    {lang==="fr"?<div className="port-cinema-story" key="fr">
      <p className={active?"port-cinema-enter":""}>Cela fait <strong>plus de cinq ans</strong> que je travaille dans l'univers <strong>Amazon</strong>, principalement sur <strong>Vendor et Seller Central</strong>.</p>
      <p className={active?"port-cinema-enter":""}>Au fil des années, j'ai touché à beaucoup de choses : <strong>gestion des comptes, catalogues produits, contenus, commandes et conformité</strong>, sans oublier les problèmes techniques et les dossiers parfois interminables avec Amazon.</p>
      <p className={active?"port-cinema-enter":""}>J'ai commencé dans le support avant d'évoluer vers les <strong>opérations marketplace</strong>, puis vers un poste de <strong>spécialiste senior en agence</strong>. Aujourd'hui, je travaille à mon compte.</p>
      <p className={active?"port-cinema-enter":""}>Ce parcours m'a appris à connaître Amazon au-delà des interfaces : ses particularités, ses contraintes et les complications du quotidien. Ce que j'aime, c'est <strong>comprendre ce qui bloque et trouver des solutions concrètes</strong>.</p>
      <p className={active?"port-cinema-enter":""}>Je travaille avec des marques qui ont besoin de quelqu'un d'<strong>autonome</strong>, qui connaît son sujet et avec qui les échanges restent simples.</p>
    </div>:<div className="port-cinema-story" key="en">
      <p className={active?"port-cinema-enter":""}>I've spent <strong>over five years working with Amazon</strong>, mainly across <strong>Vendor and Seller Central</strong>.</p>
      <p className={active?"port-cinema-enter":""}>Along the way I've worked on <strong>account operations, product catalogs, content, orders and compliance</strong> — and my share of technical problems and long-running Amazon cases.</p>
      <p className={active?"port-cinema-enter":""}>I started in support, moved into <strong>marketplace operations</strong>, then became a <strong>senior Amazon specialist at an agency</strong>. Today I work independently.</p>
      <p className={active?"port-cinema-enter":""}>That journey taught me how Amazon works beyond the interface: its quirks, constraints and everyday complications. What I enjoy most is <strong>figuring out what's stuck and finding practical solutions</strong>.</p>
      <p className={active?"port-cinema-enter":""}>I work with brands looking for someone <strong>independent and hands-on</strong> who knows the platform and keeps communication simple.</p>
    </div>}
  </div>
  <div className="port-cinema-portrait"><Portrait/><div style={{...mono,textAlign:"center",fontSize:14,color:mint,marginTop:14}}>{t.portraitLabel}</div></div>
 </div>
 <div className="port-foot"><span>THONY MAHERISON / FR · EN</span><button onClick={()=>onNavigate(2)}>{t.aboutNext} →</button></div>
 </>}
 {number===2&&<div className="port-broadcast">
 <Motion mode={offer}/><div className="port-headline">{t.serviceHeadline}</div>
 <div className="port-epg"><div className="port-epg-top"><span>{t.servicePlay} / 0{offer+1}—03</span><span>EPG · AMAZON OPERATIONS</span></div><div className="port-epg-body">
 <div><h3>{t.offerNames[offer]}</h3><p>{t.offerDesc[offer]}</p></div>
 <div className="port-offer-nav">{[0,1,2].map(i=><button type="button" key={i} aria-label={t.offerNames[i]} title={t.offerNames[i]} aria-pressed={offer===i} onClick={()=>{setOffer(i);setProgress(0)}}>0{i+1}</button>)}<button type="button" aria-label={paused?t.serviceResume:t.servicePause} onClick={()=>setPaused(x=>!x)}>{paused?"▶":"Ⅱ"}</button></div>
 </div><div className="port-progress"><i style={{width:progress+"%"}}/></div></div>
 <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,color:"#c3dbc8",fontSize:13}}><span>{t.serviceIntro}</span><button style={{...action,whiteSpace:"nowrap"}} onClick={()=>onNavigate(4)}>{t.serviceContact} ↗</button></div>
 </div>}
 {number===3&&<><div className="port-how"><h2>{t.howTitle}</h2><p style={{margin:0,opacity:.75}}>{t.howIntro}</p><div className="port-q">
 <div className="port-q-question"><span style={{...mono,color:mint}}>{t.howAsk}</span><strong>{t.q[question]}</strong></div>
 <div className="port-q-answer"><div style={{...mono,color:mint,marginBottom:8}}>{t.howReply}</div>{t.a[question]}</div></div>
 <div className="port-q-menu">{t.qShort.map((label,i)=><button type="button" key={i} aria-pressed={question===i} onClick={()=>setQuestion(i)}>{i+1}. {label}</button>)}</div>
 <p style={{margin:0,color:"#bcd6c2",fontSize:16}}>{t.howFooter}</p></div></>}
 {number===4&&<div className="port-contact"><div style={{...mono,color:mint,fontSize:20}}>MAHERISON TV / DIRECT LINE</div><h2>{t.contactTitle}</h2><p>{t.contactDesc}</p><div className="port-contact-actions"><a href="mailto:thony@maherison.com?subject=Projet%20Amazon">✉ {t.contactEmail}</a><span title={t.linkedinPending} style={{...action,opacity:.65}}>in · {t.contactLinkedin} (URL à confirmer)</span></div><a href="mailto:thony@maherison.com" style={{color:mint}}>thony@maherison.com</a><span style={{color:"#b3c9b6",fontSize:15}}>{t.contactMeta}</span></div>}
 {number===4&&<div className="port-foot"><span>THANKS FOR WATCHING</span><span>END OF TRANSMISSION</span></div>}
 </section>;
}
