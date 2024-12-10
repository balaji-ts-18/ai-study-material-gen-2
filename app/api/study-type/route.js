import { db } from "@/configs/db";
import { CHAPTER_NOTES_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    
    const {courseId, studyType} = await req.json();

    if(studyType == 'ALL')
    {
        const notes = await db.select().from(CHAPTER_NOTES_TABLE)
        .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId))

        // get the all other study type records

        const result = {
            notes : notes,
            flashCard : null,
            quiz : null,
            qa : null
        } 

        return NextResponse.json(result);
    }

    else if(studyType == 'notes')
    {
        const result = await db.select().from(CHAPTER_NOTES_TABLE)
        .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId))

        console.log(result);

        return NextResponse.json(result);

    }
}