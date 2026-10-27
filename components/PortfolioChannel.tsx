"use client";
import React from "react";

const email="thonymaherison@gmail.com";
const accent="var(--brand,#cfffcf)";
const fg="var(--ink,#f3f3ed)";
const mono:React.CSSProperties={fontFamily:"'VT323',monospace",letterSpacing:".12em",fontSize:"clamp(17px,1.75cqw,24px)",color:accent};
const link:React.CSSProperties={display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"13px 24px",borderRadius:40,textDecoration:"none",fontSize:16,fontWeight:500,background:fg,color:"var(--bg,#111)",width:"fit-content"};
const panel:React.CSSProperties={border:"1px solid var(--line,rgba(255,255,255,.2))",borderRadius:18,padding:"clamp(16px,2.3cqw,28px)",background:"var(--pill-bg,rgba(255,255,255,.045))"};
const cardTitle:React.CSSProperties={fontSize:"clamp(21px,2.4cqw,32px)",fontWeight:500,letterSpacing:"-.045em",margin:"0 0 13px"};
function Label({children}:{children:React.ReactNode}){return <span style={mono}>{children}</span>}
function Header({n,kicker,title,highlight,subtitle}:{n:number;kicker:string;title:string;highlight:string;subtitle:string}){return <header style={{display:"flex",flexDirection:"column",gap:12}}>
 <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10}}><Label>CH 0{n} / {kicker}</Label><Label>● ON AIR</Label></div>
 <h2 style={{fontWeight:500,fontSize:"clamp(34px,5.4cqw,72px)",letterSpacing:"-.065em",lineHeight:1.02,margin:"10px 0 4px"}}>{title}<br/><span style={{color:accent}}>{highlight}</span></h2>
 <p style={{margin:0,opacity:.8,fontSize:"clamp(17px,1.85cqw,24px)",lineHeight:1.5,maxWidth:740}}>{subtitle}</p>
 </header>}
export default function PortfolioChannel({number,onNavigate}:{number:number;onNavigate:(n:number)=>void}) {
 if(number!==1&&number!==2)return null;
 return <section id={`ch-0${number}`} data-ch={number} aria-label={number===1?"Ce que je fais":"Contact"}
 style={{position:"relative",minHeight:"100%",height:"auto",boxSizing:"border-box",scrollSnapAlign:"start",background:"var(--page,#15181e)",color:fg,padding:"clamp(28px,4cqw,54px) clamp(18px,5cqw,70px) clamp(46px,6cqw,82px)",display:"flex",flexDirection:"column",gap:"clamp(16px,2.4cqw,28px)",justifyContent:"flex-start"}}>
 {number===1&&<>
  <Header n={1} kicker="WHAT I DO" title="Amazon, au quotidien." highlight="Je m'en occupe." subtitle="J'accompagne les marques sur Vendor et Seller Central, de la gestion du compte aux projets catalogue."/>
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,205px),1fr))",gap:12}}>
   {[["01 / ACCOUNT OPERATIONS","Gestion quotidienne","Dossiers Amazon, disponibilité, offres, commandes et suivi du compte."],
   ["02 / CATALOG & CONTENT","Catalogue & contenus","Fiches, variations, optimisation A+, localisation et mises à jour."],
   ["03 / TROUBLESHOOTING","Problèmes Amazon","Diagnostic, corrections, échanges avec Amazon et vérification."]].map(([k,t,d])=>
   <div key={k} style={panel}><Label>{k}</Label><h3 style={{...cardTitle,marginTop:20}}>{t}</h3><p style={{lineHeight:1.55,opacity:.76,margin:0,fontSize:"clamp(15px,1.5cqw,19px)"}}>{d}</p></div>)}
  </div>
  <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"}}>
   <button type="button" onClick={()=>onNavigate(2)} style={{...link,border:0,cursor:"pointer"}}>Parlons de votre compte ↗</button>
   <span style={{...mono,opacity:.78}}>VENDOR · SELLER · EUROPE</span>
  </div>
 </>}
 {number===2&&<>
  <Header n={2} kicker="GET IN TOUCH" title="Un projet Amazon ?" highlight="Parlons-en." subtitle="Besoin d'un suivi régulier ou d'un coup de main sur un sujet précis ? Écrivez-moi, on regarde ça ensemble."/>
  <div style={{...panel,maxWidth:770,display:"flex",flexDirection:"column",gap:18}}>
   <Label>CONTACT DIRECT / OPEN CHANNEL</Label>
   <a href={`mailto:${email}?subject=${encodeURIComponent("Parlons de mon compte Amazon")}`} style={link}>M'envoyer un e-mail ↗</a>
   <a href={`mailto:${email}`} style={{color:fg,opacity:.85,fontSize:"clamp(16px,2cqw,26px)",overflowWrap:"anywhere"}}>{email}</a>
   <p style={{fontSize:16,opacity:.65,lineHeight:1.5,margin:0}}>En français ou en anglais. Collaboration à distance, marchés européens.</p>
  </div>
  <button type="button" onClick={()=>onNavigate(0)} style={{border:0,background:"transparent",color:accent,cursor:"pointer",textAlign:"left",fontSize:16,width:"fit-content"}}>← Retour à l'accueil</button>
 </>}
 <div style={{...mono,opacity:.5,marginTop:12,fontSize:16}}>TH0NY MAHERISON / AMAZON & MARKETPLACE SPECIALIST</div>
 </section>;
}
