<script>
	import Canvas from './components/Canvas.svelte';
	import Controls from './components/Controls.svelte';

	let canvas;
</script>

<Canvas bind:this={canvas}/>
<Controls on:refresh={canvas.updateGradient}/>