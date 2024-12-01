import { courseOutlineAIModel } from "@/configs/AiModel";
import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {courseId, topic, courseType, difficultyLevel, createdBy} = await req.json();

    const PROMPT = 'Generate a study material for '+topic+' for '+courseType+' and level of difficulty will be '+difficultyLevel+' wilth summary of course, List of chapters along with summary for each chapter, topic list in each chapter, all result in JSON format only'

    const aiResp = await courseOutlineAIModel.sendMessage(PROMPT)
    const aiResult = aiResp.response.text(); // Adjust parsing if needed
    console.log("aiResult:", aiResult);

    const dbResult = await db.insert(STUDY_MATERIAL_TABLE).values({
        courseId : courseId,
        courseType : courseType,
        createdBy : createdBy,
        topic : topic,
        courseLayout: JSON.parse(aiResult),
        difficultyLevel : difficultyLevel
    }).returning({STUDY_MATERIAL_TABLE})
    
    

    console.log(dbResult);

    return NextResponse.json({result : dbResult[0] })
}