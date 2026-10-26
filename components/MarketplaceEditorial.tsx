"use client";
import React, { useState } from "react";

type Jump = (n: number) => void;
type Service = { number: string; signal: string; title: string; lead: string; audience: string; scope: string[]; delivery: string; format: string; scenario: string };
type Story = { id: string; title: string; category: string; issue: string; observation: string; analysis: string; lesson: string; source: string; sourceTitle: string; related: string; example: string };

const services: Service[] = [
  {
    number: "01", signal: "SUIVI RÉCURRENT", title: "Gestion Amazon au quotidien",
    lead: "Un interlocuteur pour les opérations qui ne peuvent pas attendre la prochaine réunion.",
    audience: "Votre marque vend déjà sur Amazon, mais le catalogue, les dossiers et les contrôles quotidiens prennent trop de place.",
    scope: ["Vendor et Seller Central : suivi des opérations et des alertes", "Catalogue, offres, disponibilité et prix", "Dossiers Amazon, relances et coordination", "Commandes, litiges et conformité selon le périmètre", "Compte rendu clair des actions et points ouverts"],
    delivery: "Des sujets pris en charge, un état d'avancement lisible et des priorités revues ensemble.",
    format: "Collaboration mensuelle · périmètre et volume définis ensemble",
    scenario: "Une fiche change sans prévenir, une autre devient indisponible et un dossier reste sans réponse. Il faut suivre ces sujets sans perdre le fil de l'activité."
  },
  {
    number: "02", signal: "PROJET DÉFINI", title: "Catalogue & contenus Amazon",
    lead: "Des fiches conçues pour les clients et cohérentes avec les exigences de la marketplace.",
    audience: "Vous devez remettre en état, enrichir ou déployer un catalogue, sans sacrifier la cohérence des données.",
    scope: ["État des lieux et priorisation des références", "Titres, points forts, attributs et mots-clés", "Variations, identifiants et relations entre produits", "Contenus A+ et adaptation aux marchés européens", "Soumission des changements et vérification en ligne"],
    delivery: "Des contenus préparés et vérifiés, avec un suivi des modifications effectivement publiées.",
    format: "Mission ponctuelle · livrables et validations convenus",
    scenario: "Les fiches semblent correctes dans un fichier, mais l'affichage réel diffère selon les pays ou les variations."
  },
  {
    number: "03", signal: "INTERVENTION CIBLÉE", title: "Problèmes & dossiers Amazon",
    lead: "Comprendre le blocage, agir sur ce qui peut l'être, suivre la décision.",
    audience: "Une fiche est supprimée, une mise à jour échoue ou Amazon réclame des informations supplémentaires.",
    scope: ["Lecture des statuts, messages et historiques", "Investigation des conflits et anomalies catalogue", "Préparation des corrections et éléments justificatifs", "Échanges avec Amazon et relances pertinentes", "Vérification du résultat et transparence sur les limites"],
    delivery: "Un diagnostic documenté et des actions suivies, sans promettre une décision qu'Amazon contrôle.",
    format: "Mission ponctuelle · selon l'incident et les accès disponibles",
    scenario: "Une nouvelle image est rejetée malgré plusieurs essais. La priorité est de comprendre ce que valide réellement le système."
  }
];

const stories: Story[] = [
  {
    id:"01", title:"Quand un changement d'emballage bloque une fiche Amazon",
    category:"IMAGES / CATALOGUE", issue:"Une nouvelle image principale peut être refusée même lorsque le produit physique reste inchangé.",
    observation:"Un cas publié par OSS Lab décrit une mise à jour d'emballage dont le visuel est rejeté. La fiche perd alors sa visibilité parce que l'image principale valide manque.",
    analysis:"Le refus ne doit pas être traité comme un simple problème de dimensions. Il faut distinguer l'identité du produit, les données de catalogue et le mécanisme de validation de l'image. Dans le cas publié, le diagnostic s'intéresse à cette différence entre produit inchangé et image très différente.",
    lesson:"Avant de relancer un chargement, identifier le niveau exact du blocage. Une suppression de fiche est parfois le symptôme d'un contrôle situé ailleurs.",
    source:"https://lab.onlinesellersolutions.com/p/case-042-amazon-is-suppressing-listings",
    sourceTitle:"OSS Lab, Case #042", related:"Problèmes & dossiers Amazon",
    example:"Exemple sectoriel publié par Online Seller Solutions. Ce n'est pas une mission réalisée par Thony Maherison."
  },
  {
    id:"02", title:"Des variations incohérentes compliquent tout un catalogue",
    category:"VARIATIONS / CONTENUS", issue:"Les mauvaises relations parent-enfant et les informations incohérentes fragmentent les pages produits.",
    observation:"Une étude publiée par Awesome Dynamic décrit un catalogue de lacets avec des couleurs dupliquées, des tailles incorrectes et des variantes qui ne se regroupaient pas comme prévu.",
    analysis:"La remise en cohérence passe par une lecture de la structure du catalogue, la correction des informations et le suivi des échanges avec Amazon. L'étude inclut également des actions publicitaires : leurs résultats commerciaux ne peuvent donc pas être attribués uniquement aux corrections catalogue.",
    lesson:"La qualité du catalogue est aussi une question de structure, pas simplement de mots-clés ou de rédaction.",
    source:"https://www.awesomedynamic.com/wp-content/uploads/2023/09/Awesome_Dynamic_Case_Study_Boosting-Rank_and_Revenue.pdf",
    sourceTitle:"Awesome Dynamic, Boosting Rank and Revenue", related:"Catalogue & contenus Amazon",
    example:"Analyse d'une étude publiée par Awesome Dynamic. Les résultats éventuels appartiennent à cette agence et à son client."
  },
  {
    id:"03", title:"La disponibilité des fiches avant la performance publicitaire",
    category:"ÉLIGIBILITÉ / OPÉRATIONS", issue:"Des fiches supprimées ou non éligibles peuvent perturber les opérations et les campagnes.",
    observation:"BellaVix décrit un compte de marque de beauté affecté par des suppressions de fiches et par une structure publicitaire à revoir.",
    analysis:"Leur intervention combine remise en conformité des fiches, amélioration des contenus et restructuration des campagnes. Le cas illustre comment les opérations catalogue et la publicité se croisent, sans qu'il faille confondre le rôle de chaque intervention.",
    lesson:"Avant d'optimiser l'acquisition, vérifier que les produits concernés sont correctement publiés et éligibles.",
    source:"https://www.bellavix.com/case-study/unsupressing-listings-increase-sales-in-the-beauty-category/",
    sourceTitle:"BellaVix, Unsuppressing Listings", related:"Gestion Amazon au quotidien",
    example:"Décryptage d'un cas publié par BellaVix. Ce cas ne fait pas partie des références clients de Thony Maherison."
  }
];

const ink="var(--ink,#f3f2eb)";
const lime="var(--brand,#cfffcf)";
const line="var(--line,rgba(255,255,255,.18))";
const mono:React.CSSProperties={fontFamily:"'VT323',monospace",letterSpacing:".12em",fontSize:"clamp(16px,1.7cqw,23px)"};
const paragraph:React.CSSProperties={fontSize:"clamp(16px,1.7cqw,21px)",lineHeight:1.62,opacity:.8,maxWidth:790};
const frame:React.CSSProperties={border:"1px solid "+line,borderRadius:18,background:"var(--pill-bg,rgba(255,255,255,.045))"};
const linkBase:React.CSSProperties={border:"1px solid "+line,borderRadius:999,padding:"12px 18px",fontSize:15,color:ink,background:"transparent",textDecoration:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:8};
function Tag({children}:{children:React.ReactNode}){return <span style={{...mono,color:lime}}>{children}</span>}
function JumpButton({go,to,children,solid=false}:{go:Jump;to:number;children:React.ReactNode;solid?:boolean}){return <button type="button" onClick={()=>go(to)} style={{...linkBase,...(solid?{background:ink,color:"var(--bg,#141414)",borderColor:ink}:{})}}>{children}<span aria-hidden>↗</span></button>}
function Header({number,label,line1,line2,text}:{number:string;label:string;line1:string;line2:string;text:string}){return <header style={{display:"flex",flexDirection:"column",gap:17}}>
 <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10}}><Tag>CH {number} / {label}</Tag><Tag>● ON AIR</Tag></div>
 <h2 style={{fontSize:"clamp(44px,7.5cqw,104px)",lineHeight:.96,fontWeight:500,letterSpacing:"-.067em",margin:"12px 0 0"}}>{line1}<br/><span style={{color:lime}}>{line2}</span></h2>
 <p style={paragraph}>{text}</p>
 </header>}
function ServicePanel({service,go}:{service:Service;go:Jump}){const [expanded,setExpanded]=useState(false);return <article style={{...frame,overflow:"hidden"}}>
 <div style={{padding:"clamp(23px,3.4cqw,46px)",display:"flex",flexDirection:"column",gap:16}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12,flexWrap:"wrap"}}><Tag>TRANSMISSION / {service.number}</Tag><Tag>{service.signal}</Tag></div>
  <h3 style={{fontSize:"clamp(30px,4.2cqw,58px)",lineHeight:1.03,letterSpacing:"-.055em",fontWeight:500,maxWidth:820,margin:"10px 0 0"}}>{service.title}</h3>
  <p style={{fontSize:"clamp(19px,2.1cqw,27px)",lineHeight:1.35,maxWidth:770,margin:"0 0 4px"}}>{service.lead}</p>
  <p style={{...paragraph,margin:0}}>{service.audience}</p>
  <div style={{background:"rgba(134,176,128,.08)",borderLeft:"3px solid "+lime,borderRadius:4,padding:"17px 20px",marginTop:10}}>
   <Tag>LE GENRE DE SITUATION</Tag><p style={{lineHeight:1.55,fontSize:17,margin:"10px 0 0"}}>{service.scenario}</p>
  </div>
  <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",gap:10,marginTop:8}}>
    <button type="button" aria-expanded={expanded} onClick={()=>setExpanded(!expanded)} style={linkBase}>{expanded?"Masquer le périmètre":"Voir le périmètre et les livrables"}<span aria-hidden>{expanded?"−":"+"}</span></button>
    <JumpButton go={go} to={5} solid>Parlons de votre besoin</JumpButton>
  </div>
 </div>
 {expanded&&<div style={{borderTop:"1px solid "+line,padding:"clamp(22px,3cqw,40px)",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,270px),1fr))",gap:"22px 38px"}}>
   <div><Tag>CE QUE JE PEUX PRENDRE EN CHARGE</Tag><ul style={{paddingLeft:22,lineHeight:1.6,fontSize:17}}>{service.scope.map(s=><li key={s} style={{margin:"11px 0"}}>{s}</li>)}</ul></div>
   <div><Tag>CE QUE VOUS RECEVEZ</Tag><p style={paragraph}>{service.delivery}</p><Tag>FORMAT</Tag><p style={{...paragraph,fontSize:16}}>{service.format}</p></div>
 </div>}
 </article>}
export function ServiceBroadcast({go}:{go:Jump}){return <>
 <Header number="01" label="SERVICES" line1="Vos opérations Amazon." line2="Notre travail ensemble." text="Un besoin régulier, un catalogue à faire évoluer ou un problème précis : trois formats d'intervention, un même principe. Comprendre la situation, agir sur le périmètre défini et vérifier ce qui change réellement."/>
 <div style={{display:"flex",alignItems:"center",gap:14,flexWrap:"wrap",...mono,color:lime}}><span>PROGRAMME / 03 OFFRES</span><span style={{opacity:.55}}>━━━━━━━━━━━━━━━━━━━</span><span>FAITES DÉFILER ↓</span></div>
 <div style={{display:"grid",gap:18}}>{services.map(s=><ServicePanel key={s.number} service={s} go={go}/>)}</div>
 <div style={{...frame,padding:"clamp(24px,3.5cqw,44px)"}}>
   <Tag>COMMENT NOUS AVANÇONS</Tag>
   <h3 style={{fontSize:"clamp(28px,4.3cqw,55px)",letterSpacing:"-.05em",fontWeight:500,maxWidth:760,margin:"18px 0 25px"}}>Le travail se juge sur ce qui change vraiment.</h3>
   <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,185px),1fr))",gap:22}}>{[
     ["01","Observer","Regarder la situation dans le compte et sur les fiches réellement affichées."],
     ["02","Valider","Définir les priorités et les changements avec vous."],
     ["03","Appliquer","Exécuter et suivre les actions convenues."],
     ["04","Vérifier","Contrôler les corrections publiées et les problèmes ouverts."],
     ["05","Informer","Vous tenir au courant de l'avancement et des décisions à prendre."]
   ].map(([n,t,d])=><div key={n}><Tag>{n} / {t.toUpperCase()}</Tag><p style={{lineHeight:1.55,fontSize:16,opacity:.78}}>{d}</p></div>)}</div>
 </div>
 <div style={{display:"flex",flexDirection:"column",gap:15,padding:"10px 0 15px"}}>
   <Tag>OUTILS ET MÉTHODE</Tag>
   <p style={{...paragraph,margin:0}}>Amazon évolue, mes outils aussi. J'utilise notamment l'IA et l'automatisation pour faciliter certaines analyses, le travail sur les catalogues et le suivi, tout en vérifiant les informations et en gardant la main sur les décisions.</p>
 </div>
 <div style={{...frame,padding:"clamp(22px,3cqw,38px)",display:"flex",flexDirection:"column",alignItems:"flex-start",gap:13}}>
   <Tag>EN SAVOIR PLUS</Tag><h3 style={{fontSize:"clamp(28px,3.6cqw,46px)",margin:0,fontWeight:500,letterSpacing:"-.04em"}}>Des situations réelles, expliquées par des spécialistes du secteur.</h3>
   <p style={{...paragraph,margin:0}}>Retrouvez nos décryptages de cas publiés par des professionnels Amazon. Ces analyses servent à comprendre les mécanismes de la plateforme : ce ne sont pas mes propres références clients.</p>
   <JumpButton go={go} to={3}>Regarder les décryptages · CH 03</JumpButton>
 </div>
 </>}
function StatusPanel({story}:{story:Story}){return <div style={{...frame,overflow:"hidden",background:"#11171a",color:"#e8f0e8"}}>
 <div style={{padding:"14px 20px",borderBottom:"1px solid #37443d",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}><span style={{...mono,color:"#cfffcf"}}>SIGNAL / INCIDENT {story.id}</span><span style={{...mono,color:"#adb9ad"}}>AMAZON OPERATIONS</span></div>
 <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,220px),1fr))",gap:0}}>
  <div style={{padding:"22px 23px",borderRight:"1px solid #37443d"}}><div style={{...mono,color:"#b9c7b9"}}>SYMPTÔME</div><p style={{fontSize:18,lineHeight:1.46}}>{story.issue}</p></div>
  <div style={{padding:"22px 23px"}}><div style={{...mono,color:"#cfffcf"}}>POINT DE VIGILANCE</div><p style={{fontSize:18,lineHeight:1.46}}>{story.lesson}</p></div>
 </div>
 <div style={{background:"#202d25",padding:"12px 22px",...mono,color:"#d8e8d9"}}>CECI EST UNE ANALYSE D'UNE SOURCE EXTERNE, PAS UN CAS CLIENT PERSONNEL</div>
 </div>}
function StoryReader({story,onBack,go}:{story:Story;onBack:()=>void;go:Jump}){return <article style={{display:"grid",gap:24}}>
 <button type="button" onClick={onBack} style={{...linkBase,width:"fit-content"}}>← Retour au programme</button>
 <div><Tag>CH 03 / DÉCRYPTAGE {story.id} / {story.category}</Tag><h3 style={{fontSize:"clamp(34px,5.2cqw,74px)",lineHeight:1.05,letterSpacing:"-.06em",fontWeight:500,maxWidth:940,margin:"18px 0"}}>{story.title}</h3><p style={paragraph}>{story.issue}</p></div>
 <StatusPanel story={story}/>
 <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,310px),1fr))",gap:20}}>
  {[["01 / LE CAS PUBLIÉ",story.observation],["02 / CE QU'IL FAUT COMPRENDRE",story.analysis],["03 / À RETENIR",story.lesson]].map(([tag,body])=><section key={tag} style={{...frame,padding:"clamp(22px,2.7cqw,34px)"}}><Tag>{tag}</Tag><p style={{...paragraph,fontSize:"clamp(16px,1.6cqw,20px)",marginBottom:0}}>{body}</p></section>)}
 </div>
 <aside style={{...frame,padding:"clamp(20px,2.8cqw,34px)",display:"grid",gap:12}}>
  <Tag>SOURCE ET ATTRIBUTION</Tag><p style={{...paragraph,fontSize:17,margin:0}}>{story.example}</p>
  <a href={story.source} target="_blank" rel="noopener noreferrer" style={{...linkBase,width:"fit-content"}}>Lire l'étude originale : {story.sourceTitle} ↗</a>
 </aside>
 <aside style={{...frame,padding:"clamp(22px,3cqw,38px)",display:"flex",flexDirection:"column",alignItems:"flex-start",gap:15}}>
  <Tag>ET POUR VOTRE COMPTE ?</Tag><h4 style={{fontSize:"clamp(26px,3.4cqw,46px)",lineHeight:1.1,letterSpacing:"-.045em",fontWeight:500,margin:0}}>Vous rencontrez un problème similaire ?</h4>
  <p style={{...paragraph,margin:0}}>J'interviens sur les opérations Vendor et Seller Central, selon les besoins de votre marque. Nous pouvons examiner la situation et définir les actions adaptées.</p>
  <div style={{display:"flex",gap:10,flexWrap:"wrap"}}><JumpButton go={go} to={1}>Voir mes services · CH 01</JumpButton><JumpButton go={go} to={5} solid>Me contacter · CH 05</JumpButton></div>
 </aside>
 </article>}
export function InsightsBroadcast({go}:{go:Jump}){const [chosen,setChosen]=useState<string|null>(null);const story=stories.find(s=>s.id===chosen);
 return <>
 <Header number="03" label="DÉCRYPTAGES" line1="Sous la surface." line2="Les vrais mécanismes Amazon." text="Des problèmes que rencontrent les marques, expliqués à partir de cas publics et des règles d'Amazon. Ces analyses ne sont pas présentées comme mes réalisations."/>
 {story?<StoryReader story={story} onBack={()=>{setChosen(null);document.getElementById("ch-03")?.scrollIntoView({behavior:"smooth",block:"start"});}} go={go}/>:<>
  <div style={{...mono,color:lime,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12}}><span>GUIDE DES ÉMISSIONS / 03 DOSSIERS</span><span>CHOISISSEZ UNE HISTOIRE ↓</span></div>
  <div style={{display:"grid",gap:16}}>{stories.map((s,i)=><button key={s.id} type="button" onClick={()=>{setChosen(s.id);document.getElementById("ch-03")?.scrollIntoView({behavior:"smooth",block:"start"});}}
   style={{...frame,color:ink,textAlign:"left",padding:0,overflow:"hidden",cursor:"pointer",display:"grid",gridTemplateColumns:"minmax(0,1fr) auto"}}>
   <div style={{padding:"clamp(22px,3.2cqw,40px)",display:"grid",gap:15}}>
    <div style={{display:"flex",gap:12,flexWrap:"wrap"}}><Tag>ÉMISSION {s.id} / {s.category}</Tag><span style={{...mono,opacity:.6}}>ANALYSE SECTORIELLE</span></div>
    <h3 style={{fontSize:"clamp(27px,3.6cqw,49px)",fontWeight:500,letterSpacing:"-.055em",lineHeight:1.09,margin:0,maxWidth:750}}>{s.title}</h3>
    <p style={{...paragraph,fontSize:17,margin:0}}>{s.issue}</p>
    <span style={{...mono,color:lime}}>OUVRIR LE DÉCRYPTAGE ↗</span>
   </div>
   <div aria-hidden style={{minWidth:"clamp(50px,8cqw,100px)",borderLeft:"1px solid "+line,background:i%2?"rgba(150,200,135,.07)":"rgba(150,200,135,.025)",display:"grid",placeItems:"center",color:lime,fontSize:"clamp(25px,3cqw,40px)",fontFamily:"'VT323',monospace"}}>0{s.id}</div>
  </button>)}</div>
  <div style={{...frame,padding:"clamp(22px,3cqw,36px)"}}><Tag>COMMENT LIRE CES DÉCRYPTAGES</Tag><p style={{...paragraph,marginBottom:0}}>Les exemples et les résultats sont attribués à leurs auteurs. Je les analyse pour expliquer les mécanismes et les points de vigilance utiles aux marques. Ils ne constituent pas des témoignages ou des missions de mon portfolio.</p></div>
  <div style={{display:"flex",gap:12,flexWrap:"wrap"}}><JumpButton go={go} to={1}>Explorer mes offres · CH 01</JumpButton><JumpButton go={go} to={5} solid>Discutons de votre compte</JumpButton></div>
 </>}
 </>}
