import { FadeUpItem, HoverCard, ScaleItem, StaggerWrap } from "./motions";

const services = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    title: "AI Chatbots",
    desc: "Custom conversational AI that handles support, sales, and onboarding — 24/7 without adding headcount.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "Web Development",
    desc: "Fast, accessible, beautifully designed web apps built with modern stacks that scale with your business.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Automation",
    desc: "Eliminate repetitive tasks with intelligent workflows that connect your tools and keep data in sync.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "AI Consulting",
    desc: "Strategic guidance on adopting AI — from identifying opportunities to building a roadmap your team can execute.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerWrap className="text-center mb-14">
          <FadeUpItem>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
          </FadeUpItem>
          <FadeUpItem>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Everything you need to move fast with AI
            </h2>
          </FadeUpItem>
          <FadeUpItem>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              We cover the full stack — strategy, design, engineering, and
              ongoing support.
            </p>
          </FadeUpItem>
        </StaggerWrap>

        <StaggerWrap
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          delay={0.1}
        >
          {services.map((s) => (
            <ScaleItem key={s.title}>
              <HoverCard className="h-full bg-white rounded-2xl p-6 border border-gray-100 group cursor-default">
                <div className="w-11 h-11 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-base mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
              </HoverCard>
            </ScaleItem>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
}
