const About = () => {
  return (
    <section id="about" className="pt-20 pb-12 bg-slate-100">
      <div className="container">
        <div className="w-full px-4 flex justify-center">
          <div className="mx-auto text-center mb-2">
            <h2 className="font-bold text-dark text-4xl mb-4 sm:text-4xl md:text-4xl">
              About Me
            </h2>
            <p className="font-medium text-md text-scndark max-w-2xl">
              Information Technology students at Brawijaya University who are
              energetic and ambitious. Has experience as a freelancer on
              software development projects. Experienced in various
              organizations and committees.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 md:w-1/2  hidden md:block">
            <div className="mt-10 md:mt-0 lg:right-0">
              <img
                src="/images/about.jpg"
                alt="Mobile App Development"
                className="max-w-full mx-auto scale-75 rounded-3xl"
              />
            </div>
          </div>
          <div className="w-full self-center px-4 lg:px-8 md:w-1/2 text-center md:text-start mt-4 md:mt-4 lg:mt-0">
            <h1 className="font-semibold text-xl text-primary mb-2">
              Any Type Of Query & Discussion
            </h1>
            <p className="text-scndark mb-2">
              View more detailed information about myself
            </p>
            <p className="text-scndark">
              <span className="font-semibold text-dark">Name : </span>Muchammad
              Saifurrijaal
            </p>
            <p className="text-scndark">
              <span className="font-semibold text-dark">Email : </span>
              msaifurrijaal@gmail.com
            </p>
            <p className="text-scndark">
              <span className="font-semibold text-dark">Address : </span>Malang,
              East Java
            </p>
            <p className="font-bold text-lg mt-4">Tech Stack</p>
            <div className="flex mt-2 justify-center md:justify-start">
              <img
                src="/images/tech/html.png"
                className="mx-1 hover:scale-125 transition duration-300"
                alt=""
                height={28}
                width={28}
              />
              <img
                src="/images/tech/css.png"
                className="mx-1 hover:scale-125 transition duration-300"
                alt=""
                height={28}
                width={28}
              />
              <img
                src="/images/tech/js.png"
                className="mx-1 hover:scale-125 transition duration-300"
                alt=""
                height={28}
                width={28}
              />
              <img
                src="/images/tech/react.png"
                className="mx-1 hover:scale-125 transition duration-300"
                alt=""
                height={28}
                width={28}
              />
              <img
                src="/images/tech/tailwind.png"
                className="mx-1 hover:scale-125 transition duration-300"
                alt=""
                height={28}
                width={28}
              />
              <img
                src="/images/tech/kotlin.png"
                className="mx-1 hover:scale-125 transition duration-300"
                alt=""
                height={28}
                width={28}
              />
              <img
                src="/images/tech/flutter.png"
                className="mx-1 hover:scale-125 transition duration-300"
                alt=""
                height={28}
                width={28}
              />
            </div>

            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/muchammad-saifurrijaal/"
                target="_blank"
                className="text-base font-semibold bg-white text-dark py-2 px-8 rounded-full border-2 border-primary hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mx-1"
              >
                See My Full CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
