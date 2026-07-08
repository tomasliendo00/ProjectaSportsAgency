New crawl: https://www.projectasports.com
Found 3 URLs in sitemap
[+2.8s] Following redirect: https://projectasports.com/ → https://www.projectasports.com/
✓ Audited 3 pages in 3.7s

Audit stored in database. Use 'squirrel report' to view latest audit.
Use 'squirrel report --list' to see all stored audits.

<?xml version="1.0" encoding="UTF-8"?>
<audit version="0.0.64">
<site url="https://www.projectasports.com" crawled="3" date="2026-07-06T22:29:12.361Z"/>
<score overall="68" grade="D">
 <group name="SEO" score="74" errors="1" warnings="14"/>
 <group name="Performance" score="50" errors="0" warnings="10"/>
 <group name="Security" score="90" errors="0" warnings="3"/>
 <cat name="Images" score="96"/>
 <cat name="Performance" score="50"/>
 <cat name="Core SEO" score="91"/>
 <cat name="E-E-A-T" score="68"/>
 <cat name="Security" score="90"/>
 <cat name="Content" score="95"/>
 <cat name="Legal Compliance" score="85"/>
 <cat name="Crawlability" score="99"/>
 <cat name="Accessibility" score="100"/>
 <cat name="Internationalization" score="100"/>
 <cat name="Site Integrity" score="100"/>
 <cat name="Links" score="100"/>
 <cat name="Local SEO" score="100"/>
 <cat name="Mobile" score="100"/>
 <cat name="Structured Data" score="100"/>
 <cat name="Social Media" score="100"/>
 <cat name="URL Structure" score="100"/>
</score>
<summary passed="342" warnings="27" failed="1"/>
<technologies first-scan="false" added="0" removed="0">
 <tech name="React" cat="framework"/>
 <tech name="Next.js" cat="framework"/>
 <tech name="Vercel Edge Network" cat="cdn"/>
 <tech name="Vercel" cat="hosting"/>
</technologies>
<issues>
 <category name="Crawlability" group="seo" errors="0" warnings="1">
  <rule id="crawl/canonical-chain" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/crawl/canonical-chain">
   Page redirects before content is served
   Pages (2): /, /
   Items (1):
    - / (https://www.projectasports.com → https://www.projectasports.com/) [finalUrl: https://www.projectasports.com/, chain: {&quot;sourceUrl&quot;:&quot;https://www.projectasports.com/&quot;,&quot;finalUrl&quot;:&quot;https://www.projectasports.com/&quot;,&quot;hops&quot;:[{&quot;url&quot;:&quot;https://www.projectasports.com/&quot;,&quot;statusCode&quot;:200,&quot;type&quot;:&quot;http&quot;}],&quot;chainLength&quot;:0,&quot;isLoop&quot;:…]
  </rule>
 </category>
 <category name="Core SEO" group="seo" errors="0" warnings="6">
  <rule id="core/meta-description" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/core/meta-description">
   Description too long
   Pages (2): /privacidad, /terminos
   Items (2):
    - /privacidad (Cómo Projecta Sports Agency recopila, usa y proteg (165 chars))
    - /terminos (Términos y condiciones de uso de los servicios de  (181 chars))
  </rule>
  <rule id="core/og-tags" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/core/og-tags">
   Missing og:image - social shares will lack imagery
   Pages (2): /privacidad, /terminos
  </rule>
  <rule id="core/twitter-cards" severity="info" status="warn" docs="https://docs.squirrelscan.com/rules/core/twitter-cards">
   summary_large_image card requires an image
   Pages (2): /privacidad, /terminos
  </rule>
 </category>
 <category name="Security" group="security" errors="0" warnings="2">
  <rule id="security/csp" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/security/csp">
   No Content-Security-Policy header
  </rule>
  <rule id="security/form-captcha" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/security/form-captcha">
   1 public form(s) without CAPTCHA
   Pages (1): /
   Items (1):
    - form[0]
  </rule>
 </category>
 <category name="Content" group="seo" errors="0" warnings="2">
  <rule id="content/keyword-stuffing" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/content/keyword-stuffing">
   N word(s) may be overused
   Pages (2): /privacidad, /terminos
   Items (4):
    - datos (&quot;datos&quot; (4.5%)) [count: 17, density: 4.450261780104712]
    - del (&quot;del&quot; (4.3%)) [count: 16, density: 4.324324324324325]
    - los (&quot;los&quot; (4.6%)) [count: 17, density: 4.594594594594595]
    - projecta (&quot;projecta&quot; (3.2%)) [count: 12, density: 3.2432432432432434]
  </rule>
 </category>
 <category name="Images" group="seo" errors="1" warnings="0">
  <rule id="images/alt-text" severity="warning" status="fail" docs="https://docs.squirrelscan.com/rules/images/alt-text">
   4 image(s) missing alt text
   Pages (5): /, /flags/br.svg, /flags/es.svg, /flags/ie.svg, /flags/nl.svg
   Items (4):
    - /flags/br.svg
    - /flags/es.svg
    - /flags/ie.svg
    - /flags/nl.svg
  </rule>
 </category>
 <category name="Performance" group="performance" errors="0" warnings="10">
  <rule id="perf/lcp-hints" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/perf/lcp-hints">
   1 likely-LCP image loaded without preload; 3 likely-LCP images loaded without preload
   Pages (3): /, /privacidad, /terminos
   Items (3):
    - /privacidad (1 likely-LCP image loaded without preload)
    - /terminos (1 likely-LCP image loaded without preload)
    - / (3 likely-LCP images loaded without preload)
  </rule>
  <rule id="perf/critical-request-chains" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/perf/critical-request-chains">
   2 critical request chain(s) found
   Pages (3): /, /privacidad, /terminos
   Items (2):
    - CSS: /_next/static/chunks/0cib-ewoh-t2w.css
    - JS: /_next/static/chunks/0cz1d0mv5g_q7.js
  </rule>
  <rule id="perf/unminified-js" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/perf/unminified-js">
   1 JavaScript file(s) appear unminified
   Pages (3): /, /privacidad, /terminos
   Items (1):
    - 1hp3-t76m72lu.js (191.6KB, ~158.5KB savings) [reason: 4 comments]
  </rule>
  <rule id="perf/lcp-fetchpriority" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/perf/lcp-fetchpriority">
   Hero/LCP image loaded eagerly without fetchpriority=&apos;high&apos; or preload
   Pages (1): /
   Items (1):
    - /_next/image?url=%2Fhero%2Fduel.jpg&amp;w=3840&amp;q=75 (image) | &lt;img src=&quot;/_next/image?url=%2Fhero%2Fduel.jpg&amp;w=3840&amp;q=75&quot;&gt;
  </rule>
 </category>
 <category name="Accessibility" group="seo" errors="0" warnings="1">
  <rule id="a11y/color-contrast" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/a11y/color-contrast">
   1 potential color contrast issue(s)
   Pages (1): /
   Items (1):
    - div with class &quot;stripes pointer-events-none ab...&quot; may have low contrast
  </rule>
 </category>
 <category name="E-E-A-T" group="seo" errors="0" warnings="4">
  <rule id="eeat/about-page" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/eeat/about-page">
   No About page found
  </rule>
  <rule id="eeat/author-byline" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/eeat/author-byline">
   No content pages have author attribution
  </rule>
  <rule id="eeat/contact-page" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/eeat/contact-page">
   No Contact page found
  </rule>
  <rule id="eeat/content-dates" severity="warning" status="warn" docs="https://docs.squirrelscan.com/rules/eeat/content-dates">
   No content pages have datePublished
  </rule>
 </category>
 <category name="Legal Compliance" group="security" errors="0" warnings="1">
  <rule id="legal/subprocessor-disclosure" severity="info" status="warn" docs="https://docs.squirrelscan.com/rules/legal/subprocessor-disclosure">
   No sub-processor / data-processing (DPA) disclosure found
  </rule>
 </category>
</issues>
</audit>