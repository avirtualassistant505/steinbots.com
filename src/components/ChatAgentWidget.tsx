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

  if (/(steinbach ai|local ai|ai in steinbach|steinbach automation|manitoba ai)/.test(text)) {
    return [
      'Steinbach AI is where Steinbots focuses: practical AI systems for local businesses that need faster replies, cleaner admin, and better follow-up.',
      'We build AI agents, booking flows, bookkeeping workflows, dashboards, website revamps, and custom automation for Steinbach, Niverville, Southern Manitoba, and remote clients.',
      'What kind of business do you want AI to help with?',
    ].join(' ');
  }

  if (/(niverville|hanover|blumenort|mitchell|kleefeld|grunthal|la broquerie|southern manitoba|winnipeg)/.test(text)) {
    return [
      'Steinbots is focused on Steinbach and nearby Southern Manitoba communities, including Niverville, Hanover, Blumenort, Mitchell, Kleefeld, Grunthal, La Broquerie, and Winnipeg-area businesses when the workflow fits.',
      'Good local AI starting points are lead capture, booking automation, website chat, bookkeeping intake, and custom admin workflows.',
      'Which town and business type should the system support?',
    ].join(' ');
  }

  if (/(receptionist|missed call|phone agent|front desk|answer calls)/.test(text)) {
    return [
      'An AI receptionist or front-desk system is useful when calls, website messages, or social inquiries are getting missed.',
      'We can help capture the lead, ask qualifying questions, route urgent messages, book appointments, and hand off to a person when needed.',
      'Do most inquiries come from phone, website, Facebook, Instagram, or referrals?',
    ].join(' ');
  }

  if (/(bookkeep|quickbooks|receipt|invoice|accounting|bank feed|expense)/.test(text)) {
    return [
      'Bookkeeping automation works best when it supports a human review process.',
      'We can help with receipt intake, invoice follow-up, QuickBooks review queues, monthly close checklists, and exception reports.',
      'Steinbots builds the workflow and review system; tax, CPA, audit, or legal advice should stay with the appropriate qualified professional.',
      'What is messiest right now: receipts, categorizing transactions, invoices, or month-end review?',
    ].join(' ');
  }

  if (/(software|workflow|automation|dashboard|internal tool|portal|custom)/.test(text)) {
    return [
      'Custom automation is a good fit when your team keeps copying data between tools or repeating the same admin steps.',
      'We can build dashboards, forms, portals, and integrations with Gmail, Sheets, CRMs, Stripe, Shopify, QuickBooks, and calendars.',
      'Which tool or process do you want connected first?',
    ].join(' ');
  }

  if (/(website|revamp|redesign|wordpress|shopify|webflow|wix|squarespace)/.test(text)) {
    return [
      'The $500 website revamp is for businesses that already have a site but want it cleaned up, rewritten, redesigned, coded, and launched.',
      'We can work with WordPress, Shopify, Webflow, Wix, Squarespace, GoHighLevel, and most custom-coded sites.',
      'If you share your current website, we can tell you what we would improve first.',
    ].join(' ');
  }

  if (/(price|pricing|cost|rates|package)/.test(text)) {
    return [
      'AI front desk packages start around $249/month. Bookkeeping workflow setup starts around $750, and custom automation builds usually start around $1,500.',
      'The website revamp is a separate one-time $500 service.',
      'Tell me what you want fixed first: leads, booking, bookkeeping, support, or your website.',
    ].join(' ');
  }

  if (/(book|call|consult|meeting|demo)/.test(text)) {
    return [
      'Absolutely. Share your business name and best contact method in the form, and we can book a quick consultation.',
      'The useful first question is: should your system capture leads, book appointments, clean up bookkeeping admin, or automate a custom workflow?',
    ].join(' ');
  }

  if (/(what can you do|capabilit|features|help|use case)/.test(text)) {
    return [
      'A Steinbots system can act like a 24/7 front desk, bookkeeping helper, follow-up assistant, or workflow router.',
      'It can also route conversations, documents, invoices, reminders, and approvals into your tools.',
      'What kind of business is this for?',
    ].join(' ');
  }

  if (/(sms|text|facebook|instagram|messenger)/.test(text)) {
    return [
      'Multi-channel is where AI agents become useful.',
      'We usually start with one core knowledge base and one conversion goal, then expand to website chat, SMS, Facebook, or Instagram.',
      'Which channel matters most right now?',
    ].join(' ');
  }

  if (/(appointment|schedule|calendar)/.test(text)) {
    return [
      'Scheduling is a perfect AI agent job.',
      'We can collect the right details, show availability, confirm the booking, and send reminders so fewer people no-show.',
      'What do you book: consultations, services, or onsite visits?',
    ].join(' ');
  }

  return [
    'Tell me your business type and what you want the system to achieve: more leads, cleaner books, fewer missed calls, faster support, bookings, or a better website.',
    'I can suggest a simple first version you can launch quickly.',
  ].join(' ');
}

export default function ChatAgentWidget() {
  const suggestions = useMemo(
    () => ['What is Steinbach AI?', 'Do you serve Niverville?', 'Can you automate bookkeeping?'],
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
        "Hi, I'm the Steinbots demo agent. Ask me about Steinbach AI, AI agents, bookkeeping workflows, pricing, bookings, custom software, or the $500 website revamp.",
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [open, messages, isTyping]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
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
      pushAssistantMessage(buildReply(value));
      setIsTyping(false);
    }, 650);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex items-center gap-3 border border-cyan-300 bg-[#07111f] p-3 text-white shadow-[0_18px_50px_rgba(7,17,31,0.24)] transition hover:bg-[#0b79d0] sm:px-4"
          aria-label="Open chat"
        >
          <span className="grid h-10 w-10 place-items-center bg-cyan-300 text-[#07111f]">
            <MessageCircle className="h-5 w-5" />
          </span>
          <span className="hidden text-left leading-tight sm:block">
            <span className="block text-sm font-bold">Chat with an agent</span>
            <span className="block text-xs text-cyan-100">See a chatbot demo</span>
          </span>
        </button>
      ) : (
        <div className="w-[92vw] max-w-[430px] overflow-hidden border border-slate-200 bg-white shadow-[0_24px_80px_rgba(7,17,31,0.2)]">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-[#07111f] px-4 py-3 text-white">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-10 w-10 place-items-center bg-cyan-300 text-[#07111f]">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="truncate text-sm font-bold">Steinbots Agent</div>
                <div className="truncate text-xs text-cyan-100">Demo chatbot - replies instantly</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={listRef} className="max-h-[60vh] overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div key={message.id} className={message.role === 'user' ? 'mb-3 flex justify-end' : 'mb-3 flex justify-start'}>
                <div
                  className={
                    message.role === 'user'
                      ? 'max-w-[85%] bg-[#0b79d0] px-4 py-3 text-sm leading-6 text-white shadow'
                      : 'max-w-[85%] border border-slate-200 bg-[#f7f9fc] px-4 py-3 text-sm leading-6 text-slate-800'
                  }
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="mb-3 flex justify-start">
                <div className="max-w-[85%] border border-slate-200 bg-[#f7f9fc] px-4 py-3 text-sm text-slate-700">
                  Thinking...
                </div>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => handleSend(suggestion)}
                  className="border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <div className="mt-3 text-xs text-slate-400">
              Tip: ask about leads, bookkeeping, custom workflow automation, or website revamps.
            </div>
          </div>

          <form
            className="border-t border-slate-200 p-3"
            onSubmit={(event) => {
              event.preventDefault();
              handleSend();
            }}
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Steinbots..."
                className="h-11 flex-1 border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#0b79d0] focus:ring-2 focus:ring-cyan-100"
                aria-label="Message"
              />
              <button
                type="submit"
                className="grid h-11 w-11 place-items-center bg-[#07111f] text-white transition hover:bg-[#0b79d0] disabled:opacity-40"
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
