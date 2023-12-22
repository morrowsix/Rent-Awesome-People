<script>
    import H3 from "./H3.svelte";
    import { goto } from "$app/navigation";
  
    let form;
  
    function enhance(form) {
      async function handleSubmit(event) {
        event.preventDefault();
  
        const thankYouUrl = "/danke";
        const data = new FormData(form);
  
        await fetch(form.action, {
          method: form.method,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(data).toString(),
        })
          .then(() => {
            form.reset();
            window.setTimeout(() => {
              goto(thankYouUrl);
            }, 2000);
          })
          .catch((error) => {
            alert(
              "Beim senden des Formulars ist ein Fehler aufgetreten, bitte versuchen Sie es zu einem späteren Zeitpunkt erneut oder nutzen Sie unsere E-Mail Adresse."
            );
          });
      }
  
      form.addEventListener("submit", handleSubmit);
  
      return {
        destroy: () => {
          form.removeEventListener("submit", handleSubmit);
        },
      };
    }
  </script>
  
  <div
    class="max-w-container-12 shadow-lg bg-gradient-to-b from-gradient-dark to-gradient-light rounded-[50px] pt-8 pb-10 md:px-5 mx-2 xl:m-auto">
    <div class="text-white pb-8">
      <H3 align="text-center">Kontaktformular</H3>
    </div>
    <form
      use:enhance
      bind:this={form}
      name="contactform"
      method="POST"
      action="https://p632806.mittwaldserver.info/contact.php">
      <input type="hidden" name="form-name" value="contactform" />
      <div
        class="flex flex-col gap-4 md:gap-0 md:flex-row text-1xl sm:text-2xl justify-center text-primary font-light">
        <div class="flex flex-col flex-1 px-5 gap-4">
          <input
            class="placeholder:text-grey placeholder:font-light px-4 py-2 rounded-[40px] focus-visible:outline-none hidden"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="*VORNAME:" />
          <input
            for="name"
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
            for="email"
            class="placeholder:text-grey placeholder:font-light px-4 py-2 rounded-[40px] focus-visible:outline-none"
            type="email"
            name="E-Mail"
            id="email"
            placeholder="*E-MAIL:"
            required />
          <select
            class="py-2 px-4 pr-5 rounded-[40px] focus-visible:outline-none appearance-none bg-[url(/arrow-down.png)] bg-no-repeat bg-[center_right_1.5rem] bg-[length:20px]"
            name="Interesse"
            id="partners">
            <option class="font-light" value="interest">Interesse an:</option>
            <option class="font-light" value="morrowsix">morrow six</option>
            <option class="font-light" value="nanopictures">Nano Pictures</option>
            <option class="font-light" value="nanopictures">Fewo Angels</option>
            <option class="font-light" value="nanopictures">FP Finanzpartner</option>
            <option class="font-light" value="nanopictures">Klimaschutz Einfach</option>
            <option class="font-light" value="nanopictures">Hospitality Service</option>
          </select>
        </div>
        <div class="flex flex-col flex-1 height-full px-5">
          <textarea
            for="message"
            class="placeholder:text-grey placeholder:font-light px-5 py-4 h-full rounded-[24px] focus-visible:outline-none"
            type="textfield"
            name="Nachricht"
            id="message"
            placeholder="Nachricht:"
            required />
        </div>
      </div>
      <div class="p-5">
        <p class="text-md sm:text-lg text-white pb-5">
          Die mit * markierten Felder sind Pflichtfelder. <br /> Informationen zum
          Umgang mit Ihren Daten finden Sie in unserer
          <a class="underline" href="/datenschutz">Datenschutzinformation</a>.
        </p>
        <button
          type="submit"
          class="text-white uppercase border-4 border-white bg-secondary rounded-full text-1xl sm:text-2xl font-light py-2 px-6 sm:min-w-[20rem] min-w-[16rem] max-w-[fit-content] text-center shadow-md hover:shadow-2xl hover:scale-[101%] transition-all cursor-pointer">
          Nachricht senden</button>
      </div>
    </form>
  </div>
  