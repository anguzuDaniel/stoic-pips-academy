// app/api/stripe/checkout/route.ts
import { NextResponse } from 'next/server';
import { getStripe } from '../../../../../lib/stripe';


export async function POST(request: Request) {
    const stripe = await getStripe();
  try {
    const { price, serviceTitle, serviceId, customerEmail } = await request.json();

    // Extract numeric value from price string (e.g., "$299" -> 299)
    const amount = Math.round(parseFloat(price.replace(/[^0-9.]/g, '')) * 100);

    if (isNaN(amount)) {
      return NextResponse.json(
        { error: 'Invalid price format' },
        { status: 400 }
      );
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: serviceTitle,
              description: `Stoic Pips Academy - ${serviceTitle}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/get-started?cancelled=true`,
      customer_email: customerEmail,
      metadata: {
        service_id: serviceId || 'default',
        service_title: serviceTitle,
      },
    });

    return NextResponse.json({ 
      success: true,
      sessionId: session.id 
    });
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error.message || 'Error creating checkout session' 
      },
      { status: 500 }
    );
  }
}