import './thingsilove.css'
import ArtGallery from './ArtGallery'

const Thingsilove = ({ setPage, darkmode }) => {
    setPage('about')

    var htmltagdesign = darkmode ? 'htmltagdesign-dark ' : 'htmltagdesign-light '
    var introparagraph = darkmode ? 'intro-paragraph-dark' : 'intro-paragraph-light'
    var heading = darkmode ? 'skillsandexp-dark' : 'skillsandexp-light'

    return (
        <div>
            <div className={'tagtop-til ' + htmltagdesign}>
                <div >{"<html>"}</div>
                <div className='htmltagpadding'>{"<body>"}</div>
            </div>
            <div className='animate'>
                <div className="pagewrapper leftmargin">
                    <div className={heading}>
                        <span className='heading'>{"Things I love"}</span>
                    </div>
                    
                    <ArtGallery
                        darkmode={darkmode}
                    />
                </div>
            </div>
            <div className={htmltagdesign+' tagbottom-til'} >
                <div className='htmltagpadding'>{"</body>"}</div>
                <div >{"</html>"}</div>
            </div>
        </div>
    )
}

export default Thingsilove
