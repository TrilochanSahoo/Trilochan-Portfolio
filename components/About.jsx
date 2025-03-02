"use client"
import { Tabs, Tab, Button, Chip } from "@nextui-org/react";
import { BackgroundBeamsWithCollision } from "./ui/beams-collitions";
const About = () => {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <section id="about" className="py-20 max-w-4xl px-5 mx-auto dark:text-white flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          <div className="flex flex-col justify-start items-start md:items-start px-2 w-full">
            <Tabs variant="underlined" className="w-full">
              <Tab key="about_me" title="About" className="text-xl">
                <div className="flex flex-col justify-start items-start text-left w-full">
                  <span className="font-medium text-xl">Hello myself,</span>
                  <h1 className="bg-gradient-to-b text-zinc-300 text-4xl font-extrabold ">Trilochan Sahoo</h1>
                  <Chip radius="sm" color="default" variant="faded" size="lg" className="p-1 mt-2 mb-1 font-medium text-lg">Full Stack Developer</Chip>
                  <div className="text-left mt-4 text-gray-200">
                     I have a Bachelor's in Computer Science Engineering and work as a Full-Stack Web Developer with a strong focus on the MERN stack, Next.js, and DevOps. I love building dynamic, responsive web apps that not only work great but also scale efficiently. From crafting smooth frontends to optimizing backend logic and handling cloud deployments, I’m always exploring new tech and improving my skills to create impactful solutions. 🚀
                  </div>
                </div>
              </Tab>
            </Tabs>
            <div className="flex lg:justify-center justify-start items-center text-xl gap-5 mb-5">
              <a 
                target="_blank" 
                href="#">
                 <Button radius="sm" size="lg" className="bg-zinc-700 hover:bg-[#030013] relative text-xl font-medium group shadow-2xl shadow-zinc-900 text-white">
                  <span className="absolute inset-0 overflow-hidden ">
                    <span className="absolute inset-0 bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
                  </span>
                   Resume
                   <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-purple-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                 </Button>
              </a>
            </div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default About;
