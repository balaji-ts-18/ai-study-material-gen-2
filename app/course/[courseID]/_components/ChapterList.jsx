import React from 'react'

function ChapterList({course}) {
    const CHAPTERS = course?.courseLayout.chapters;
  return (
    <div className='mt-5'>
      <h2 className='font-medium text-xl'>Chapters</h2>

    </div>
  )
}

export default ChapterList
