export const HomePage = () => {
  return (
    <>
      <div>
        <header>
          <div className="hero--container bg-primary-60 flex flex-wrap justify-evenly pt-20 w-full">
            <div className="hero__text--container w-full sm:w-1/2 ">
              <h1>Diego Vergara</h1>
              <h2 className="uppercase">Frontend Developer</h2>
              <p>
                Welcome to my web page, i'm a web frontend developer from Chile
                since 2021, I consider myself passionate about what I do and all
                about tech.{" "}
              </p>
            </div>
            <div className="hero__img--container">
              <img
                src="https://res.cloudinary.com/dxryc5jgr/image/upload/c_thumb,w_200,g_face/v1661641671/personal-website/foto_mia2_vmu1nm.jpg"
                alt="Diego Vergara"
                className="hero__img w-60"
              />
            </div>
          </div>
        </header>
        <main>
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
        </main>
      </div>
    </>
  );
};
