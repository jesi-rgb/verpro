<script>
	/**
	 * @type {{ src: string, title: string }}
	 */
	let { src, title } = $props();

	let audio = $state();
	let paused = $state(true);
	let currentTime = $state(0);
	let duration = $state(0);
	let volume = $state(1);

	function togglePlay() {
		if (paused) {
			audio?.play();
		} else {
			audio?.pause();
		}
	}

	/**
	 * @param {number} seconds
	 */
	function formatTime(seconds) {
		if (isNaN(seconds)) return "0:00";
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, "0")}`;
	}

	/**
	 * @param {MouseEvent} e
	 */
	function handleSeek(e) {
		const rect = /** @type {HTMLElement} */ (
			e.currentTarget
		).getBoundingClientRect();
		const percent = (e.clientX - rect.left) / rect.width;
		currentTime = percent * duration;
	}

	let progress = $derived((currentTime / duration) * 100 || 0);
</script>

<div
	class="w-full rounded-xl px-6 py-4 shadow-sm border border-stone-300 backdrop-blur-md"
>
	<div class="font-bold mb-3">{title}</div>
	<audio
		bind:this={audio}
		bind:currentTime
		bind:duration
		bind:paused
		bind:volume
		{src}
	>
		<track kind="captions" />
	</audio>

	<div class="flex items-center gap-4">
		<button
			class="w-12 h-12 rounded-full bg-stone-700 hover:bg-stone-800 active:scale-95 transition-all flex items-center justify-center flex-shrink-0 shadow-md hover:shadow-lg"
			onclick={togglePlay}
			aria-label={paused ? "Play" : "Pause"}
		>
			{#if paused}
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6 text-stone-50 ml-0.5"
				>
					<path d="M8 5v14l11-7z" />
				</svg>
			{:else}
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6 text-stone-50"
				>
					<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
				</svg>
			{/if}
		</button>

		<div
			class="text-stone-700 text-sm font-medium min-w-[40px] tabular-nums"
		>
			{formatTime(currentTime)}
		</div>

		<button
			class="flex-1 h-10 bg-transparent border-none cursor-pointer p-0 flex items-center group"
			onclick={handleSeek}
			aria-label="Seek"
		>
			<div
				class="w-full h-1.5 bg-stone-300 rounded-full overflow-hidden relative group-hover:h-2 transition-all"
			>
				<div
					class="h-full bg-stone-700 rounded-full relative transition-[width] duration-100"
					style="width: {progress}%"
				>
					<div
						class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-stone-700 rounded-full shadow-md"
					></div>
				</div>
			</div>
		</button>

		<div
			class="text-stone-700 text-sm font-medium min-w-[40px] tabular-nums"
		>
			{formatTime(duration)}
		</div>

		<div class="hidden sm:flex items-center gap-2">
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-6 h-6 text-stone-700 flex-shrink-0"
			>
				{#if volume === 0}
					<path
						d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
					/>
				{:else if volume < 0.5}
					<path d="M7 9v6h4l5 5V4l-5 5H7z" />
				{:else}
					<path
						d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"
					/>
				{/if}
			</svg>
			<input
				type="range"
				class="volume-slider w-20 h-1 appearance-none bg-stone-300 rounded-sm outline-none"
				min="0"
				max="1"
				step="0.01"
				bind:value={volume}
				aria-label="Volume"
			/>
		</div>
	</div>
</div>

<style>
	.volume-slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 12px;
		height: 12px;
		background: #44403c;
		border-radius: 50%;
		cursor: pointer;
		transition: transform 0.2s;
	}

	.volume-slider::-webkit-slider-thumb:hover {
		transform: scale(1.2);
	}

	.volume-slider::-moz-range-thumb {
		width: 12px;
		height: 12px;
		background: #44403c;
		border-radius: 50%;
		cursor: pointer;
		border: none;
		transition: transform 0.2s;
	}

	.volume-slider::-moz-range-thumb:hover {
		transform: scale(1.2);
	}
</style>
