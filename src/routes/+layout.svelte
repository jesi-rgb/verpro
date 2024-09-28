<script>
    import Container from '$lib/components/Container.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import '../app.css'
</script>

<Container>
    <slot></slot>

    <Footer />
</Container>

