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
                        <span className='heading'>{"To my beloved "}</span>
                    </div>
                    <div className={introparagraph}>
                        <div>In the doorway she appeared, a burst of light,</div>
                        <div>Her presence divine, filling the night.</div>
                        <div>In a black dress she stood, captivating and fair,</div>
                        <div>Mesmerizing my gaze, caught unaware.</div>
                        <p></p>
                        <div>On the red sofa we spoke, hearts entwined,</div>
                        <div>A connection deepened, in moments defined.</div>
                        <div>When she journeyed to Coorg, for days so few,</div>
                        <div>Her absence felt kneely, my thoughts askew.</div>
                        <p></p>
                        <div>Late-night talks, our secrets revealed,</div>
                        <div>In the silence of night, our bond sealed.</div>
                        <div>"Will you come to Hampi", she said with smile bright</div>
                        <div>I eagerly agreed, hearts taking flight.</div>
                        <p></p>
                        <div>Two days in Hampi, under skies so clear,</div>
                        <div>intoxicated by love, and dreams held dear.</div>
                        <div>A rooftop shared, a cigarette's glow,</div>
                        <div>Where clouds and trees danced in night's flow.</div>
                        <p></p>
                        <div>With one day left, I confessed my love's plea,</div>
                        <div>That day was pure magic, for her and for me.</div>
                        <div>Now apart, I yearn for her near,</div>
                        <div>To see her smile, to hold her dear.</div>
                        <p></p>
                        <div>Until we meet again, my heart beats for you,</div>
                        <div>In every moment apart, my love is true</div>
                        <div>Bound in spirit, despite distance we share,</div>
                        <div>In my soul, you reside, my eternal affair.</div>
                        {/* Obviously I love coding but there are other things that I love doing in my free time. It includes drawing portraits, speedcubing( Solving Rubik's cube as fast as you can, I do in around 10 secs), youtube, Attack On Titan. */}
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
