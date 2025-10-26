"use client"
import React, {useState} from 'react'
import {Input} from '../components/ui/input'

const StartupForm = () => {
    const [errors , setErrors] = useState<Record<string,string>>({})

  return (
   <form action={() => {}} className="startup-form">
    <div >
        <label htmlFor="title" className='startup-form'>
            Title
        </label>
        <Input
        id="title"
        name="title"
        className='startup-form_input'
        required
        placeholder="Startup Title"
        />
        
    {errors.title && <p className='startup-form_error'>{errors.title}</p>}
    </div>
   </form>
  )
}

export default StartupForm