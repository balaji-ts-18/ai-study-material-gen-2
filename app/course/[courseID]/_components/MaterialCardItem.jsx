'use client'
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useParams } from 'next/navigation';

function MaterialCardItem({ item, studyTypeContent, course, refreshData }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { courseID } = useParams();

  const GenerateContent = async () => {
    toast('Generating your content...');
    setLoading(true);

    let chapters = '';
    course?.courseLayout.chapters.forEach((chapter) => {
      chapters = (chapter.chapterTitle || chapter.chapter_title) + ',' + chapters;
    });

    await axios.post('/api/study-type-content', {
      courseId: courseID,
      type: item.name,
      chapters,
    });

    setLoading(false);
    refreshData(true);
    toast('Your content is ready to view');
  };

  const isReady = Array.isArray(studyTypeContent?.[item.type])
    ? studyTypeContent[item.type].length > 0
    : !!studyTypeContent?.[item.type];

  return (
    <div
      className={clsx(
        'border shadow-md rounded-lg p-5 flex flex-col items-center',
        { grayscale: !isReady }
      )}
    >
      <h2
        className={clsx(
          'p-1 px-2 text-white rounded-full text-[10px] mb-2',
          { 'bg-gray-500': !isReady, 'bg-green-500': isReady }
        )}
      >
        {isReady ? 'Ready' : 'Generate'}
      </h2>

      <Image src={item.icon} alt={item.name} width={50} height={50} />
      <h2 className="font-medium mt-3">{item.name}</h2>
      <p className="text-gray-500 text-sm text-center">{item.desc}</p>

      {isReady ? (
        <Button
          className="mt-3 w-full"
          variant="outline"
          onClick={() => router.push(`/course/${course?.courseId}${item.path}`)}
        >
          View
        </Button>
      ) : (
        <Button
          className="mt-3 w-full"
          variant="outline"
          onClick={GenerateContent}
          disabled={loading}
        >
          {loading && <RefreshCcw className="animate-spin mr-2" />}
          Generate
        </Button>
      )}
    </div>
  );
}

export default MaterialCardItem;
