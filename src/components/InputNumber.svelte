<script>
    export let label = 'label';
    export let units = 'px';
    export let name = 'name';
    export let value =''
</script>

<style>
    .input-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
    }
    input {
        height: 30px;
        background-color: #F1F1F1;
        font-size: 14px;
        padding-left: 8px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .units {
        font-size: 12px;
        color: black;
        opacity: .2;
        position: absolute;
        right: 8px;
    }

</style>

<div class="input-group">
    <label for={name}>{label}</label>
    <input bind:value={value} name={name} type="number">
    <div class="units">{units}</div>
</div>