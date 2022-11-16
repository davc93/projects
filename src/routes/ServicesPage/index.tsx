import React from "react";
import { Link } from "react-router-dom";

export const ServicesPage = () => {
  return (
    <>
      <header>
        <div className="hero-container">
          <h1 className="hero__title">Find the service that you need</h1>
          <p className="hero__subtitle">Personalized services to what you need</p>
        </div>
      </header>
      <main>
        <section className="landing-page">
          <article>
            <h1>Landing Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta molestias obcaecati odio illo mollitia excepturi saepe natus labore ipsum enim ut porro modi commodi deserunt, consequatur ad eveniet aliquam cumque?</p>
            <Link to={'/service/landing-page'}>Create my Landing Page</Link>
          </article>
          <img src="" alt="" />
        </section>
        <section className="web-site">
        <article>
            <h1>Web Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, obcaecati nemo. Tenetur, magni laboriosam voluptates quia alias exercitationem dolor atque velit illum quis </p>
            <Link to={'/service/web-site'}>Create my web page</Link>
          </article>
          <img src="" alt="" />

        </section>
      </main>
    </>
  );
};

