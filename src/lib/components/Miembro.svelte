<script>
    let { imageUrl, name, id } = $props();
</script>

<a href="/miembros/{id}" class="group not-prose">
    <div
        class="flex flex-col gap-5 shadow-md shadow-stone-400/10 justify-between items-center border border-stone-700/20 h-[300px] my-auto backdrop-blur rounded-xl p-3 not-prose"
    >
        <img
            src={imageUrl}
            alt={name}
            width="180"
            class="not-prose rounded-md group-hover:rotate-3 group-hover:scale-105 transition-transform my-auto shadow-md shadow-stone-400"
            style="view-transition-name: {id};"
            data-item={id}
        />

        <div class="text-center">
            <h3
                class="text-xl font-bold group-hover:text-stone-600 transition-colors group-hover:underline"
            >
                {name}
                {#if name === "Elena Felíu Arquiola"}
                    <span>(IP)</span>
                {/if}
            </h3>
        </div>
    </div>
</a>
