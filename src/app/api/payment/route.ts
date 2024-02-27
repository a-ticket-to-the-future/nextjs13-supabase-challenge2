import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/app/lib/stripe";
import Stripe from "stripe";
import createSubscription from "@/app/actions/createSubscription";
import getSubscription from "@/app/actions/getSubscription";
import updateSubscription from "@/app/actions/updateSubscription";


interface CustomInvoice = extends Stripe.Invoice {
    payment_intent: Stripe.PaymentIntent
}

intertface CustomSubscription extends Stripe.Subscription {
    latest_invoice:CustomInvoice
}
