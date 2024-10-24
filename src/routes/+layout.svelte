<script>
    import Container from "$lib/components/Container.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import "../app.css";

    import { onNavigate } from "$app/navigation";
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<Container>
    <Header />
    {@render children?.()}

    <Footer />
</Container>
