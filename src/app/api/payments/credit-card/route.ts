import { NextResponse } from 'next/server';

export async function POST() {
  // Simulate API processing
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return NextResponse.json({
    success: true,
    transactionId: `CC-${Date.now()}`,
    message: 'Payment processed successfully'
  });
}