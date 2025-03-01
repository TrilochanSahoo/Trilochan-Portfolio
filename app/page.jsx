import About from "@/components/About";
import Experience from "@/components/Experience";
import HomePage from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Dock from "@/components/Dock";
export default function page() {

  return (
    <>
      <div className="">
        <HomePage />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Dock/>
      </div>
    </>
  );
}
