import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Naitik's Portfolio</title>
      </Head>

      <Header socials={socials}/>

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id='about' className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id='skills' className="snap-start">
        <Skills />
      </section>

      <section id='projects' className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Eo_circle_yellow_arrow-up.svg/480px-Eo_circle_yellow_arrow-up.svg.png" alt=""/>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

