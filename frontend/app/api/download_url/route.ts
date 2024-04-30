import { NextRequest, NextResponse } from "next/server";

export function POST(request: NextRequest) {
  const requestBody = request.json();

  return NextResponse.json({
    presignedUrl: "https://news.walkerplus.com/article/1023800/10210444_615.jpg",
  });
}
