'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import FlashcardItem from './_components/FlashcardItem';

function FlashCards() {
    const { courseID } = useParams();
    const [flashCards, setFlashCards] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 8; // 4x2 layout

    useEffect(() => {
        GetFlashCards();
    }, []);

    const GetFlashCards = async () => {
        setFlashCards([]);
        try {
            const result = await axios.post('/api/study-type', {
                courseId: courseID,
                studyType: 'FlashCards'
            });
            setFlashCards(result.data?.content || []);
        } catch (error) {
            console.error('Failed to fetch flashcards:', error);
        }
    };

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNext = () => {
        setSelectedIndex((prev) => (prev + 1) % flashCards.length);
        setIsFlipped(false);
    };

    const handlePrev = () => {
        setSelectedIndex((prev) => (prev - 1 + flashCards.length) % flashCards.length);
        setIsFlipped(false);
    };

    const totalPages = Math.ceil(flashCards.length / cardsPerPage);
    const paginatedFlashcards = flashCards.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

    return (
        <div className="flex justify-center items-center mt-10 w-full">
            {/* Grid Preview Section with Pagination */}
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 grid-rows-4 gap-4 w-[300px]">
                    {paginatedFlashcards.map((flashcard, index) => (
                        <div
                            key={index}
                            className={`p-3 flex items-center justify-start text-left rounded-lg cursor-pointer
                            h-[100px] w-[140px] border border-gray-300 overflow-hidden`}
                            onClick={() => {
                                setSelectedIndex(currentPage * cardsPerPage + index);
                                setIsFlipped(false);
                            }}
                        >
                            <span className="text-sm w-full overflow-hidden text-ellipsis whitespace-nowrap" title={flashcard.front}>
                                {flashcard.front.length > 35 ? flashcard.front.slice(0, 35) + "..." : flashcard.front}
                            </span>
                        </div>
                    ))}
                </div>
                {/* Pagination Controls */}
                <div className="mt-4 flex gap-4">
                    <button className="px-3 py-1 bg-black rounded-lg shadow hover:bg-gray-300" 
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} 
                        disabled={currentPage === 0}>
                        Previous Page
                    </button>
                    <button className="px-3 py-1 bg-black rounded-lg shadow hover:bg-gray-300" 
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))} 
                        disabled={currentPage === totalPages - 1}>
                        Next Page
                    </button>
                </div>
            </div>

            {/* Main Flashcard Display */}
            <div className="flex flex-col items-center ml-8">
                <FlashcardItem
                    handleClick={handleClick}
                    isFlipped={isFlipped}
                    flashcard={flashCards[selectedIndex]}
                />

                {/* Navigation Buttons */}
                <div className="mt-4 flex gap-4">
                    <button className="px-4 py-2 bg-black  rounded-lg shadow hover:bg-gray-300" onClick={handlePrev}>
                        Previous
                    </button>
                    <button className="px-4 py-2 bg-black  rounded-lg shadow hover:bg-gray-300" onClick={handleNext}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FlashCards;
