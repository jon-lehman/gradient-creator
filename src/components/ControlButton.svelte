<script>
    export let label = 'label';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    const clickHandler = () => dispatch('clicked');
</script>

<style>
    .container {
        width: 270px;
        max-height: 38px;
        background-color: white;
        border: 2px solid black;
        padding: 0 16px;
        margin-top: -2px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        cursor: pointer;
        font-weight: medium;
    }
</style>

<div class="container" on:click={clickHandler}>
    <p>{label}</p>
    <slot></slot>
</div>