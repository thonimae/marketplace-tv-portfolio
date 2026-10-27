import TvSite from "@/components/TvSite";
import { loadSiteData } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace Journal | Amazon & Marketplace Consultant",
  description: "Independent Amazon & Marketplace Consultant. Vendor and Seller Central operations, catalog strategy and European marketplace management.",
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
          <li><a href="#ch-00">Qui je suis</a></li>
          <li><a href="#ch-01">Ce que je fais</a></li>
          <li><a href="#ch-02">Contact</a></li>
        </ul></nav>
      </section>
    </>
  );
}
