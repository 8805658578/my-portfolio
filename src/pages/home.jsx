import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header   /> 
      <Hero     />
      <Skills   />
      <Projects />
      <Contact  />
    </>
  );
}