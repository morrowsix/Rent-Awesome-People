<script>
  import Button from "../components/Button.svelte";
  import HeaderBanner from "../components/HeaderBanner.svelte";
  import TwoCol from "../components/TwoCol.svelte";
  import H3 from "../components/H3.svelte";
  import H2 from "../components/H2.svelte";
  import Contactform from "../components/Contactform.svelte";
</script>

<HeaderBanner imglink="/Fjolla-Notebook.png">
  <div>
    <H2>
      <span class=" text-primary">Keine Angst</span><br />
      <span class=" text-primary">mehr vor der</span><br />
      <span class="text-secondary">Unterschrift</span><span
        class=" text-primary">.</span>
    </H2>
  </div>
  <div
    class="text-primary font-light text-xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 lg:w-6/12 sm:leading-sm">
    <p>
      Wir Menschen wollen eine informierte Entscheidung treffen. Wir helfen Dir
      dabei. Wir kennen Deinen neuen Arbeitgeber vielleicht bereits oder lernen
      ihn gerade kennen und können Dir sagen, ob Ihr zusammen passt. Falls der
      eine nicht passt, gibt es gewiss einen anderen. Wir küssen für dich die
      Frösche! Du bekommst den Prinz oder die Prinzessin!
    </p>
  </div>
  <div class="py-10 flex">
    <Button
      text="Offene Stellen"
      link="/jobs#coveto_iframe"
      color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
  </div>
</HeaderBanner>
<TwoCol>
  <div slot="left" class="max-w-container-6 flex-1 pr-5 lg:pr-20">
    <H3>So viele freie Stellen - <br> wo bewerbe ich mich?</H3>
    <ul
      class="font-light list-disc ml-7 text-1xl sm:text-2xl 2xl:whitespace-nowrap sm:leading-sm pt-5">
      <li>Bewirb dich bei mir - ich helfe Dir!</li>
      <li>Ich weiß auch schon, was du verdienst!</li>
    </ul>
  </div>

  <div
    slot="right"
    class="max-w-container-6 flex-1 pl-5 xl:pl-16 flex flex-col">
    <H3>Eine Bewerbung - <br> viele Optionen!</H3>
    <ul
      class="font-light list-disc ml-7 text-1xl sm:text-2xl 2xl:whitespace-nowrap sm:leading-sm pt-5">
      <li>Ein Ansprechpartner für deinen Bewerbungsprozess</li>
      <li>Schnelle Antworten auf Fragen</li>
    </ul>
  </div>
</TwoCol>
<div class="max-w-container-12 flex flex-col md:flex-row m-auto pt-10 relative">
  <div class="self-end xl:w-[unset] md:w-1/2 mb-[-10px] z-[-1]">
    <img src="/Beatrix-Rettungsring.png" alt="" />
  </div>
  <div class="flex-1 pl-5 md:pl-0 order-first md:order-1 md:pt-10">
    <H2>
      <span class=" text-primary">Meine</span><br />
      <span class="text-secondary">Mission</span><span class=" text-primary"
        >!</span>
    </H2>
    <H3>
      <br />
      <span class="text-primary">Ich helfe dir einen</span><br />
      <span class="text-secondary">sicheren Hafen </span><span
        class="text-primary">für deine</span
      ><br />
      <span class="text-secondary">Zukunft </span><span class="text-primary"
        >zufinden:</span>
    </H3>
    <div
      class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 sm:leading-sm">
      <p>
        Wir wollen alle ankommen. Im beruflichen Heimathafen! Abhängig von
        deiner Wertewelt schauen wir uns an, welche Arbeitgeber und
        Arbeitsplätze zu Dir passen.</p><br>
        <p>Aber wir dürfen dennoch nicht vergessen,
        dass wir im Gastgewerbe unterwegs sind. In einem der schönsten Gewerben
        der Welt - Aus Gästen und Kollegen Freunde machen und glücklich nach
        Hause gehen! Das klingt doch nach einem Ziel!
      </p>
    </div>
  </div>
</div>
<Contactform />
<div
  class=" w-full bg-[url(/Rectangle.png),_url(/Sekretaerin.png)] bg-cover bg-center h-[500px] flex justify-center items-center mt-10">
  <div
    class="max-w-container-12 h-60 flex-1 flex flex-col justify-center items-start m-auto px-5 xl:px-0">
    <H2>
      <span class=" text-primary">Wer wagt gewinnt!</span><br />
      <span class="text-secondary">Vielleicht haben wir</span><br />
      <span class="text-secondary">deinen Traumjob</span><span
        class="text-primary">?</span>
    </H2>
    <div class="flex flex-col md:flex-row pt-5 gap-4">
      <Button
        text="Offene Stellen"
        link="/jobs#coveto_iframe"
        color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
      <Button
        text="Initiativ Bewerbung"
        link="mailto:info@rent-awesome-people.de?subject=Initiativ Bewerbung"
        color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
    </div>
  </div>
</div>
