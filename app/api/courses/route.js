import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import {eq, desc} from 'drizzle-orm';
import { NextResponse } from "next/server";

export async function POST(req) {

    const {createdBy} = await req.json();

    const result = await db.select().from(STUDY_MATERIAL_TABLE)
    .where(eq(STUDY_MATERIAL_TABLE.createdBy, createdBy))
    .orderBy(desc(STUDY_MATERIAL_TABLE.id))

    return NextResponse.json({result : result});
}

export async function GET(req) {

    const reqUrl = req.url;
    const {searchParams} = new URL(reqUrl);
    const courseId = searchParams?.get('courseID');

    const course = await db.select().from(STUDY_MATERIAL_TABLE)
    .where(eq(STUDY_MATERIAL_TABLE?.courseId, courseId));

    return NextResponse.json({result : course[0]})

}

export async function DELETE(req) {
    try {
        const { courseId } = await req.json();

        if (!courseId) {
            return NextResponse.json({ error: "Course ID is required" }, { status: 400 });
        }

        await db.delete(STUDY_MATERIAL_TABLE)
            .where(eq(STUDY_MATERIAL_TABLE.courseId, courseId));

        return NextResponse.json({ success: true, message: "Course deleted successfully" });
    } catch (error) {
        console.error("Error deleting course:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}