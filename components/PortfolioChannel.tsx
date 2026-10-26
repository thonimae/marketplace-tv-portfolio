"use client";
import React from "react";
import { ServiceBroadcast, InsightsBroadcast } from "./MarketplaceEditorial";

const email = "thonymaherison@gmail.com";
const rim = "1px solid var(--line,rgba(255,255,255,.19))";
const brand = "var(--brand,#cfffcf)";
const mono: React.CSSProperties = { fontFamily: "'VT323',monospace", letterSpacing: ".09em", fontSize: "clamp(17px,1.75cqw,23px)" };
const description: React.CSSProperties = { fontSize: "clamp(16px,1.7cqw,21px)", lineHeight: 1.6, opacity: .83, maxWidth: 840 };
const card: React.CSSProperties = { background: "var(--pill-bg,rgba(255,255,255,.06))", border: rim, borderRadius: 15, padding: "clamp(18px,2.6cqw,32px)" };
const h3: React.CSSProperties = { margin: "0 0 12px", fontWeight: 500, letterSpacing: "-.045em", fontSize: "clamp(25px,3.2cqw,40px)", lineHeight: 1.12 };
const detail: React.CSSProperties = { marginTop: 14, borderTop: rim, paddingTop: 15, lineHeight: 1.6, fontSize: "clamp(15px,1.5cqw,19px)" };
function Label({children}:{children:React.ReactNode}){return <div style={{...mono,color:brand,marginBottom:14}}>{children}</div>}
function Cta({children,subject}:{children:React.ReactNode;subject:string}) {return <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} style={{display:"inline-flex",alignItems:"center",borderRadius:999,padding:"13px 22px",background:"var(--ink,#fff)",color:"var(--bg,#111)",fontSize:15,fontWeight:500,textDecoration:"none",width:"fit-content"}}>{children} ↗</a>}
function Intro({n,kicker,title,accent,text}:{n:number;kicker:string;title:string;accent:string;text:string}){return <>
  <div style={{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",...mono,color:brand}}><span>CH 0{n} / {kicker}</span><span>TH0NY · MARKETPLACE JOURNAL</span></div>
  <header><h2 style={{margin:"20px 0 18px",fontSize:"clamp(43px,7cqw,96px)",lineHeight:.99,fontWeight:500,letterSpacing:"-.065em"}}>{title}<br/><span style={{color:brand}}>{accent}</span></h2><p style={description}>{text}</p></header>
</>}
const offers=[
 {tag:"01 / SUIVI RÉCURRENT",name:"Gestion Amazon au quotidien",for:"Pour les marques qui souhaitent déléguer régulièrement leurs opérations Vendor ou Seller Central.",result:"Un périmètre pris en charge, des actions suivies et une visibilité claire sur les sujets ouverts.",detail:["Catalogue : création et rattachement des fiches, variations, anomalies et mises à jour en masse.","Vendor : commandes d'achat, confirmations, suivi des expéditions, facturation et litiges.","Seller / FBA : suivi des offres, inventaire, envois et alertes du compte.","Prix, promotions, disponibilité, Buy Box et dossiers Amazon dans le périmètre convenu.","Suivi écrit des actions, arbitrages et prochaines étapes."],format:"Collaboration mensuelle, volume et responsabilités définis ensemble."},
 {tag:"02 / PROJET DÉFINI",name:"Catalogue & contenus Amazon",for:"Pour les marques qui veulent corriger, développer ou harmoniser leurs fiches produits.",result:"Des contenus prêts à soumettre, puis vérifiés sur les pages réellement publiées.",detail:["État des lieux des fiches et priorisation des corrections nécessaires.","Titres, points forts, descriptions, mots-clés et attributs.","Variations, identifiants produits, fiches bloquées ou mal rattachées.","Briefs et rédaction de contenus A+, localisation pour les marchés européens.","Propositions validées avec la marque, soumission et contrôle de l'affichage."],format:"Mission ponctuelle avec périmètre, livrables et étapes de validation."},
 {tag:"03 / INTERVENTION CIBLÉE",name:"Problèmes & dossiers Amazon",for:"Pour les marques confrontées à un blocage ou à un incident précis.",result:"Un diagnostic compréhensible, des démarches documentées et un suivi jusqu'à la conclusion possible du dossier.",detail:["Fiches supprimées ou contenus refusés.","Anomalies catalogue, prix, variations et identifiants produits.","Documents de conformité et alertes de santé du compte.","Investigation, constitution des éléments, échanges et relances auprès d'Amazon.","Vérification du résultat ; lorsque la décision dépend d'Amazon, transparence sur les limites."],format:"Intervention ponctuelle, selon la situation et les accès disponibles."}
];
const steps=[
 ["01 / OBSERVER","Je vérifie l'état réel du compte et les fiches visibles, pas seulement ce qu'indique un export."],
 ["02 / PRIORISER","Nous définissons les actions à engager et ce qui demande votre validation."],
 ["03 / INTERVENIR","Je traite les opérations et les échanges convenus, dans le cadre des accès accordés."],
 ["04 / CONTRÔLER","Je vérifie ce qui a effectivement été appliqué sur Amazon et poursuis les dossiers encore ouverts."],
 ["05 / RENDRE COMPTE","Vous savez ce qui a été fait, ce qui reste ouvert et ce dont j'ai besoin pour avancer."]
];
const notes=[
 {tag:"NOTE DE TERRAIN / 01",title:"Un badge « fréquemment retourné » sur des produits importants",summary:"Les motifs de retour de 27 fiches ont orienté le travail vers la compatibilité et la clarté des informations produit, plutôt que vers une simple contestation du badge.",outcome:"Corrections des contenus et suivi des dossiers ; un produit prioritaire réglé, un autre encore suivi."},
 {tag:"NOTE DE TERRAIN / 02",title:"Des fiches complètes en apparence, mais insuffisantes pour les clients",summary:"Les données collectées ne reflétaient pas exactement ce qui était affiché. La comparaison avec les fiches et les avis clients a révélé les vrais manques.",outcome:"Cinq fiches pilotes préparées ; impact sur la conversion encore à mesurer."},
 {tag:"NOTE DE TERRAIN / 03",title:"Des images refusées à cause d'une petite flèche",summary:"Le refus semblait technique. L'examen du message et de l'image principale a permis de repérer un élément graphique incompatible avec les exigences Amazon.",outcome:"Élément retiré, nouvelle soumission, produit débloqué."}
];
function Offer({o}:{o:typeof offers[number]}){return <article style={card}><Label>{o.tag}</Label><h3 style={h3}>{o.name}</h3><p style={{...description,fontWeight:500}}>{o.for}</p><p style={{...description,opacity:.7}}>{o.result}</p><details style={detail}><summary style={{cursor:"pointer",color:brand,fontWeight:500}}>Voir les prestations et modalités</summary><ul style={{paddingLeft:22}}>{o.detail.map(x=><li key={x} style={{margin:"10px 0"}}>{x}</li>)}</ul><p style={{opacity:.75}}><strong>Format :</strong> {o.format}</p></details></article>}
function Article({tag,title,summary,outcome}:{tag:string;title:string;summary:string;outcome:string}){return <article style={card}><Label>{tag}</Label><h3 style={h3}>{title}</h3><p style={description}>{summary}</p><div style={{borderTop:rim,marginTop:20,paddingTop:18}}><Label>CE QUI A ÉTÉ FAIT / CONSTATÉ</Label><p style={{...description,margin:0}}>{outcome}</p></div></article>}
export default function PortfolioChannel({number,onNavigate}:{number:number;onNavigate:(n:number)=>void}){
if(number<1||number>5)return null;
return <section id={`ch-0${number}`} data-ch={number} aria-label={`Chaîne 0${number}`} style={{position:"relative",minHeight:"100%",scrollSnapAlign:"start",padding:"clamp(70px,8cqw,110px) clamp(20px,6cqw,84px)",background:"var(--page,#15181e)",color:"var(--ink,#f5f3ed)",display:"flex",flexDirection:"column",gap:"clamp(28px,4cqw,52px)"}}>
{number===1&&<ServiceBroadcast go={onNavigate}/>}
{number===2&&<>
 <Intro n={2} kicker="EXPÉRIENCE" title="Des opérations vécues." accent="Pas seulement décrites." text="Mon parcours s'est construit dans la gestion réelle de comptes Vendor et Seller Central, d'abord en environnement d'agence, puis auprès de marques en indépendant."/>
 <div style={{display:"grid",gap:15}}>
 <article style={card}><Label>AUJOURD'HUI / INDÉPENDANT</Label><h3 style={h3}>Amazon & Marketplace Consultant</h3><p style={description}>Gestion de comptes européens, maintenance de catalogues, optimisation de fiches et contenus A+, suivi des incidents et coordination avec les équipes des marques.</p><p style={{opacity:.7}}>Vendor & Seller Central · FR / DE / IT / ES / UK</p></article>
 <article style={card}><Label>EXPÉRIENCE EN AGENCE</Label><h3 style={h3}>Amazon & Marketplaces Platform Specialist</h3><p style={description}>Interventions sur les opérations Vendor et Seller Central : contenus, support, suivi des commandes et des promotions, données de performance et problèmes de compte.</p></article>
 </div>
 <div style={{...card,background:"transparent"}}>
   <Label>CE QUI CARACTÉRISE MON EXPÉRIENCE</Label>
   <h3 style={h3}>Du suivi quotidien aux sujets qui demandent une investigation.</h3>
   <p style={description}>Fiches et variations, contenus multilingues, disponibilité, conformité, dossiers Amazon et coordination avec les équipes : j'ai appris à travailler sur ces sujets dans le contexte réel d'un compte, avec ses contraintes et ses priorités.</p>
   <p style={description}>Je privilégie la clarté du suivi et la vérification des changements. Une demande soumise n'est pas nécessairement une correction publiée.</p>
   <button type="button" onClick={()=>onNavigate(3)} style={{border:"1px solid var(--line,rgba(255,255,255,.2))",background:"transparent",borderRadius:999,padding:"12px 18px",color:"var(--ink,#fff)",cursor:"pointer",fontSize:15}}>Explorer les décryptages sectoriels · CH 03 ↗</button>
 </div>
 <Cta subject="Échanger sur une mission Amazon">Échanger sur une mission</Cta>
</>}
{number===3&&<InsightsBroadcast go={onNavigate}/>}
{number===4&&<>
 <Intro n={4} kicker="À PROPOS" title="Thony Maherison." accent="Amazon au quotidien." text="Je travaille en indépendant avec des marques qui ont besoin d'un interlocuteur impliqué dans leurs opérations Amazon, capable d'intervenir sur le terrain et de communiquer clairement."/>
 <div style={card}><Label>MON APPROCHE</Label><p style={description}>Mon parcours m'a amené du service client et des solutions digitales à l'environnement marketplace, puis à la gestion de comptes Vendor et Seller Central en agence et en freelance. Je travaille à distance, en français et en anglais, avec des marques présentes sur les marchés européens.</p><p style={description}>Je m'engage sur ce que je maîtrise : la rigueur du travail, la clarté des échanges, la vérification des corrections et la transparence lorsque quelque chose dépend d'Amazon ou d'un autre intervenant.</p></div>
 <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,210px),1fr))",gap:12}}>{[
 ["UN PÉRIMÈTRE CLAIR","Nous précisons les priorités, les marchés et les responsabilités dès le départ."],
 ["DES ACCÈS MAÎTRISÉS","Accès dédiés et droits limités aux besoins de la mission."],
 ["UN SUIVI LISIBLE","Des comptes rendus concis, des problèmes suivis et des décisions partagées."]
 ].map(([t,d])=><article key={t} style={card}><Label>{t}</Label><p style={description}>{d}</p></article>)}</div>
 <Cta subject="Prendre contact avec Thony Maherison">Faisons connaissance</Cta>
</>}
{number===5&&<>
 <Intro n={5} kicker="CONTACT" title="Parlons de" accent="votre compte." text="Vous avez besoin d'un suivi régulier ou d'une intervention précise ? Décrivez-moi votre situation, les marketplaces concernés et ce qui vous préoccupe."/>
 <div style={card}><Label>PREMIER ÉCHANGE / SANS ENGAGEMENT</Label><h3 style={h3}>Commençons par votre besoin.</h3><p style={description}>Vous me présentez votre marque, votre type de compte (Vendor, Seller ou les deux) et les sujets prioritaires. Nous clarifions ensuite le périmètre et les modalités d'intervention, sur devis.</p><Cta subject="Demande de collaboration Amazon Vendor / Seller Central">Envoyer un e-mail</Cta><p style={{marginTop:18,opacity:.7,fontSize:16}}>{email}</p></div>
 <div style={{...card,background:"transparent"}}><Label>POUR BIEN DÉMARRER</Label><p style={description}>Vous conservez la maîtrise de votre compte et de vos décisions. Si nous collaborons, les accès sont limités aux droits nécessaires et les modifications sensibles sont validées avec vous.</p></div>
</>}
<div style={{marginTop:"auto",paddingTop:20,borderTop:rim,...mono,opacity:.65}}>MAHERISON.COM / AMAZON VENDOR & SELLER CENTRAL · FR / EN</div>
</section>
}
