import type { Metadata } from "next";
import BookingFormContainer from "./BookingFormContainer";

export const metadata: Metadata = {
  title: "Book Now | Vayu Galaxy",
  description: "Submit a free booking request to Vayu Galaxy and tell us what you'd like to explore.",
};

export default function BookNowPage() {
  return <BookingFormContainer />;
}
