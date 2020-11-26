<script>
    import { width, height, paletteName, paletteOptions, complexity, opacity, blendMode } from "../stores.js";
    import { onMount } from 'svelte';
    import Panzoom from '@panzoom/panzoom'

    onMount(() => {
		const elem = document.getElementById('canvas')
        const panzoom = Panzoom(elem, {
            minScale: .01,
            disablePan: false
        });
        elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)
    })

    export function updateGradient() {
        var gradientGroup = document.getElementById('gradients');
        var gradients = gradientGroup.querySelectorAll('.ellipse'), i;
        for (i = 0; i < gradients.length; ++i) {
            gradients[i].opacity = getRandomInt(15, 100)/100;
            gradients[i].setAttribute('cx', getRandomInt($width/6, $width/1.5));
            gradients[i].setAttribute('cy', getRandomInt($width/6, $width/1.5));
            gradients[i].fill = chosenPalette[0].colors[getRandomInt(1, 3)];
            gradients[i].setAttribute('rx', getRandomInt(0, $width/1.5));
            gradients[i].setAttribute('ry', getRandomInt(0, $height/1.5));
        }
    }
    
    let noiseSrc = 'assets/images/noise.jpg';

    $: chosenPalette = $paletteOptions.filter(function (e) {
        return e.name === $paletteName
    });

    $: numberOfGradients = Math.round($complexity/10+1);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

</script>

<style>

</style>

<!--
<p style="position: absolute; font-size: 12px; left: 10px; top: 10px; margin: 0; z-index:99">
    Width: {$width}<br />
    Height: {$height}<br />
    Palette Name: {$paletteName}<br />
    Complexity: {$complexity}<br />
    Opacity: {$opacity}<br />
    Blend Mode: {$blendMode}
</p>
-->

<div>
    <svg id="canvas"xmlns="http://www.w3.org/2000/svg" width="{$width}" height="{$height}" fill="none">

        <defs>
            <filter id="blurry" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="120"/>
            </filter>
        </defs>

        <path fill="{chosenPalette[0].colors[0]}" d="M0 0h{$width}v{$height}H0z"/>
        <g filter="url(#blurry)" id="gradients">
            {#each Array(numberOfGradients) as _, i}
                <ellipse class="ellipse" opacity={getRandomInt(15, 100)/100} cx="{getRandomInt($width/6, $width/1.5)}" cy="{getRandomInt($height/6, $height/1.5)}" fill="{chosenPalette[0].colors[getRandomInt(1, 3)]}" rx="{getRandomInt(0, $width/1.5)}" ry="{getRandomInt(0, $height/1.5)}"/>
            {/each}
        </g>
        <image width="100%" height="100%" xlink:href={noiseSrc} preserveAspectRatio="none" opacity={$opacity/100} style="mix-blend-mode:{$blendMode.replace(/\s+/g, '-').toLowerCase()}"/>
    </svg>
</div>