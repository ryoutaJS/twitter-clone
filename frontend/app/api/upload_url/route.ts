import { NextRequest, NextResponse } from "next/server";

export function POST(request: NextRequest) {
  const body = request.body;
  return NextResponse.json({
    presignedUrl: "http://localhost:3000/api/uploadImage",
  });
}