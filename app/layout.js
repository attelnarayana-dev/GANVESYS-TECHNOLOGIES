import "./globals.css";
import Motion from "./motion";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://ganvesys-technologies.netlify.app").replace(/\/$/, "");

export const metadata={
  metadataBase:new URL(siteUrl),
  title:{default:"GANVESYS TECHNOLOGIES | Engineering the Future",template:"%s | GANVESYS TECHNOLOGIES"},
  description:"GANVESYS TECHNOLOGIES builds software systems, AI automation, QA engineering, cloud platforms, cybersecurity and data solutions.",
  applicationName:"GANVESYS TECHNOLOGIES",
  keywords:["GANVESYS TECHNOLOGIES","software engineering","AI automation","QA automation","cloud DevOps","cyber security","data engineering","technology company"],
  alternates:{canonical:"/"},
  openGraph:{type:"website",siteName:"GANVESYS TECHNOLOGIES",title:"GANVESYS TECHNOLOGIES | Engineering the Future",description:"Software engineering, AI automation, QA, cloud, security and data systems.",url:siteUrl},
  twitter:{card:"summary_large_image",title:"GANVESYS TECHNOLOGIES | Engineering the Future",description:"Software engineering, AI automation, QA, cloud, security and data systems."},
  robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
  icons:{icon:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='18' fill='%230b1220'/><text x='32' y='40' text-anchor='middle' font-family='Arial' font-weight='800' font-size='22' fill='white'>GV</text></svg>"}
};
const organizationJsonLd={
  "@context":"https://schema.org",
  "@type":"Organization",
  name:"GANVESYS TECHNOLOGIES",
  url:siteUrl,
  description:"Software engineering, AI automation, QA engineering, cloud, cybersecurity and data solutions.",
  slogan:"Engineering the Future. Delivering Intelligence."
};

export default function RootLayout({children}){
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd)}}/><Motion/><div className="noise"/></body></html>
}