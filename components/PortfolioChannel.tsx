"use client";
import React,{useEffect,useState} from "react";
type Lang="fr"|"en";
type Props={number:number;lang:Lang;active:boolean;theme:"black"|"aurora"|"paper";onNavigate:(n:number)=>void};
const copy={
fr:{
welcome:"Bonjour, moi c'est Thony.",intro:"J'accompagne les marques dans la gestion quotidienne de leurs opérations Amazon Vendor et Seller Central, sur les marchés européens.",
aboutTitle:"Comment j’en suis arrivé là.",aboutA:"J'ai commencé dans le service client avant de me spécialiser dans les opérations Amazon. Après plusieurs années en agence, je travaille aujourd'hui en indépendant.",aboutB:"Ce que j'aime ? Comprendre ce qui bloque, trouver des solutions et faire avancer les choses.",aboutNext:"Découvrir ce que je fais",
serviceHeadline:"Amazon, au quotidien.",serviceIntro:"Un accompagnement régulier ou un coup de main sur un sujet précis.",offerNames:["Gestion opérationnelle","Catalogue & contenus","Résolution de problèmes"],offerDesc:["Offres, commandes, disponibilité, dossiers Amazon et suivi quotidien de votre compte.","Fiches produits, variations, contenus A+, corrections et adaptations aux marchés européens.","Un problème sur Amazon ? Je cherche la cause, engage les démarches possibles et assure le suivi."],servicePlay:"À L'ANTENNE",servicePause:"Pause",serviceResume:"Reprendre",serviceContact:"Parlons de votre compte",
howTitle:"Et concrètement, on travaille comment ?",howIntro:"Quelques réponses, sans grand discours.",q:["Comment on commence ?","Et une fois le travail lancé ?","Comment je suis l'avancement ?","Vous utilisez l'IA ?"],a:["Vous me parlez de votre activité et de ce dont vous avez besoin. Je regarde ensuite votre compte Amazon et on définit ensemble les priorités.","Je prends en charge les actions convenues et je vérifie ce qui a réellement changé. Une modification soumise n'est pas forcément publiée.","Comme ça vous arrange : vos outils habituels, un e-mail ou un petit message. Je vous informe de ce qui avance et de ce qui bloque.","Oui, régulièrement. Pour analyser, organiser et gagner du temps. Mais je contrôle les informations et les changements avant de les appliquer."],qShort:["Démarrer","Actions","Échanges","L'IA"],howFooter:"On fixe les priorités ensemble. Je m'occupe du suivi et vous savez où on en est.",howAsk:"VOUS DEMANDEZ",howReply:"THONY RÉPOND",
contactTitle:"On en discute ?",contactDesc:"Besoin d'un coup de main sur Amazon ou d'un suivi régulier ? Écrivez-moi quelques mots sur votre projet. On verra ensemble comment je peux vous aider.",contactEmail:"M'envoyer un e-mail",contactLinkedin:"Me retrouver sur LinkedIn",contactMeta:"À distance · Marchés européens · FR / EN",portraitLabel:"PORTRAIT / THONY MAHERISON",back:"Retour à l'accueil",next:"CH 02 / MES SERVICES",linkedinPending:"Lien LinkedIn à confirmer"
},en:{
welcome:"Hello, I'm Thony.",intro:"I help brands manage their day-to-day Amazon Vendor and Seller Central operations across European marketplaces.",
aboutTitle:"How I got here.",aboutA:"I started in customer support before moving into Amazon operations. After several years at an agency, I now work independently.",aboutB:"What I enjoy most? Figuring out what's wrong, finding practical solutions, and moving things forward.",aboutNext:"See what I do",
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
export default function PortfolioChannel({number,lang,active,theme,onNavigate}:Props){
 const t=copy[lang];
 const [offer,setOffer]=useState(0),[paused,setPaused]=useState(false),[progress,setProgress]=useState(0);
 useEffect(()=>{if(number!==2||!active||paused)return;const id=window.setInterval(()=>setProgress(p=>{if(p>=98){setOffer(x=>(x+1)%3);return 0}return p+2}),180);return()=>window.clearInterval(id)},[number,active,paused]);
 if(number<1||number>4)return null;
 return <section id={`ch-0${number}`} data-ch={number} className={"port-channel port-ch-"+number} data-theme={theme} aria-label={["","About Me","What I Do","How I Work","Contact"][number]}>
 <style>{`
 .port-channel{--port-mint:#c8f3ae;position:relative;box-sizing:border-box;min-height:100%;height:auto;scroll-snap-align:start;background:#11191b;color:#f2f6f0;padding:clamp(27px,4cqw,52px) clamp(24px,5cqw,65px);display:flex;flex-direction:column;gap:clamp(16px,2.4cqw,30px);overflow:hidden}
 .port-top{display:flex;align-items:center;justify-content:space-between;gap:12px;font:clamp(16px,1.8cqw,23px)/1.1 'VT323',monospace;letter-spacing:.13em;color:var(--port-mint)}
 .port-about{display:grid;grid-template-columns:minmax(0,1.9fr) minmax(140px,.85fr);gap:clamp(20px,5cqw,65px);align-items:center;flex:1}
 .port-about h2,.port-how h2,.port-contact h2{font-size:clamp(35px,5.5cqw,75px);line-height:1.01;letter-spacing:-.065em;font-weight:500;margin:0 0 22px}
 .port-about p{font-size:clamp(16px,1.68cqw,22px);line-height:1.48;max-width:750px;margin:0 0 17px}
 
 .port-ch-1{background:linear-gradient(90deg,transparent 0%,rgba(166,217,179,.035) 67%,rgba(166,217,179,.055) 100%),linear-gradient(150deg,#11191b,#101618);gap:clamp(13px,1.75cqw,22px);padding-top:clamp(20px,3cqw,38px);padding-bottom:clamp(20px,3cqw,36px)}
 .port-ch-1 .port-about{grid-template-columns:minmax(0,2.35fr) minmax(150px,.8fr);gap:clamp(22px,4cqw,55px);align-items:center}
 .port-ch-1 .port-about h2{font-size:clamp(27px,3.3cqw,48px);line-height:1.08;margin:9px 0 clamp(11px,1.5cqw,20px)}
 .port-cinema-eyebrow{font-family:'VT323',monospace;letter-spacing:.17em;font-size:clamp(15px,1.45cqw,19px);color:#a8d2aa;display:flex;justify-content:space-between;border-bottom:1px solid rgba(198,235,163,.23);padding-bottom:12px;max-width:740px}
 .port-cinema-story{display:flex;flex-direction:column;gap:clamp(7px,1cqw,12px)}
 .port-ch-1 .port-cinema-story p{font-size:clamp(15px,1.27cqw,18px);line-height:1.47;max-width:790px;margin:0;color:#d7dfd9;font-weight:400}
 .port-cinema-story strong{font-weight:600;color:#c3e8b4;text-decoration:none}
 .port-cinema-portrait{align-self:center;min-width:0}
 .port-photo-frame{position:relative;padding:10px;border:1px solid rgba(200,243,174,.33);background:linear-gradient(135deg,#263c30,#111d19);box-shadow:0 20px 50px #0005}
 .port-photo-frame .port-portrait{border-radius:3px;aspect-ratio:4/5;max-width:100%;width:100%;border:0;box-shadow:none}
 .port-photo-corner{position:absolute;top:17px;right:16px;font:14px 'VT323',monospace;letter-spacing:.14em;color:#d4edca;background:#102219bd;padding:5px 7px}
 .port-credential{display:flex;flex-direction:column;gap:10px;border-top:1px solid rgba(200,243,174,.4);margin-top:17px;padding-top:12px;font:clamp(16px,1.6cqw,23px) 'VT323',monospace;color:#bad8bd;letter-spacing:.08em}
 .port-credential>span:first-child{font-size:clamp(27px,3.5cqw,47px);color:var(--port-mint);line-height:1}
 .port-credential small{font-size:clamp(12px,1.3cqw,18px);font-weight:400;color:#c7d6c9}
 .port-cinema-enter{animation:portCinemaAppear .7s ease-out both}
 .port-cinema-story p:nth-child(1){animation-delay:.06s}
 .port-cinema-story p:nth-child(2){animation-delay:.16s}
 .port-cinema-story p:nth-child(3){animation-delay:.26s}
 .port-cinema-story p:nth-child(4){animation-delay:.36s}
 .port-cinema-story p:nth-child(5){animation-delay:.46s}
 @keyframes portCinemaAppear{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
 @media(max-width:780px){.port-ch-1 .port-about{grid-template-columns:1fr}.port-cinema-portrait{order:-1;justify-self:start;display:flex;align-items:center;gap:18px}.port-photo-frame{width:105px;flex:none;padding:5px}.port-photo-frame .port-portrait{height:115px}.port-credential{margin-top:0}.port-ch-1 .port-cinema-story p{font-size:15px;line-height:1.5}.port-ch-1 .port-about h2{font-size:34px}.port-ch-1{padding:22px 20px}}
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

 /* CH 02 — a broadcast, not a collection of service cards */
 .port-ch-2{background:#0b171a}
 .port-ch-2>.port-top{padding:clamp(19px,2.6cqw,31px) clamp(22px,3cqw,43px) 0;z-index:1}
 .port-broadcast{flex:1;min-height:0;height:auto;padding-top:clamp(14px,2.5cqw,32px);padding-bottom:clamp(20px,3cqw,40px);justify-content:space-between}
 .port-broadcast-heading{display:flex;flex-direction:column;gap:clamp(14px,2cqw,26px);flex:1;justify-content:center;min-height:115px}
 .port-broadcast-index{font:clamp(15px,1.7cqw,21px) 'VT323',monospace;letter-spacing:.16em;color:#b9dabc;text-shadow:0 1px 15px #000b}
 .port-broadcast .port-headline{flex:none;max-width:680px;font-size:clamp(37px,5.1cqw,75px)}
 .port-epg{margin-top:auto;transform:none;border-radius:5px;background:linear-gradient(120deg,rgba(15,27,25,.95),rgba(12,23,21,.91));border-color:rgba(203,245,196,.32);box-shadow:0 16px 50px #0007}
 .port-epg-top{padding:9px 17px;border-bottom-color:#c1e4b83d}
 .port-epg-body{grid-template-columns:1fr;gap:12px;padding:14px 17px}
 .port-epg h3{font-size:clamp(23px,2.55cqw,34px);letter-spacing:-.035em}
 .port-epg p{max-width:900px}
 .port-offer-nav{display:grid;grid-template-columns:repeat(3,minmax(0,1fr)) 44px;gap:6px}
 .port-offer-nav button{border-radius:3px;text-align:left;min-width:0;min-height:42px;padding:8px 11px;display:flex;align-items:center;gap:9px;font-size:clamp(12px,1.2cqw,15px);line-height:1.2;color:#dce9da}
 .port-offer-nav button span:first-child{font:clamp(17px,1.6cqw,22px) 'VT323',monospace;color:#add8aa}
 .port-offer-nav button[aria-pressed=true]{background:#c8f3ae;color:#0c2018}
 .port-offer-nav button[aria-pressed=true] span:first-child{color:#31573e}
 .port-offer-nav .port-broadcast-toggle{justify-content:center;font-size:18px;padding:7px}
 .port-broadcast-bottom{display:flex;align-items:center;justify-content:space-between;gap:15px;color:#c3dbc8;font-size:clamp(12px,1.3cqw,15px);margin-top:8px}
 .port-broadcast-bottom button{flex:none;white-space:nowrap}
 .port-motion{background:radial-gradient(ellipse at 75% 40%,#184b4966,transparent 55%),linear-gradient(125deg,#091719,#112c2b,#081419)}
 .port-motion:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,15,16,.57),transparent 66%),linear-gradient(0deg,rgba(5,13,13,.85),transparent 50%);pointer-events:none}
 /* CH 03 — editorial interview: questions are always one click away */
 .port-ch-3{background:radial-gradient(ellipse at 90% 20%,rgba(105,157,114,.13),transparent 45%),linear-gradient(145deg,#121b1c,#0f1718)}
 .port-how{gap:clamp(16px,2.5cqw,30px);max-width:1040px;width:100%;margin:0 auto}
 .port-interview-heading{display:flex;flex-direction:column;gap:9px}
 .port-interview-eyebrow,.port-answer-label{font:clamp(16px,1.7cqw,22px) 'VT323',monospace;letter-spacing:.13em;color:#bfe6b7}
 .port-how .port-interview-heading h2{font-size:clamp(35px,4.8cqw,62px);letter-spacing:-.055em;max-width:850px}
 .port-interview-heading p{margin:0;color:#cad8cc;font-size:clamp(15px,1.5cqw,18px)}
 .port-q{border:0;border-left:3px solid #bee9b1;border-radius:0;background:rgba(20,39,31,.7)}
 .port-q-question{background:transparent;padding:18px clamp(17px,2.8cqw,32px) 10px}
 .port-q-question strong{font-size:clamp(22px,2.6cqw,36px);font-weight:500;margin-top:7px}
 .port-q-answer{background:transparent;padding:12px clamp(17px,2.8cqw,32px) 22px;font-size:clamp(16px,1.65cqw,22px);line-height:1.48;min-height:100px;animation:portCinemaAppear .32s ease-out both}
 .port-answer-label{margin-bottom:10px;color:#a9c9ab}
 .port-answer-label span{opacity:.6}
 .port-q-menu{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px}
 .port-q-menu button{display:flex;align-items:center;justify-content:flex-start;gap:10px;min-width:0;border-radius:4px;background:#23322966;border-color:#61796899;padding:11px 12px;font-size:clamp(12px,1.35cqw,16px);text-align:left}
 .port-q-menu button span{font:clamp(18px,1.8cqw,23px) 'VT323',monospace;letter-spacing:.05em;opacity:.75}
 .port-q-menu button[aria-pressed=true]{background:#c8f3ae;border-color:#c8f3ae;color:#13231a}
 .port-how-summary{margin:0;color:#bdd5c0;font-size:clamp(13px,1.4cqw,17px);border-top:1px solid #a3cca544;padding-top:14px}
 /* CH 04 — end-credit composition, one primary action */
 .port-ch-4{background:radial-gradient(circle at 50% 45%,rgba(76,126,84,.16),transparent 43%),linear-gradient(135deg,#10191a,#0b1114)}
 .port-contact{gap:clamp(13px,1.9cqw,23px)}
 .port-contact-mark{font-size:clamp(35px,5cqw,70px);line-height:1;color:#c6edb3;opacity:.86}
 .port-contact-kicker{font:clamp(17px,1.7cqw,23px) 'VT323',monospace;letter-spacing:.18em;color:#b5d6b6}
 .port-contact h2{font-size:clamp(49px,7cqw,92px);letter-spacing:-.07em}
 .port-contact p{font-size:clamp(17px,1.9cqw,23px);max-width:630px;color:#d9e3dc}
 .port-contact-actions{margin-top:clamp(7px,1.5cqw,17px);gap:11px}
 .port-contact-actions a{border-radius:4px;padding:14px 22px;box-shadow:0 6px 24px #0003}
 .port-linkedin-pending{display:inline-flex;justify-content:center;align-items:center;padding:14px 22px;border:1px solid #849c89;border-radius:4px;color:#b8ccba;opacity:.7;cursor:default;font-weight:500}
 .port-contact-address{color:#c8f3ae;text-decoration:none;border-bottom:1px solid #c8f3ae55;font-size:clamp(16px,1.6cqw,21px)}
 .port-contact-meta{color:#b3c9b6;font-size:clamp(13px,1.3cqw,16px)}
 @media(max-width:780px){
  .port-ch-2>.port-top{padding:20px 18px 0}
  .port-broadcast{padding:15px 18px 24px;gap:14px;min-height:450px}
  .port-broadcast-heading{min-height:100px}
  .port-epg-body{grid-template-columns:1fr}
  .port-offer-nav{grid-template-columns:repeat(3,minmax(0,1fr)) 38px}
  .port-offer-nav button{justify-content:center;padding:8px 5px}
  .port-offer-nav button span:nth-child(2){display:none}
  .port-broadcast-bottom{flex-wrap:wrap}
  .port-q-menu{grid-template-columns:repeat(2,minmax(0,1fr))}
  .port-how{gap:16px}
  .port-contact-actions{flex-direction:column;width:min(100%,350px)}
  .port-linkedin-pending{width:100%}
 }
 @media(prefers-reduced-motion:reduce){.port-q-answer{animation:none}}
 
 /* TV studio — all four answers readable immediately, with no buttons or EPG panel */
 .port-ch-3{gap:clamp(12px,1.5cqw,20px);padding:clamp(20px,2.6cqw,34px) clamp(24px,4.1cqw,56px)}
 .port-interview-stage{flex:1;min-height:0;max-width:1250px;width:100%;margin:auto;display:flex;flex-direction:column;justify-content:center;gap:clamp(16px,2.2cqw,30px);position:relative}
 .port-interview-stage:before{content:"";position:absolute;right:4%;top:8%;height:60%;aspect-ratio:1;border:1px solid var(--port-stage-line,rgba(210,245,200,.12));border-radius:50%;pointer-events:none;filter:blur(.5px)}
 .port-interview-intro{display:flex;justify-content:space-between;gap:16px;font:clamp(14px,1.5cqw,19px) 'VT323',monospace;letter-spacing:.15em;color:var(--port-accent,#c8f3ae);border-bottom:1px solid var(--port-rule,rgba(203,245,196,.25));padding-bottom:clamp(9px,1.4cqw,17px)}
 .port-interview-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:clamp(26px,4.3cqw,65px);row-gap:clamp(22px,3.4cqw,44px);position:relative}
 .port-interview-item{min-width:0;padding:0 0 0 clamp(12px,1.4cqw,20px);border-left:2px solid var(--port-rule,rgba(203,245,196,.3));animation:portCinemaAppear .55s ease-out both}
 .port-interview-item:nth-child(2){animation-delay:.08s}.port-interview-item:nth-child(3){animation-delay:.16s}.port-interview-item:nth-child(4){animation-delay:.24s}
 .port-interview-index{font:clamp(15px,1.6cqw,21px) 'VT323',monospace;letter-spacing:.15em;color:var(--port-accent,#c8f3ae);margin-bottom:clamp(7px,.9cqw,11px)}
 .port-interview-item h2{font-size:clamp(21px,2.35cqw,34px);line-height:1.15;font-weight:550;letter-spacing:-.04em;margin:0 0 clamp(8px,1cqw,14px);color:var(--port-ink,#f2f6f0)}
 .port-interview-item p{font-size:clamp(14px,1.42cqw,19px);line-height:1.46;max-width:49ch;margin:0;color:var(--port-muted,#c4d4ca)}
 .port-interview-summary{border-top:1px solid var(--port-rule,rgba(203,245,196,.25));padding-top:clamp(10px,1.3cqw,17px);font-size:clamp(13px,1.3cqw,17px);color:var(--port-muted,#c4d4ca);text-align:center}
 @media(max-width:780px){.port-ch-3{padding:26px 20px}.port-interview-grid{grid-template-columns:1fr;gap:20px}.port-interview-stage{justify-content:flex-start}.port-interview-intro{font-size:14px}.port-interview-intro span:last-child{display:none}.port-interview-item h2{font-size:23px}.port-interview-item p{font-size:15px}.port-interview-summary{text-align:left}}
 @media(prefers-reduced-motion:reduce){.port-interview-item{animation:none}}
 /* Central theme mapping: the TV controller sets the same theme for every channel */
 .port-channel{--port-bg:var(--page,#15181e);--port-ink:var(--ink,#f2f6f0);--port-accent:var(--brand,#c8f3ae);--port-muted:var(--ink-dim,#c4d4ca);--port-rule:var(--line,rgba(203,245,196,.25));--port-panel:var(--panel,#1e222a);background:var(--port-bg);color:var(--port-ink);transition:background-color .3s,color .3s}
 .port-channel[data-theme="black"]{--port-bg:#15181e;--port-panel:#202a2b;--port-muted:#c4d4ca;--port-rule:rgba(203,245,196,.25)}
 .port-channel[data-theme="aurora"]{--port-bg:#111626;--port-panel:#1a2036;--port-muted:#ced8e9;--port-rule:rgba(174,192,248,.28)}
 .port-channel[data-theme="paper"]{--port-bg:#f7ebd2;--port-ink:#18221c;--port-accent:#1e8a45;--port-muted:#47574b;--port-panel:#fff8e8;--port-rule:rgba(24,77,41,.23);--port-stage-line:rgba(30,138,69,.14)}
 .port-channel .port-top,.port-channel .port-cinema-eyebrow,.port-channel .port-credential>span:first-child,.port-channel .port-cinema-story strong,.port-channel .port-contact-kicker,.port-channel .port-contact-mark,.port-channel .port-contact-address,.port-channel .port-epg-top,.port-channel .port-broadcast-index{color:var(--port-accent)}
 .port-ch-1,.port-ch-3,.port-ch-4{background:var(--port-bg);color:var(--port-ink)}
 .port-ch-1{background-image:radial-gradient(ellipse at 85% 35%,var(--port-glow,rgba(163,221,174,.10)),transparent 56%)}
 .port-ch-3{background-image:radial-gradient(ellipse at 90% 25%,var(--port-glow,rgba(163,221,174,.11)),transparent 53%)}
 .port-ch-4{background-image:radial-gradient(circle at 50% 45%,var(--port-glow,rgba(163,221,174,.13)),transparent 47%)}
 .port-channel[data-theme="aurora"]{--port-glow:rgba(139,143,237,.19)}
 .port-channel[data-theme="paper"]{--port-glow:rgba(30,138,69,.12)}
 .port-channel .port-about h2,.port-channel .port-interview-item h2,.port-channel .port-contact h2{color:var(--port-ink)}
 .port-channel .port-cinema-story p,.port-channel .port-interview-item p,.port-channel .port-contact p,.port-channel .port-contact-meta,.port-channel .port-contact-address,.port-channel .port-foot,.port-channel .port-credential small{color:var(--port-muted)}
 .port-channel .port-foot{border-color:var(--port-rule)}
 .port-channel .port-foot button{color:var(--port-accent)}
 .port-channel .port-photo-frame{border-color:var(--port-rule);background:var(--port-panel)}
 .port-channel .port-cinema-eyebrow,.port-channel .port-credential,.port-channel .port-contact-address{border-color:var(--port-rule)}
 .port-channel .port-credential{color:var(--port-muted)}
 .port-channel .port-cinema-story strong{color:var(--port-accent)}
 .port-ch-2{background:var(--port-bg)}
 .port-channel[data-theme="aurora"] .port-motion{background:radial-gradient(ellipse at 70% 35%,rgba(122,134,243,.32),transparent 55%),linear-gradient(115deg,#10152c,#1a2950,#0e1223)}
 .port-channel[data-theme="paper"] .port-motion{background:radial-gradient(ellipse at 70% 35%,rgba(36,123,65,.23),transparent 60%),linear-gradient(115deg,#f7ebd2,#e4dfc5,#f6eddb)}
 .port-channel[data-theme="paper"] .port-motion:after{background:linear-gradient(90deg,rgba(255,248,232,.35),transparent 70%)}
 .port-channel[data-theme="paper"] .port-orb{border-color:rgba(30,138,69,.28)}
 .port-ch-2 .port-broadcast-bottom,.port-ch-2 .port-broadcast-index{color:var(--port-ink)}
 .port-ch-2 .port-epg{background:var(--port-panel);border-color:var(--port-rule);color:var(--port-ink)}
 .port-ch-2 .port-epg h3,.port-ch-2 .port-epg p{color:var(--port-ink)}
 .port-ch-2 .port-epg-top{border-color:var(--port-rule)}
 .port-ch-2 .port-offer-nav button{color:var(--port-ink);border-color:var(--port-rule)}
 .port-ch-2 .port-offer-nav button span:first-child{color:var(--port-accent)}
 .port-ch-2 .port-offer-nav button[aria-pressed=true]{background:var(--port-accent);color:var(--port-bg)}
 .port-ch-2 .port-offer-nav button[aria-pressed=true] span:first-child{color:var(--port-bg)}
 .port-ch-2 .port-progress i{background:var(--port-accent)}
 .port-ch-2 .port-progress{background:var(--port-rule)}
 .port-ch-2 .port-broadcast-bottom button{border-color:var(--port-rule);color:var(--port-ink)}
 .port-channel[data-theme="paper"] .port-motion-card{border-color:rgba(30,138,69,.3);background:rgba(30,138,69,.08)}
 .port-channel[data-theme="paper"] .port-motion-card i{background:rgba(30,138,69,.25)}
 .port-channel[data-theme="paper"] .port-broadcast .port-headline{text-shadow:none;color:var(--port-ink)}
 .port-channel .port-contact-actions a{background:var(--port-accent);color:var(--port-bg);border-color:var(--port-accent)}
 .port-channel .port-linkedin-pending{border-color:var(--port-rule);color:var(--port-muted)}
 .port-channel[data-theme="paper"] .port-interview-item{border-color:var(--port-rule)}
  @keyframes portSpin{to{transform:rotate(360deg)}}@keyframes portFloat{50%{translate:0 -20px}}@keyframes portPulse{50%{opacity:.2;scale:.7}}
 @media(max-width:780px){.port-channel{padding:35px 22px}.port-about{grid-template-columns:minmax(0,1fr);gap:20px}.port-portrait{max-width:175px}.port-about h2,.port-how h2,.port-contact h2{font-size:clamp(33px,9vw,53px)}.port-about p{font-size:16px}.port-ch-2{padding:0}.port-broadcast{padding:25px 18px}.port-broadcast .port-headline{font-size:clamp(38px,9vw,56px)}.port-epg-body{grid-template-columns:1fr}.port-offer-nav{justify-content:flex-start}.port-contact p{font-size:16px}}
 @media(prefers-reduced-motion:reduce){.port-motion *{animation:none!important}.port-motion{background:#172a27}}
 `}</style>
 <Top n={number} label={["","ABOUT ME","WHAT I DO","HOW I WORK","CONTACT"][number]}/>
 {number===1&&<>
 <div className="port-about">
  <div className="port-cinema-copy">
    <div className="port-cinema-eyebrow">CHAPTER 01 <span aria-hidden="true">/ THE STORY SO FAR</span></div>
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
  <div className="port-cinema-portrait"><div className="port-photo-frame"><Portrait/><span className="port-photo-corner" aria-hidden="true">REC ●</span></div><div className="port-credential"><span>5+ <small>{lang==="fr"?"ANS D’EXPÉRIENCE":"YEARS OF EXPERIENCE"}</small></span><span>VENDOR / SELLER CENTRAL</span></div></div>
 </div>
 <div className="port-foot"><span>THONY MAHERISON / FR · EN</span><button onClick={()=>onNavigate(2)}>{t.aboutNext} →</button></div>
 </>}
 {number===2&&<div className="port-broadcast">
 <Motion mode={offer}/><div className="port-broadcast-heading"><span className="port-broadcast-index">MAHERISON / FIELD NOTES — 0{offer+1}</span><div className="port-headline">{t.serviceHeadline}</div></div>
 <div className="port-epg"><div className="port-epg-top"><span>{t.servicePlay} / 0{offer+1}—03</span><span>EPG · AMAZON OPERATIONS</span></div><div className="port-epg-body">
 <div><h3>{t.offerNames[offer]}</h3><p>{t.offerDesc[offer]}</p></div>
 <div className="port-offer-nav">{[0,1,2].map(i=><button type="button" key={i} aria-label={t.offerNames[i]} aria-pressed={offer===i} onClick={()=>{setOffer(i);setProgress(0)}}><span>0{i+1}</span><span>{t.offerNames[i]}</span></button>)}<button className="port-broadcast-toggle" type="button" aria-label={paused?t.serviceResume:t.servicePause} onClick={()=>setPaused(x=>!x)}>{paused?"▶":"Ⅱ"}</button></div>
 </div><div className="port-progress"><i style={{width:progress+"%"}}/></div></div>
 <div className="port-broadcast-bottom"><span>{t.serviceIntro}</span><button style={action} onClick={()=>onNavigate(4)}>{t.serviceContact} ↗</button></div>
 </div>}
 {number===3&&<div className="port-interview-stage">
 <div className="port-interview-intro"><span>MAHERISON TV / THE INTERVIEW</span><span>{lang==="fr"?"04 QUESTIONS · 04 RÉPONSES":"04 QUESTIONS · 04 ANSWERS"}</span></div>
 <div className="port-interview-grid">
 {t.q.map((q,i)=><article className="port-interview-item" key={i}>
   <div className="port-interview-index">Q / 0{i+1}</div>
   <h2>{q}</h2>
   <p>{t.a[i]}</p>
 </article>)}
 </div>
 <div className="port-interview-summary">{t.howFooter}</div>
 </div>}
 {number===4&&<div className="port-contact"><div className="port-contact-mark" aria-hidden="true">✳</div><div className="port-contact-kicker">MAHERISON TV / OPEN CHANNEL</div><h2>{t.contactTitle}</h2><p>{t.contactDesc}</p><div className="port-contact-actions"><a href="mailto:thony@maherison.com?subject=Projet%20Amazon">✉ {t.contactEmail}</a><span aria-label={t.linkedinPending} title={t.linkedinPending} className="port-linkedin-pending">in · {t.contactLinkedin}</span></div><a className="port-contact-address" href="mailto:thony@maherison.com">thony@maherison.com</a><span className="port-contact-meta">{t.contactMeta}</span></div>}
 {number===4&&<div className="port-foot"><span>THANKS FOR WATCHING</span><span>END OF TRANSMISSION</span></div>}
 </section>;
}
