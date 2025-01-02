import { useState, useEffect } from "react";
import { Button, Heading, Paragraph } from "../../components";
import { PROJECTS } from "../../helpers/data/Data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectsToShow = windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3;
  const maxIndex = PROJECTS.length - projectsToShow;

  const visibleProjects = PROJECTS.slice(
    currentIndex,
    currentIndex + projectsToShow
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <section
      className="flex flex-col items-center justify-center gap-[4vh] min-h-screen mb-[10vh] p-4"
      id="#services"
    >
      <div className="flex flex-col gap-[1vh] max-w-6xl w-full">
        <Heading level={1} cn="text-4xl md:text-5xl">
          Innovations We&apos;ve Brought to Life.
        </Heading>
        <Paragraph cn="text-sm sm:text-lg text-justify">
          Each project we take on is an opportunity to innovate and excel. Dive
          into our work and discover how we&apos;ve helped our clients think,
          build, and transform their digital presence.
        </Paragraph>
      </div>

      <div className="relative w-full max-w-6xl">
        <div className="flex justify-end mb-[1vh]">
          <div className="flex gap-[1vw]">
            <Button
              onClick={prevSlide}
              cn="p-2 rounded-lg bg-[#202020] text-white hover:bg-[#303030] disabled:opacity-50"
              label="Previous project"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextSlide}
              cn="p-2 rounded-lg bg-[#202020] text-white hover:bg-[#303030] disabled:opacity-50"
              label="Next project"
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="flex items-stretch justify-center gap-4">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col gap-4 w-full  rounded-lg border border-[#202020] box"
            >
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29taW5nJTIwc29vbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  className="w-full h-auto object-cover rounded-lg overflow-hidden"
                />
              </div>
              <div className="flex flex-col gap-2 p-2">
                <div className="flex gap-2 flex-wrap">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#202020] text-white px-2 py-1 rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Heading level={3} cn="text-2xl font-semibold">
                  {project.title}
                </Heading>
                <Paragraph cn="text-sm">{project.description}</Paragraph>
                <div>
                  <Button cn="bg-[#202020] text-white rounded-lg px-4 py-2 text-sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
