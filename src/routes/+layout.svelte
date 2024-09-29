<script>
    import Container from '$lib/components/Container.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import Header from '$lib/components/Header.svelte'
    import '../app.css'
</script>

<Container>
    <Header />
    <slot></slot>

    <Footer />
</Container>
