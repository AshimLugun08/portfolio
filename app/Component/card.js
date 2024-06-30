import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <Link href={`${project.link}`} key={project._id}>
      <div className="relative  card md:overflow-hidden bg-white flex flex-col mt-6 text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-full md:w-96 cursor-pointer">
        <figure className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="rounded-xl object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </figure>
        <div className="pl-4 mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          <h2 className="card-title">{project.title}</h2>
          <div className="flex flex-wrap mt-2">
            {project.technologiesUsed.map((tech, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
