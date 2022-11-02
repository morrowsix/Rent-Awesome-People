<script>
  import Herocard from "./components/Herocard.svelte";
  import Button from "./components/Button.svelte";
  import HeaderBanner from "./components/HeaderBanner.svelte";
  import TwoCol from "./components/TwoCol.svelte";
  let heroes = [
    { name: "Küchenmagier", imgurl: "heroes/Kuechenmagier.png" },
    { name: "Empfangselfen", imgurl: "heroes/Empfangselfen.png" },
    { name: "Servicehelden", imgurl: "heroes/Servicehelden.png" },
    { name: "Reinigungsninjas", imgurl: "heroes/Reinigungsninjas.png" },
    { name: "Backofficezauberer", imgurl: "heroes/Backofficezauberer.png" },
  ];
</script>

<HeaderBanner imglink="/Header-Start.png">
  <div
    class="uppercase text-3xl sm:text-4xl sm:leading-md lg:text-6xl lg:leading-lg">
    <h2>
      <span class=" text-primary">Awesome </span>
      <span class="text-secondary">Recruiting</span>
    </h2>
    <h2>
      <span class=" text-primary">Awesome </span>
      <span class="text-secondary">People</span>
    </h2>
    <h2>
      <span class=" text-primary">Awesome </span>
      <span class="text-secondary">Jobs</span>
    </h2>
  </div>
  <div
    class="text-primary text-2xl pr-5 pb-5 pt-8 lg:pt-12 lg:w-6/12 leading-sm">
    <p>
      Unsere Mission ist es, großartige Mitarbeitende und großartige Arbeitgeber
      in der Hotellerie und Gastronomie zusammen zu bringen. Wir lieben Win-Win
      Situationen, die entstehen, wenn sich jeder um sein Kerngeschäft kümmert!
      Unseres ist Recruiting - weil leihen oder mieten von Personal einfach
      nicht genug ist!
    </p>
  </div>
  <div class="py-10 flex">
    <Button
      text="Mehr erfahren"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</HeaderBanner>
<div
  class="relative w-full bg-gradient-to-r from-gradient-dark to-gradient-light">
  <div
    class="max-w-container-12 relative flex justify-end m-auto gap-14 py-5 flex-col lg:flex-row">
    <div class="hidden md:block absolute 2xl:left-[-150px] left-0 bottom-0">
      <img src="/beatrix-westphal.png" alt="Beatrix Westphal" class="" />
    </div>
    <div
      class=" lg:basis-2/5 md:w-1/2 lg:w-[unset] pr-5 lg:pr-0 self-end lg:self-center mx-5 md:mx-0">
      <p class="text-white text-2xl font-light block">
        “Die Liebe zur Gastronomie und Hotellerie entwickelte sich in meiner
        Jugend. Die Leidenschaft für gute Arbeitsbedingungen im Laufe meines
        Arbeitslebens. Die Liebe zu Menschen wurde mir in die Wiege gelegt -
        also fühle ich mich dazu verpflichtet dies alles für Sie im besten Sinne
        zu verbinden.”
      </p>
      <br />
      <li class="text-white text-2xl">Beatrix Westphal</li>
    </div>
    <div
      class="self-center lg:self-center md:self-end md:w-1/2 lg:w-[unset] flex flex-col md:items-start justify-center md:justify-start lg:items-center gap-3 pr-5 xl:pr-0">
      <p class="text-white text-center font-medium text-2xl uppercase">
        Beratung für:
      </p>
      <Button text="Mitarbeitende" link="/arbeitnehmer" color="bg-secondary" />
      <Button text="Hotelbetreiber" link="/arbeitgeber" color="bg-secondary" />
    </div>
  </div>
</div>
<div
  class="flex flex-col lg:flex-row justify-between items-center max-w-container-12 m-auto py-14 px-5 xl:px-0">
  <div>
    <img
      class="xl:max-w-[unset] lg:max-w-container-3 pb-5 lg:pb-0"
      src="/HotelCheckIn.png"
      alt="" />
  </div>
  <div class="flex flex-col justify-between md:ml-10">
    <h3 class="uppercase text-4xl font-medium leading-md">
      <span class=" text-primary">Werde Teil unserer Mission</span><br />
      <span class=" text-primary">und</span>
      <span class=" text-secondary">sichere dir Vorteile</span><span>:</span>
    </h3>
    <ul
      class="text-primary font-light list-disc list-inside ml-4 text-2xl 2xl:whitespace-nowrap leading-sm pb-5">
      <li>Mit einer Bewerbung - bei mehreren Arbeitgebern bewerben.</li>
      <li>Wir arbeiten nur mit wertschätzenden Arbeitgebern.</li>
      <li>Wir schauen, ob der Job zu Dir passt und Du zu dem Job.</li>
      <li>
        Wir bringen dich sicher in deinen beruflichen Heimathafen. - Dauerhaft!
      </li>
    </ul>
    <Button
      text="Jetzt Kontakt aufnehmen"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</div>
<h3 class="uppercase text-4xl text-center">
  <span class="text-primary">Welche</span>
  <span class="text-secondary">Superkräfte</span>
  <span class="text-primary">besitzt du?</span>
</h3>
<div class=" flex justify-around max-w-container-12 m-auto">
  {#each heroes as hero}
    <Herocard name={hero.name} imgurl={hero.imgurl} />
  {/each}
</div>
<div
  class=" w-full bg-[url(/Rectangle.png),_url(/professionelleKellnerin.png)] bg-cover h-[500px] flex flex-col justify-center items-center">
  <div
    class="max-w-container-12 w-[1420px] h-60  flex flex-col justify-between items-start m-auto">
    <h2 class="uppercase text-6xl font-medium leading-lg">
      <span class=" text-primary">Gastfreundschaft ist Liebe!</span><br /><span
        class="text-secondary">Gute Arbeitsplätze auch</span
      ><span class="text-primary">!</span>
    </h2>
    <Button
      text="Jetzt anmelden"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</div>
<div
  class="flex flex-col lg:flex-row justify-between items-center max-w-container-12 m-auto py-14 px-5 xl:px-0">
  <div class="flex flex-col justify-between mr-10">
    <h3 class="uppercase text-4xl font-medium leading-md">
      <span class=" text-primary">Umsatzsteigerung durch</span><br />
      <span class=" text-secondary">neue Mitarbeitende</span><span>:</span>
    </h3>
    <ul
      class="text-primary font-light list-disc list-inside ml-4 text-2xl lg:whitespace-nowrap leading-sm pb-5">
      <li>Jeder kümmert sich um seine Kernkompetenz</li>
      <li>Mehr Umsatz durch eine bessere Personaldecke</li>
      <li>Von der Stellenausschreibung bis zu den Schnuppertagen</li>
      <li>Professioneller Bewerbungsprozess</li>
    </ul>
    <Button
      text="Kostenloses Erstgespräch vereinbaren"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
  <div class="order-first lg:order-1">
    <img
      class="xl:max-w-[unset] lg:max-w-container-3 pb-5 lg:pb-0"
      src="/FroheMitarbeiterin.png"
      alt="" />
  </div>
</div>
<div class="max-w-container-12 m-auto pb-9">
  <h3 class="uppercase text-4xl text-center">
    <span class=" text-primary"> Für </span><span class=" text-secondary"
      >Hotelies
    </span><span class=" text-primary">und </span><span class=" text-secondary"
      >Gastronomen</span
    ><span>!</span>
  </h3>
</div>
<TwoCol>
  <div slot="left" class="max-w-container-6 flex-1 pt-9 pr-5 md:pr-20">
    <h2 class="text-4xl uppercase pb-10">Unsere Partner:</h2>
    <img src="/HospitalityServices-Logo.png" alt="Hospitality Services Logos" />
    <p class="text-2xl font-light pt-9">
      Die Unternehmen des Hospitality Services haben sich zusammengeschlossen,
      um die Hotellerie und Gastronomie in allen Belangen zu unterstützen. Auch
      in schweren Zeiten!
    </p>
  </div>

  <div slot="right" class="max-w-container-6 flex-1 pl-5 xl:pl-16 pt-9 flex flex-col">
    <h2 class="text-4xl uppercase">Informationen für <br /> Arbeitgeber:</h2>
    <p class="text-2xl font-light pt-9 pb-7">
      Seit Jahren wird es schwieriger die passenden Bewerber:innen für offene
      Stellen zu finden. Ein Knackpunkt ist definitiv das Tagesgeschäft. Wer ein
      Unternehmen führt, hat eigentlich keine Zeit sich um die
      Stellenausschreibung, die zeitnahe Kontaktaufnahme und den Prozess des
      Aussortierens zu kümmern. Und schon sind großartige Kandidat:innen bei
      einem anderen Arbeitgeber. Wir kümmern uns um den kompletten Prozess von
      der Betriebs- und Bedarfsanalyse, über professionelle, wirkungsvolle
      Stellenausschreibungen bis hin zum vereinbaren des Termins für einen
      Schnuppertag - Sie lernen sich kennen und wenn es passt, schließen Sie den
      Vertrag ab!
    </p>
    <Button
      text="Jetzt Kontakt aufnehmen"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</TwoCol>
<div
  class=" w-full bg-[url(/VerlaufBanner.png),_url(/MannImPool.png)] bg-contain bg-no-repeat bg-[position:50%,_right] h-[500px] flex justify-center items-center">
  <div class="self-end"><img src="/BeatrixWestphal2.png" alt="" /></div>
  <div
    class="max-w-container-12 w-[1420px] flex flex-col justify-between items-start">
    <h2 class="uppercase text-6xl font-medium leading-lg">
      <span class=" text-primary">Dein Boot ist</span><br />
      <span class="text-primary">gekentert?</span><br />
      <span class="text-secondary">Ab in den</span><br />
      <span class="text-secondary">neuen Job</span><span class="text-primary"
        >!</span>
    </h2>
    <Button
      text="Jetzt anmelden"
      link="/kontakt"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</div>
