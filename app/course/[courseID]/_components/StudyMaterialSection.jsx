import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import MaterialCardItem from './MaterialCardItem'

function StudyMaterialSection({courseId, course}) {

    const [studyTypeContent, setStudyTypeContent] = useState();

    const MaterialList = [
        {
            name : 'Notes/Chapters',
            desc : 'Read notes to prepare',
            icon : '/notes.png',
            path : '/notes',
            type : 'notes'
        },
        {
            name : 'FlashCards',
            desc : 'FlashCards help to remember the concepts',
            icon : '/flashcard.png',
            path : '/flashcards',
            type : 'flashcard'
        },
        {
            name : 'Quiz',
            desc : 'Greay way to test your knowledge',
            icon : '/quiz.png',
            path : '/quiz',
            type : 'quiz'
        },
        {
            name : 'Question/Answer',
            desc : 'Help to practice your learning',
            icon : '/qa.png',
            path : '/qa',
            type : 'qa'
        }
    ]

    

    const GetStudyMaterial = async () => {
        const result = await axios.post('/api/study-type', {
            courseId : courseId,
            studyType : 'ALL'
        })

        console.log(result?.data)
        setStudyTypeContent(result.data);
    }

    useEffect(() => {
        GetStudyMaterial();
    },[])

  return (
    <div className='mt-5'>
      <h2 className='font-medium text-xl'>Study Material</h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-3'>
            {MaterialList.map((item, index) => (
                //<Link key = {index} href={'/course/'+courseId+item.path}>
                <MaterialCardItem key = {index} item={item}
                    studyTypeContent = {studyTypeContent}
                    course = {course}
                />
                //</Link>
                
            ))}
        </div>

    </div>
  )
}

export default StudyMaterialSection
