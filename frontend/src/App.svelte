<script>
	import Login from "./Components/Login.svelte";
	import Input from "./Components/Input.svelte";
	import Header from "./Components/Header.svelte";
	import Message from "./Components/Message.svelte";

	let showInput = false;
	let incommingMessages = [];

	setInterval(() => {
		fetch("/api/v1/chat").then(response=>response.json()).then((data)=>{
			incommingMessages = data;
		})
	}, 1000);
</script>

<Header />
<Login on:LoggedIn={()=>{showInput = true}}/>
{#if showInput}
<div class="container">
    <div class="msg-area">
        {#each incommingMessages as msg}
			{#if msg.id!=document.cookie.slice(3)}
				<Message message={msg.message} user = {msg.user} color="#329D9C" align="left"/>
			{:else}
				<Message message={msg.message} user = {msg.user} color="#7BE495" align="right"/>
			{/if}
		{/each}
    </div>
</div>
	<Input />
{/if}

<style>
	.container{
        width:100%;
        height: 70%;
        display:flex;
        justify-content: center;
        
    }
    .msg-area{
        overflow-y: auto;
        overflow-x: hidden;
        width:30%;
        display:flex;
        flex-direction: column;
    }
</style>