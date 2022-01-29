import { Box } from "@mui/material"
import './projectframe.css'

const ProjectFrame = ({ imageurl, title, des, projectlink, technologies, description, darkmode, status }) => {

    var frame = darkmode ? 'frame framecolor-dark' : 'frame framecolor-light'
    var fontcolor = darkmode ? 'fontcolor-dark' : 'fontcolor-light'
    var titlecolor = darkmode ? 'titlecolor-dark' : 'titlecolor-light'

    return (
        <a href={projectlink} style={{textDecoration:'none'}} target='_blank'>
            <span className={frame}>
                <img src={imageurl} alt="project"></img>
                <span style={{ margin: "20px", display: "flex", flexDirection: "column" }}>

                    <span >
                        <span className={titlecolor} style={{ fontWeight: "bold" }}>{title}</span><span className={fontcolor} style={{ fontStyle: "italic" }}> : {des}</span>
                    </span>
                    <hr style={{ width: "100%", opacity: "0.4",color:darkmode?'white':'black' }}></hr>
                    {
                        description.map((item) => (

                            <span className={fontcolor} >{item}</span>
                        ))
                    }
                    <hr style={{ width: "100%", opacity: "0.4" ,color:darkmode?'white':'black'}}></hr>
                    <span className={fontcolor} >    Tech: {technologies}</span>
                    {/* <span className={fontcolor} >    {projectlink}</span> */}

                </span>
            </span>
        </a>


    )
}
ProjectFrame.defaultProps =
{
    imageurl: "http://www.vanseodesign.com/blog/wp-content/uploads/2014/12/wpid-high-contrast-light-from-a-window.jpg",
    title: "none",
    date: "none",
    technologies: "none",
    projectlink: "#"
}
export default ProjectFrame
