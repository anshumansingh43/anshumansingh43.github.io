import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faCube, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const SocialLinks = ({darkmode}) => {
    
    var social_link_effect = darkmode? 'social_link_effect-dark links linkpadding':'social_link_effect-light links linkpadding'
    var social_link_text_color = darkmode?'social_link_text_color-dark linkpadding':'social_link_text_color-light linkpadding'

    return (
        <div className="sociallinkwrapper">
            <a href="https://www.linkedin.com/in/ironanshuman/" id="linkedinIcon" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className={social_link_effect}  icon={faLinkedin} size="lg" />
            </a>
            <a href="https://github.com/ironanshumantoo/" id="githubIcon" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className={social_link_effect}  icon={faGithub} size="lg" />
            </a>
            {/* <img src={require("../images/leetcode.png")} alt="anshumna" id="leetcodeIcon" className={social_link_effect} style={{ width: "20px", height: "20px" }} /> */}
            <a href="mailto:imanshuman43@gmail.com" id="mailIcon" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className={social_link_effect}  icon={faEnvelope} size="lg" />
            </a>
            <a href="https://www.youtube.com/cubed" id="youtubeIcon" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className={social_link_effect}  icon={faYoutube} size="lg" />
            </a>
            <a href="https://www.instagram.com/anshuman.singh.43/" id="instagramIcon" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className={social_link_effect}  icon={faInstagram} size="lg" />
            </a>
            <a href="https://www.worldcubeassociation.org/persons/2014SING04"id="wcaIcon" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className={social_link_effect}  icon={faCube} size="lg" />
            </a>
            {/* <a href="https://www.worldcubeassociation.org/persons/2014SING04" target="_blank" rel="noreferrer" id="wcaIcon" className={social_link_effect}>
                <img src={require("../images/wca.png")} alt="anshumna"  style={{ width: "18px", height: "18px" }} />
            </a> */}

            <span className={social_link_text_color} id="linkedintext" >LinkedIn</span>
            <span className={social_link_text_color} id="githubtext" >Github</span>
            <span className={social_link_text_color} id="youtubetext" >Youtube</span>
            <span className={social_link_text_color} id="instagramtext">Instagram</span>
            <span className={social_link_text_color} id="leetcodetext" >Leetcode</span>
            <span className={social_link_text_color} id="mailtext" >Email</span>
            <span className={social_link_text_color} id="wcatext" >World Cube Association</span>
        </div>
    )
}

export default SocialLinks
