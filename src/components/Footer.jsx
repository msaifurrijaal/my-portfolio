const Footer = () => {
  return (
    <footer class="bg-dark pt-10 pb-7">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="mb-5 w-full px-4 font-medium text-slate-300 md:w-1/2">
            <h2 class="mb-5 text-4xl font-bold text-white">Saifurrijaal</h2>
            <h3 class="mb-2 text-2xl font-bold">Contact Me</h3>
            <p>msaifurrijaal@gmail.com</p>
            <p>Malang, East Java</p>
          </div>
          <div class="mb-5 w-full px-4 md:w-1/2">
            <h3 class="mb-5 text-xl font-semibold text-white">Link</h3>
            <ul class="text-slate-300">
              <li>
                <a
                  href="#home"
                  class="mb-3 inline-block text-base hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  class="mb-3 inline-block text-base hover:text-primary"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  class="mb-3 inline-block text-base hover:text-primary"
                >
                  My Project
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="mb-3 inline-block text-base hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full border-t border-slate-700 pt-10">
          <p class="text-center text-xs font-medium text-slate-500">
            Developed<span class="text-pink-500"></span> by
            <a
              href="https://www.instagram.com/msrijaal_/"
              target="_blank"
              class="font-bold text-primary"
            >
              Muchammad Saifurrijaal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
