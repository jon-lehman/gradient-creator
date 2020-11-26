<script>
    import { width, height, paletteName, palettes, complexity, opacity, blendMode } from "../stores.js";
    import { createEventDispatcher } from 'svelte';

    import Collapsible from './Collapsible.svelte'
    import InputNumber from './InputNumber.svelte';
    import InputSelect from './InputSelect.svelte';
    import InputRange from './InputRange.svelte';
    import ControlButton from './ControlButton.svelte';

    const blendModes = [
        'Normal',
        'Darken',
        'Multiply',
        'Color Burn',
        'Lighten',
        'Screen',
        'Color Dodge',
        'Overlay',
        'Soft Light',
        'Hard Light',
        'Difference',
        'Exclusion',
        'Hue',
        'Saturation',
        'Color',
        'Luminosity'
    ];

    const dispatch = createEventDispatcher();
    function refreshHandler() {
        dispatch('refresh')
    }
</script>

<style>
    .controls {
        position: absolute;
        right: 32px;
        bottom: 32px;
    }
</style>

<div class="controls">

    <Collapsible title="Size">
        <InputNumber label="Width" bind:value={$width} units="px"></InputNumber>
        <InputNumber label="Height" bind:value={$height} units="px"></InputNumber>
    </Collapsible>

    <Collapsible title="Color">
        <InputSelect label="Palette" IsPaletteSelect=true palettes={$palettes} bind:value={$paletteName}></InputSelect>
        <InputRange label="Complexity" bind:value={$complexity}></InputRange>
    </Collapsible> 

    <Collapsible title="Noise">
        <InputRange label="Opacity" bind:value={$opacity}></InputRange>
        <InputSelect label="Blend Mode" bind:value={$blendMode} options={blendModes}></InputSelect>
    </Collapsible>

    <ControlButton label="Refresh" on:clicked={refreshHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="none" viewBox="0 0 16 12" style="margin-right:-4px">
            <path fill="#000" d="M13.09 3l-2.908 3h2.182c0 2.482-1.957 4.5-4.364 4.5a4.167 4.167 0 01-2.036-.525L4.902 11.07c.894.585 1.956.93 3.098.93 3.214 0 5.818-2.685 5.818-6H16l-2.91-3zM3.637 6c0-2.482 1.957-4.5 4.364-4.5.735 0 1.433.188 2.036.525L11.098.93A5.641 5.641 0 008 0C4.785 0 2.182 2.685 2.182 6H0l2.91 3 2.908-3H3.636z"/>
        </svg>
    </ControlButton>

    <ControlButton label="Download">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" fill="none" viewBox="0 0 10 12">
            <path fill="#000" d="M10 4.235H7.143V0H2.857v4.235H0l5 4.941 5-4.94zM0 10.588V12h10v-1.412H0z"/>
        </svg>
    </ControlButton>

</div>