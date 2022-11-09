import { FormEvent } from "react"



export const ContactPage = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault()
        const { name, message } = event.target
        const data = {
            name: name.value,
            message: message.value
        }
        fetch('http://localhost:5001/davc93/us-central1/helloWorld').then((res) => {
            return res.text()
        }).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <main className="pt-24 lg:p-8 lg:pt-24">
            <header className="flex justify-center text-center">

                <h1>Contact me and build an idea together </h1>

            </header>

            <section className="contact flex flex-col p-2 items-center my-32">
                <div className="social-media"></div>
                <div className="email flex flex-col shadow-lg w-full md:w-1/3 items-center p-4 gap-4">
                    <h3 className="self-start">Email</h3>
                    <span className="self-start">davc93@gmail.com</span>
                    <a href="mailto:davc93@gmail.com" className="btn btn--primary gap-2"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>Send me a email</a>
                </div>

            </section>
            {/* <form onSubmit={handleSubmit} className="simple-form">
            <label htmlFor="">Name</label>
            <input type="text" name="name" />
            <label htmlFor="">Message</label>
            <textarea name="message"></textarea>
            <button type="submit">Enviar</button>
        </form> */}
        </main>
    )
}
