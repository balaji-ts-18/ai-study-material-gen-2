import { Button } from '@/components/ui/button'
import { RefreshCw, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'

function CourseCardItem({ course, onDelete }) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this course?")) return;

    setDeleting(true);
    try {
      await axios.delete(`/api/courses`, { data: { courseId: course.courseId } });
      onDelete(course.courseId); // Remove course from UI
    } catch (error) {
      console.error("Error deleting course:", error);
    }
    setDeleting(false);
  };

  return (
    <div className='border rounded-lg shadow-md p-5'>
      <div className='flex justify-between items-center'>
        <Image src={'/exam.png'} width={50} height={50} alt="other"/>
        <button 
          onClick={handleDelete} 
          className='text-red-500 hover:text-red-700'
          disabled={deleting}
        >
          {deleting ? "Deleting..." : <Trash2 className='h-5 w-5' />}
        </button>
      </div>
      
      <h2 className='mt-3 font-medium text-lg'>{course?.topic}</h2>
      <p className='text-sm line-clamp-2 text-gray-500 mt-2'> {course?.courseLayout?.courseSummary} </p>

      <div className='mt-3 flex justify-end'>
        {course?.status === 'generating' ? 
          <h2 className='text-sm p-1 px-2 flex gap-2 items-center rounded-full bg-gray-400 text-white'>
            <RefreshCw className='h-5 w-5' />
            Generating...
          </h2> 
        : <Link href={'/course/' + course?.courseId}> 
            <Button>View</Button> 
          </Link> 
        }
      </div>
    </div>
  )
}

export default CourseCardItem;
