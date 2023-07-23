import "../../App.css";
import { LightLineComp } from "../LightLineComp";
import { FaqComp } from "../faq-comp/FaqComp";
// import "./FaqSection.css";

export const FaqSection = () => {
  const faqs = [
    {
      ques: "Are my tickets transferable",
      detail:
        "No. The tickets can only be used by the person(s) whose details are indicated on the voucher. If you’re booking for friends and family, make sure to key in their details.",
    },
    {
      ques: "How long will it take to receive my ticket?",
      detail:
        "The tickets will hit your inbox as soon as you complete making the payment.",
    },
    {
      ques: "Is my payment secure?",
      detail:
        "We use a PCI compliant payment gateway that is internationally recognized and protects against fraud and unauthorized transactions. In short, your payment is a 100% secure and you have nothing to worry!",
    },
    {
      ques: "What type of payment options do you offer?",
      detail:
        "We accept payments via all major international debit cards, credit cards, Google Pay and Apple Pay. Please note that Tickete being an online marketplace does not accept cash payments.",
    },
    {
      ques: "When will I be charged for my booking?",
      detail:
        "Your account will be charged immediately upon booking. If the booking is cancelled from your end or by our local tour operator, we will refund the entire amount to your account at no extra cost.",
    },
    {
      ques: "Why am I being charged in USD?",
      detail:
        "All payments on Tickete are charged in USD. Your accounted will be debited with the spot rate for the conversion rate from your local currency to USD. We understand this is less than ideal but, we’re working on accepting payments in currencies across the world.",
    },
    {
      ques: "Will I get a complete refund if I cancel this ticket?",
      detail:
        "The cancellation and refund policy varies per ticket. While some can be canceled up to 24, 48, or 72 hours before they start, several others can’t be canceled once the reservation has been confirmed. For the ones that can cancelled within the permissible cancellation period, you will receive a full refund.",
    },
  ];

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((item) => (
        <>
          <div className="divide-space"></div>
          <FaqComp heading={item.ques} body={item.detail} />

          <LightLineComp />
        </>
      ))}
      <div className="divide-space"></div>

      <FaqComp
        heading="How long does it take for a refund to reflect in my account?"
        body="Depending on your bank, it typically takes anywhere between 2-7 working days for the refunded amount to reflect in your account."
      />
    </div>
  );
};
