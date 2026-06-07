import { FadeUpItem, HoverCard, StaggerWrap } from "./motions";

const testimonials = [
  {
    quote:
      "BayAI built our support chatbot in three weeks. It now handles 70% of tickets automatically — our team finally has time to breathe.",
    name: "Sarah Chen",
    role: "Head of Operations, Nexlify",
    initials: "SC",
    color: "bg-violet-500",
  },
  {
    quote:
      "I've worked with a lot of agencies. BayAI is the first that actually understood our business before writing a single line of code.",
    name: "Marcus Webb",
    role: "Founder, Launchpad Studios",
    initials: "MW",
    color: "bg-blue-500",
  },
  {
    quote:
      "The automation workflows they built cut our data entry time by 80%. We didn't know this was even possible until they showed us.",
    name: "Priya Nair",
    role: "CTO, FormFlow",
    initials: "PN",
    color: "bg-emerald-500",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerWrap className="text-center mb-14">
          <FadeUpItem>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Testimonials
            </p>
          </FadeUpItem>
          <FadeUpItem>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              What our clients say
            </h2>
          </FadeUpItem>
        </StaggerWrap>

        <StaggerWrap
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          delay={0.15}
        >
          {testimonials.map((t) => (
            <FadeUpItem key={t.name}>
              <HoverCard className="h-full bg-white rounded-2xl p-7 border border-gray-100 flex flex-col gap-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </HoverCard>
            </FadeUpItem>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
}
