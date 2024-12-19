import { db } from "@/configs/db";
import { CHAPTER_NOTES_TABLE, STUDY_TYPE_CONTENT } from "@/configs/schema";
import { eq, and } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { courseId, studyType } = await req.json();

    if (studyType === 'ALL') {
        const notes = await db.select().from(CHAPTER_NOTES_TABLE)
            .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId));

        const contentList = await db.select().from(STUDY_TYPE_CONTENT)
            .where(eq(STUDY_TYPE_CONTENT?.courseId, courseId));

        const result = {
            notes: notes,
            flashcard: contentList?.find(item => item.type === 'FlashCards'),
            quiz: contentList?.filter(item => item.type === 'Quiz'),
            qa: contentList?.filter(item => item.type === 'Question/Answer'),
        };

        console.log('ALL data:', result);
        return NextResponse.json(result);
    } else if (studyType === 'notes') {
        const notes = await db.select().from(CHAPTER_NOTES_TABLE)
            .where(eq(CHAPTER_NOTES_TABLE?.courseId, courseId));

        console.log('Notes: Aaj ki raat ', notes);
        return NextResponse.json({ notes });
    } else {
        try {
            const content = await db.select().from(STUDY_TYPE_CONTENT)
                .where(and(
                    eq(STUDY_TYPE_CONTENT?.courseId, courseId),
                    eq(STUDY_TYPE_CONTENT?.type, studyType)
                ));

            console.log('Single content:', content[0]);
            return NextResponse.json(content[0]); // Return the first match directly.
        } catch (error) {
            console.error('Error fetching content:', error);
            return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
        }
    }
}
