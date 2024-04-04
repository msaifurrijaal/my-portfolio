import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section id="project" className="pt-20 pb-12 bg-white">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w xl mx-auto text-center mb-2">
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              My Projects
            </h2>
            <p className="font-medium text-md text-scndark">
              Some of the projects I've made, either personally, or with a team.
            </p>
          </div>
        </div>
        <div className="w-full px-4 mt-8 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <ProjectCard
            title="Website Buahkita Ecommerce"
            desc="As a frontend developer, developing products using React Js (Typescript) and Tailwind
            css,"
            src="buahkita.jpeg"
            link="https://github.com/msaifurrijaal/buah-kita"
            linkText="goes to repository."
          />
          <ProjectCard
            title="Website SalingJaga"
            desc="As a web developer, developing products using Laravel and Tailwind
            CSS,"
            src="salingjaga.jpeg"
            link="https://github.com/msaifurrijaal/saling-jaga-web"
            linkText="goes to repository."
          />
          <ProjectCard
            title="Website Startup Luarkelas"
            desc="As a front-end developer, developing products using React Js and Tailwind
            CSS,"
            src="luarkelas.jpeg"
            link="https://luarkelas.id/"
            linkText="goes to website page."
          />
          <ProjectCard
            title="Savefood App"
            desc="As an Android developer, developing native Android applications using Kotlin language, Firebase. "
            src="savefood.png"
            link="https://drive.google.com/drive/folders/19_z7XZqej4QV0joQCz0K6iFBtUevcfV3?usp=sharing"
            linkText="Download apk."
          />
          <ProjectCard
            title="Kampenies App"
            desc="As a Mobile developer, developing applications using Flutter
            Framework,"
            src="pemin.png"
            link="https://github.com/msaifurrijaal/kampenies-pemin-ta"
            linkText="goes to repository."
          />
          <ProjectCard
            title="Post Natal Care App"
            desc="As an Android developer, developing native Android applications using Kotlin language, Firebase. "
            src="postnatal.png"
            link="https://play.google.com/store/apps/details?id=com.msaifurrijaal.postnatal"
            linkText="Goes to Google Play Store."
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
