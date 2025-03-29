'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import SelectOption from './_components/SelectOption'
import TopicInput from './_components/TopicInput'
import {v4 as uuidv4} from 'uuid'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'


function Create() {
    const {user} = useUser();
    
    const [step, setStep] = useState(0);

    const [formData, setFormData] = useState([]);

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleUserInput = (fieldName, fieldValue) => {

        setFormData(prev => ({
            ...prev,
            [fieldName] : fieldValue
        }))

        console.log(formData);
    }

    const GenerateCourseOutline = async () => {
      const courseId = uuidv4();
      setLoading(true);
      console.log({
        courseId,
        ...formData,
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });
      
      const result = await axios.post('/api/generate-course-outline', {
        courseId : courseId,
        ...formData,
        createdBy : user?.primaryEmailAddress?.emailAddress
      });

      setLoading(false);
      router.replace('/dashboard');
      // toast notification
      toast("Your course content is generating, Click on Refresh Button")

      console.log(result.data.result.resp);
    }

  return (
    <div className='flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20 bg-[#12120d] text-white'>
      <h2 className='font-bold text-4xl text-primary'>Start Building Your Personal Study Material</h2>
      <p className='text-gray-500 text-lg'>
        Fill all details in order to generate study material for your next project
      </p>

      <div className='mt-10'>
        {step == 0 ? <SelectOption selectedStudyType={(value) => handleUserInput('courseType', value)}/> : <TopicInput setTopic={(value) => handleUserInput('topic', value)}
        setDifficultyLevel={(value)=>handleUserInput('difficultyLevel', value)}  /> }
        
      </div>

      <div className='flex justify-between w-full mt-32'>
        {step != 0 ? <Button variant = "outline" className='bg-black border-black text-white ' onClick={()=>setStep(step-1)}>Previous</Button> : '-' }
        {step == 0 ?<Button onClick={() => setStep(step+1)}>Next</Button>
        : <Button onClick={GenerateCourseOutline} disabled = {loading}>
         {loading ? <Loader className='animate-spin'/> : 'Generate'}
          </Button> }
      </div>
    </div>
  )
}

export default Create
