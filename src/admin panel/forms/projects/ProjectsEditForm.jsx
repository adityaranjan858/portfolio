import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './ProjectsComp.module.css'
import Button from '../../../utils/Button'
import { useNavigate, useParams } from 'react-router'
import { updateProject } from './../../../store/slices/projectsSlice';

const ProjectsEditForm = () => {
  const {projects} = useSelector(state=> state.projects)
  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputVal, setInputVal] = useState({
    id : "",
    heading: "",
    technology: "",
    liveLink: "",
    githubLink: "",
})

  useEffect(()=>{
    if(projects.length > 0){
      const updateVal = projects.find(s=> Number(s.id) === Number(id) )
        setInputVal({
        ...inputVal,
        id : updateVal.id || "",
        heading: updateVal.heading || "",
    technology: updateVal.technology || "",
    liveLink: updateVal.liveLink || "",
    githubLink: updateVal.githubLink || ""
      })
    }
  },[projects, id])
  


const handleInputChange = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value })
}

const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateProject(inputVal))
    navigate("/admin/projectsComp")
}

 const closeHandler = ()=>{
        navigate("/admin/projectsComp")
    }


  return (
    <>
    <h1 className='text-2xl font-bold'>Update Project</h1>

     <form  onSubmit={submitHandler}>

<div className="grid grid-cols mt-10 lg:grid-cols-2">
<div className={`${style["form-control"]}`}>    
<label htmlFor="heading">Heading:</label>    
<input placeholder='Ex: Ecommerce App...' className='border border-gray-500 p-2 m-2 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 focus:ring-opacity-50 rounded-xl' type="text" name="heading" value={inputVal.heading} onChange={handleInputChange} id="heading" />
</div>    

<div className={`${style["form-control"]}`}>
<label htmlFor="technology">Technology Used:</label>
<textarea placeholder='Ex: React.js, JavaScript, Html...' rows="1" className='border border-gray-500 p-2 m-2 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 focus:ring-opacity-50 rounded-xl' name="technology" value={inputVal.technology} onChange={handleInputChange} id="technology" />
</div>

<div className={`${style["form-control"]}`}>
<label htmlFor="liveLink">Live Link:</label>
<input placeholder='Ex: https://example.xyz' className='border border-gray-500 p-2 m-2 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 focus:ring-opacity-50 rounded-xl' type="url" value={inputVal.liveLink} onChange={handleInputChange} id="liveLink" name="liveLink"/>
</div>

<div className={`${style["form-control"]}`}>
<label htmlFor="githubLink">Github Link:</label>
<input placeholder='Ex: https://github.username.xyz' className='border border-gray-500 p-2 m-2 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 focus:ring-opacity-50 rounded-xl' type="url" value={inputVal.githubLink} onChange={handleInputChange} id="githubLink" name="githubLink"/>
</div>
</div>

<div className='flex justify-center sm:justify-end'>
<Button className="border cursor-pointer border-gray-500 m-2 mt-5 text-white"
bgColor="bg-sky-500 hover:bg-sky-400" type="submit">Update</Button>
<Button className="border cursor-pointer border-gray-500 m-2 mt-5 text-white"
onClick={closeHandler} type="button">Close</Button>
</div>
</form>
    
    </>
  )
}

export default ProjectsEditForm