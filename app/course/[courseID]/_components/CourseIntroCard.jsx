import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React from 'react'

function CourseIntroCard({course}) {
  return (
    <div className='flex gap-2 items-center p-10 border shadow-md rounded-lg'>
      <Image src='/exam.png' alt = "others" width={70} height={70} />
      <div>
        <h2 className='font-bold text-2xl'>{course?.topic}</h2>
        <p>{course?.courseLayout?.courseSummary}</p>
        <Progress className='mt-3' />

        <h2 className='mt-3 text-lg text-primary'>Total Chapters : {course?.courseLayout?.chapters.length}</h2>
      </div>
    </div>
  )
}

export default CourseIntroCard
