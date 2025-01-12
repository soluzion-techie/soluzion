import { MoveRight } from "lucide-react";
import snow from "../../assets/large-snow.gif";
import { Button } from "../../components/ui/button/Button";
import { Heading, Paragraph, Section } from "../../components";

export const HomeSection = () => {
  return (
    <Section label={"Home Section"} id={"home"} cn={"flex-col"}>
      <div className="flex flex-col gap-2 sm:gap-[2vh] w-full max-w-5xl ">
        <p
          className="bg-[#202020] text-[#efefef] w-max p-2 rounded-lg shadow-lg inter relative overflow-hidden text-sm"
          style={{
            backgroundImage: `url(${snow})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="relative z-10">Think. Build. Transform. ❄️</span>
          <span
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(32, 32, 32, 0.8)",
            }}
          ></span>
        </p>

        <Heading level={1} cn={"text-5xl sm:text-7xl"}>
          Innovating Your <span className="  ">Digital Future</span>.
        </Heading>
        <Paragraph cn={"text-md sm:text-lg w-full sm:w-[50vw]"}>
          Clean, elegant code. Designs that stand out. Custom digital solutions
          crafted just for you—let’s build your vision today!
        </Paragraph>
        <Paragraph cn={"text-md sm:text-lg w-full sm:w-[50vw]"}>
          From intuitive websites to dynamic mobile apps, we focus on delivering
          exceptional quality that aligns with your vision.
        </Paragraph>
        <div className="flex gap-4 items-center flex-wrap">
          <Button
            label="Start Your Journey"
            cn="bg-[#202020] text-white rounded-lg px-4 py-2 text-md"
          >
            Start Your Journey <MoveRight />
          </Button>
          <Button
            label="Explore Services"
            cn="text-gray-900 rounded-lg px-4 py-2 border border-[#202020] text-md"
          >
            Explore Services
          </Button>
        </div>
      </div>
      {/* <div className="w-full max-w-6xl  flex items-center justify-center">
        <img
          src={heroSectionImage}
          alt=""
          className="w-[60vw] h-auto object-contain"
        />
      </div> */}
    </Section>
  );
};
