import { Link } from "react-router-dom";


export const HomePage = () => {
  return (
    <>
        <header className="p-2 md:p-4">
          <div className="hero--container bg-primary-60 flex flex-row-reverse flex-wrap justify-evenly pt-32 w-full gap-4">
            <div className="hero__text--container space-y-4 w-full sm:w-1/2 md:text-end">
              <h1>Diego Vergara</h1>
              <p>
                Welcome to my web page, i'm a web frontend developer from Chile
                since 2021, I consider myself passionate about what I do and all
                about tech.{" "}
              </p>
            </div>
            <div className="hero__img--container flex flex-col">
              <img
                src="https://res.cloudinary.com/dxryc5jgr/image/upload/c_thumb,w_200,g_face/v1661641671/personal-website/foto_mia2_vmu1nm.jpg"
                alt="Diego Vergara"
                className="hero__img w-60"
              />
              <span className="text-center self-center">Frontend Developer</span>
            </div>
          </div>
        </header>
        <main className="p-2 md:p-4">
          <section className="about-me">
            <div className="about-me--container h-screen flex justify-center items-center flex-col">
              <h2>About me</h2>
              <p>
                I am a business administrator by profession, I worked in
                management control for 5 years, and now that I discovered what I
                am passionate about, I am also a web developer, I like to meet
                people, learn new things, achieve goals and sports, I am a blue
                belt in brazilian jiu jitsu.
              </p>
            </div>
          </section>
          <section className="cta--projects flex flex-col gap-2 text-center">
            <h2>See my portfolio</h2>
            <h4>take a look of what can we build</h4>
            <Link to='/projects' className="btn btn--primary mt-8">Click here</Link>
          </section>
        </main>
      
    </>
  );
};
