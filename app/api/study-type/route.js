import { db } from "@/configs/db";
import { CHAPTER_NOTES_TABLE, STUDY_TYPE_CONTENT } from "@/configs/schema";
import { ConsoleLogWriter, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    
    const {courseId, studyType} = await req.json();

    if(studyType == 'ALL')
    {
        const notes = await db.select().from(CHAPTER_NOTES_TABLE)
        .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId))

        // get the all other study type records

        const contentList = await  db.select().from(STUDY_TYPE_CONTENT)
        .where(eq(STUDY_TYPE_CONTENT?.courseId, courseId))

        const result = {
            notes : notes,
            flashcard : contentList?.filter(item=>item.type == 'FlashCards'),
            quiz : contentList?.filter(item=>item.type == 'Quiz'),
            qa : contentList?.filter(item=>item.type == 'Question/Answer'),
        } 

        //console.log('rana ', contentList);

        return NextResponse.json(result);
    }

    else if(studyType == 'notes')
    {
        const result = await db.select().from(CHAPTER_NOTES_TABLE)
        .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId))

        //console.log(result);

        return NextResponse.json(result);

    }
    else {

        try {
            const result = await db.select().from(STUDY_TYPE_CONTENT)
            .where(eq(STUDY_TYPE_CONTENT?.courseId, courseId))
            .where(eq(STUDY_TYPE_CONTENT?.type, studyType))

            //console.log(result);

            return NextResponse.json(result[0]);

        } catch (error) {
            console.log(error)
        }
        
    }
}