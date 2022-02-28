import './projects.css'
import ProjectFrame from './ProjectFrame'
import { useState } from 'react'
import covidimage from '../images/projectImage-covidVisualizer.png'
import HGSimage from '../images/projectImage-HGS.png'
import FITNITimage from '../images/projectImage-fitnit.png'


const Projects = ({setPage,darkmode}) => {
    setPage('projects');
    const [projects, setprojects] = useState([
        
        {
            title: "Hide And Go Seek",
            des:"Android Game",
            description:["Installs: 10,000+","Rating: 4.6 Star"],
            imageurl: HGSimage,
            date: "April 2021 - Present",
            projectlink: "https://play.google.com/store/apps/details?id=com.ThirteenEightySIx.HideAndGoSeek",
            technologies: "C#, Unity, Blender",
            status:"ongoing"
        } 
        ,
        {
            title:"Covid-19 Visualizer",
            des:"Website",
            description:["Covid-19 India data visualizer.","Ability to see changes in cases over a period of time."],
            imageurl: covidimage,
            date:"April 2021 - Present",
            projectlink:"https://ironanshumantoo.github.io",
            technologies:"HTML, CSS, Javascript( JQuery )",
            status:""
        },
        {
            title:"FITNIT",
            des:"Fitness App",
            description:["Installs: 10k+","Calories counter app that focuses on Indian lifestyle and food items."],
            imageurl: FITNITimage,
            projectlink:"https://play.google.com/store/apps/details?id=com.fitnit.fitnitv1",
            technologies:"Java, SQLite",
            status:""

        },
        {
            title: "PostCard( Ongoing )",
            des:"Social networking site",
            description:["This project was inspired from instagram. Main purpose of this project was to get familiar with React.js"],
            date: "Dec 2021 - Jan 2022",
            technologies: "HTML, CSS, Javascript( React ), Firebase",
            status:"ongoing"
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
                            status={project.status}
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
