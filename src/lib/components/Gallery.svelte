<script lang="ts">
    interface Props {
        images: string[];
        alt?: string;
    }

    let { images, alt = "" }: Props = $props();

    let activeIndex: number | null = $state(null);
    let dialog: HTMLDialogElement | undefined = $state();

    function open(i: number) {
        activeIndex = i;
        dialog?.showModal();
    }

    function close() {
        dialog?.close();
        activeIndex = null;
    }

    function prev() {
        if (activeIndex === null) return;
        activeIndex = (activeIndex - 1 + images.length) % images.length;
    }

    function next() {
        if (activeIndex === null) return;
        activeIndex = (activeIndex + 1) % images.length;
    }

    function onKey(e: KeyboardEvent) {
        if (activeIndex === null) return;
        if (e.key === "ArrowLeft") prev();
        else if (e.key === "ArrowRight") next();
    }
</script>

<svelte:window on:keydown={onKey} />

<div class="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
    {#each images as src, i}
        <button
            type="button"
            class="group block overflow-hidden rounded-lg border border-stone-700/20 shadow-sm hover:shadow-md transition-shadow aspect-square"
            onclick={() => open(i)}
        >
            <img
                {src}
                alt={`${alt} ${i + 1}`}
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
        </button>
    {/each}
</div>

<dialog
    bind:this={dialog}
    onclose={() => (activeIndex = null)}
    class="bg-transparent backdrop:bg-black/80 max-w-none w-full h-full p-0"
>
    {#if activeIndex !== null}
        <div class="relative w-full h-full flex items-center justify-center p-4">
            <button
                type="button"
                aria-label="Cerrar"
                onclick={close}
                class="absolute top-4 right-4 text-white text-3xl leading-none hover:opacity-70"
            >
                ×
            </button>

            {#if images.length > 1}
                <button
                    type="button"
                    aria-label="Anterior"
                    onclick={prev}
                    class="absolute left-4 text-white text-4xl leading-none hover:opacity-70"
                >
                    ‹
                </button>
                <button
                    type="button"
                    aria-label="Siguiente"
                    onclick={next}
                    class="absolute right-4 text-white text-4xl leading-none hover:opacity-70"
                >
                    ›
                </button>
            {/if}

            <img
                src={images[activeIndex]}
                alt={`${alt} ${activeIndex + 1}`}
                class="max-w-full max-h-full object-contain"
            />
        </div>
    {/if}
</dialog>
