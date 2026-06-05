"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import { Send, X } from "lucide-react"

type ChatMessage = {
  role: "assistant" | "user"
  text: string
  time: string
}

const SUGGESTIONS = [
  "How do pickups work?",
  "Where do you operate?",
  "How do I become a picker?",
]

const WHATSAPP_CONTACTS = [
  {
    label: "Customer Service",
    initials: "CS",
    detail: "Pickup bookings and general enquiries",
    href: createWhatsAppHref("Hi WatPak Customer Service, I want to schedule a pickup."),
  },
  {
    label: "Support",
    initials: "SP",
    detail: "Account help and service follow-up",
    href: createWhatsAppHref("Hi WatPak Support, I need help with my account or a pickup request."),
  },
  {
    label: "Technical",
    initials: "TK",
    detail: "Platform issues and technical assistance",
    href: createWhatsAppHref("Hi WatPak Technical, I need help with a technical issue on the platform."),
  },
]

function createWhatsAppHref(message: string) {
  return `https://wa.me/?text=${encodeURIComponent(message)}`
}

function now() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

function getAiReply(input: string): string {
  const n = input.toLowerCase()
  if (n.includes("pickup") || n.includes("collect") || n.includes("schedule"))
    return "You can schedule a pickup through our platform. A verified WatPak picker will come to you, weigh your waste on-site, and your earnings will show on your dashboard immediately after."
  if (n.includes("accra") || n.includes("where") || n.includes("city") || n.includes("operat") || n.includes("kumasi") || n.includes("tema"))
    return "WatPak is currently operating in Accra, Kumasi, and Tema, Ghana. We are expanding to more cities soon."
  if (n.includes("picker") || n.includes("join") || n.includes("register") || n.includes("apply"))
    return "To join as a waste picker, visit the Waste Pickers page and click Apply. The process takes less than five minutes and onboarding is done within 48 hours."
  if (n.includes("business") || n.includes("generator") || n.includes("company") || n.includes("waste"))
    return "Businesses of any size can register as waste generators at app.watpak.com. We collect fibre waste today; plastics, e-waste, and metals are coming soon."
  if (n.includes("aggregator") || n.includes("hub"))
    return "Aggregation hubs receive pre-sorted, weighed waste from our picker network. Apply through the Aggregator page and we will assess your facility within five business days."
  if (n.includes("dashboard") || n.includes("earn") || n.includes("pay") || n.includes("money"))
    return "Your earnings and collection metrics are tracked on your WatPak dashboard in real time after every verified pickup."
  return "I can help with pickups, coverage areas, joining as a picker, registering a business, or becoming an aggregation hub. What would you like to know?"
}

export function FloatingChat() {
  const [aiOpen, setAiOpen] = useState(false)
  const [waOpen, setWaOpen] = useState(false)
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hi, I am the WatPak AI assistant. I can help with pickups, coverage areas, joining the network, and more. What can I help you with?",
      time: now(),
    },
  ])
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages, typing, aiOpen])

  const submitMessage = (text: string) => {
    const value = text.trim()
    if (!value) return
    const t = now()
    setMessages((prev) => [...prev, { role: "user", text: value, time: t }])
    setInput("")
    setAiOpen(true)
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: getAiReply(value), time: now() },
      ])
    }, 1000 + Math.random() * 600)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submitMessage(input)
  }

  return (
    <div className="fixed bottom-3 right-3 z-[120] flex max-w-[calc(100vw-0.75rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6 sm:max-w-none">

      {/* AI Chat panel */}
      {aiOpen && (
        <div className="flex w-[min(23rem,calc(100vw-0.75rem))] max-h-[min(38rem,calc(100vh-8rem))] flex-col overflow-hidden border border-white/8 bg-[#0b1d15] shadow-[0_32px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl">

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-b from-[#0f2a1e] to-[#0b1d15] border-b border-white/6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary shadow-[0_0_14px_rgba(252,212,4,0.35)] text-[11px] font-black text-black">
              AI
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-heading text-sm font-bold tracking-tight text-white">WatPak AI</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="font-heading text-[10px] text-emerald-400/70 tracking-wide">Online · replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setAiOpen(false)}
              className="flex h-7 w-7 items-center justify-center bg-white/5 text-white/40 transition-all hover:bg-white/10 hover:text-white"
            >
              <X size={14} />
            </button>
          </div>

          {/* Messages area */}
          <div
            ref={messagesRef}
            className="scrollbar-hide flex flex-1 min-h-0 flex-col gap-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col gap-1 max-w-[82%] ${msg.role === "assistant" ? "self-start items-start" : "self-end items-end"}`}
              >
                {msg.role === "assistant" && (
                  <span className="ml-1 font-heading text-[9px] font-bold uppercase tracking-[0.2em] text-primary/60">WatPak AI</span>
                )}
                <div
                  className={`px-4 py-2.5 text-sm leading-relaxed shadow-sm ${msg.role === "assistant"
                    ? "bg-white/[0.06] text-white/80 border border-white/5"
                    : "bg-primary text-black font-medium"
                    }`}
                >
                  {msg.text}
                </div>
                <span className="mx-1 font-heading text-[9px] text-white/20">{msg.time}</span>
              </div>
            ))}

            {typing && (
              <div className="self-start flex flex-col gap-1 max-w-[82%]">
                <span className="ml-1 font-heading text-[9px] font-bold uppercase tracking-[0.2em] text-primary/60">WatPak AI</span>
                <div className="flex items-center gap-1.5 bg-white/[0.06] border border-white/5 px-4 py-3.5">
                  {[0, 160, 320].map((delay) => (
                    <span
                      key={delay}
                      className="h-1.5 w-1.5 rounded-full bg-white/35 animate-bounce"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Fade gradient at top of messages to indicate scroll */}
          <div className="pointer-events-none relative -mt-8 h-8 bg-gradient-to-b from-transparent to-[#0b1d15]" />

          {/* Suggestions */}
          <div className="flex flex-col gap-px border-t border-white/6 px-4 pt-2 pb-2">
            <p className="mb-1.5 font-heading text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">Suggested</p>
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => submitMessage(s)}
                className="group flex items-center justify-between border border-white/6 bg-white/[0.03] px-3 py-2.5 text-left font-heading text-[11px] font-bold uppercase tracking-[0.08em] text-white/45 transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
              >
                {s}
                <span className="text-white/20 transition-colors group-hover:text-primary/60">↗</span>
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/6 px-4 py-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="min-w-0 flex-1 bg-white/[0.06] px-4 py-2.5 font-heading text-sm text-white outline-none ring-1 ring-white/8 placeholder:text-white/20 focus:bg-white/10 focus:ring-primary/30 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-black shadow-[0_0_12px_rgba(252,212,4,0.25)] transition-all hover:scale-105 hover:shadow-[0_0_18px_rgba(252,212,4,0.4)] disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none"
            >
              <Send size={14} />
            </button>
          </form>

        </div>
      )}

      {/* WhatsApp panel */}
      {waOpen && (
        <div className="w-[min(22rem,calc(100vw-0.75rem))] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
          {/* WA Header */}
          <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#128C7E] text-xs font-black text-white">
              WP
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white leading-tight">WatPak Support</p>
              <p className="text-[10px] text-white/65">Typically replies within minutes</p>
            </div>
            <button onClick={() => setWaOpen(false)} className="text-white/70 transition-colors hover:text-white">
              <X size={16} />
            </button>
          </div>

          {/* WA incoming bubble */}
          <div
            className="px-3 py-4 bg-[#0a1a10]"
            style={{
              backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'><g fill='none' stroke='white' stroke-width='0.4' opacity='0.025'><circle cx='25' cy='25' r='10'/><circle cx='25' cy='25' r='20'/></g></svg>")`,
            }}
          >
            <div className="relative max-w-[85%] rounded-lg rounded-tl-none bg-[#1f3a28] px-3 py-2.5 shadow-sm">
              <div className="absolute -left-1.5 top-0 h-3 w-3 overflow-hidden">
                <div className="h-3 w-3 bg-[#1f3a28]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
              </div>
              <p className="text-sm leading-relaxed text-white/80">
                Hi! Welcome to WatPak. Choose a team below and we will connect you right away.
              </p>
              <p className="mt-1 text-right font-heading text-[9px] text-white/30">Just now ✓✓</p>
            </div>
          </div>

          {/* Contact list */}
          <div className="bg-[#111b17] border-t border-white/8">
            <p className="px-4 pt-3 pb-1 font-heading text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
              Select a department
            </p>
            {WHATSAPP_CONTACTS.map(({ label, initials, detail, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 border-t border-white/5 px-4 py-3 transition-colors hover:bg-white/[0.04]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#128C7E] text-xs font-black text-white">
                  {initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="truncate text-[11px] text-white/40">{detail}</p>
                </div>
                <span className="shrink-0 text-white/30 transition-colors group-hover:text-[#25D366]">↗</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Toggle buttons */}
      <div className="flex w-full max-w-[22rem] flex-col items-end gap-2.5 sm:w-auto sm:max-w-none">
        {/* AI button */}
        <button
          type="button"
          onClick={() => { setAiOpen((v) => !v); setWaOpen(false) }}
          className="group flex w-full items-center gap-3 border border-[#24453c] bg-[#0d221b] px-4 py-3 text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:border-primary sm:w-auto"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-black text-black transition-transform group-hover:scale-105">
            AI
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full border border-[#0d221b] bg-emerald-400" />
          </span>
          <span>
            <span className="block font-heading text-[9px] font-bold uppercase tracking-[0.3em] text-primary">WatPak AI</span>
            <span className="block font-heading text-sm font-bold text-white">Ask the Assistant</span>
          </span>
        </button>

        {/* WhatsApp button */}
        <button
          type="button"
          onClick={() => { setWaOpen((v) => !v); setAiOpen(false) }}
          className="group flex w-full items-center gap-3 bg-[#075E54] px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#0a6e62] sm:w-auto"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#25D366]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </span>
          <span>
            <span className="block font-heading text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">Need Help?</span>
            <span className="block font-heading text-sm font-bold text-white">Chat with us</span>
          </span>
        </button>
      </div>

    </div>
  )
}
