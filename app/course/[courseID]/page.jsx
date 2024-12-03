'use client'
import DashboardHeader from '@/app/dashboard/_components/DashboardHeader';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ChapterList from './_components/ChapterList';
import CourseIntroCard from './_components/CourseIntroCard';
import StudyMaterialSection from './_components/StudyMaterialSection';

function Course() {
    const { courseID } = useParams();
    const [course, setCourse] = useState();

    useEffect(() => {
        GetCourse();
    }, [])

    const GetCourse = async () => {
        const result = await axios.get('/api/courses?courseID=' + courseID);

        console.log(result);

        setCourse(result.data.result);
    }

    return (
        <div>
            
            <DashboardHeader />
            <div className='mx-10 md:mx-36 lg:px-60 mt-10'>
                {/* course intro */}
                <CourseIntroCard course={course} />

                {/* study material options */}
                <StudyMaterialSection />


                {/* chapter list */}
                <ChapterList course={course}/>
            </div>

        </div>
    )
}

export default Course
