"use client";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { useForm, ValidationError } from '@formspree/react';
import React from "react";
import profileImg from '../../assets/profile.jpeg'
export default function ContactForm() {
  const [state, handleSubmit] = useForm("meozawbb");
  const [showSuccess, setShowSuccess] = React.useState(false);

  React.useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="flex flex-col overflow-y-auto py-12 md:py-0 md:min-h-screen items-center justify-center bg-transparent relative w-full max-w-5xl mx-auto">
      {showSuccess && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[200] px-6 py-4 rounded-2xl bg-transparent text-white shadow-2xl backdrop-blur-xl animate-fade-in-down border border-border text-lg font-semibold flex items-center gap-3">
          <svg className="w-6 h-6 text-green-300 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          Message has been sent!
        </div>
      )}
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl md:text-5xl font-extrabold text-center animate-fade-in-down bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg mb-4 sm:mb-8">
            Send Me a Message
          </h1>
        }
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 w-full min-h-0 px-4 sm:px-0">
          {/* Form Side */}
          <form onSubmit={handleSubmit} className="flex-1 h-full backdrop-blur-lg rounded-3xl px-4 sm:px-6 md:px-10 py-6 sm:py-8 w-full flex flex-col gap-4 sm:gap-6 relative z-[101] bg-transparent">
            {/* Email Field */}
            <div className="relative group">
              <input
                id="email"
                type="email"
                name="email"
                required
                className="peer w-full pl-6 py-3 bg-transparent border border-border rounded-xl outline-none transition-all duration-300 focus:border-accent focus:bg-white/50 dark:focus:bg-black/40 placeholder-transparent text-lg text-primary"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-6 top-3 text-muted-foreground text-base transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-accent peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-accent pointer-events-none bg-transparent px-1 rounded"
              >
                Email Address
              </label>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            {/* Message Field */}
            <div className="relative group">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="peer w-full pl-6 py-3 bg-transparent border border-border rounded-xl outline-none transition-all duration-300 focus:border-accent focus:bg-white/50 dark:focus:bg-black/40 placeholder-transparent text-lg text-primary resize-none"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute left-6 top-3 text-muted-foreground text-base transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm peer-focus:text-accent peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-accent pointer-events-none bg-transparent px-1 rounded"
              >
                Message
              </label>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="mt-4 py-3 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 disabled:opacity-60 animate-fade-in-up"
            >
              {state.submitting ? "Sending..." : "Submit"}
            </button>
          </form>
          {/* Image Side */}
          <div className="hidden sm:flex w-full md:flex-1 h-full items-center justify-center mt-8 sm:mt-10 md:mt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px]">
              <img
                src={profileImg}
                alt="Contact Illustration"
                className="w-full h-auto max-h-[250px] sm:max-h-[350px] md:max-h-[450px] object-cover rounded-3xl shadow-2xl border border-border transform transition-transform duration-300 hover:scale-102"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-black/10 dark:to-white/5 -z-10"></div>
            </div>
          </div>
      </div>
      </ContainerScroll>
    </div>
  );
}