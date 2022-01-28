import React from 'react';

const SoftwareDeveloper = ({ setSkills, setEducation, setExperience }) => {

  setSkills(['Java', 'Javascript-ReactJs', 'mySQL', 'Restful']);
  setEducation({
    LatestCollege: 'National Institute Of Technology karnataka',
    HighestDegree: 'M.tech Computational Mathematics'
  })
  setExperience({
    LatestCompany: 'Aryaka Networks',
  })


  return(<div></div>)
}

export default SoftwareDeveloper;
