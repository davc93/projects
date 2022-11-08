import { FormEvent } from "react"



export const ContactPage = () => {
    const handleSubmit = (event:any) => {
        event.preventDefault()
        const {name,message} = event.target
        const data = {
            name:name.value,
            message:message.value
        }
        fetch('http://localhost:5001/davc93/us-central1/helloWorld').then((res)=>{
            return res.text()
        }).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error)
        })
    }
    
  return (
    <div>
        <h1>Contact Page</h1>
        <form onSubmit={handleSubmit} className="simple-form">
            <label htmlFor="">Name</label>
            <input type="text" name="name" />
            <label htmlFor="">Message</label>
            <textarea name="message"></textarea>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}
