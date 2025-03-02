// import React from 'react'
// import './skills.css'

// const Skills = () => {
//   return (
//     <section className="site-section section-skills">
//         <div className="container">
//             <div className="text-center">
//                 <h3>My Skills</h3>
//                 <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
//             </div>
//             <div className="row">
//                 <div className="col-md-4">
//                     <div className="skill">
//                         <h4>Html/css</h4>
//                         <div className="progress">
//                             <div className="progress-bar" role="progressbar" data-transitiongoal="85"></div>
//                             {/* <!-- /.progress-bar --> */}
//                         </div>
//                         {/* <!-- /.progress --> */}
//                     </div>
//                     {/* <!-- /.skill --> */}
//                     <div className="skill">
//                         <h4>React/Redux</h4>
//                         <div className="progress">
//                             <div className="progress-bar" role="progressbar" data-transitiongoal="80"></div>
//                             {/* <!-- /.progress-bar --> */}
//                         </div>
//                         {/* <!-- /.progress --> */}
//                     </div>
//                     {/* <!-- /.skill --> */}
//                     <div className="skill">
//                         <h4>MySQL</h4>
//                         <div className="progress">
//                             <div className="progress-bar" role="progressbar" data-transitiongoal="78"></div>
//                             {/* <!-- /.progress-bar --> */}
//                         </div>
//                         {/* <!-- /.progress --> */}
//                     </div>
//                     {/* <!-- /.skill --> */}
//                     <div className="skill">
//                         <h4>jQuery</h4>
//                         <div className="progress">
//                             <div className="progress-bar" role="progressbar" data-transitiongoal="75"></div>
//                             {/* <!-- /.progress-bar --> */}
//                         </div>
//                         {/* <!-- /.progress --> */}
//                     </div>
//                     {/* <!-- /.skill --> */}
//                 </div>
//                 <div className="col-md-4">
//                     <div className="skill">
//                         <h4>JavaScript</h4>
//                         <div className="progress">
//                             <div className="progress-bar" role="progressbar" data-transitiongoal="80"></div>
//                             {/* <!-- /.progress-bar --> */}
//                         </div>
//                         {/* <!-- /.progress --> */}
//                     </div>
//                     {/* <!-- /.skill --> */}
//                     <div className="skill">
//                         <h4>React Native</h4>
//                         <div className="progress">
//                             <div className="progress-bar" role="progressbar" data-transitiongoal="88"></div>
//                             {/* <!-- /.progress-bar --> */}
//                         </div>
//                         {/* <!-- /.progress --> */}
//                     </div>
//                     {/* <!-- /.skill --> */}
//                     <div className="skill">
//                         <h4>Mongoose</h4>
//                         <div className="progress">
//                             <div className="progress-bar" role="progressbar" data-transitiongoal="80"></div>
//                             {/* <!-- /.progress-bar --> */}
//                         </div>
//                         {/* <!-- /.progress --> */}
//                     </div>
//                     {/* <!-- /.skill --> */}
//                     <div className="skill">
//                         <h4>Angular</h4>
//                         <div className="progress">
//                             <div className="progress-bar" role="progressbar" data-transitiongoal="55"></div>
//                             {/* <!-- /.progress-bar --> */}
//                         </div>
//                         {/* <!-- /.progress --> */}
//                     </div>
//                     {/* <!-- /.skill --> */}
//                 </div>
//                 <div className="col-md-4">
//                     <div className="skill">
//                         <h4>NodeJS</h4>
//                         <div className="progress">
//                             <div className="progress-bar" role="progressbar" data-transitiongoal="80"></div>
//                             {/* <!-- /.progress-bar --> */}
//                         </div>
//                         {/* <!-- /.progress --> */}
//                     </div>
//                     {/* <!-- /.skill --> */}
//                     <div className="skill">
//                         <h4>MongoDB</h4>
//                         <div className="progress">
//                             <div className="progress-bar" role="progressbar" data-transitiongoal="85"></div>
//                             {/* <!-- /.progress-bar --> */}
//                         </div>
//                         {/* <!-- /.progress --> */}
//                     </div>
//                     {/* <!-- /.skill --> */}
//                     <div className="skill">
//                         <h4>Bootstrap</h4>
//                         <div className="progress">
//                             <div className="progress-bar" role="progressbar" data-transitiongoal="95"></div>
//                             {/* <!-- /.progress-bar --> */}
//                         </div>
//                         {/* <!-- /.progress --> */}
//                     </div>
//                     {/* <!-- /.skill --> */}
//                     <div className="skill">
//                         <h4>Vue</h4>
//                         <div className="progress">
//                             <div className="progress-bar" role="progressbar" data-transitiongoal="65"></div>
//                             {/* <!-- /.progress-bar --> */}
//                         </div>
//                         {/* <!-- /.progress --> */}
//                     </div>
//                     {/* <!-- /.skill --> */}
//                 </div>
//             </div>
//         </div>
//     {/* <!-- /.secton-skills --> */}
//     </section>
//   )
// }

// export default Skills

import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data';
import { chunkArray } from '../easeInOutExpo';

const Skills = () => {
  const [animateBars, setAnimateBars] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const sectionPosition = sectionRef.current.offsetTop;

        // If the section is in view, start the animation
        if (scrollPosition > sectionPosition) {
          setAnimateBars(true);
          window.removeEventListener('scroll', handleScroll); // Unbind to prevent multiple triggers
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on unmount
    };
  }, []);

  // const firstColumnSkills = skills.slice(0, 4);
  // const secondColumnSkills = skills.slice(4, 8);
  // const thirdColumnSkills = skills.slice(8, 12);

  const getBarStyle = (level) => ({
    width: animateBars ? `${level}%` : '0%', // Set width based on state
    transition: 'width 1s ease-in-out' // Smooth transition
  });


const columns = chunkArray(skills, 4); // Divide skills into chunks of 4 for columns

  return (
    <section className="site-section section-skills" ref={sectionRef}>
      <div className="container">
        <div className="text-center">
          <h3>My Skills</h3>
          <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
        </div>
        <div className="row">
          {columns.map((columnSkills, colIndex) => (
            <div className="col-md-4" key={colIndex}>
              {columnSkills.map(skill => (
                <div className="skill" key={skill.name}>
                  <h4>{skill.name}</h4>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={getBarStyle(skill.level)}></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* <div className="row">
          <div className="col-md-4">
            {firstColumnSkills.map(skill => (
              <div className="skill" key={skill.name}>
                <h4>{skill.name}</h4>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={getBarStyle(skill.level)}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            {secondColumnSkills.map(skill => (
              <div className="skill" key={skill.name}>
                <h4>{skill.name}</h4>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={getBarStyle(skill.level)}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            {thirdColumnSkills.map(skill => (
              <div className="skill" key={skill.name}>
                <h4>{skill.name}</h4>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={getBarStyle(skill.level)}></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col-md-4">
            <div className="skill">
              <h4>Html/CSS</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={getBarStyle(100)}></div>
              </div>
            </div>
            <div className="skill">
              <h4>React/Redux</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={getBarStyle(97)}></div>
              </div>
            </div>
            <div className="skill">
              <h4>MySQL</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={getBarStyle(89)}></div>
              </div>
            </div>
            <div className="skill">
              <h4>jQuery</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={getBarStyle(75)}></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill">
              <h4>JavaScript</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={getBarStyle(95)}></div>
              </div>
            </div>
            <div className="skill">
              <h4>React Native</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={getBarStyle(96)}></div>
              </div>
            </div>
            <div className="skill">
              <h4>Mongoose</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={getBarStyle(80)}></div>
              </div>
            </div>
            <div className="skill">
              <h4>Angular</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={getBarStyle(55)}></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill">
              <h4>NodeJS</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={getBarStyle(96)}></div>
              </div>
            </div>
            <div className="skill">
              <h4>MongoDB</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={getBarStyle(85)}></div>
              </div>
            </div>
            <div className="skill">
              <h4>Bootstrap</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={getBarStyle(99)}></div>
              </div>
            </div>
            <div className="skill">
              <h4>Vue</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={getBarStyle(90)}></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    {/* <!-- /.section-skills --> */}
    </section>
  );
};

export default Skills;
