"use client";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { useForm, ValidationError } from '@formspree/react';
import React from "react";
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
    <div className="flex flex-col overflow-y-auto py-16 md:py-20 items-center justify-center bg-transparent relative w-full max-w-7xl mx-auto">
      {showSuccess && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[200] px-6 py-4 rounded-2xl bg-transparent text-white shadow-2xl backdrop-blur-xl animate-fade-in-down text-lg font-semibold flex items-center gap-3" style={{ borderColor: 'var(--border)' }}>
          <svg className="w-6 h-6 text-green-300 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          Message has been sent!
        </div>
      )}
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl md:text-5xl font-extrabold text-center animate-fade-in-down bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg mb-4 sm:mb-10">
            Send Me a Message
          </h1>
        }
      >
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 sm:gap-8 md:gap-10 w-full min-h-0 px-4 sm:px-0">
          {/* Visual Side */}
          <div className="hidden md:flex md:flex-1 relative group rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-slate-900/20 shadow-[0_0_50px_-15px_RGBA(59,130,246,0.35)] hover:shadow-[0_0_70px_-10px_RGBA(99,102,241,0.55)] transition-all duration-500">
            {/* Decorative blobs */}
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
            {/* Image/illustration placeholder */}
            <div className="relative z-[2] w-full grid place-items-center p-8">
              <div className="w-full aspect-[4/3] rounded-2xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent border border-white/10 backdrop-blur-xl flex items-center justify-center text-2xl font-semibold text-white/90 shadow-2xl rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div>Let’s build something together</div>
                  <div className="mt-2 text-sm text-white/70">I usually respond within 24 hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form onSubmit={handleSubmit} className="flex-1 h-full backdrop-blur-xl rounded-3xl px-5 sm:px-7 md:px-10 py-6 sm:py-8 w-full flex flex-col gap-4 sm:gap-6 relative z-[101] bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
            {/* Glow ring on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/20" />
            {/* Email Field */}
            <div className="relative group">
              <input
                id="email"
                type="email"
                name="email"
                required
                className="peer w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl outline-none transition-all duration-300 focus:border-blue-400/60 focus:bg-white/10 placeholder-transparent text-base sm:text-lg text-white/90"
                placeholder=" "
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/80 pointer-events-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0l-8 0m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </span>
              <label
                htmlFor="email"
                className="absolute left-12 top-3 text-white/60 text-sm sm:text-base transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-300 peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-blue-300 pointer-events-none bg-transparent px-1 rounded"
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
                className="peer w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 rounded-xl outline-none transition-all duration-300 focus:border-blue-400/60 focus:bg-white/10 placeholder-transparent text-base sm:text-lg text-white/90 resize-none"
                placeholder=" "
              />
              <span className="absolute left-4 top-4 text-blue-300/80 pointer-events-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5m9-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </span>
              <label
                htmlFor="message"
                className="absolute left-12 top-3 text-white/60 text-sm sm:text-base transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-300 peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-blue-300 pointer-events-none bg-transparent px-1 rounded"
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
              className="mt-2 sm:mt-4 py-3 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:ring-offset-2 focus:ring-offset-transparent active:scale-95 disabled:opacity-60 animate-fade-in-up"
            >
              {state.submitting ? "Sending..." : "Submit"}
            </button>

            {/* Small helper text */}
            <p className="text-xs sm:text-sm text-white/60 mt-2">By submitting, you agree to be contacted back at the provided email.</p>
          </form>
      
      </div>
      </ContainerScroll>
    </div>
  );
}