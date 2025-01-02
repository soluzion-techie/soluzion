import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { Button, Heading, Paragraph, Section } from "../../components";
import { useState } from "react";
import { FAQS, SOCIAL_MEDIA } from "../../helpers/data/Data";

export const ContactSection = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <Section cn={"gap-[2vw] mb-0"}>
      <div className="w-full sm:w-[40vw] p-2">
        <div className="flex flex-col items-start justify-between gap-4 ">
          <div className="flex gap-[1vw] ">
            <div>
              <span className="flex items-center justify-center">
                <MessageCircle
                  className="border border-[#202020] w-[30px] h-[30px] sm:w-[3vw] p-1 sm:h-[5vh] rounded-lg m-auto  shadow-lg"
                  size={15}
                />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <Heading level={5} cn={"text-lg"}>
                Chat To Us
              </Heading>
              <Paragraph cn={"text-sm leading-none"}>
                Our friendly team is here to help
              </Paragraph>
              <Paragraph cn={"text-sm font-bold leading-none"}>
                <a
                  href="mailto:soluzion.tech@gmail.com"
                  className="text-[#202020] underline"
                >
                  soluzion.tech@gmail.com
                </a>
              </Paragraph>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="w-full mt-8">
            <Heading level={5} cn={"text-lg"}>
              Frequently Asked Questions
            </Heading>
            <div className="flex flex-col gap-4 mt-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#202020] rounded-lg p-4 cursor-pointer duration-150 ease-in-out"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <Paragraph cn={"text-md font-bold"}>
                      {faq.question}
                    </Paragraph>
                    <span>
                      {activeFaq === index ? <ChevronDown /> : <ChevronUp />}
                    </span>
                  </div>
                  {activeFaq === index && (
                    <Paragraph cn={"text-sm mt-2"}>{faq.answer}</Paragraph>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-8">
            {SOCIAL_MEDIA.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="border flex items-center justify-center border-[#202020] w-[30px] h-[30px] sm:w-[3vw] p-1 sm:h-[5vh] rounded-lg m-auto  shadow-lg"
              >
                {<social.icon />}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[60vw] bg-[#20202029]  py-[8vh] px-[2vw] flex flex-col gap-[2vh] rounded-lg shadow-lg">
        <div className="flex flex-col gap-[2vh]">
          <Heading level={1} cn={"text-3xl sm:text-5xl sm:w-[40vw]"}>
            Got Ideas? We have got the skills. Lets team up.
          </Heading>
          <Paragraph cn={"text-lg"}>
            Tell us more about your project and we will contact soon.
          </Paragraph>
        </div>
        <form action="" className="flex flex-col gap-[4vh] inter">
          <div>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full bg-transparent border-b border-[#202020] placeholder-[#202020] text-[#202020] outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="yourCompany@email.com"
              className="w-full bg-transparent border-b border-[#202020] placeholder-[#202020] text-[#202020] outline-none"
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              cols="10"
              rows="5"
              placeholder="Tell us more about your project.."
              className="w-full bg-transparent border-b border-[#202020] placeholder-[#202020] text-[#202020] outline-none"
            ></textarea>
          </div>
          <div>
            <Heading level={5} cn={"text-lg"}>
              How can we help you?
            </Heading>
            <div className="flex flex-wrap gap-4 mt-2">
              <label className="flex w-[45%] sm:w-[35%]  items-center gap-2 p-2 rounded-lg">
                <input
                  type="checkbox"
                  name="service"
                  value="website-design"
                  className="accent-[#202020]"
                />
                Website Design
              </label>
              <label className="flex w-[45%] sm:w-[35%]  items-center gap-2 p-2 rounded-lg">
                <input
                  type="checkbox"
                  name="service"
                  value="ux-design"
                  className="accent-[#202020]"
                />
                UX Design
              </label>
              <label className="flex w-[45%] sm:w-[35%]  items-center gap-2 p-2 rounded-lg">
                <input
                  type="checkbox"
                  name="service"
                  value="mobile-app-development"
                  className="accent-[#202020]"
                />
                Mobile App Development
              </label>
              <label className="flex w-[45%] sm:w-[35%]  items-center gap-2 p-2 rounded-lg">
                <input
                  type="checkbox"
                  name="service"
                  value="backend-development"
                  className="accent-[#202020]"
                />
                Backend Development
              </label>
              <label className="flex w-[45%] sm:w-[35%]  items-center gap-2 p-2 rounded-lg">
                <input
                  type="checkbox"
                  name="service"
                  value="content-creation"
                  className="accent-[#202020]"
                />
                Content Creation
              </label>
              <label className="flex w-[45%] sm:w-[35%]  items-center gap-2 p-2 rounded-lg">
                <input
                  type="checkbox"
                  name="service"
                  value="other"
                  className="accent-[#202020]"
                />
                Other
              </label>
            </div>
          </div>
          <Button
            label="Send Message"
            cn="bg-[#202020] text-white rounded-lg px-4 py-2 text-md flex items-center justify-center"
          >
            Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
};
