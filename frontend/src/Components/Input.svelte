<script>
    let message;

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

    const handleSend = ()=>{
        postData('/api/v1/chat',{message:message})
        message = '';
    }
    
</script>

<div class="container">
    <div class="input">
        <input type="text" placeholder="Enter Message" bind:value={message}/>
        <button on:click={handleSend}>Send</button>
    </div>
</div>

<style>
    .container{
        position:fixed;
        top:90%;
        left:50%;
        transform: translate(-50%);
    }
</style>