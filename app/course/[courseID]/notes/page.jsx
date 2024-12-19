'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'

function ViewNotes() {
    const { courseID } = useParams();
    const [notes, setNotes] = useState([]);
    const [stepCount, setStepCount] = useState(0);

    useEffect(() => {
        GetNotes();
    }, []);

    const GetNotes = async () => {
        try {
            const result = await axios.post('/api/study-type', {
                courseId: courseID,
                studyType: 'notes',
            });
            console.log('API Response:', result?.data);
            setNotes(result?.data?.notes || []);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    const currentNote = notes[stepCount] || null;

    return (
        <div className="container mx-auto px-4 py-8">
            {notes.length > 0 ? (
                <div className="bg-white rounded-lg shadow-md p-6">
                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mb-6">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setStepCount(stepCount - 1)}
                            disabled={stepCount === 0}
                            className={`transition-all ${
                                stepCount === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
                            }`}
                        >
                            Previous
                        </Button>
                        <div className="text-sm text-gray-500">
                            Step {stepCount + 1} of {notes.length}
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setStepCount(stepCount + 1)}
                            disabled={stepCount === notes.length - 1}
                            className={`transition-all ${
                                stepCount === notes.length - 1
                                    ? 'opacity-50 cursor-not-allowed'
                                    : 'hover:bg-gray-200'
                            }`}
                        >
                            Next
                        </Button>
                    </div>

                    {/* Current Note Content */}
                    {currentNote && (
                        <div className="prose prose-sm md:prose-lg prose-indigo space-y-4">
                            <h2 className="text-xl font-bold text-gray-800">Chapter Notes</h2>

                            {/* Render the extracted content */}
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: extractContentFromNotes(currentNote?.notes),
                                }}
                            />
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center text-gray-500">No notes available.</div>
            )}
        </div>
    );
}

// Utility function to extract content
const extractContentFromNotes = (notes) => {
    if (!notes) return '';

    try {
        // Remove the ```json markers if present
        const cleanedNotes = notes
            .replace(/```json/g, '') // Remove opening ```json
            .replace(/```/g, '')     // Remove closing ```
            .trim();

        // Attempt to parse the cleaned notes as JSON
        const parsedNotes = JSON.parse(cleanedNotes);

        // If parsed successfully and has `content`, return the `content` field
        if (parsedNotes.content) {
            return parsedNotes.content;
        }
    } catch (error) {
        console.warn('Notes are not in JSON format. Assuming raw HTML.', error);
    }

    // If parsing fails, assume it's raw HTML and return it directly
    return notes.replace(/```html/g, '').replace(/```/g, '').trim();
};

export default ViewNotes;
