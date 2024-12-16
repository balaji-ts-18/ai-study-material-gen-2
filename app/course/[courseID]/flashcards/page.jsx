'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import FlashcardItem from './_components/FlashcardItem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

function FlashCards() {
    const { courseID } = useParams();
    console.log('naveennn  ', courseID);

    const [flashCards, setFlashCards] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);
    const [api, setApi] = useState();

    useEffect(() => {
        GetFlashCards();
    }, []);

    useEffect(() => {
        if (!api) {
            return;
        }
        api.on('select', () => {
            setIsFlipped(false);
        });
    }, [api]);

    const GetFlashCards = async () => {
        setFlashCards([]); // Clear previous state before fetching.
        console.log('Fetching flashcards for course id:', courseID);

        try {
            const result = await axios.post('/api/study-type', {
                courseId: courseID,
                studyType: 'FlashCards'
            });

            console.log('Received flashcards:', result.data);
            setFlashCards(result.data?.content || []); // Use `content` directly.
        } catch (error) {
            console.error('Failed to fetch flashcards:', error);
        }
    };

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div>
            <h2 className="font-bold text-2xl">FlashCards</h2>
            <p>Help you to remember your concepts</p>

            <div className="flex items-center justify-center mt-10 max-w-full overflow-hidden">
                <Carousel setApi={setApi} className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
                    <CarouselContent>
                        {flashCards.map((flashcard, index) => (
                            <CarouselItem className="flex items-center justify-center" key={index}>
                                <FlashcardItem
                                    handleClick={handleClick}
                                    isFlipped={isFlipped}
                                    flashcard={flashcard}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}

export default FlashCards;
