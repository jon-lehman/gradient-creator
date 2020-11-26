<script>
    import { paletteOptions } from "../stores.js";

    export let label = 'label';
    export let value = '';
    export let options = ['option 1', 'option 2', 'option 3'];
    export let IsPaletteSelect = false;
    let open = false;

    function handleToggle() {
        open = !open;
    }

    function updatePaletteValue(name, colors) {
        value = name
        open = !open;
    }

    function updateValue(option) {
        value = option;
        open = !open;
    }
</script>

<style>
    .input-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
    }
    .select {
        width: 100%;
        font-weight: normal;
        font-size: 14px;
        position: relative;
    }
    .select-trigger {
        height: 30px;
        background-color: #F1F1F1;
        padding-left: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .arrow {
        position: absolute;
        right: 8px;
    }
    .select-options {
        position: absolute;
        display: none;
        height: auto;
        max-height: 100px;
        overflow-y: scroll;
        background-color: white;
        border: 2px solid black;
        box-shadow: 0px 16px 20px rgba(0,0,0,.25);
        width: 179px;
        z-index: 99;
    }
    .select-options.open {
        display: block;
    }
    .select-option {
        padding: 8px;
        border-bottom: 2px solid black;
        cursor: pointer;
        transition: all ease 100ms;
    }
    .select-option:last-child {
        border: none;
    }
    .select-option.color-option {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .select-option:hover {
        background-color: #F1F1F1;
    }
    .color-thumbnails {
        display: flex;
        flex-direction: row;
    }
    .color-thumbnail {
        height: 12px;
        width: 12px;
        box-shadow: 0px 0px 0px 1px black;
    }
    .reduced {
        font-size: 12px;
        margin: 0;
    }
</style>

<div class="input-group">
    <p>{label}</p>
    <div class="select">

        <div class="select-trigger" on:click={handleToggle}>
            <div class="select-selection">
                {value}
            </div>
            <div class="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none" viewBox="0 0 9 6">
                    <path fill="#000" d="M1.058 0L4.5 3.708 7.942 0 9 1.142 4.5 6 0 1.142 1.058 0z"/>
                </svg>
            </div>
        </div>

        <div class="select-options {open === true ? 'open' : ''}">

            {#if IsPaletteSelect === false}
                {#each options as option}
                    <div class="select-option"on:click={() => updateValue(option)}>{option}</div>
                {/each}

            {:else if IsPaletteSelect = true}
                {#each $paletteOptions as {name, colors}}
                    <div class="select-option color-option" on:click={() => updatePaletteValue(name, colors)}>
                        <p class="reduced">{name}</p>
                        <div class="color-thumbnails">
                            {#each colors as color}
                                <div class="color-thumbnail" style="background-color: {color}"></div>
                            {/each}
                        </div>
                    </div>
                {/each}
            {/if}

        </div>

    </div>
</div>