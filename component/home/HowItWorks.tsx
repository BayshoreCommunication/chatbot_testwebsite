import { FadeUpItem, SlideLeftItem, StaggerWrap, StepBadge } from "./motions";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    desc: "We learn your goals, stack, and pain points. No templates — every engagement starts from your reality.",
  },
  {
    number: "02",
    title: "Design & Build",
    desc: "Our team ships fast, iterates in public, and keeps you in the loop at every milestone.",
  },
  {
    number: "03",
    title: "Launch & Grow",
    desc: "We deploy, monitor, and stay on as your technical partner as your product grows.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerWrap className="text-center mb-14">
          <FadeUpItem>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              How It Works
            </p>
          </FadeUpItem>
          <FadeUpItem>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              From idea to live product — fast
            </h2>
          </FadeUpItem>
        </StaggerWrap>

        <StaggerWrap
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          delay={0.18}
        >
          <div className="hidden md:block absolute top-7 left-1/4 right-1/4 h-px bg-linear-to-r from-blue-200 via-blue-400 to-blue-200" />
          {steps.map((step) => (
            <SlideLeftItem key={step.number}>
              <div className="text-center md:text-left">
                <StepBadge number={step.number} />
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </SlideLeftItem>
          ))}
        </StaggerWrap>
      </div>
    </section>
  );
}
