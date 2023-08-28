import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say
      </h3>
      <p className="text-center info-text m-auto mt-4 max-w-lg">
        Hear the Genuine Stories from our customers who are satisfied with our
        product
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
