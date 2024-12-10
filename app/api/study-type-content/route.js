import { db } from "@/configs/db";
import { STUDY_TYPE_CONTENT } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {chapters, courseId, type} = await req.json();

    const PROMPT = 'Generate the flashcard  on topic :' + chapters + '  in JSON format with front and back content, maximum 15'

    //insert record to db
    const result = await db.insert(STUDY_TYPE_CONTENT).values({
        courseId : courseId,
        type : type,
    }).returning({
        id : STUDY_TYPE_CONTENT.id
    });

    // trigger inggest function

    const inngestResult = await inngest.send({
         name : 'studyType.content',
         data : {
            studyType : type,
            prompt : PROMPT,
            courseId : courseId,
            recordId : result[0].id
         }
    });

    console.log(inngestResult);

    return NextResponse.json(result[0].id)
}