const ProjectCard = (props) => {
  const { title, desc, src, link, linkText } = props;
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-4">
      <div className=" bg-white border border-gray-200 hover:scale-105 transition duration-300 rounded-lg shadow h-full">
        <img className="rounded-t-lg" src={`/images/project/${src}`} alt="" />
        <div className="p-5 ">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 ">
            {desc}{" "}
            <a href={link} target="_blank" className="text-primary italic">
              {linkText}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
