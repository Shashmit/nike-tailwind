import React from "react";
import Button from "../components/Button";
const subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl lg:max-w-md font-palanquin leading-[68px] font-bold">
        Sign Up For Our <span className="text-coral-red">Newletter</span>
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="email"
          className="input"
          placeholder="subscribe@nike.com"
        />
        <div>
          <Button label="sign up" />
        </div>
      </div>
    </section>
  );
};

export default subscribe;
