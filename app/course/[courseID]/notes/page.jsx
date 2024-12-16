'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'next/navigation'
import { Button } from '@/components/ui/button';

function ViewNotes() {

    const {courseID} = useParams();
    const [notes, setNotes] = useState();
    const [stepCount, setStepCount] = useState(0);

    useEffect(() => {
        GetNotes();

        console.log("notes data is this, ", notes);
    }, [])

    const GetNotes = async () => {
        const result = await axios.post('/api/study-type', {
            courseId : courseID,
            studyType : 'notes'
        });

        console.log(result?.data);
        setNotes(result?.data?.notes);
        
    }

  return notes && (
    <div>
      <div className='flex gap-5 items-center'>
        {stepCount!=0 && 
        <Button variant='outline' size='sm' onClick={()=>setStepCount(stepCount+1) }>Previous</Button> }
        {/* {notes?.map((item, index) => (
            <div key={index} className={`w-full h-2 rounded-full
             ${index<stepCount ? 'bg-primary' : 'bg-gray-200'} `}>
                
            </div>
        ))} */}
        <Button variant='outline' size='sm' onClick={()=>setStepCount(stepCount+1) }>Next</Button>
      </div>

        <div>
        {notes.map((item, index) => (
            
            <div key={index}>
                <div dangerouslySetInnerHTML={{__html : JSON.parse(item?.notes)?.content}} />
                {/* <h2>{JSON.parse(item?.notes)?.content} </h2> */} 
            </div>
        ))}
        </div>

    </div>
  )
}

export default ViewNotes
