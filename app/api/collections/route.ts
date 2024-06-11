import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const data = Date.now();

  return NextResponse.json(data, {
    status: 200,
  });
}

export async function PUT(request: NextRequest) {
  console.log(request.url);

  const result = Date.now();
  console.log('Collections updated.', result, 'Added');
  return NextResponse.json({
    success: true,
    message: `Collections updated. ${result} Added`,
  });
}
