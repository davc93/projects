import React from "react";
import { Link } from "react-router-dom";

export const ServicesPage = () => {
  return (
    <>
      <header className="relative h-screen mx-4">
        <div className="hero-container flex flex-col items-center absolute justify-center inset-x-0 top-24 text-center gap-4">
          <h1 className="hero__title">Find the service that you need</h1>
          <h3 className="hero__subtitle">Personalized services to what you need</h3>
        </div>
      </header>
      <main className="mx-6">
        <section className="landing-page mb-6 lg:mb-16">
          <article className="flex flex-col gap-4">
            <h1>Landing Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta molestias obcaecati odio illo mollitia excepturi saepe natus labore ipsum enim ut porro modi commodi deserunt, consequatur ad eveniet aliquam cumque?</p>
            <Link className="btn btn--primary" to={'/service/landing-page'}>Create Landing Page</Link>
          </article>
          <img src="" alt="" />
        </section>
        <section className="web-site">
        <article className="flex flex-col gap-4">
            <h1>Web Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, obcaecati nemo. Tenetur, magni laboriosam voluptates quia alias exercitationem dolor atque velit illum quis </p>
            <Link to={'/service/web-site'} className="btn btn--primary">Create web page</Link>
          </article>
          <img src="" alt="" />

        </section>
      </main>
    </>
  );
};

