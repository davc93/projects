import React from 'react'
import { Link } from 'react-router-dom'

export const ServicesPage = () => {
  return (
    <>
      <header className="relative h-screen md:h-96 mx-4">
        <div className="hero-container flex flex-col items-center absolute justify-center inset-x-0 top-24 text-center gap-4">
          <h1 className="hero__title">Find the service that you need</h1>
          <h3 className="hero__subtitle">Personalized services to what you need</h3>
        </div>
      </header>
      <main className="mx-6 md:mx-32">
        <section className="landing-page h-96 mb-6 lg:mb-16 md:w-2/3">
          <article className="flex flex-col gap-4">
            <h1>Landing Page</h1>
            <p>Service aimed at people or companies that already have a website, ideal for promoting new products, services, events and activities.</p>
            <Link className="btn btn--primary" to={'/service/landing-page'}>Create Landing Page</Link>
          </article>
          <img src="" alt="" />
        </section>
        <section className="web-site  h-96 md:flex md:justify-end">
        <article className="flex flex-col md:w-2/3 gap-4 md:text-end">
            <h1>Website</h1>
            <p>Service oriented to people or companies that do not yet have a website, includes a contact form, contact buttons such as Phone, mail, Social networks, etc…, catalog page and product detail.</p>
            <Link to={'/service/web-site'} className=" md:self-end btn btn--primary">Create web page</Link>
          </article>
          <img src="" alt="" />

        </section>
      </main>
    </>
  )
}
