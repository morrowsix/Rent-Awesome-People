<script>
    import { scale } from "svelte/transition";
    export let name;
    export let imgurl;
</script>

<div class="group w-56 first:ml-0 last:mr-0 m-auto pt-7 hover:pt-0 transition-all">
    <div
        class="bg-gradient-to-r from-gradient-dark to-gradient-light rounded-2xl w-full h-auto flex justify-center m-auto group-hover:shadow-xl overflow-hidden"
    >
        <img src={imgurl} />
    </div>
    <div class="flex justify-center">
        <p
            class="uppercase scale-0 group-hover:scale-100 text-2xl text-secondary font-medium p-3"
        >
            {name}
        </p>
    </div>
</div>
