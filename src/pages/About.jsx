import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MyImage } from "../assets/images";
import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
           <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Bipin Khanal
        </span>
      </h1>
      <div className='relative'>
  <img
    src={MyImage} 
    alt="Bipin Khanal"
    className='w-48 h-48 rounded-full object-cover mx-auto border-4 border-white-500'
  />
  
</div>

 

      <div className='mt-5 flex flex-col gap-3 text-slate-700'>
        <p>
        I am an undergradute Computer Science and Information Technology (CSIT) student. I am currently pursuing my Bachelor's degree from Tribhuvan University. I am passionate about web application development. I have some experience in using various web development tools and technologies to create web applications and webistes.
<br></br><br></br>
I enjoy the challenge of learning new technologies and applying them to create meaningful and impactful webpages and applications.I have a good understanding of ASP.Net MVC,Multi Tier Architecture of Web Application Development,Jquery, HTML, CSS, JavaScript, and little bit of PHP. I am also familiar with the Bootstrap framework. I am also familiar with Python and Django framework and have some experience with it.
<br></br><br></br>
I'm on the lookout for a job opportunity where I can apply my skills and knowledge to create meaningful and impactful webpages and applications and also learn new skills and stay up to date with the latest technologies.I am a fast learner and a hard worker. I am also a team player.Overall,I am excited about the prospect of working in a challenging and dynamic environment where I can learn and grow.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          I've collaborated with various companies, enhancing my skills and working alongside intelligent individuals.
          </p>
        </div>
        <div className='mt-12 flex'>
  <VerticalTimeline>
    {experiences.map((experience, index) => (
      <VerticalTimelineElement
        key={experience.company_name}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
                  <a href={experience.website} target="_blank" rel="noopener noreferrer" className="text-black flex justify-center items-center">
              <img
                src={experience.icon}
                alt={experience.company_name}
                className='w-[90%] h-[60%] object-contain'
              />
            </a>
        
          </div>
        }
        contentStyle={{
          borderBottom: "8px",
          borderStyle: "solid",
          borderBottomColor: experience.iconBg,
          boxShadow: "none",
        }}
      >
        <div>
          <h3 className='text-black text-xl font-poppins font-semibold'>
            <a href={experience.website} target="_blank" rel="noopener noreferrer" className="text-black">
              {experience.company_name}
            </a>
          </h3>
          <p className='text-black-500 font-medium text-base' style={{ margin: 0 }}>
            {experience.title}
          </p>
        </div>

        <ul className='my-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-black-500/50 font-normal pl-1 text-sm'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
</div>

      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
