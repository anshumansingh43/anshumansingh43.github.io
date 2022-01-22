import './projects.css'
import ProjectFrame from './ProjectFrame'
import { useState } from 'react'

const Projects = ({setPage,darkmode}) => {
    setPage('projects');
    const [projects, setprojects] = useState([
        {
            title: "PostCard",
            des:"Social networking site",
            description:["This project was inspired from instagram. Main purpose of this project was to get familiar with React.js"],
            imageurl: "http://www.vanseodesign.com/blog/wp-content/uploads/2014/12/wpid-high-contrast-light-from-a-window.jpg",
            date: "Dec 2021 - Jan 2022",
            technologies: "HTML, CSS, Javascript( React )",
            projectlink: ""
        },
        {
            title: "Hide And Go Seek",
            des:"Android Game",
            description:["Installs: 5000+","Rating: 4.6 Star"],
            imageurl: "http://www.vanseodesign.com/blog/wp-content/uploads/2014/12/wpid-high-contrast-light-from-a-window.jpg",
            date: "April 2021 - Present",
            projectlink: "",
            technologies: "C#, Unity, Blender"
        } 
        ,
        {
            title:"Covid-19 Visualizer",
            des:"Website",
            description:["Covid-19 India data visualizer.","Ability to see changes in cases over a period of time."],
            imageurl: "http://www.vanseodesign.com/blog/wp-content/uploads/2014/12/wpid-high-contrast-light-from-a-window.jpg",
            date:"April 2021 - Present",
            projectlink:"",
            technologies:"HTML, CSS, Javascript( JQuery )"
        },
        {
            title:"FITNIT",
            des:"Fitness App",
            description:["Installs: 10k+","Calories counter app that focuses on Indian lifestyle and food items."],
            projectlink:"",
            technologies:"Java, SQLite"
        }

    ])

    var backcolor = darkmode?'projectbackground-dark ':'projectbackground-light '
    var projectheading = darkmode?'projectheading-dark ':'projectheading-light '
    var personalprojectheading = darkmode?'personal-project-heading-dark':'personal-project-heading-light ';
    return (
        <div className={backcolor + 'animate'}>
            <div className='projecttoptext'>
                <div>
                    <span className={projectheading}>Projects</span>
                </div>
                <div className={personalprojectheading}>
                    Personal Projects
                </div>
            </div>
            <div className='grid-container'>
                {
                    projects.map((project) => (
                        <ProjectFrame
                            imageurl={project.imageurl}
                            title={project.title}
                            date={project.date}
                            des={project.des}
                            description={project.description}
                            technologies={project.technologies}
                            projectlink={project.projectlink}
                            darkmode={darkmode}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default Projects
