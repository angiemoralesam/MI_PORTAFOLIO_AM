const form = document.getElementById('form')

form.addEventListener('submit', handleSubmit)

 async function handleSubmit(event) {
    event.preventDefault()

        const form = new FormData(this)

        const response = await fetch(this.action, {
            method:"POST",
            body: form,
            Headers: {
                Accept: 'aplication/json'
            }
        })

        if (response.ok) {
            this.reset()
            alert('mensaje enviado')
        }else {
            alert('Error al enviar mensaje')
        }
        
    }
        


