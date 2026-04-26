"use client"

import { useState } from "react"
import { X, ArrowUpRight } from "lucide-react"

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-md bg-[#142d26] p-8 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-white/40 transition-colors hover:text-white"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <p className="mb-4 font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
              Newsletter
            </p>
            <h3 className="mb-3 font-heading text-3xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-4xl">
              From Waste<br />to Resource.
            </h3>
            <p className="mb-8 font-heading text-sm leading-relaxed text-white/50">
              Get updates on new cities, current rates, and pickup schedules straight to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-white/20 bg-white/5 px-4 py-3 font-heading text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary"
              />
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 bg-primary px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-tight text-primary-foreground transition-all hover:bg-primary/90"
              >
                Subscribe
                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>

            <p className="mt-4 font-heading text-[10px] tracking-wide text-white/25">
              No spam. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="flex flex-col gap-4 py-6">
            <span className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
              You&apos;re in.
            </span>
            <h3 className="font-heading text-3xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-4xl">
              Thanks for<br />joining us.
            </h3>
            <p className="font-heading text-sm leading-relaxed text-white/50">
              We&apos;ll keep you updated on new cities, rates, and pickups.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
