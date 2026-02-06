import { useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle, Send, Sparkles, X } from 'lucide-react';

type Role = 'assistant' | 'user';

type ChatMessage = {
  id: string;
  role: Role;
  content: string;
};

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function buildReply(raw: string): string {
  const text = raw.trim().toLowerCase();

  if (!text) return "What's on your mind?";

  if (/(price|pricing|cost|rates|package)/.test(text)) {
    return [
      'Most teams start at $199.99/month (depends on channels + integrations).',
      'If you tell me your business type and where customers message you (website/SMS/Facebook/Instagram), I can recommend the right setup.',
      'You can also scroll to Pricing on this page for a quick breakdown.',
    ].join(' ');
  }

  if (/(book|call|consult|meeting|demo)/.test(text)) {
    return [
      "Absolutely. If you share your business name + best contact method, I'll point you to the contact form so we can book a quick consultation.",
      'In the meantime, what do you want the chatbot to handle first: leads, booking, FAQs, or support?'
    ].join(' ');
  }

  if (/(what can you do|capabilit|features|help|use case)/.test(text)) {
    return [
      "I can act like a 24/7 front-desk: answer FAQs, qualify leads, collect contact details, and hand off to a human when needed.",
      'I can also route conversations into your tools (calendar, CRM, email/SMS, forms).',
      'What kind of business is this for?'
    ].join(' ');
  }

  if (/(website|sms|text|facebook|instagram|messenger)/.test(text)) {
    return [
      'Great — multi-channel is where chatbots shine.',
      'We usually start with one “core” knowledge base + one conversion goal (book a call, request a quote, schedule, or capture leads), then expand to other channels.',
      'Which channel matters most for you right now?'
    ].join(' ');
  }

  if (/(appointment|schedule|calendar)/.test(text)) {
    return [
      'Scheduling is a perfect chatbot job.',
      'We can collect a few details, show availability, and confirm the booking — then send reminders so fewer people no-show.',
      'What do you book: consultations, services, or onsite visits?'
    ].join(' ');
  }

  if (/(support|refund|return|order|shipping)/.test(text)) {
    return [
      'Support automation can reduce repetitive tickets fast.',
      'A good bot answers common questions instantly, pulls order details when integrated, and escalates edge cases to a human.',
      'What are the top 3 questions you get every week?'
    ].join(' ');
  }

  return [
    "Got it. If you tell me your business type and what you want the chatbot to achieve (more leads, fewer calls, faster support, bookings),",
    "I'll suggest a simple first version you can launch quickly."
  ].join(' ');
}

export default function ChatAgentWidget() {
  const suggestions = useMemo(
    () => [
      'What can a chatbot do for my business?',
      'How much does it cost?',
      'Can you help me book more appointments?',
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: uid(),
      role: 'assistant',
      content:
        "Hi! I'm the Steinbots demo agent. Ask me about chatbots, pricing, or how we'd automate your leads and bookings.",
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [open, messages, isTyping]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  function pushUserMessage(content: string) {
    setMessages((prev) => [...prev, { id: uid(), role: 'user', content }]);
  }

  function pushAssistantMessage(content: string) {
    setMessages((prev) => [...prev, { id: uid(), role: 'assistant', content }]);
  }

  function handleSend(content?: string) {
    const value = (content ?? input).trim();
    if (!value || isTyping) return;

    pushUserMessage(value);
    setInput('');
    setIsTyping(true);

    window.setTimeout(() => {
      const reply = buildReply(value);
      pushAssistantMessage(reply);
      setIsTyping(false);
    }, 650);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex items-center gap-3 rounded-2xl bg-gray-900 px-4 py-3 text-white shadow-xl hover:shadow-2xl transition"
          aria-label="Open chat"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
            <MessageCircle className="h-5 w-5" />
          </span>
          <span className="text-left leading-tight">
            <div className="text-sm font-semibold">Chat with an agent</div>
            <div className="text-xs text-white/70">See a chatbot demo</div>
          </span>
        </button>
      ) : (
        <div className="w-[92vw] max-w-[430px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-4 py-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-gray-900">Steinbots Agent</div>
                <div className="truncate text-xs text-gray-500">Demo chatbot • Replies instantly</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-xl hover:bg-gray-50 transition"
              aria-label="Close chat"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <div ref={listRef} className="max-h-[60vh] overflow-y-auto px-4 py-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.role === 'user'
                    ? 'flex justify-end mb-3'
                    : 'flex justify-start mb-3'
                }
              >
                <div
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] rounded-2xl rounded-br-md bg-blue-600 px-4 py-3 text-sm text-white shadow'
                      : 'max-w-[85%] rounded-2xl rounded-bl-md bg-gray-50 px-4 py-3 text-sm text-gray-900 border border-gray-100'
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}

            {isTyping ? (
              <div className="flex justify-start mb-3">
                <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-gray-50 px-4 py-3 text-sm text-gray-700 border border-gray-100">
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.2s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.1s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" />
                    </span>
                    Thinking…
                  </span>
                </div>
              </div>
            ) : null}

            <div className="mt-4 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleSend(s)}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="mt-3 text-xs text-gray-400">
              Tip: ask about leads, booking, or support automation.
            </div>
          </div>

          <form
            className="border-t border-gray-100 p-3"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about chatbots…"
                className="h-11 flex-1 rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
                aria-label="Message"
              />
              <button
                type="submit"
                className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white shadow hover:bg-blue-700 transition disabled:opacity-40"
                disabled={!input.trim() || isTyping}
                aria-label="Send"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
