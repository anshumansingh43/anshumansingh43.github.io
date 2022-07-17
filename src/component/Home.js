import './home.css'
import SocialLinks from './SocialLinks'

const Home = ({ setPage, darkmode }) => {
    setPage("home")

    var otherprofilecontent = darkmode?'otherprofilecontent-dark':'otherprofilecontent-light'
    var htmltagdesign = darkmode?'htmltagdesign-dark ':'htmltagdesign-light '
    return (
        <div>
            <div className={'tagtop '+htmltagdesign}>
                <div >{"<html>"}</div>
                <div className='htmltagpadding'>{"<body>"}</div>
            </div>
            
            <div className={darkmode === true ? 'Homepage-dark' : 'Homepage-light'}>
                <div className='leftmargin'>

                    <div className={htmltagdesign+ ' htmltagpadding'}>{"<section>"}</div>

                    <div className='homecontent' >
                        <span className={darkmode===true?'avatar-dark':'avatar-light' }>
                            <img src={require('../images/profile.jpg')} className='avatarImage' alt="myimage" />
                        </span>
  
                        <span className="details">
                            <span className={darkmode?'profilename-dark profilename':'profilename-light profilename'}>
                                ANSHUMAN SINGH
                            </span>
                            {/* <span className='otherprofilecontent' style={{ maxWidth: "300px", fontWeight: "500", fontSize: "20px", marginBottom: '19px' }}>Founder: FITNIT</span> */}

                            {/* <span className={htmltagdesign>'>{"<p>"}</span> */}
                            <span className={otherprofilecontent} >I am a software engineer at <a className={darkmode?'HomepageDescLink-Dark':'HomepageDescLink-light'} href='https://www.freshworks.com/' target="_blank" class='links' style={{fontWeight:'bold'}} >Freshworks</a>. Creator of fitness app 
                             <a className={darkmode?'HomepageDescLink-Dark':'HomepageDescLink-light'} href='https://play.google.com/store/apps/details?id=com.fitnit.fitnitv1' target="_blank" class='links' style={{fontWeight:'bold'}}> FITNIT</a> and mobile device game <a href='https://play.google.com/store/apps/details?id=com.ThirteenEightySIx.HideAndGoSeek' className={darkmode?'HomepageDescLink-Dark':'HomepageDescLink-light'} target="_blank" class='links' style={{fontWeight:'bold'}}>Hide And Go Seek</a>. I have a passion for building products that impact the masses.</span>
                            {/* <span className={htmltagdesign>'>{"</p>"}</span> */}
                            <SocialLinks 
                            darkmode={darkmode}/>
                        </span>
                    </div>
                    <div className={htmltagdesign+' htmltagpadding'}> {"</section>"}</div>
                </div>
            </div>
            <div className={htmltagdesign+' tagbottom-home'} >
                <div className='htmltagpadding'>{"</body>"}</div>
                <div >{"</html>"}</div>
            </div>

        </div>
    )
}

export default Home
