<script>
    export let message;
    export let color;
    export let align;
    export let user;
</script>

<div class="container" style="text-align: {align};">
    <div class="p" style="background-color: {color};">
        <p>{message}</p>
        <p>{user}</p>
    </div>
</div>

<style>
    .p{
        border-radius: 6px;
        color : black;
        display: inline-block;
        padding:1em;
        margin:1em;
    }
    
</style>