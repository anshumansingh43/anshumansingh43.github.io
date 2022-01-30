import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCss3Alt, faHtml5, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import './skills.css'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Skills = ({ setPage,darkmode }) => {
    setPage('skills')

    var iconcolor = darkmode?'skills-icon-color-dark':'skills-icon-color-light'
    var softskillsfontcolor = darkmode?'soft-skills-font-dark':'soft-skills-font-light'
    var skillsandexp = darkmode?'skillsandexp-dark':'skillsandexp-light'
    var paragraph = darkmode?'paragraph-dark':'paragraph-light'
    var htmltagdesign = darkmode?'htmltagdesign-dark':'htmltagdesign-light'
    var fontcolor = darkmode?'fontcolor-dark':'fontcolor-light'
    var titlecolor = darkmode?'titlecolor-dark':'titlecolor-light'
    var workex = darkmode?'workex-dark':'workex-light'
    var contactLink = darkmode?'contact-link-dark':'contact-link-light'
    return (
        <div>
            <div className={htmltagdesign + ' tagtop'}>
                <div >{"<html>"}</div>
                <div className='htmltagpadding'>{"<body>"}</div>
            </div>
            <div className='leftmargin skillpage'>
                <div className='skillcontent paddingleft'>
                    <div className='skills-left-sec'>
                        <div className={skillsandexp}>
                            <span className='heading'>{"Skills &"}</span>
                            <br />
                            <span className='heading'>{"Experience"}</span>
                        </div>
                        <div className={paragraph}>
                            <p>
                               With my time at National Institute Of Technology Karnataka pursuing M.tech degree I worked on projects that used 
                               technologies like python, C++, C#, Java, javascript, other web technologies. I have also built android apps, games, websites. By working on projects and also working full time in software industry I have 
                               acquired skills necessary for building and maintaining web applications.
                            </p>
                            <p>
                                My area of interest lies in web development tech but not limited to Java, javascript( ReactJs ), HTML/CSS. Since I am a fast learner
                                I always look forward to learn new technologies to add to my arsenal.
                            </p>
                            <p>
                                I also have java full stack developer experience at Aryaka Networks where I coordinated across disciplines to introduce features to 
                                web application.
                            </p>
                            <p>Visit my <a className={iconcolor} href='https://linkedin.com/in/ironanshuman'target='_blank'>linkedin</a> 
                              {' profile to reach out to me or just'} <Link to='/Contact' className={iconcolor}>contact me.</Link></p>
                        </div>

                    </div>
                    <div className='skills-right-sec'>
                        <div className='soft-skills'>
                            <span className='soft-skills-item'>
                                <center>
                                    <FontAwesomeIcon icon={faJava} className={iconcolor}></FontAwesomeIcon>
                                    </center>
                                <span className={softskillsfontcolor}>Java</span>
                            </span>
                            <span className='soft-skills-item'>
                                <FontAwesomeIcon icon={faJs} size='lg' className={iconcolor}></FontAwesomeIcon>
                                <span className={softskillsfontcolor}>javascript</span>
                            </span>
                            <span className='soft-skills-item'>
                                <FontAwesomeIcon icon={faReact}className={iconcolor}></FontAwesomeIcon>
                                <span className={softskillsfontcolor}>react</span>
                            </span>
                            <span className='soft-skills-item'>
                                <FontAwesomeIcon icon={faDatabase} className={iconcolor}></FontAwesomeIcon>
                                <span className={softskillsfontcolor}>sql</span>
                            </span>
                            <span className='soft-skills-item'>
                                <FontAwesomeIcon icon={faHtml5} size='lg' className={iconcolor}></FontAwesomeIcon>
                                <span className={softskillsfontcolor}>html</span>
                            </span>
                            <span className='soft-skills-item'>
                                <FontAwesomeIcon icon={faCss3Alt} size='lg' className={iconcolor}></FontAwesomeIcon>
                                <span className={softskillsfontcolor}>css</span>
                            </span>
                            
                        </div>
                        <div className={workex}>
                            <div className={titlecolor} style={{fontSize:"24px",fontWeight:'700' }}>Full Stack Developer</div>
                            <br></br>
                            <div className={fontcolor} style={{fontSize:"18px",fontWeight:"300"}}>Aryaka Networks</div>
                            <div className={fontcolor}>2020-Present</div>
                            <div className={fontcolor} style={{fontWeight:"300", marginTop:"20px"}}>SD-WAN company that provides software-defined network connectivity
                                 and application delivery to globally distributed enterprises</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={htmltagdesign+ ' bottomtag'}>
                <div className='htmltagpadding'>{"</body>"}</div>
                <div> {"</html>"} </div>
            </div>
        </div>
    )
}

export default Skills
