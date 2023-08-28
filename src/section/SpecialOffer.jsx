import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold max-lg:max-w-lg">
          Special <span className="text-coral-red">Offer </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi
          explicabo placeat facere vel, id incidunt totam impedit fugiat neque
          similique quidem rem ea! Quisquam, voluptatum. Quisquam, voluptatum.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and quality has made us one of the top brand.
        </p>
        <div className="mt-11 flex flex-wrap gap-5">
          <Button label="View Details" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
