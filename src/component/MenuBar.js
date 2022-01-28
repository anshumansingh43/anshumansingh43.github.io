import './menu.css'
import { faHome, faFileAlt, faFileCode, faCode, faUser, faEnvelope, faThList, faAdjust, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const MenuBar = ({ page,darkmode,setdarkmode }) => {
    var classtypeHome = darkmode?'links linkcolor-dark':'links linkcolor-light'
    var classtypeAbout =  darkmode?'links linkcolor-dark':'links linkcolor-light'
    var classtypeProjects =  darkmode?'links linkcolor-dark':'links linkcolor-light'
    var classtypeResume =  darkmode?'links linkcolor-dark':'links linkcolor-light'
    var classtypeContact =  darkmode?'links linkcolor-dark':'links linkcolor-light'
    var classtypeSkills =  darkmode?'links linkcolor-dark':'links linkcolor-light'
    var classtypemainitem = darkmode?'links mainlinkcolor-dark':'links mainlinkcolor-light'

    var darklink = darkmode?'currentlink-dark linkcolor-dark':'currentlink-light linkcolor-light'
    
    switch (page) {
        case 'home':
            classtypeHome = darklink
            break;
        case 'projects':
            classtypeProjects = darklink
            break;
        case 'about':
            classtypeAbout = darklink
            break;
        case 'contact':
            classtypeContact = darklink
            break;
        case 'resume':
            classtypeResume = darklink
            break;
        case 'skills':
            classtypeSkills = darklink
            break;

        default:

            break;
    }

    const themechange = ()=>
    {
        setdarkmode(!darkmode)
    }

    var menuBar = darkmode?'menuBar menuBarcolor-dark':'menuBar menuBarcolor-light'

    return (
        <div>
            <div className={menuBar}>
                <div className="menuItems">
                    <span className='mainItem menupadding entry'>
                        <FontAwesomeIcon className={darkmode?'darkmodeicon-dark':'darkmodeicon-light'} 
                        icon={faAdjust} onClick={themechange}></FontAwesomeIcon>
                        <Link to='/'  className={classtypemainitem} style={{ textDecoration: "none" }}>
                            {}
                        </Link>
                    </span>
                    <span className='otherItem menupadding entry'>
                        <Link to='/' className={classtypeHome}>
                            <FontAwesomeIcon icon={faHome} />
                            <span className='menuOtherItemText'> Home</span>
                        </Link>
                    </span>
                    <span className='otherItem menupadding entry'>
                        <Link to='/Projects' className={classtypeProjects}>
                            <FontAwesomeIcon icon={faThList} />
                            <span className='menuOtherItemText'> Projects</span>
                        </Link>
                    </span>
                    <span className='otherItem menupadding entry'>
                        <Link to='/Skills' className={classtypeSkills}>
                            <FontAwesomeIcon icon={faCode} />
                            <span className='menuOtherItemText'> Skills</span>
                        </Link>
                    </span>
                    <span className='otherItem menupadding entry'>
                        <Link to='/resume' className={classtypeResume}>
                            <FontAwesomeIcon icon={faFileAlt} />
                            <span className='menuOtherItemText'> Resume</span>
                        </Link>
                    </span>

                    <span className='otherItem menupadding entry'>
                        <Link to='/Thingsilove' className={classtypeAbout}>
                            <FontAwesomeIcon icon={faHeart} />
                            <span className='menuOtherItemText'> Things I Love</span>
                        </Link>
                    </span>
                    <span className='otherItem menupadding entry'>
                        <Link to='/contact' className={classtypeContact}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className='menuOtherItemText'> Contact</span>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MenuBar
