<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();
    let showLogin = true;
    let showName = false;
    let name;

    const postData = async(url = '',data)=>{
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        })

        return response.json();
    }
    const handleSubmit = ()=>{
        showLogin = false;
        showName = true;
        postData('/api/v1/user',{name:name}).then(data=>{
            console.log(data);
        })
        dispatch('LoggedIn');
    }
</script>
{#if showLogin}
    <div class="container">
        <div class="login">
            <h2>Login</h2>
            <input type="text" placeholder="Enter Name" bind:value={name}/>
            <button on:click={handleSubmit}>Login</button>
        </div>
    </div>
{/if}

{#if showName}
    <div class="name-container">
        <h2>{name}</h2>
    </div>
{/if}
<style>
    .container{
        width:100%;
        text-align: center;
    }
    .login{
        margin:10px;
    }
    .name-container{
        text-align: center;
    }
</style>