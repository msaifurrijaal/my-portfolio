const Contact = () => {
  return (
    <section id="contact">
      <div class="w-full flex justify-center">
        <div class="mx-auto text-center mb-2 w-full">
          <div class="bg-[url('../images/find.jpg')] w-full p-20">
            <h4 class="font-semibold text-lg text-primary mb-2">
              Social Media
            </h4>
            <h2 class="font-bold text-dark text-4xl mb-4">
              Find Me on Another Platform
            </h2>
            <div class="flex justify-center items-center">
              <a
                href="#"
                target="_blank"
                class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border hover:border-primary"
              >
                <img src="/images/facebook.png" class="w-full h-full" alt="" />
              </a>
              <a
                href="https://github.com/msaifurrijaal"
                target="_blank"
                class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border hover:border-primary"
              >
                <img src="/images/github.png" class="w-full h-full" alt="" />
              </a>
              <a
                href="https://www.instagram.com/msrijaal_/"
                target="_blank"
                class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border hover:border-primary"
              >
                <img src="/images/instagram.png" class="w-full h-full" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/muchammad-saifurrijaal/"
                target="_blank"
                class="w-9 h-9 mr-3 rounded-full flex justify-center items-center border hover:border-primary"
              >
                <img src="/images/linkedin.png" class="w-full h-full" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-20 pb-16">
        <div class="w-full px-4">
          <div class="mx-auto mb-16 max-w-xl text-center">
            <h4 class="mb-2 text-lg font-semibold text-primary">
              Let's Keep in Touch
            </h4>
            <h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
              Contact Me
            </h2>
            <p class="text-md font-medium text-scndark md:text-lg">
              Send the message you want to convey to me
            </p>
            <br />
            <a
              href="https://wa.me/6285232487037"
              target="_blank"
              class="text-base font-semibold bg-primary text-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mx-1"
            >
              Say, Hello!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
