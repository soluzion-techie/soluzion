import { Braces, Handshake, Lightbulb } from "lucide-react";
import { Button, Heading, Paragraph, Section } from "../../components";

export const AboutSection = () => {
  const CARD_DATA = [
    {
      id: 1,
      title: "Innovate Beyond Boundaries",
      description:
        "We believe in pushing the limits of technology to create innovative and impactful digital solutions for every client.",
      icon: <Lightbulb />,
    },
    {
      id: 2,
      title: "From Code to Creativity",
      description:
        "With expertise in web, mobile, and UI/UX design, we craft solutions tailored to your unique goals.",
      icon: <Braces />,
    },
    {
      id: 3,
      title: "Your Success, Our Mission",
      description:
        "We are committed to delivering scalable, high-quality solutions that transform your ideas into digital success stories.",
      icon: <Handshake />,
    },
  ];
  return (
    <Section id={"about"} cn={"justify-around gap-6  w-full mb-[10vh]"}>
      <div className="w-full max-w-3xl flex flex-col gap-4 items-start">
        <Heading level={1} cn={"text-5xl "}>
          Who We Are.
        </Heading>
        <div className="flex flex-col gap-2">
          <Paragraph cn={"text-sm sm:text-lg"}>
            Soluzion Tech is your trusted partner in digital innovation. With
            expertise in web development, mobile apps, and user-centered design.
          </Paragraph>
          <Paragraph cn={"text-sm sm:text-lg"}>
            We bring your ideas to life through clean, elegant, and scalable
            solutions. Whether you’re a startup or an established business,
            we’re here to help you think bigger, build smarter, and transform
            faster.
          </Paragraph>
        </div>
        <Button
          label="Join us in shaping the digital future."
          cn="bg-[#202020] text-white rounded-lg px-4 py-2 text-md"
        >
          Join us in shaping the digital future.
        </Button>
      </div>
      <div className="w-full max-w-3xl">
        <div className="flex flex-col justify-start gap-4">
          {CARD_DATA.map((card, index) => (
            <div
              key={card.id}
              className={`w-[300px] border border-[#202020] p-4 transform transition-all duration-300 ease-in-out rounded-lg shadow-md
        ${index === 1 ? "ml-auto" : ""} 
        hover:scale-105 hover:shadow-lg flex flex-col gap-2`}
            >
              <span>{card.icon}</span>
              <Heading level={4} className="text-lg font-semibold">
                {card.title}
              </Heading>
              <Paragraph cn={"text-sm"}>{card.description}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

//
