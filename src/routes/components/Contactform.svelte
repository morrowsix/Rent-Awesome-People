<script>
  import H3 from "./H3.svelte";
</script>

<div
  class="max-w-container-12 m-auto shadow-lg bg-gradient-to-b from-gradient-dark to-gradient-light rounded-[50px] pt-8 pb-10 md:px-5">
  <div class="text-white pb-8">
    <H3 align="text-center">Kontaktformular</H3>
  </div>
  <form class="text-primary font-light" name="contact" netlify>
    <div
      class="flex flex-col gap-4 md:gap-0 md:flex-row text-1xl sm:text-2xl justify-center">
      <div class="flex flex-col flex-1 px-5 gap-4">
        <input
          class="placeholder:text-primary placeholder:font-light px-4 py-2 rounded-[40px] focus-visible:outline-none"
          type="text"
          name="Vorname"
          id="vname"
          placeholder="*VORNAME:"
          required />
        <input
          class="placeholder:text-primary placeholder:font-light px-4 py-2 rounded-[40px] focus-visible:outline-none"
          type="text"
          name="Nachname"
          id="nname"
          placeholder="*NACHNAME:"
          required />
        <input
          class="placeholder:text-primary placeholder:font-light px-4 py-2 rounded-[40px] focus-visible:outline-none"
          type="tel"
          name="Telefon"
          id="tel"
          placeholder="TELEFON:" />
        <input
          class="placeholder:text-primary placeholder:font-light px-4 py-2 rounded-[40px] focus-visible:outline-none"
          type="email"
          name="E-Mail"
          id="email"
          placeholder="*E-MAIL:"
          required />
        <select
          class="py-2 px-2 pr-5 rounded-[40px] focus-visible:outline-none"
          name="Berufsfeld"
          id="profession">
          <option class="font-light" value="Berufsfeld">BERUFSFELD:</option>
          <option class="font-light" value="Gastronomie">GASTRONOMIE</option>
          <option class="font-light" value="Hotellerie">HOTELLERIE</option>
        </select>
        <select
          class="py-2 px-2 pr-5 rounded-[40px] focus-visible:outline-none"
          name="Jobbezeichnung"
          id="job">
          <option class="font-light" value="Jobbezeichnung"
            >JOBBEZEICHNUNG:</option>
          <option class="font-light" value="Koch">KOCH</option>
          <option class="font-light" value="Servicekraft">SERVICEKRAFT</option>
          <option class="font-light" value="Buerokraft">BÜROKRAFT</option>
          <option class="font-light" value="Reinigungskraft"
            >REINIGUNGSKRAFT</option>
        </select>
      </div>
      <div class="flex flex-col flex-1 height-full px-5">
        <textarea
          class="placeholder:text-primary placeholder:font-light px-4 py-2 h-full rounded-[40px]"
          type="textfield"
          name="Nachricht"
          id="message"
          placeholder="NACHRICHT:" />
      </div>
    </div>
    <div class="p-4">
      <p class="text-md sm:text-lg text-white pb-3">
        Die mit * markierten Felder sind Pflichtfelder. <br /> Informationen zum
        Umgang mit Ihren Daten finden Sie in unserer
        <a class="underline" href="/datenschutz">Datenschutzerklärung</a>.
      </p>
      <input
        type="submit"
        value="NACHRICHT SENDEN"
        class="text-white uppercase bg-secondary border-4 border-white rounded-full text-1xl sm:text-2xl font-light py-2 px-6 xs:min-w-[20rem] min-w-[18rem] max-w-[fit-content] text-center shadow-md hover:shadow-2xl hover:scale-[101%] hover:cursor-pointer transition-all" />
    </div>
  </form>
</div>
