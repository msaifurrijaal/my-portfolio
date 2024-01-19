import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section id="home">
      <div className="container py-12 md:py-24">
        <div className="w-full text-center">
          <img
            height="250"
            width="250"
            src="/images/rijaal.jpg"
            alt="Saifurrijaal"
            className="max-w-full mx-auto rounded-full"
          />
        </div>
        <div className="w-full text-center pt-8 px-4">
          <p className="font-bold text-base md:text-xl">Hello there!</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2 md:mt-4 flex text-primary justify-center">
            <span className="mr-2 text-black">I am</span>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Muchammad Saifurrijaal")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Mobile Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Frontend Developer")
                  .start();
              }}
            />
          </h2>
          <p className="font-medium text-base md:text-lg w-full md:w-1/2 lg:w-1/3 mt-4 mx-auto">
            I'm a third year student at University of Brawijaya, majoring in
            Information Technology. Frontend Web and Mobile App Enthusiast
          </p>
          <a
            href="#contact"
            className="text-base font-semibold bg-primary text-white py-3 px-8 mt-3 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out inline-block"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
