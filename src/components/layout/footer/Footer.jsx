import { FOOTER_DATA } from "../../../helpers/data/Data";
import { Button } from "../../ui/button/Button";
import { Heading } from "../../ui/heading/Heading";
import { Paragraph } from "../../ui/paragraph/Paragraph";
import footerImg from "../../../assets/footer.svg";
export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-[8vh] min-h-screen p-4 bg-[#202020] text-[#efefef] relative">
      {/* Newsletter Box */}
      <div className="w-full sm:w-[60vw] mx-auto bg-[#68666629] p-4 rounded-lg flex flex-col gap-[2vh] shadow-lg">
        <Heading level={2} cn="text-2xl sm:text-4xl">
          Stay in the Loop with Soluzion Tech.
        </Heading>
        <Paragraph cn="text-sm text-[#C2C6BD] ">
          Be the first to know about our latest projects, innovative solutions,
          and exciting updates. Subscribe to our newsletter and join our journey
          to transform the digital world!
        </Paragraph>
        <div className="relative">
          <input
            type="text"
            id="name"
            placeholder="johnDoe@gmail.com"
            className="w-full bg-transparent border-b text-[#C2C6BD] border-[#424141] placeholder:text-gray-500 outline-none p-2 focus:border-gray-200 duration-200"
          />
          <Button
            label="Subscribe"
            cn="bg-[#202020] text-[#C2C6BD] rounded-lg px-4 py-2 text-md absolute -top-2 right-0"
          >
            Subscribe
          </Button>
          <Paragraph cn="text-xs text-[#C2C6BD] mt-1 ">
            Don’t worry, we won’t spam your inbox. Only inspiring content,
            straight to your inbox!
          </Paragraph>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-0  w-full justify-around ">
        <div>
          <Heading level={1} cn="text-7xl archivo">
            Soluzion.
          </Heading>
          <Paragraph cn="text-sm text-[#C2C6BD] inter">
            Think. Build. Transform.
          </Paragraph>
        </div>
        <div className="flex gap-8 sm:gap-[4vw] flex-col sm:flex-row ">
          <div className="flex flex-wrap gap-12 sm:gap-[4vw]">
            {FOOTER_DATA.map((data) => (
              <ul
                className="flex flex-col gap-2 w-[40vw] sm:w-[15vw]"
                key={data.id}
              >
                <Heading level={3} cn="text-2xl">
                  {data.name}
                </Heading>
                {data.child.map((child) => (
                  <li key={child.id}>
                    <a
                      href={child.path}
                      className="text-[#c2c6bd] hover:underline"
                    >
                      {child.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden sm:flex flex-col gap-[4vh] sm:gap-0 sm:flex-row items-center justify-between w-full">
        <div className="self-end">
          <Paragraph cn="text-[#C2C6BD]">
            Created with ❤️ by Soluzion Tech. All rights reserved.
          </Paragraph>
        </div>
        <div className="inline-block">
          <img
            src={footerImg}
            alt="footer"
            className="w-[60vw]  sm:w-[30vw] "
          />
        </div>
      </div>
      <div className="sm:hidden flex flex-col gap-[4vh] sm:gap-0 sm:flex-row items-center justify-between w-full">
        <div className="absolute sm:relative bottom-0 right-0 ">
          <img
            src={footerImg}
            alt="footer"
            className="w-[60vw]  sm:w-[30vw] "
          />
        </div>
      </div>
    </footer>
  );
};
