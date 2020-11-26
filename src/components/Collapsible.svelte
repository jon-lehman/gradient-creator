<script>
    export let title = 'Collapsible Title';
    let open = false;
    let overflow = false;

    function handleToggle() {
        open = !open;
        if (open === false) {
            overflow = !overflow
        } else {
            setTimeout(() => overflow = !overflow, 300);
        }
    }
</script>

<style>
    .container {
        width: 270px;
        max-height: 38px;
        background-color: white;
        border: 2px solid black;
        padding: 0 16px;
        margin-top: -2px;
        overflow: hidden;
        transition: 300ms ease-in-out all;
    }
    .container.open {
        max-height: 320px !important;
    }
    .container.open .header svg {
        transform: rotateZ(180deg);
    }
    .container.show-overflow {
        overflow: visible !important;
    }
    .header {
        height: 38px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        cursor: pointer;
        box-shadow: 0px 2px 0px 0px #F1F1F1;
    }
    .header svg {
        transition: 200ms ease-in-out all;
    }
    .header p {
        font-weight: medium;
    }
    .controls {
        padding: 16px 0;
    }
</style>


<div id="container" class="container {open === true ? 'open' : ''} {overflow === true ? 'show-overflow' : ''}">
    <div class="header" on:click={handleToggle}>
        <p>{title}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none" viewBox="0 0 9 6">
            <path fill="#000" d="M1.058 0L4.5 3.708 7.942 0 9 1.142 4.5 6 0 1.142 1.058 0z"/>
        </svg>
    </div>
    <div class="controls">
        <slot></slot>
    </div>
</div>