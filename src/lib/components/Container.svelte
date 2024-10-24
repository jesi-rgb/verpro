<script>
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>

<section
    class="w-[90%] my-10 sm:max-w-md md:max-w-3xl xl:max-w-4xl mx-auto prose prose-stone md:prose-lg"
>
    {@render children?.()}
</section>
