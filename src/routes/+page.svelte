<script>
    import Herocard from "./components/Herocard.svelte";
    import Button from "./components/Button.svelte";
    let heroes = [
        { name: "Küchenmagier", imgurl: "heroes/Kuechenmagier.png" },
        { name: "Empfangselfen", imgurl: "heroes/Empfangselfen.png" },
        { name: "Servicehelden", imgurl: "heroes/Servicehelden.png" },
        { name: "Reinigungsninjas", imgurl: "heroes/Reinigungsninjas.png" },
        { name: "Backofficezauberer", imgurl: "heroes/Backofficezauberer.png" },
    ];
</script>

<div class="bg-[url('/2022-10-13-Header-Background-nro.png')] bg-cover relative">
    <div class="absolute right-0 bottom-0">
    <img class="max-h-[900px]" src="/2022-08-23-KeyVisual_RAP-nro.png" alt=""></div>
    <div class=" max-w-container m-auto pt-36 pb-60">
        <div class="uppercase text-6xl">
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
        <div class="text-primary text-2xl pt-12 w-6/12">
            <p>
                Unsere Mission ist es, großartige Mitarbeitende und großartige
                Arbeitgeber in der Hotellerie und Gastronomie zusammen zu
                bringen. Wir lieben Win-Win Situationen, die entstehen, wenn
                sich jeder um sein Kerngeschäft kümmert! Unseres ist Recruiting
                - weil leihen oder mieten von Personal einfach nicht genug ist!
            </p>
        </div>
        <div class="py-10 flex">
            <Button text="Mehr erfahren" link="/kontakt" color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
        </div>
    </div>
</div>
<div
    class="relative w-full h-[300px] bg-gradient-to-r from-gradient-dark to-gradient-light"
>
<div class="flex justify-between">
    <div>
        <img src="" alt="">
    </div>
</div>
    <div class="max-w-container h-[300px] flex justify-between m-auto">
        <div class="self-end"> 
            <img src="/beatrix-westphal.png" alt="Beatrix Westphal" class="" />
        </div>
        <div class="basis-2/5 self-center">
            <p class="text-white text-2xl font-light block">
                “Die Liebe zur Gastronomie und Hotellerie entwickelte sich in
                meiner Jugend. Die Leidenschaft für gute Arbeitsbedingungen im
                Laufe meines Arbeitslebens. Die Liebe zu Menschen wurde mir in
                die Wiege gelegt - also fühle ich mich dazu verpflichtet dies
                alles für Sie im besten Sinne zu verbinden.”
            </p>
            <br />
            <li class="text-white text-2xl">Beatrix Westphal</li>
        </div>
        <div class="self-center flex flex-col justify-start items-center gap-3">
            <p class="text-white text-center font-medium text-2xl uppercase">
                Beratung für:
            </p>
            <Button
                text="Mitarbeitende"
                link="/arbeitnehmer"
                color="bg-secondary"
            />
            <Button
                text="Hotelbetreiber"
                link="/arbeitgeber"
                color="bg-secondary"
            />
        </div>
    </div>
</div>
<div class=" flex justify-around max-w-container m-auto">
    {#each heroes as hero}
        <Herocard name={hero.name} imgurl={hero.imgurl} />
    {/each}
</div>
