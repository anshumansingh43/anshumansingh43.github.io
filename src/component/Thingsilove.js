import './thingsilove.css'
import ArtGallery from './ArtGallery'

const Thingsilove = ({ setPage, darkmode }) => {
    setPage('about')

    var htmltagdesign = darkmode ? 'htmltagdesign-dark ' : 'htmltagdesign-light '
    var introparagraph = darkmode?'intro-paragraph-dark':'intro-paragraph-light'
    var heading = darkmode?'skillsandexp-dark':'skillsandexp-light'

    return (
        <div className='animate'>
            <div className={'tagtop ' + htmltagdesign}>
                <div >{"<html>"}</div>
                <div className='htmltagpadding'>{"<body>"}</div>
            </div>
            <div className="pagewrapper leftmargin">
                <div className={heading}>
                    <span className='heading'>{"Things I Love"}</span>
                </div>
                <div className={introparagraph}>
                    Obviously I love coding but there are other things that I love doing in my free time. It includes drawing portraits, speedcubing( Solving Rubik's cube as fast as you can, I do in around 10 secs), youtube, Attack On Titan.
                </div>
                <ArtGallery
                    darkmode={darkmode}
                />
            </div>
            <div className={htmltagdesign} style={{marginLeft:"400px"}} >
                <div className='htmltagpadding'>{"</body>"}</div>
                <div >{"</html>"}</div>
            </div>
        </div>
    )
}

export default Thingsilove
