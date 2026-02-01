import { NextResponse } from 'next/server';
import { getAuthenticationParameters } from '@/lib/imagekit';
import { getSession } from '@/lib/auth';

export async function GET() {
  // Verify user is authenticated
  const session = await getSession();

  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const authParams = getAuthenticationParameters();
    return NextResponse.json(authParams);
  } catch (error) {
    console.error('ImageKit auth error:', error);
    return NextResponse.json(
      { error: 'Failed to generate auth parameters' },
      { status: 500 }
    );
  }
}
