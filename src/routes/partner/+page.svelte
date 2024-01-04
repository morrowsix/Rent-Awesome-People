<script>
  import Button from "$lib/components/Button.svelte";
  import HeaderBanner2 from "$lib/components/HeaderBanner2.svelte";
  import H3 from "$lib/components/H3.svelte";
  import H2 from "$lib/components/H2.svelte";
  import PartnerContact from "$lib/components/PartnerContact.svelte";
</script>

<svelte:head>
  <title>Partner</title>
  <meta name="description" content="" />
  <meta property=”og:image” content=”https://rent-awesome-people.de/partner-header.jpg” />
</svelte:head>

<HeaderBanner2 imglink="/partner-header.jpg" altText="Bea, Fjolla und Karo in">
  <div class="flex justify-center lg:justify-start">
    <H2>
      <span class="text-primary">Awesome</span>
      <span class="text-secondary">People</span><br />
      <span class="text-primary">Awesome</span>
      <span class="text-secondary">Connections</span><br />
    </H2>
  </div>
  <div
    class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 sm:leading-sm">
    <p>
      Gerade im Gastgewerbe ist ein starkes Dienstleister-Netzwerk essenziell.
      Es spart nicht nur Geld, sondern überbrückt auch Engpässe wie fehlende
      Sichtbarkeit und den anhaltenden Personalmangel. Durch unsere
      verlässlichen Partner lassen sich Kosten optimieren, sei es bei
      Lieferanten, Energie, Lohnnebenkosten oder Marketing. Unser Netzwerk kann
      Ihnen helfen, sich besser zu positionieren und neue Gäste, sowie
      Mitarbeiter anzuziehen.
    </p>
    <br />
    <p>
      Ein solides Netzwerk ist daher der Schlüssel, um wirtschaftlich zu agieren
      und gleichzeitig die Qualität und Sichtbarkeit im hart umkämpften
      Gastgewerbe nachhaltig zu verbessern.
    </p>
    <p>
      <br />
      Lernen Sie unsere Lieblingspartner kennen, die mit uns gemeinsam die Zukunft
      des Gastgewerbes sichern!
    </p>
  </div>
</HeaderBanner2>

<div
  class="max-w-container-12 flex flex-col justify-center m-auto py-16 px-5 xl:px-0">
  <div class="">
    <H2 align="text-center pb-4">
      <span class=" text-primary">Unsere</span>
      <span class="text-secondary">Partner</span>
    </H2>
  </div>
  <!-- morrows six -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-4">
    <div class=" flex-1 flex flex-col justify-center">
      <a href="https://www.morrowsix.de" target="_blank">
        <img
          class="pb-6 md:max-w-[400px] max-w-[250px]"
          src="/logo-m6.png"
          alt="Logo morrow six GbR" />
      </a>
      <H3
        ><span class="text-primary">Die Werbeagentur</span><br />
        <span class="text-secondary">Unseres Vertrauens</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Unsere Agentur brilliert in der Erstellung hochwertiger 2D und 3D
        Animationen sowie modernem Design für wirkungsvolle Homepages. Wir
        formen Ihren Erfolg durch kreative Lösungen – sei es online oder
        offline, digital oder analog. Mit unserer Expertise gestalten wir Ihre
        Zukunft, von morgen an.
      </p>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/partner-m6.jpg" alt="" />
    </div>
  </div>
  <!-- nano pictures -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-20">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/partner-nano-pictures.jpg" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <a href="https://www.nanopictures.de" target="_blank">
        <img
          class="pb-6 md:max-w-[300px] max-w-[250px]"
          src="/logo-nano-pictures.png"
          alt="Logo Nano Pictures" />
      </a>
      <H3
        ><span class="text-primary">Fotografie</span>
        <span class="text-secondary">mit Herz</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Entdecke bei NanoPictures Fotografie mit Herz. Spezialisiert auf
        Hochzeiten und Events schaffe ich einzigartige, emotionale Bilder. Buche
        mich für authentische Erinnerungen und eine zuverlässige Zusammenarbeit.
      </p>
    </div>
  </div>
  <!-- fewo angels -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-20">
    <div class=" flex-1 flex flex-col justify-center">
      <a href="https://fewo-angels.de/" target="_blank">
        <img
          class="pb-6 md:max-w-[300px] max-w-[250px]"
          src="/logo-fewo-angels.png"
          alt="Logo Fewo Angels" />
      </a>
      <H3
        ><span class="text-primary">Höhere Erträge.</span><br />
        <span class="text-secondary">weniger Stress.</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5">
        BAFA & INQA zertifizierte Unternehmensberaterin für Gastgeber
        (Hotel/Gastro/Ferienvermietung)
      </p>
      <ul class="list-disc list-inside">
        <li class="font-light text-1xl sm:text-2xl">
          höhere Erträge auch in der Nebensaison
        </li>
        <li class="font-light text-1xl sm:text-2xl">
          Mitarbeiter dafür begeistern, mitzudenken
        </li>
      </ul>
      <p class=" sm:text-2xl font-light pb-5 md:pb-0">
        Fördermittelanträge bis zu 80% deutschlandweit sind möglich. Wir helfen
        beim Ausfüllen!
      </p>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/partner-fewo-angels.jpg" alt="" />
    </div>
  </div>
  <!-- fp Finanzpartner -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-20">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/partner-fp.jpg" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <a
        href="https://www.fp-finanzpartner-schartel.de/unternehmen.html"
        target="_blank">
        <img
          class="pb-6 md:max-w-[400px] max-w-[250px]"
          src="/logo-fp.jpg"
          alt="Logo FP Finanzpartner" />
      </a>
      <H3
        ><span class="text-primary">Begeisternde</span>
        <span class="text-secondary">Finanzberatung</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Was für mich zählt? Finanzberatung, die sich auch auf
        Arbeitnehmerbenefits fokussiert und danach strebt umfassend,
        unvoreingenommen zu beraten. Mein Ziel ist es, langfristige
        Win-Win-Situationen zu schaffen – nicht nur finanziell, sondern auch im
        Arbeitsumfeld. Durch maßgeschneiderte Lösungen werden individuelle
        Bedürfnisse abgedeckt, während langfristige Beziehungen auf Vertrauen
        und gegenseitigem Erfolg basieren.
      </p>
    </div>
  </div>
  <!-- klimaschutz einfach -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-20">
    <div class=" flex-1 flex flex-col justify-center">
      <a href="https://klimaschutz-einfach.de/" target="_blank">
        <img
          class="pb-6 md:max-w-[400px] max-w-[250px]"
          src="/logo-klimaschutz-einfach.png"
          alt="Logo Klimaschutz Einfach" />
      </a>
      <H3
        ><span class="text-primary">WENN WIR EINS NICHT HABEN,</span><br />
        <span class="text-secondary">IST ES ZEIT!</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Mit unseren Produkten und Dienstleistungen machen wir Energiekosten
        senken und Klimaschutz ganz einfach. Wir unterstützen den
        deutschsprachigen Raum mit unseren Produkten und Dienstleistungen dabei,
        Energiekosten zu reduzieren und einen aktiven Beitrag zum Umweltschutz
        zu leisten.
      </p>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img
        class="w-full rounded-2xl"
        src="/partner-klimaschutz-einfach.jpg"
        alt="" />
    </div>
  </div>
  <!-- Neolohn -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-20">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/partner-neolohn.jpg" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <a href="https://neolohn.de/" target="_blank">
        <img
          class="pb-6 md:max-w-[150px] max-w-[100px]"
          src="/logo-neolohn.png"
          alt="Logo neolohn by twodoxx" />
      </a>
      <H3
        ><span class="text-primary">einfach lohnenswert</span><br />
        <span class="text-secondary">für Hotel & Gastro</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Mit der Lohnoptimierungs-Software neolohn können Betriebe ihren
        Mitarbeitern mehr auszahlen gleichzeitig Lohnnebenkosten reduzieren. Die
        Lösung kann der bestehenden Lohnbuchhaltung vorgeschaltet werden. Es ist
        also kein kompletter Systemwechsel notwendig.
      </p>
    </div>
  </div>
  <!-- Hospitality Service -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-20">
    <div class=" flex-1 flex flex-col justify-center">
      <a href="https://hospitality-services.de/" target="_blank">
        <img
          class="pb-6 md:max-w-[400px] max-w-[250px]"
          src="/logo-hospitality.svg"
          alt="Logo Hospitality Service" />
      </a>
      <H3
        ><span class="text-primary">Die Zukunft</span><br />
        <span class="text-secondary">der Hotellerie</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Hoteliers müssen heute mehr denn je innovativ sein. Mit jahrzehntelanger
        Hotellerie-Erfahrung und digitaler Transformation zeigen wir den Weg in
        die Zukunft. Unsere Qualität, ein 360° Hotellerie-Consulting-Netzwerk,
        unterstützt das Überleben und schafft neue Möglichkeiten. Wir verbinden
        Individualhoteliers, Fachberater, Partner und Netzwerke.
      </p>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/partner-hospitality.jpeg" alt="" />
    </div>
  </div>
</div>
<PartnerContact />
<div class="pb-20"></div>
