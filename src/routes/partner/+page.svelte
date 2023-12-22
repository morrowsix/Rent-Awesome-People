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
</svelte:head>

<HeaderBanner2 imglink="/placeholder.jpg">
  <div class="flex justify-center lg:justify-start">
    <H2>
      <span class="text-primary">Win-Win-Win</span>
      <span class="text-primary">Situationen</span><br>
      <span class="text-secondary">Gemeinsam</span>
      <span class="text-secondary">schaffen</span><span class=" text-primary"
        >!</span
      ><br />
    </H2>
  </div>
  <div
    class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 sm:leading-sm">
    <p>
      Stellt euch vor, wir konnten euch zusammenbringen und nun sind 3 Probleme
      gelöst!
    </p>
    <br />
    <p>
      Glückliche Gäste durch glückliche Mitarbeitende - Das beglückt doch auch
      Ihr Unternehmerherz!
    </p>
  </div>
</HeaderBanner2>

<div class="max-w-container-12 flex flex-col justify-center m-auto py-16 px-5 xl:px-0">
  <div class="">
    <H2 align="text-center pb-4">
      <span class=" text-primary">Unsere</span>
      <span class="text-secondary">Partner</span>
    </H2>
  </div>
  <!-- morrows six -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-4">
    <div class=" flex-1 flex flex-col justify-center">
      <a href="https://www.morrowsix.de">
        <img
          class="pb-6 md:max-w-[400px] max-w-[250px]"
          src="/logo-m6.png"
          alt="Logo morrow six GbR" />
      </a>
      <H3
        ><span class="text-primary">Die Werbeagentur</span><br />
        <span class="text-secondary">Ihres Vertrauens</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 py-5 md:py-0">
        Wir formen Ihren Erfolg, und das schon morgen. Online oder offline,
        digital oder analog, ganz egal.
      </p>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/partner-m6.jpg" alt="" />
    </div>
  </div>
  <!-- nano pictures -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/partner-nano-pictures.jpg" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <a href="https://www.nanopictures.de">
        <img
          class="pb-6 md:max-w-[300px] max-w-[250px]"
          src="/logo-nano-pictures.png"
          alt="Logo Nano Pictures" />
      </a>
      <H3
        ><span class="text-primary">Fotografie</span>
        <span class="text-secondary">mit Herz</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 py-5 md:py-0">
        Entdecke bei NanoPictures Fotografie mit Herz. Spezialisiert auf
        Hochzeiten und Events schaffe ich einzigartige, emotionale Bilder. Buche
        mich für authentische Erinnerungen und eine zuverlässige Zusammenarbeit.
      </p>
    </div>
  </div>
  <!-- fewo angels -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 flex flex-col justify-center">
      <a href="https://fewo-angels.de/">
        <img
          class="pb-6 md:max-w-[300px] max-w-[250px]"
          src="/logo-fewo-angels.png"
          alt="Logo Fewo Angels" />
      </a>
      <H3
        ><span class="text-primary">Höhere Erträge.</span><br />
        <span class="text-secondary">Glückliche Gäste.</span>
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
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/placeholder.jpg" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <a href="https://www.fp-finanzpartner.de/">
        <img
          class="pb-6 md:max-w-[400px] max-w-[250px]"
          src="/logo-fp.jpg"
          alt="Logo FP Finanzpartner" />
      </a>
      <H3
        ><span class="text-primary">Begeisternde</span>
        <span class="text-secondary">Finanzberatung</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light py-5 md:py-0">
        Was für mich zählt? Eine faire, unabhängige Beratung, ein langfristiges,
        vertrauensvolles Verhältnis zu meinen Mandantinnen und Mandaten und
        Lösungen, die zu Ihren individuellen Zielen und Wünschen passen.
      </p>
    </div>
  </div>
  <!-- klimaschutz einfach -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 flex flex-col justify-center">
      <a href="https://klimaschutz-einfach.de/">
        <img
          class="pb-6 md:max-w-[400px] max-w-[250px]"
          src="/logo-klimaschutz-einfach.png"
          alt="Logo Klimaschutz Einfach" />
      </a>
      <H3
        ><span class="text-primary">WENN WIR EINS NICHT HABEN,</span><br />
        <span class="text-secondary">IST ES ZEIT!</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light py-5 md:py-0">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/partner-klimaschutz-einfach.jpg" alt="" />
    </div>
  </div>
  <!-- fp Finanzpartner -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/partner-hospitality.jpeg" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <a href="https://hospitality-services.de/">
        <img
          class="pb-6 md:max-w-[400px] max-w-[250px]"
          src="/logo-hospitality.svg"
          alt="Logo Hospitality Service" />
      </a>
      <H3
        ><span class="text-primary">Die Zukunft</span><br>
        <span class="text-secondary">der Hotellerie</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light py-5 md:py-0">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </div>
  </div>
</div>
<PartnerContact />
<div class="pb-20"></div>
