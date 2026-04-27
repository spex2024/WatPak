import Image from "next/image"

function cdnUrl(url: string, transforms: string) {
  return url.replace("/upload/", `/upload/${transforms}/`)
}

const GRID_T = "f_auto,q_auto:good,w_800,c_fill,ar_4:3"
const HERO_T = "f_auto,q_auto:good,w_1920,c_fill"

const SCENES = [
  {
    num: "01",
    text: "Waste starts to pile up.",
    src: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777192153/watpack/scene-1-waste-generated_f7xe4d.png",
    motion: "group-hover:scale-[1.12] group-hover:-translate-y-3",
  },
  {
    num: "02",
    text: "Ama requests a pickup on WatPak.",
    src: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777192234/watpack/scene-2-request-pickup_hqdm3h.png",
    motion: "group-hover:scale-[1.1] group-hover:-translate-x-3 group-hover:-translate-y-2",
  },
  {
    num: "03",
    text: "Kwame accepts the job.",
    src: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777192177/watpack/scene-3-accept-pickup_ydacvg.png",
    motion: "group-hover:scale-[1.09] group-hover:translate-y-2 group-hover:rotate-[0.5deg]",
  },
  {
    num: "04",
    text: "Ama is notified. Help is on the way.",
    src: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777192120/watpack/scene-4-picker-assigned_qwwo9z.png",
    motion: "group-hover:scale-[1.08] group-hover:-translate-y-2 group-hover:rotate-1",
  },
  {
    num: "05",
    text: "Kwame heads to Ama's shop.",
    src: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777192008/watpack/scene-5-enroute-to-pickup_zmecv4.png",
    motion: "group-hover:scale-[1.12] group-hover:translate-x-4",
  },
  {
    num: "06",
    text: "He arrives and begins the pickup.",
    src: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777192078/watpack/scene-6-arrived-weighed_zgra1u.png",
    motion: "group-hover:scale-[1.11] group-hover:-translate-y-2 group-hover:translate-x-2",
  },
  {
    num: "07",
    text: "The pickup is recorded instantly.",
    src: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777192074/watpack/scen-7-waste-picked-up_pynuzb.png",
    motion: "group-hover:scale-[1.08] group-hover:translate-y-1 group-hover:rotate-1",
  },
  {
    num: "08",
    text: "Kwame heads to the aggregator.",
    src: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777192154/watpack/scene-8-enroute_-aggregator_hxzyjp.png",
    motion: "group-hover:scale-[1.12] group-hover:translate-x-5",
  },
  {
    num: "09",
    text: "The waste enters a working system.",
    src: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777192075/watpack/scene-9-arrive-aggregator_ft36r9.png",
    motion: "group-hover:scale-[1.1] group-hover:-translate-y-3 group-hover:translate-x-2",
  },
]

const FINAL_SCENE = {
  num: "10",
  text: { white: "Ama earns.", primary: " Kwame earns." },
  src: "https://res.cloudinary.com/ddwet1dzj/image/upload/v1777192062/watpack/scene-10-earnings_blu4ho.png",
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-white/10 bg-background">

      {/* Header */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="flex flex-col gap-4 py-16 sm:py-20 md:py-24">
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
            The Process
          </p>
          <h2 className="font-heading text-4xl font-black uppercase leading-[0.88] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            How WatPak<br />Works
          </h2>
        </div>
      </div>

      {/* Scene grid — gap-px creates film-border lines between frames */}
      <div className="grid grid-cols-1 gap-px border-y border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {SCENES.map(({ num, text, src, motion }) => (
          <div
            key={num}
            className="group relative w-full overflow-hidden bg-[#0e211c]"
            style={{ paddingTop: "75%" }}
          >
            <Image
              src={cdnUrl(src, GRID_T)}
              alt={text}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${motion}`}
            />

            {/* Cinematic gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(198,156,109,0.22),transparent_58%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <div className="border-l-2 border-primary bg-black/50 px-4 py-3 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-1">
                <span className="mb-1.5 block font-heading text-[9px] font-bold uppercase tracking-[0.3em] text-primary">
                  {num}
                </span>
                <p className="font-heading text-sm font-bold leading-tight text-white sm:text-base">
                  {text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scene 10 — full-bleed payoff */}
      <div className="relative h-[55vh] overflow-hidden sm:h-[65vh] md:h-[75vh]">
        <Image
          src={cdnUrl(FINAL_SCENE.src, HERO_T)}
          alt="Ama earns. Kwame earns."
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 sm:px-10 sm:pb-14 md:px-16 md:pb-18 lg:px-24 lg:pb-20">
          <span className="mb-4 block font-heading text-[9px] font-bold uppercase tracking-[0.35em] text-primary">
            Scene {FINAL_SCENE.num} / The Result
          </span>
          <p className="font-heading text-4xl font-black uppercase leading-[0.85] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="text-white">{FINAL_SCENE.text.white}</span>
            <span className="text-primary">{FINAL_SCENE.text.primary}</span>
          </p>
        </div>
      </div>

    </section>
  )
}
