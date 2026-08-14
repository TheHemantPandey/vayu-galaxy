import type { Metadata } from "next";
import BookingFormContainer from "./BookingFormContainer";

export const metadata: Metadata = {
  title: "Vayu Galaxy — Early Registration",
  description: "Register your interest in Vayu Galaxy and be among the first to hear about what we're building next.",
};

export default function BookNowPage() {
  return <BookingFormContainer />;
}
