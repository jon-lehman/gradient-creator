<script>
    export let label = 'label';
    export let value = 50;
</script>

<style>
    .input-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
    }

    input[type=range] {
        -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
        width: 100%; /* Specific width is required for Firefox. */
        background: transparent; /* Otherwise white in Chrome */
        position: relative;
        padding-bottom: 30px;
        z-index: 2;
    }

    input[type=range]:focus {
        outline: none;
    }
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 15px;
        width: 15px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0px 0px 0px 2px black;
        cursor: pointer;
        margin-top: 14px;
        transition: all 200ms ease-in-out;
    }
    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: transparent;
    }
    .range-group {
        width: 100%;
        position: relative;
        margin-top: -9px;
    }
    .range-progress {
        position: absolute;
        top: calc(50% + 2px);
        height: 2px;
        width: 100%;
        background-color: black;
        z-index: 1;
        pointer-events: none;
    }
</style>

<div class="input-group">
    <p>{label}</p>
    <div class="range-group">
        <input id="densityRange" name="density" type="range" min="0" max="100" bind:value={value} step="1" />
        <div class="range-progress" style="background-image: linear-gradient(90deg, black {value}%, #F1F1F1 {value}%)"></div>
    </div>
</div>