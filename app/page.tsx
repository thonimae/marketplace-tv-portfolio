import TvSite from "@/components/TvSite";
import { loadSiteData } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thony Maherison | Amazon & Marketplace Specialist",
  description: "Thony Maherison accompagne les marques sur Amazon Vendor et Seller Central : gestion opérationnelle, catalogue, contenus et marchés européens.",
};

export default async function Page() {
  const data = await loadSiteData();
  return (
    <>
      <TvSite data={data} pressTotal={0} />
      <section className="sr-only" aria-labelledby="portfolio-about">
        <h2 id="portfolio-about">Independent Amazon & Marketplace Consultant</h2>
        <p>Supporting brands with Amazon Vendor Central, Seller Central, marketplace operations, catalog content, localization and European marketplace management.</p>
        <nav aria-label="Portfolio sections"><ul>
          <li><a href="#ch-00">Bienvenue</a></li>
          <li><a href="#ch-01">Qui je suis</a></li>
          <li><a href="#ch-02">Ce que je fais</a></li>
          <li><a href="#ch-03">Comment je travaille</a></li>
          <li><a href="#ch-04">Contact</a></li>
        </ul></nav>
      </section>
    </>
  );
}
