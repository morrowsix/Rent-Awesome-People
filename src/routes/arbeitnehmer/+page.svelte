<script>
  import Button from "../components/Button.svelte";
  import HeaderBanner from "../components/HeaderBanner.svelte";
  import TwoCol from "../components/TwoCol.svelte";
  import H3 from "../components/H3.svelte";
  import H2 from "../components/H2.svelte";
  import Contactform from "../components/Contactform.svelte";
</script>

<HeaderBanner imglink="/Header-Arbeitnehmer2.png">
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
<div
  class="max-w-container-12 shadow-lg bg-gradient-to-b from-gradient-dark to-gradient-light rounded-[50px] pt-8 pb-10 md:px-5 mx-2 xl:m-auto">
  <div class="text-white pb-8">
    <H3 align="text-center">Kontaktformular</H3>
  </div>
  <form name="contactform" data-netlify="true">
    <div
      class="flex flex-col gap-4 md:gap-0 md:flex-row text-1xl sm:text-2xl justify-center text-primary font-light">
      <div class="flex flex-col flex-1 px-5 gap-4">
        <input
          class="placeholder:text-grey placeholder:font-light px-4 py-2 rounded-[40px] focus-visible:outline-none"
          type="text"
          name="Vorname"
          id="vname"
          placeholder="*VORNAME:"
          required />
        <input
          class="placeholder:text-grey placeholder:font-light px-4 py-2 rounded-[40px] focus-visible:outline-none"
          type="text"
          name="Nachname"
          id="nname"
          placeholder="*NACHNAME:"
          required />
        <input
          class="placeholder:text-grey placeholder:font-light px-4 py-2 rounded-[40px] focus-visible:outline-none"
          type="tel"
          name="Telefon"
          id="tel"
          placeholder="TELEFON:" />
        <input
          class="placeholder:text-grey placeholder:font-light px-4 py-2 rounded-[40px] focus-visible:outline-none"
          type="email"
          name="E-Mail"
          id="email"
          placeholder="*E-MAIL:"
          required />
        <select
          class="py-2 px-4 pr-5 rounded-[40px] focus-visible:outline-none appearance-none bg-[url(/arrow-down.png)] bg-no-repeat bg-[center_right_1.5rem] bg-[length:20px]"
          name="Berufsfeld"
          id="profession">
          <option class="font-light" value="Vollzeit">VOLLZEIT</option>
          <option class="font-light" value="Teilzeit">TEILZEIT</option>
          <option class="font-light" value="Nebenjob">NEBENJOB</option>
        </select>
        <select
          class="py-2 px-4 pr-5 rounded-[40px] focus-visible:outline-none appearance-none bg-[url(/arrow-down.png)] bg-no-repeat bg-[center_right_1.5rem] bg-[length:20px]"
          name="Jobbezeichnung"
          id="job">
          <option class="font-light" value="Jobbezeichnung"
            >ABTEILUNGEN:</option>
          <option class="font-light" value="Küche">KÜCHE</option>
          <option class="font-light" value="Service">SERVICE</option>
          <option class="font-light" value="Rezeption">REZEPTION</option>
          <option class="font-light" value="Bankett"
            >BANKETT</option>
            <option class="font-light" value="Verwaltung"
            >VERWALTUNG</option>
            <option class="font-light" value="Lager"
            >LAGER</option>
            <option class="font-light" value="Housekeeping"
            >HOUSEKEEPING</option>
            <option class="font-light" value="Führungskräfte"
            >FÜHRUNGSKRÄFTE</option>
            <option class="font-light" value="Allrounderin"
            >ALLROUNDER*IN</option>
        </select>
      </div>
      <div class="flex flex-col flex-1 height-full px-5">
        <textarea
          class="placeholder:text-grey placeholder:font-light px-5 py-4 h-full rounded-[24px] focus-visible:outline-none"
          type="textfield"
          name="Nachricht"
          id="message"
          placeholder="*WIE KÖNNEN WIR HELFEN?"
          required />
      </div>
    </div>
    <div class="p-5">
      <p class="text-md sm:text-lg text-white pb-5">
        Die mit * markierten Felder sind Pflichtfelder. <br /> Informationen zum
        Umgang mit Ihren Daten finden Sie in unserer
        <a class="underline" href="/datenschutz">Datenschutzerklärung</a>.
      </p>
      <input
        type="submit"
        value="NACHRICHT SENDEN"
        class="text-white uppercase border-4 border-white bg-secondary rounded-full text-1xl sm:text-2xl font-light py-2 px-6 sm:min-w-[20rem] min-w-[16rem] max-w-[fit-content] text-center shadow-md hover:shadow-2xl hover:scale-[101%] transition-all cursor-pointer" />
    </div>
  </form>
</div>
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
