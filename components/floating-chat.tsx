"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import { Bot, MessageCircle, MessagesSquare, Send, X } from "lucide-react"

type ChatMessage = {
  role: "assistant" | "user"
  text: string
}

const SUGGESTIONS = [
  "How do pickups work?",
  "Do you operate in Accra only?",
  "How do I become a waste picker?",
]

const WHATSAPP_CONTACTS = [
  {
    label: "Customer Service",
    detail: "Pickup bookings and general enquiries",
    href: createWhatsAppHref("Hi WatPak Customer Service, I want to schedule a pickup in Accra."),
  },
  {
    label: "Support",
    detail: "Account help and service follow-up",
    href: createWhatsAppHref("Hi WatPak Support, I need help with my account or a pickup request."),
  },
  {
    label: "Technical",
    detail: "Platform issues and technical assistance",
    href: createWhatsAppHref("Hi WatPak Technical, I need help with a technical issue on the platform."),
  },
]

const AI_WELCOME =
  "I am WatPak AI. I can help with pickups, coverage in Accra, and joining the network."

function createWhatsAppHref(message: string) {
  return `https://wa.me/?text=${encodeURIComponent(message)}`
}

function getAiReply(input: string) {
  const normalized = input.toLowerCase()

  if (normalized.includes("pickup") || normalized.includes("collect")) {
    return "WatPak helps you request a pickup, weigh waste on-site, and get paid after collection."
  }

  if (normalized.includes("accra") || normalized.includes("where") || normalized.includes("operate")) {
    return "WatPak is currently operating in Accra, Ghana, with expansion planned later."
  }

  if (normalized.includes("waste picker") || normalized.includes("join") || normalized.includes("register")) {
    return "You can join the network through the Waste Picker flow or contact WatPak to get onboarded."
  }

  if (normalized.includes("business") || normalized.includes("waste generator")) {
    return "Waste generators can schedule pickups and turn collected waste into revenue through WatPak."
  }

  return "I can help with pickups, coverage, onboarding, and platform guidance. Try asking about pickups in Accra or joining the network."
}

export function FloatingChat() {
  const [aiOpen, setAiOpen] = useState(false)
  const [whatsAppOpen, setWhatsAppOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: AI_WELCOME },
  ])
  const messagesRef = useRef<HTMLDivElement>(null)

  const canSend = input.trim().length > 0

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages, aiOpen])

  const submitMessage = (text: string) => {
    const value = text.trim()
    if (!value) return

    setMessages((current) => [
      ...current,
      { role: "user", text: value },
      { role: "assistant", text: getAiReply(value) },
    ])
    setInput("")
    setAiOpen(true)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    submitMessage(input)
  }

  return (
    <div className="fixed bottom-3 right-3 z-[120] flex max-w-[calc(100vw-0.75rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6 sm:max-w-none">
      {aiOpen ? (
        <div className="flex max-h-[min(34rem,calc(100vh-7.5rem))] w-[min(19rem,calc(100vw-0.75rem))] flex-col overflow-hidden border border-[#24453c] bg-[#102721] text-white shadow-[0_18px_45px_rgba(0,0,0,0.32)] sm:w-[18rem]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Bot size={18} />
              </span>
              <div>
                <p className="font-heading text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
                  AI Chat
                </p>
                <p className="font-heading text-sm font-bold uppercase tracking-tight text-white">
                  WatPak Assistant
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setAiOpen(false)}
              aria-label="Close AI chat"
              className="text-white/45 transition-colors hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-3 px-3 py-3 sm:px-4 sm:py-4">
            <div
              ref={messagesRef}
              className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-1"
            >
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}-${message.text}`}
                  className={
                    message.role === "assistant"
                      ? "max-w-[88%] self-start bg-white/6 px-3 py-2 text-sm leading-relaxed text-white/80"
                      : "max-w-[88%] self-end bg-primary px-3 py-2 text-sm leading-relaxed text-primary-foreground"
                  }
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => submitMessage(suggestion)}
                  className="border border-white/10 bg-white/5 px-2.5 py-1.5 font-heading text-[10px] font-bold uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-primary hover:text-white"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/10 pt-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about pickups, Accra, or onboarding"
                className="min-w-0 flex-1 border border-white/10 bg-white/5 px-3 py-3 font-heading text-xs text-white outline-none transition-colors placeholder:text-white/25 focus:border-primary sm:text-sm"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-primary-foreground transition-all hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-45"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {whatsAppOpen ? (
        <div className="w-[min(19rem,calc(100vw-0.75rem))] overflow-hidden border border-[#1d7f48] bg-[#0f2019] text-white shadow-[0_18px_45px_rgba(0,0,0,0.32)] sm:w-[18rem]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="font-heading text-[10px] font-bold uppercase tracking-[0.28em] text-[#25D366]">
                WhatsApp
              </p>
              <p className="font-heading text-sm font-bold uppercase tracking-tight text-white">
                Choose a Contact
              </p>
            </div>
            <button
              type="button"
              onClick={() => setWhatsAppOpen(false)}
              aria-label="Close WhatsApp contacts"
              className="text-white/45 transition-colors hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-2 px-3 py-3">
            {WHATSAPP_CONTACTS.map(({ label, detail, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 border border-white/8 bg-white/5 px-3 py-3 transition-all hover:border-[#25D366]/45 hover:bg-[#25D366]/10"
              >
                <div className="min-w-0">
                  <span className="block font-heading text-sm font-bold uppercase tracking-tight text-white">
                    {label}
                  </span>
                  <span className="block font-heading text-[11px] leading-relaxed text-white/45">
                    {detail}
                  </span>
                </div>
                <MessageCircle size={18} className="shrink-0 text-[#25D366]" />
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div className="flex w-full max-w-[19rem] flex-col items-end gap-3 sm:w-auto sm:max-w-none">
        <button
          type="button"
          onClick={() => {
            setAiOpen((current) => !current)
            setWhatsAppOpen(false)
          }}
          aria-label="Open AI chat"
          className="group flex w-full items-center gap-3 border border-[#24453c] bg-[#102721] px-4 py-3 text-white shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-[#18352d] sm:w-auto"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-105">
            <MessagesSquare size={18} />
          </span>
          <span className="pr-1">
            <span className="block font-heading text-[10px] font-bold uppercase tracking-[0.28em] text-primary">
              AI Chat
            </span>
            <span className="block font-heading text-sm font-bold uppercase tracking-tight text-white">
              Ask WatPak AI
            </span>
          </span>
        </button>

        <button
          type="button"
          onClick={() => {
            setWhatsAppOpen((current) => !current)
            setAiOpen(false)
          }}
          aria-label="Open WhatsApp contacts"
          className="group flex w-full items-center gap-3 border border-[#25D366]/30 bg-[#25D366] px-4 py-3 text-[#0c2416] shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fbe5b] sm:w-auto"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0c2416]/10 transition-transform duration-300 group-hover:scale-105">
            <MessageCircle size={18} />
          </span>
          <span className="pr-1">
            <span className="block font-heading text-[10px] font-bold uppercase tracking-[0.28em] text-[#0c2416]/70">
              WhatsApp
            </span>
            <span className="block font-heading text-sm font-bold uppercase tracking-tight">
              Pick a Team
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}
