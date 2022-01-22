import { useState, useLayoutEffect, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'
import TextResume from './TextResume'
import './resume.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = ({ setPage }) => {
    setPage('resume')

    const [width, setwidth] = useState(0)
    console.log(width)
    const resumewidthset = () =>{
        setwidth(window.innerWidth+"px")
    
    }

    useEffect(() => {
        
        window.addEventListener('resize',resumewidthset)
    }, [])

    return (

        <div className='resumemargin'>
            {/* <Document file={require('./cv_sde_g_lcode.pdf')}><center><Page pageNumber={1} style={{width:"100%"}} ></Page></center></Document> */}
            {/* parsed by pdf to html parser and then html to jsx */}

            <div >
                <Document file={require('./cv_sde_g_lcode.pdf')} style={{ width:{width},height:"auto" }}>
                    <center>
                        <Page pageNumber={1}  style={{width:"100px"}}></Page>
                    </center>
                </Document>
            </div>
            {/* <TextResume/> */}


        </div>
    )
}
function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default Resume
