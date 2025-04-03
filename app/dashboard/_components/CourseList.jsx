'use client'
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { RefreshCw } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import CourseCardItem from './CourseCardItem';

function CourseList() {
  const { user } = useUser();
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && GetCourseList();
  }, [user]);

  const GetCourseList = async () => {
    setLoading(true);
    const result = await axios.post('/api/courses', { createdBy: user?.primaryEmailAddress.emailAddress });
    setCourseList(result.data.result);
    setLoading(false);
  };

  const handleDeleteCourse = (courseId) => {
    setCourseList(prevCourses => prevCourses.filter(course => course.courseId !== courseId));
  };

  return (
    <div className='mt-10'>
      <h2 className='font-bold text-2xl flex justify-between items-center'>
        Your Study Material
        <Button variant='outline' className='border-primary bg-black text-white' onClick={GetCourseList}> 
          <RefreshCw/> Refresh
        </Button>
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-5'>
        {loading ? 
          [1,2,3,4,5,6].map((_, index) => (
            <div key={index} className='h-56 w-full bg-slate-200 rounded-lg animate-pulse'></div>
          )) 
        : courseList.map((course, index) => (
            <CourseCardItem course={course} key={index} onDelete={handleDeleteCourse} />
          ))
        }
      </div>
    </div>
  );
}

export default CourseList;
