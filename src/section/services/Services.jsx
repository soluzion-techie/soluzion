import {
  Paintbrush,
  PanelTop,
  PenLine,
  Server,
  TabletSmartphone,
} from "lucide-react";
import { useState } from "react";
import { Button, Heading, Paragraph } from "../../components";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Development",
    icon: <PanelTop />,
    content: [
      {
        id: 1,
        title: "Web Development That Works for You",
        description:
          "From simple landing pages to dynamic, interactive web applications, we bring your online presence to life using the latest web technologies. We specialize in building responsive, user-friendly websites using HTML, CSS, JavaScript, and ReactJS to ensure seamless performance across all devices.",
        features: [
          "Custom websites and applications",
          "Responsive designs",
          "Fast, dynamic user experiences",
          "SEO optimization",
          "and many more...",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Mobile Apps",
    icon: <TabletSmartphone />,
    content: [
      {
        id: 1,
        title: "Mobile Apps That Make an Impact",
        description:
          "We design and develop mobile applications that engage users and drive results. Whether you need a native iOS or Android app, a cross-platform solution, or a mobile-friendly web app, we have the expertise to bring your ideas to life.",
        features: [
          "Native iOS and Android apps",
          "Cross-platform development",
          "User-friendly interfaces",
          "Seamless performance",
          "and many more...",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Backend Development",
    icon: <Server />,
    content: [
      {
        id: 1,
        title: "Powerful Backend Solutions",
        description:
          "We build robust, scalable backend systems that support your applications and drive business growth. Our team specializes in creating custom APIs, databases, and server-side applications using Node.js, Express, MongoDB, and other technologies to ensure seamless integration and performance.",
        features: [
          "Custom APIs and databases",
          "Scalable server-side applications",
          "Data management and security",
          "Integration with third-party services",
          "and many more...",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: <Paintbrush />,
    content: [
      {
        id: 1,
        title: "Design That Delivers Results",
        description:
          "We create intuitive, visually stunning user interfaces that enhance the user experience and drive engagement. Our team combines creativity with data-driven insights to craft designs that are not only beautiful but also functional and user-friendly.",
        features: [
          "User-centered design",
          "Interactive prototypes",
          "Visual storytelling",
          "Brand consistency",
          "and many more...",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Content Creation",
    icon: <PenLine />,
    content: [
      {
        id: 1,
        title: "Compelling Content That Connects",
        description:
          "We help you tell your story through engaging, high-quality content that resonates with your audience. From copywriting and blog posts to social media content and video production, we offer a range of content creation services to elevate your brand and drive conversions.",
        features: [
          "Copywriting and editing",
          "SEO-friendly content",
          "Social media management",
          "Video production",
          "and many more...",
        ],
      },
    ],
  },
];
export const Services = () => {
  // Always start with the first service selected
  const [activeServiceId, setActiveServiceId] = useState(SERVICES_DATA[0].id);

  // Modified click handler to prevent deselection
  const handleServiceClick = (id) => {
    setActiveServiceId(id); // Remove the toggle behavior
  };

  return (
    <section
      className="flex flex-col items-center gap-[4vh] min-h-screen mb-[10vh] p-4"
      id="#services"
    >
      <div className="flex flex-col gap-[1vh] max-w-6xl w-full">
        <Heading level={1} cn="text-4xl md:text-5xl">
          Services We Offer.
        </Heading>
        <Paragraph cn="text-sm sm:text-lg text-justify">
          At Soluzion Tech, we offer a wide range of digital services designed
          to elevate your online presence. From building high-performance
          websites and mobile apps to crafting seamless user experiences and
          compelling content, our team combines creativity with technical
          expertise to deliver solutions that drive results. Let us help you
          bring your vision to life with precision and passion.
        </Paragraph>
      </div>

      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Service Titles - Left side */}
          <div className="w-full md:w-1/3 flex flex-col">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className={`
                  group relative
                  mb-2 p-4 rounded-lg cursor-pointer
                  transition-all duration-300 ease-in-out
                  hover:bg-[#20202029] 
                  ${
                    activeServiceId === service.id
                      ? "bg-[#20202029] shadow-lg"
                      : ""
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                  <Heading level={2} cn="text-xl md:text-2xl">
                    {service.title}
                  </Heading>
                </div>

                {/* Mobile-only content */}
                <div
                  className={`
                    md:hidden
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${
                      activeServiceId === service.id
                        ? "max-h-[800px] opacity-100 mt-6"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  {service.content[0] && (
                    <div className="space-y-6 border-l-2 border-[#20202029] pl-4">
                      <Heading level={3} cn="text-xl font-bold">
                        {service.content[0].title}
                      </Heading>
                      <Paragraph cn="text-sm leading-relaxed">
                        {service.content[0].description}
                      </Paragraph>
                      <div className="space-y-3">
                        <Heading level={4} cn="text-lg font-semibold">
                          Key Features:
                        </Heading>
                        <ul className="space-y-2 list-none">
                          {service.content[0].features.map((feature, index) => (
                            <li
                              key={index}
                              className="text-sm flex items-center gap-2 text-[#202020] font-medium"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-[#202020] flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button
                          label="Get in touch with our team!"
                          cn="bg-[#202020] text-white px-4 py-2 rounded-lg shadow-lg mt-6"
                        >
                          Get in touch with our team!
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Service Content - Right side on desktop */}
          <div className="hidden md:block md:w-2/3">
            <div className="relative h-full">
              {SERVICES_DATA.map((service) => (
                <div
                  key={service.id}
                  className={`
                    absolute top-0 left-0 w-full
                    transition-all duration-500 ease-in-out
                    ${
                      activeServiceId === service.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8 pointer-events-none"
                    }
                  `}
                >
                  <div className="border-l-2 border-[#20202029] pl-6 space-y-3">
                    <Heading level={3} cn="text-2xl font-bold">
                      {service.content[0].title}
                    </Heading>
                    <Paragraph cn="leading-relaxed">
                      {service.content[0].description}
                    </Paragraph>
                    <div className="space-y-4">
                      <Heading level={4} cn="text-lg font-semibold">
                        Key Features:
                      </Heading>
                      <ul className="grid grid-cols-1 gap-3">
                        {service.content[0].features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-[#202020] font-medium"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#202020] flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        label="Get in touch with our team!"
                        cn="bg-[#202020] text-white px-4 py-2 rounded-lg shadow-lg mt-6"
                      >
                        Get in touch with our team!
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
