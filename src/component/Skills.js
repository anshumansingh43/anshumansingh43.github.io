import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCss3Alt, faHtml5, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import './skills.css'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

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
                                fasohfiojsdklfhiosadfjsdfja;sidfhas;;d kdskfhsd hofihdslkfhid ;slahfi;ksl;jdhjadl;dj

                                fasohfiojsdklfhiosadfjsdfja;sidfhas;;d kdskfhsd hofihdslkfhid ;slahfi;ksl;jdhjadl;dj
                                fasohfiojsdklfhiosadfjsdfja;sidfhas;;d kdskfhsd hofihdslkfhid ;slahfi;ksl;jdhjadl;dj
                                fasohfiojsdklfhiosadfjsdfja;sidfhas;;d kdskfhsd hofihdslkfhid ;slahfi;ksl;jdhjadl;dj
                                fasohfiojsdklfhiosadfjsdfja;sidfhas;;d kdskfhsd hofihdslkfhid ;slahfi;ksl;jdhjadl;dj
                                fasohfiojsdklfhiosadfjsdfja;sidfhas;;d kdskfhsd hofihdslkfhid ;slahfi;ksl;jdhjadl;dj
                            </p>
                            <p>
                                aguohdfa pii ejklao dkdvoiasofds lp jflksdvs djls ioadsf dsklodas sd se klsdj dsi lfkdsj
                                asdohfs dkhasdioa;dhflksj sd;lh kf dshlahf ;sdssd;lkd s ld;kfosahessdkl
                            </p>
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
                            <div className={fontcolor} style={{fontSize:"18px",fontWeight:"500"}}>Aryaka Networks</div>
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
