<script>
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';
</script>

<div class="container">
	<h1>Audio Player Demo</h1>
	<AudioPlayer src="/audio/podcast-1-intro.opus" />
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		margin-bottom: 2rem;
		text-align: center;
	}
</style>
