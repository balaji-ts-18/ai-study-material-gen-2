import React from 'react';
import ReactCardFlip from 'react-card-flip';

function FlashcardItem({ isFlipped, handleClick, flashcard, cardSize }) {
    const sizeClass = cardSize === "lg" ? "h-[300px] w-[230px] sm:w-[250px] md:w-[280px] lg:w-[320px]" : 
                                          "h-[250px] w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px]";

    return (
        <div className='flex items-center justify-center'>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div className={`p-4 bg-primary text-white flex items-center justify-center rounded-lg cursor-pointer shadow-lg ${sizeClass}`}
                     onClick={handleClick}>
                    <h2 className="text-lg sm:text-xl md:text-2xl text-center">{flashcard?.front}</h2>
                </div>

                <div className={`p-4 bg-[#12120d] text-white shadow-lg text-primary flex items-center justify-center rounded-lg cursor-pointer ${sizeClass}`}
                     onClick={handleClick}>
                    <h2 className="text-lg sm:text-xl md:text-2xl text-center">{flashcard?.back}</h2>
                </div>
            </ReactCardFlip>
        </div>
    );
}

export default FlashcardItem;
