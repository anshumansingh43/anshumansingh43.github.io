
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import './resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TextResume = () => {
    

    return (
        <div>
             <div className="body">
                <div>
                    <div id="page_1">
                        <div id="p1dimg1">
                            {/* <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtAAAALbCAIAAABc8iAIAAAMRklEQVR4nO3ZwQkAIRAEQb38c96LohGlKoJ5NsxaAACxPTOnNwAAj/tODwAA3ic4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAAAC4356Z0xsAgMe5VACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOAAAA4H57Zk5vAAAe51IBAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAgJzgAAByggMAyAkOACAnOACAnOAAAHKCAwDICQ4AICc4AICc4AAAcoIDAMgJDgAgJzgAAACA+/2cGQ6jsomzugAAAABJRU5ErkJggg=="
                                id="p1img1"
                            /> */}
                        </div>
                        <div id="id1_1">
                            <p className="p0 ft0">Anshuman Singh</p>
                            <p className="p1 ft1 " >
                                <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>
                                <a href="mailto:imanshuman43@gmail.com">imanshuman43@gmail.com</a>
                                |
                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                <a href="https://linkedin.com/in/ironanshuman" >
                                    linkedin.com/in/ironanshuman
                                </a>
                                |
                                <img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAaElEQVQokZWRQRLAIAgDg/biO/2Vn92ebC1Cp2XGE1kgxgAUlJlJkny7/BGHwBRn9QC8OIKLbwLXi6DydnPkwQA8MMbYhL131VpvYJ2WGQd0rKIJJdHcHjKDrbX959akVy+fkvabotNOqYhGImdQI5kAAAAASUVORK5CYII="
                                    id="p1inl_img4"
                                />
                                <a href="https://leetcode.com/ironanshuman/">
                                    leetcode.com/ironanshuman/
                                </a>
                            </p>
                            <p className="p2 ft2">Experience</p>
                            <table cellPadding={0} cellSpacing={0} className="t0">
                                <tbody>
                                    <tr>
                                        <td className="tr0 td0">
                                            <p className="p3 ft3">Aryaka Networks</p>
                                        </td>
                                        <td className="tr0 td1">
                                            <p className="p4 ft3">Bangalore, IN</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="tr0 td0">
                                            <p className="p3 ft1">Software Engineer</p>
                                        </td>
                                        <td className="tr0 td1">
                                            <p className="p3 ft1">Aug. 2020 – Present</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="p5 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">
                                    Responsible for Developing and optimizing Operator Portal by
                                    analyzing and improving backend and frontend code.
                                </span>
                            </p>
                            <p className="p6 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">
                                    Developed web applications based on MVC framework by using
                                </span>
                                <nobr>Javascript-backbone.js,</nobr>
                                Java, mySQL, Hibernate and Groovy.
                            </p>
                            <p className="p7 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">
                                    Collaborated across disciplines to understand product requirements
                                    and developed solutions as a team.
                                </span>
                            </p>
                            <p className="p8 ft2">Skills</p>
                            <p className="p9 ft3">
                                Languages: Java, Javascript(React), HTML, CSS, SQL, C#
                                <span style={{ marginRight: 0 }}>
                                    {" "}
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tools:
                                    VSCode, IntelliJ, Git, Cacti
                                </span>
                            </p>
                            <p className="p10 ft2">Personal Projects</p>
                            <p className="p11 ft3">
                                <a href="https://play.google.com/store/apps/details?id=com.ThirteenEightySIx.HideAndGoSeek">
                                    Hide And Go Seek
                                </a>
                            </p>
                            <table cellPadding={0} cellSpacing={0} className="t1">
                                <tbody>
                                    <tr>
                                        <td className="tr1 td2">
                                            <p className="p3 ft1">Android Game</p>
                                        </td>
                                        <td className="tr1 td3">
                                            <p className="p3 ft1">April 2021 - August 2021</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="p12 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">
                                    Created an android game that has 4000+ installs and 4.6* rating on
                                    Google Play Store.
                                </span>
                            </p>
                            <p className="p13 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">
                                    Game is developed in Unity, with the game code written in C#
                                    programming language.
                                </span>
                            </p>
                            <p className="p14 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">
                                    Used binary files to store game data locally on user’s
                                    device,Blender to create 3d models, and Affinity Designer to design
                                    and create 2d sprites.
                                </span>
                            </p>
                            <p className="p13 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">Technologies Used: C#, Unity, Blender</span>
                            </p>
                            <p className="p11 ft3">
                                <nobr>
                                    <a href="https://ironanshumantoo.github.io/">Covid-19</a>
                                </nobr>
                                <a href="https://ironanshumantoo.github.io/">Visualizer</a>
                            </p>
                            <table cellPadding={0} cellSpacing={0} className="t1">
                                <tbody>
                                    <tr>
                                        <td className="tr1 td4">
                                            <p className="p3 ft1">Website</p>
                                        </td>
                                        <td className="tr1 td5">
                                            <p className="p3 ft1">May 2020 - June 2020</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="p15 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">
                                    Created a Unique web visualizer that shows increasing cases of
                                </span>
                                <nobr>COVID-19</nobr>
                                in Indian states over a period of time.
                            </p>
                            <p className="p16 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">
                                    Used Javascript to create this mobile website that also allows users
                                    to visualize
                                </span>
                                <nobr>covid-19</nobr>
                                cases by choosing their desired period of time.
                            </p>
                            <p className="p13 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">Project Website:</span>
                                <a href="https://ironanshumantoo.github.io/">
                                    https://ironanshumantoo.github.io/
                                </a>
                            </p>
                            <p className="p17 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">
                                    Technologies Used: Javascript, HTML, CSS, jQuery
                                </span>
                            </p>
                            <p className="p11 ft3">
                                <a href="https://play.google.com/store/apps/details?id=com.fitnit.fitnitv1">
                                    FITNIT - Indian Calorie Counter
                                </a>
                            </p>
                            <table cellPadding={0} cellSpacing={0} className="t1">
                                <tbody>
                                    <tr>
                                        <td className="tr1 td4">
                                            <p className="p3 ft1">Android App</p>
                                        </td>
                                        <td className="tr1 td5">
                                            <p className="p3 ft1">May 2019 - June 2019</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="p15 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">
                                    Created a Fitness android app that has 10,000+ installs on Google
                                    Play Store.
                                </span>
                            </p>
                            <p className="p18 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">
                                    Users can maintain a diary of consumed food along with their
                                    macronutrients on a daily basis. FITNIT also suggest how much food
                                    they should consume based on their age and activity level in a day.
                                </span>
                            </p>
                            <p className="p13 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">
                                    Used Java as the coding language and mySQL to create and manage
                                    database.
                                </span>
                            </p>
                            <p className="p7 ft1">
                                <span className="ft4">•</span>
                                <span className="ft5">Technologies Used: Java, mySQL</span>
                            </p>
                            <p className="p8 ft2">Education</p>
                            <table cellPadding={0} cellSpacing={0} className="t2">
                                <tbody>
                                    <tr>
                                        <td className="tr0 td6">
                                            <p className="p3 ft3">
                                                National Institute Of Technology Karnataka
                                            </p>
                                        </td>
                                        <td className="tr0 td7">
                                            <p className="p19 ft3">Surathkal, KA</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="tr1 td6">
                                            <p className="p3 ft1">
                                                M.tech in Computational Mathematics - 8.48/10
                                            </p>
                                        </td>
                                        <td className="tr1 td7">
                                            <p className="p20 ft1">Aug. 2018 – July 2020</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="tr2 td6">
                                            <p className="p3 ft3">University Of Delhi</p>
                                        </td>
                                        <td className="tr2 td7">
                                            <p className="p19 ft3">New Delhi, DL</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div id="id1_2">
                            <table cellPadding={0} cellSpacing={0} className="t3">
                                <tbody>
                                    <tr>
                                        <td className="tr1 td6">
                                            <p className="p3 ft1">
                                                B.tech in Intrumentation Electronics - 67.8%
                                            </p>
                                        </td>
                                        <td className="tr1 td8">
                                            <p className="p3 ft1">Aug. 2013 – July 2017</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TextResume
