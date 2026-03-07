import { Link } from "wouter";

export default function HomeSections() {
  return (
    <>
      {/* CORE PROTECTION SYSTEMS */}
      <section className="py-32 bg-brandGrey relative overflow-hidden cv-auto" id="services">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#134064 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-2xl relative z-10 text-center">
          <div className="mb-24">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase tracking-[0.2em] mb-4">Integrated Defense Architecture</span>
   <h2 className="text-5xl md:text-7xl font-black text-brandNavy mb-8">Total Protection <span className="text-brandOrange">Systems</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs max-w-2xl mx-auto">Engineering Beyond the Shingle: A scientifically matched system of components designed to seal, defend, and breathe.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* System 1: Weather-Stopper (Residential) */}
            <div className="feature-card group bg-white rounded-[2rem] shadow-xl border border-white/50 relative overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="h-52 overflow-hidden relative">
                <img src="/images/asphalt-shingle-roof.webp" alt="Asphalt shingle roof system" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width={640} height={428} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-brandOrange text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest">Residential</div>
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-xl font-black text-white uppercase italic drop-shadow-lg">Weather-Stopper™ System</h3>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-7">
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-5 flex-1">
                  A cohesive thermal and moisture barrier integrating <strong>Leak Barrier</strong> membranes, <strong>Deck Protection</strong> underlayment, and <strong>Ridge Cap</strong> ventilation for a 50-year defense.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2.5 bg-brandGrey rounded-lg border border-slate-100">
                    <i aria-hidden="true" className="fas fa-layer-group text-brandOrange text-sm"></i>
                    <span className="text-[10px] font-black text-brandNavy uppercase tracking-wide">6-Layer Construction</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1.5 bg-brandGrey px-2.5 py-1.5 rounded-lg"><i aria-hidden="true" className="fas fa-check-circle text-brandOrange text-[8px]"></i> Ice & Water Shield</span>
                    <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1.5 bg-brandGrey px-2.5 py-1.5 rounded-lg"><i aria-hidden="true" className="fas fa-check-circle text-brandOrange text-[8px]"></i> Cobra® Ventilation</span>
                  </div>
                  <Link href="/residential" className="block w-full text-center bg-brandNavy text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brandOrange transition mt-2" data-testid="link-residential">Explore The System</Link>
                </div>
              </div>
            </div>

            {/* System 2: Torch Down Defense (Flat) */}
            <div className="feature-card group bg-white rounded-[2rem] shadow-xl border border-white/50 relative overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="h-52 overflow-hidden relative">
                <img src="/images/commercial-roof-finish.webp" alt="Torch down flat roof system" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width={640} height={430} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-brandBlue text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest">Low-Slope</div>
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-xl font-black text-white uppercase italic drop-shadow-lg">Torch Down Defense</h3>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-7">
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-5 flex-1">
                  Engineered for San Francisco's fog belt using <strong>APP Modified Bitumen</strong> technology to create a multi-ply, rubberized asphalt seal that flexes with daily thermal cycles.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2.5 bg-brandGrey rounded-lg border border-slate-100">
                    <i aria-hidden="true" className="fas fa-layer-group text-brandBlue text-sm"></i>
                    <span className="text-[10px] font-black text-brandNavy uppercase tracking-wide">Multi-Ply Protection</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1.5 bg-brandGrey px-2.5 py-1.5 rounded-lg"><i aria-hidden="true" className="fas fa-check-circle text-brandBlue text-[8px]"></i> UV Cap Sheet</span>
                    <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1.5 bg-brandGrey px-2.5 py-1.5 rounded-lg"><i aria-hidden="true" className="fas fa-check-circle text-brandBlue text-[8px]"></i> 25-Year Warranty</span>
                  </div>
                  <Link href="/flat" className="block w-full text-center bg-brandNavy text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brandBlue transition mt-2" data-testid="link-flat">View Torch Specs</Link>
                </div>
              </div>
            </div>

            {/* System 3: Asset Shield (Commercial) */}
            <div className="feature-card group bg-white rounded-[2rem] shadow-xl border border-white/50 relative overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="h-52 overflow-hidden relative">
                <img src="/images/commercial-roofs-aerial.webp" alt="Commercial roofing system" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width={640} height={427} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-brandNavy text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-full tracking-widest">Commercial</div>
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-xl font-black text-white uppercase italic drop-shadow-lg">Asset Shielding</h3>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-7">
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-5 flex-1">
                  Scalable protection for high-value assets with <strong>Title 24 Energy Caps</strong> and <strong>Vibration-Dampening Insulation</strong> to protect both structure and business operations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2.5 bg-brandGrey rounded-lg border border-slate-100">
                    <i aria-hidden="true" className="fas fa-hard-hat text-brandNavy text-sm"></i>
                    <span className="text-[10px] font-black text-brandNavy uppercase tracking-wide">OSHA & Title 24 Compliant</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1.5 bg-brandGrey px-2.5 py-1.5 rounded-lg"><i aria-hidden="true" className="fas fa-check-circle text-brandNavy text-[8px]"></i> Non-Disruptive</span>
                    <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1.5 bg-brandGrey px-2.5 py-1.5 rounded-lg"><i aria-hidden="true" className="fas fa-check-circle text-brandNavy text-[8px]"></i> NDL Warranty</span>
                  </div>
                  <Link href="/commercial" className="block w-full text-center bg-brandNavy text-white py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brandOrange transition mt-2" data-testid="link-commercial">Corporate Solutions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPRESS METHODOLOGY */}
      <section className="py-32 bg-white cv-auto" id="process">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 text-left">
              <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-8 inline-block tracking-[0.2em]">The Express Standard</span>
    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-tight text-brandNavy">2-3 Day <span className="text-brandOrange ">Completion</span> <br />Methodology</h2>
              <p className="text-slate-500 text-lg mb-12 font-medium leading-loose">
                We redefined the roofing timeline without compromising a single shingle. From <strong>same-day inspections</strong> to our accelerated permitting team, we deliver a full system replacement in just 2-3 days with three mandatory checkpoints.
              </p>
              <div className="space-y-10">
                <div className="flex gap-8 group">
                  <div className="text-5xl font-black text-slate-500 group-hover:text-brandOrange transition duration-500" aria-hidden="true">01</div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase text-brandNavy">Rapid Permit & Tear-Off</h3>
                    <p className="text-sm text-slate-500">Permits pulled within 24 hours. We perform a complete tear-off followed by a mandatory <strong>Deck Inspection</strong> to verify structural integrity before a single nail is driven.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="text-5xl font-black text-slate-500 group-hover:text-brandOrange transition duration-500" aria-hidden="true">02</div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase text-brandNavy">Mid-Point Inspection</h3>
                    <p className="text-sm text-slate-500">Our Project Manager verifies underlayment, ice shields, and starter strips during the "Middle Work" phase to guarantee a watertight foundation.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="text-5xl font-black text-slate-500 group-hover:text-brandOrange transition duration-500" aria-hidden="true">03</div>
                  <div>
                    <h3 className="font-black text-xl mb-2 uppercase text-brandNavy">Final Express Audit</h3>
                    <p className="text-sm text-slate-500">A rigorous final inspection by us, ensuring every flashing is sealed and the site is magnetic-swept clean. Your 50-Year Warranty starts the moment we leave.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-transparent p-0 rounded-[3rem] shadow-none overflow-hidden group">
                <img alt="ROOF EXPRESS Crew on Site" className="rounded-[3rem] w-full transform group-hover:scale-105 transition duration-1000 object-cover shadow-none drop-shadow-none" src="/images/crew-sf-skyline.webp" width={568} height={568} loading="lazy" />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-brandOrange text-white p-3 md:p-6 rounded-xl md:rounded-[2rem] shadow-2xl text-center">
                <p className="text-lg md:text-3xl font-black mb-0">2-3</p>
                <p className="text-[7px] md:text-[9px] font-bold uppercase tracking-widest">Day Turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ROOF EXPRESS */}
      <section className="py-24 bg-brandGrey border-t border-b border-gray-200 cv-auto">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
            <div className="lg:w-1/3 flex justify-center">
              <img src="/images/roof-express-van.webp" alt="ROOF EXPRESS branded service van" className="w-64 h-64 object-cover rounded-[2rem] shadow-2xl border-4 border-white" width={500} height={500} loading="lazy" />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <span className="bg-brandNavy text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">The New Standard</span>
    <h2 className="text-3xl md:text-5xl font-black text-brandNavy mb-4">The Bay Area's Authority on <span className="text-brandOrange">Roofing Excellence</span></h2>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">Engineered for 2026 Standards & Local Microclimates</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6 max-w-screen-xl mx-auto mb-20">
            {/* Box 1: Triple-Platinum (Large Feature) */}
            <div className="md:col-span-4 bg-brandNavy text-white p-10 rounded-[2.5rem] relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl text-white group-hover:scale-110 transition-transform duration-700">
                <i aria-hidden="true" className="fas fa-gem"></i>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brandOrange rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                    <i aria-hidden="true" className="fas fa-certificate"></i>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">Top 1% Contractor</span>
                </div>
                <h3 className="text-3xl font-black uppercase italic mb-4 text-white">Fully Certified Contractor</h3>
                <p className="text-slate-300 font-medium leading-relaxed max-w-lg">
                  We hold the highest credentials in the industry: <strong>GAF Master Elite®</strong>, <strong>Owens Corning Platinum</strong>, <strong>CertainTeed Select ShingleMaster</strong>, and <strong>Diamond Certified®</strong>. This ensures your warranty is backed by the largest manufacturers in the world.
                </p>
              </div>
            </div>

            {/* Box 2: Emergency (Tall) */}
            <div className="md:col-span-2 bg-white p-8 rounded-[2.5rem] flex flex-col justify-center border border-slate-100 group hover:border-red-500 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  <i aria-hidden="true" className="fas fa-ambulance"></i>
                </div>
                <h3 className="text-4xl font-black text-brandNavy mb-1">24/7</h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Rapid Response</p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Emergency dispatch for storm damage and leaks across the entire Bay Area.
                </p>
              </div>
            </div>

            {/* Box 3: Financing (Medium) */}
            <div className="md:col-span-3 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col h-full justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                    <i aria-hidden="true" className="fas fa-money-check-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-brandNavy text-xl mb-2">Flexible Financing</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      <strong>$0 Down</strong> options available. We accept payment only after the city inspection is passed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 4: Digital Estimates (Medium) */}
            <div className="md:col-span-3 bg-brandOrange p-8 rounded-[2.5rem] text-white group">
              <h3 className="font-black text-2xl mb-2">24-Hour Digital Quotes</h3>
              <p className="text-sm text-white font-medium leading-relaxed max-w-xs">
                Accurate, transparent, and delivered to your inbox within one day. No waiting, no pressure.
              </p>
            </div>

            {/* Box 5: Warranties (Wide) */}
            <div className="md:col-span-6 bg-white p-10 rounded-[2.5rem] border-2 border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-brandNavy transition-colors duration-300">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center text-4xl shrink-0 group-hover:rotate-12 transition-transform duration-300">
                  <i aria-hidden="true" className="fas fa-shield-alt"></i>
                </div>
                <div>
                  <h3 className="font-black text-brandNavy text-2xl mb-2">Ironclad Warranties</h3>
                  <p className="text-base text-slate-500 font-medium leading-relaxed max-w-xl">
                    We protect your investment with a <strong>Lifetime Material Warranty</strong> and a verified <strong>25-Year Workmanship Guarantee</strong>.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-center px-6 py-3 bg-brandGrey rounded-xl border border-slate-200">
                  <span className="block text-2xl font-black text-brandNavy">50</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Year Material</span>
                </div>
                <div className="text-center px-6 py-3 bg-brandGrey rounded-xl border border-slate-200">
                  <span className="block text-2xl font-black text-brandNavy">25</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Year Labor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSUMER PROTECTION */}
      <section className="py-24 bg-brandNavy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brandOrange/20 text-brandOrangeLight text-[10px] font-black uppercase tracking-[0.2em] mb-6">Verified Protection</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Your <span className="text-brandOrangeLight">Safety Net</span></h2>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs max-w-2xl mx-auto">We carry comprehensive coverage so you never have to worry about liability. Verify our credentials instantly.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* License Badge */}
            <div className="bg-white/10 backdrop-blur p-10 rounded-[2rem] border border-white/10 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brandOrange rounded-2xl flex items-center justify-center text-2xl text-white">
                  <i aria-hidden="true" className="fas fa-id-card"></i>
                </div>
                <div>
                  <h3 className="font-black text-white text-xl uppercase">State Licensed</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">California CSLB</p>
                </div>
              </div>
              <p className="text-3xl font-black text-brandOrangeLight mb-4 tracking-tight" data-testid="text-license-number">#1072766</p>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Active Class C-39 Roofing Contractor License. Verified good standing with the State of California.
              </p>
            </div>

            {/* Insured Badge */}
            <div className="bg-white/10 backdrop-blur p-10 rounded-[2rem] border border-white/10 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brandOrange rounded-2xl flex items-center justify-center text-2xl text-white">
                  <i aria-hidden="true" className="fas fa-shield-alt"></i>
                </div>
                <div>
                  <h3 className="font-black text-white text-xl uppercase">Fully Insured</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Liability & Work Comp</p>
                </div>
              </div>
              <p className="text-xl font-black text-white mb-4 uppercase italic">Multi-Million Coverage</p>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                We carry comprehensive General Liability ($2M+) and Workers' Compensation to protect your property from all risks.
              </p>
            </div>

            {/* Bonded Badge */}
            <div className="bg-white/10 backdrop-blur p-10 rounded-[2rem] border border-white/10 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brandOrange rounded-2xl flex items-center justify-center text-2xl text-white">
                  <i aria-hidden="true" className="fas fa-lock"></i>
                </div>
                <div>
                  <h3 className="font-black text-white text-xl uppercase">Surety Bonded</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Financial Security</p>
                </div>
              </div>
              <p className="text-xl font-black text-white mb-4 uppercase italic">Project Guarantee</p>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Fully bonded ($25k) to ensure your project is completed according to contract terms and state regulations.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10 max-w-lg mx-auto">
            <img src="/images/licensed-insured-bonded.webp" alt="Licensed, Insured & Bonded" className="h-14 w-auto mix-blend-screen" width={112} height={56} loading="lazy" />
            <div>
              <p className="text-sm font-black text-white uppercase tracking-wide">Licensed, Insured & Bonded</p>
              <p className="text-xs text-slate-400 font-medium mt-1">CSLB #1072766 · $2M+ Liability · $25K Surety Bond</p>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT PROJECT SHOWCASE */}
      <section className="py-24 bg-white border-b border-gray-100 cv-auto">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Visual Side */}
            <div className="lg:w-1/2 relative w-full">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <div className="aspect-video bg-slate-900 relative">
                  <video
                    src="/videos/roof-express-intro.mp4"
                    poster="/videos/roof-express-intro-thumb.webp"
                    controls
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover"
                    data-testid="video-visual-proof"
                  >
                    <track kind="captions" src="/videos/captions-intro.vtt" label="English" default />
                  </video>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brandNavy text-white px-8 py-4 rounded-2xl shadow-xl hidden md:block">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/80 mb-1">Welcome Video</p>
                <p className="text-xl font-bold">ROOF EXPRESS</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 text-left">
              <span className="bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Full Transparency</span>
    <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6">Visual <span className="text-brandOrange">Proof</span></h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">
                We believe in total visibility. We don't rely on distant drone footage; our project managers use advanced field software to capture high-resolution photos of every detail, from tear-off to the final shingle.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brandGrey rounded-full flex items-center justify-center text-brandOrange shrink-0">
                    <i aria-hidden="true" className="fas fa-images"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-brandNavy text-lg">Before & After Gallery</h3>
                    <p className="text-sm text-slate-500">Every client receives a comprehensive digital link showing the complete transformation of their roof.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brandGrey rounded-full flex items-center justify-center text-brandOrange shrink-0">
                    <i aria-hidden="true" className="fas fa-database"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-brandNavy text-lg">Digital Project Archive</h3>
                    <p className="text-sm text-slate-500">Our software securely stores your project's history, ensuring warranty claims are backed by visual evidence.</p>
                  </div>
                </div>
              </div>
              <Link href="/gallery" className="inline-flex items-center bg-brandNavy text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-brandOrange transition shadow-lg group" data-testid="link-gallery">
                  View Recent Projects <i aria-hidden="true" className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition"></i>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className="py-24 bg-brandGrey border-b border-gray-100 cv-auto" data-testid="section-testimonials">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Real Reviews</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-4">What Bay Area Homeowners <span className="text-brandOrange">Say</span></h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">Verified Feedback From Our Clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "ROOF EXPRESS replaced our entire roof in just 2 days. The crew was professional, clean, and the quality is outstanding.", name: "Maria S.", city: "San Francisco", id: "maria" },
              { quote: "After getting three quotes, ROOF EXPRESS was the most transparent. Their line-item estimate showed exactly what we were paying for.", name: "James T.", city: "Palo Alto", id: "james" },
              { quote: "They fixed a 3-year-old leak that two other companies couldn't solve. Found it in 20 minutes.", name: "David L.", city: "Oakland", id: "david" },
              { quote: "Diamond Certified for a reason. The attention to detail on our flat roof was impressive.", name: "Sarah W.", city: "San Jose", id: "sarah" },
              { quote: "They handled all the permits and city inspections for us. Made the whole process completely stress-free.", name: "Michael P.", city: "Daly City", id: "michael" },
              { quote: "Best warranty coverage I've seen. 50-year manufacturer warranty plus their own workmanship guarantee.", name: "Thomas R.", city: "Burlingame", id: "thomas" },
            ].map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:-translate-y-2 transition-transform duration-300 relative" data-testid={`card-testimonial-${testimonial.id}`}>
                <div className="absolute top-6 right-6 text-brandOrange/15 text-5xl">
                  <i aria-hidden="true" className="fas fa-quote-right"></i>
                </div>
                <div className="flex text-brandOrange text-sm gap-1 mb-4" data-testid={`stars-testimonial-${testimonial.id}`}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6 relative z-10">"{testimonial.quote}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-sm font-black text-brandNavy">{testimonial.name}</p>
                  <p className="text-xs font-bold text-slate-500">{testimonial.city}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/reviews" className="inline-flex items-center bg-brandNavy text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-brandOrange transition shadow-lg group" data-testid="link-read-all-reviews">
              Read All Reviews <i aria-hidden="true" className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* VERIFIED AUTHORITY */}
      <section className="py-28 bg-gradient-to-b from-[#0a2540] via-brandNavy to-[#0a2540] text-white relative overflow-hidden cv-auto" id="verified">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="bg-white/10 backdrop-blur-sm text-brandOrangeLight text-[10px] font-black uppercase px-5 py-2 rounded-full mb-6 inline-block tracking-[0.2em] border border-white/10">
              <i aria-hidden="true" className="fas fa-shield-alt mr-2 text-[9px]"></i>Independently Verified
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Verified <span className="text-brandOrangeLight">Authority</span></h2>
            <p className="text-slate-300 text-sm font-medium max-w-xl mx-auto leading-relaxed">We don't ask you to take our word for it. Every claim is backed by third-party verification you can check yourself.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Diamond Certified */}
            <a href="https://www.diamondcertified.org/report/roof-express/" target="_blank" rel="noreferrer noopener" className="group block" data-testid="link-diamond-certified">
              <div className="bg-white/[0.06] backdrop-blur-sm rounded-[2rem] border border-white/10 p-8 h-full hover:bg-white/[0.1] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4a843] to-transparent"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#d4a843]/20 rounded-2xl flex items-center justify-center shrink-0">
                    <i aria-hidden="true" className="fas fa-gem text-[#d4a843] text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">Diamond Certified</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#d4a843]">Highest Rating in CA</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">Independently audited by American Ratings Corporation. Only companies passing rigorous customer satisfaction surveys earn this credential.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/5 text-[10px] font-bold text-white/80 px-3 py-1.5 rounded-full border border-white/5">Independent Audit</span>
                  <span className="bg-white/5 text-[10px] font-bold text-white/80 px-3 py-1.5 rounded-full border border-white/5">Customer Surveys</span>
                  <span className="bg-white/5 text-[10px] font-bold text-white/80 px-3 py-1.5 rounded-full border border-white/5">Dispute Resolution</span>
                </div>
                <div className="flex items-center gap-2 text-brandOrangeLight text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                  View Official Report <i aria-hidden="true" className="fas fa-arrow-right text-[10px]"></i>
                </div>
              </div>
            </a>

            {/* Google Reviews */}
            <a href="https://www.google.com/maps?cid=13257844389379386946" target="_blank" rel="noreferrer noopener" className="group block" data-testid="link-google-maps">
              <div className="bg-white/[0.06] backdrop-blur-sm rounded-[2rem] border border-white/10 p-8 h-full hover:bg-white/[0.1] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4285F4] to-transparent"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#4285F4]/20 rounded-2xl flex items-center justify-center shrink-0">
                    <i aria-hidden="true" className="fab fa-google text-[#4285F4] text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">Google Reviews</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-black text-white">5.0</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 text-brandOrangeLight fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">Hundreds of verified project photos and reviews across San Francisco, San Jose, and the Peninsula. Real customers, real results.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/5 text-[10px] font-bold text-white/80 px-3 py-1.5 rounded-full border border-white/5">Verified Reviews</span>
                  <span className="bg-white/5 text-[10px] font-bold text-white/80 px-3 py-1.5 rounded-full border border-white/5">Project Photos</span>
                  <span className="bg-white/5 text-[10px] font-bold text-white/80 px-3 py-1.5 rounded-full border border-white/5">5.0 Star Average</span>
                </div>
                <div className="flex items-center gap-2 text-brandOrangeLight text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                  Open Google Profile <i aria-hidden="true" className="fas fa-arrow-right text-[10px]"></i>
                </div>
              </div>
            </a>

            {/* Yelp Reviews */}
            <a href="https://www.yelp.com/biz/roof-express-san-francisco" target="_blank" rel="noreferrer noopener" className="group block" data-testid="link-yelp">
              <div className="bg-white/[0.06] backdrop-blur-sm rounded-[2rem] border border-white/10 p-8 h-full hover:bg-white/[0.1] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF1A1A] to-transparent"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#FF1A1A]/20 rounded-2xl flex items-center justify-center shrink-0">
                    <i aria-hidden="true" className="fab fa-yelp text-[#FF1A1A] text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">Yelp Reviews</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-black text-white">5.0</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 text-brandOrangeLight fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">Unfiltered experiences from your actual neighbors. Top-rated for communication, quality workmanship, and fair Bay Area pricing.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/5 text-[10px] font-bold text-white/80 px-3 py-1.5 rounded-full border border-white/5">Community Choice</span>
                  <span className="bg-white/5 text-[10px] font-bold text-white/80 px-3 py-1.5 rounded-full border border-white/5">Unfiltered Reviews</span>
                  <span className="bg-white/5 text-[10px] font-bold text-white/80 px-3 py-1.5 rounded-full border border-white/5">5.0 Star Average</span>
                </div>
                <div className="flex items-center gap-2 text-brandOrangeLight text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                  Read Yelp Reviews <i aria-hidden="true" className="fas fa-arrow-right text-[10px]"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* WHY YOUR ROOF MATTERS */}
      <section className="py-28 bg-gradient-to-b from-white via-slate-50/50 to-white cv-auto" id="why-roof-matters" data-testid="section-why-roof-matters">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-20">
            <span className="bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase px-5 py-2 rounded-full mb-6 inline-block tracking-[0.2em]">Protect Your Investment</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-6">Why Your Roof <span className="text-brandOrange">Matters</span></h2>
            <p className="text-slate-500 text-sm font-medium max-w-xl mx-auto leading-relaxed">A failing roof doesn't just leak — it destroys insulation, breeds mold, rots framing, and tanks your property value.</p>
          </div>

          {/* Top Feature — Full Width */}
          <div className="relative rounded-[2.5rem] overflow-hidden mb-8 group" data-testid="card-storm-protection">
            <div className="absolute inset-0 bg-brandNavy"></div>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/images/asphalt-shingle-closeup.webp')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-2/3">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-brandOrange rounded-xl flex items-center justify-center">
                    <i aria-hidden="true" className="fas fa-shield-alt text-white text-lg"></i>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brandOrange">Layer 1</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Storm & Wind Protection</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">Bay Area storms deliver 20-25 inches of rain annually, often in heavy bursts. Our CertainTeed Integrity system uses 6 integrated layers — WinterGuard ice shield, DiamondDeck underlayment, SwiftStart starters, Landmark shingles, ridge vents, and sealed flashing — creating a watertight barrier rated for 110 MPH wind uplift.</p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/10 backdrop-blur-sm text-white text-[11px] font-bold px-4 py-2 rounded-full border border-white/10">110 MPH Wind Rated</span>
                  <span className="bg-white/10 backdrop-blur-sm text-white text-[11px] font-bold px-4 py-2 rounded-full border border-white/10">Ice & Water Shield</span>
                  <span className="bg-white/10 backdrop-blur-sm text-white text-[11px] font-bold px-4 py-2 rounded-full border border-white/10">Hand-Nailed Flashing</span>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 md:w-48 md:h-48 bg-brandOrange/20 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 md:w-36 md:h-36 bg-brandOrange/30 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-4xl md:text-5xl font-black text-white">6</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-brandOrange">Layers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Column Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" data-testid="card-energy-efficiency">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-brandOrange to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-brandOrange/20">
                  <i aria-hidden="true" className="fas fa-temperature-high text-white text-xl"></i>
                </div>
                <span className="text-3xl font-black text-brandNavy/10 group-hover:text-brandOrange/20 transition" aria-hidden="true">01</span>
              </div>
              <h3 className="text-lg font-black text-brandNavy mb-3">Energy Efficiency & Cool Roofs</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">California Title 24 requires cool roof compliance. Proper ventilation with reflective materials cuts attic temps by 30°F and reduces cooling costs up to 15%.</p>
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-brandNavy"><i aria-hidden="true" className="fas fa-check text-brandOrange text-[10px]"></i> Title 24 compliant materials</div>
                <div className="flex items-center gap-2 text-xs font-bold text-brandNavy"><i aria-hidden="true" className="fas fa-check text-brandOrange text-[10px]"></i> Ridge + soffit balanced ventilation</div>
                <div className="flex items-center gap-2 text-xs font-bold text-brandNavy"><i aria-hidden="true" className="fas fa-check text-brandOrange text-[10px]"></i> 15% cooling cost reduction</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" data-testid="card-property-value">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-brandNavy to-blue-900 rounded-2xl flex items-center justify-center shadow-lg shadow-brandNavy/20">
                  <i aria-hidden="true" className="fas fa-home text-white text-xl"></i>
                </div>
                <span className="text-3xl font-black text-brandNavy/10 group-hover:text-brandOrange/20 transition" aria-hidden="true">02</span>
              </div>
              <h3 className="text-lg font-black text-brandNavy mb-3">Property Value & Curb Appeal</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">A new roof recovers 60-70% of costs at resale — often more in Bay Area markets. Buyers pay premiums because it eliminates a major unknown expense.</p>
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-brandNavy"><i aria-hidden="true" className="fas fa-check text-brandOrange text-[10px]"></i> 60-70% cost recovery at resale</div>
                <div className="flex items-center gap-2 text-xs font-bold text-brandNavy"><i aria-hidden="true" className="fas fa-check text-brandOrange text-[10px]"></i> Eliminates #1 inspection concern</div>
                <div className="flex items-center gap-2 text-xs font-bold text-brandNavy"><i aria-hidden="true" className="fas fa-check text-brandOrange text-[10px]"></i> Premium shingle aesthetics</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" data-testid="card-warranty">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <i aria-hidden="true" className="fas fa-certificate text-white text-xl"></i>
                </div>
                <span className="text-3xl font-black text-brandNavy/10 group-hover:text-brandOrange/20 transition" aria-hidden="true">03</span>
              </div>
              <h3 className="text-lg font-black text-brandNavy mb-3">50-Year Warranty Systems</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">Only 2% of roofers qualify for GAF Master Elite. We offer the Golden Pledge Warranty — materials and labor for up to 50 years. If anything fails, GAF pays.</p>
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-brandNavy"><i aria-hidden="true" className="fas fa-check text-brandOrange text-[10px]"></i> GAF Golden Pledge — 50 years</div>
                <div className="flex items-center gap-2 text-xs font-bold text-brandNavy"><i aria-hidden="true" className="fas fa-check text-brandOrange text-[10px]"></i> Top 2% of roofers nationwide</div>
                <div className="flex items-center gap-2 text-xs font-bold text-brandNavy"><i aria-hidden="true" className="fas fa-check text-brandOrange text-[10px]"></i> Transferable to new homeowner</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href="https://clienthub.getjobber.com/hubs/fadfd1d3-6aef-4c07-a4c9-58294a0539f2/public/requests/447045/new?source=social_media"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center bg-brandOrange text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-brandNavy transition shadow-lg shadow-brandOrange/20 group"
              data-testid="link-get-free-inspection"
            >
              Get Your Free Roof Inspection <i aria-hidden="true" className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition"></i>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS PREVIEW */}
      <section className="relative py-24 border-t border-gray-100 cv-auto overflow-hidden" data-testid="section-service-areas-preview">
        <div className="absolute inset-0">
          <img src="/images/sf-aerial-ocean.webp" alt="San Francisco Bay Area aerial view" className="w-full h-full object-cover" width={1200} height={800} loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brandNavy/80 via-brandNavy/70 to-brandNavy/85"></div>
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
          <div className="text-center mb-16">
            <span className="bg-brandOrange text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Coverage Map</span>
   <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Serving the Entire <span className="text-brandOrange">Bay Area</span></h2>
            <p className="text-xs font-bold text-white/80 uppercase tracking-[0.3em]">Expert Roofing in Every Neighborhood</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: "San Francisco", slug: "san-francisco" },
              { name: "San Jose", slug: "san-jose" },
              { name: "Oakland", slug: "oakland" },
              { name: "Palo Alto", slug: "palo-alto" },
              { name: "Daly City", slug: "daly-city" },
              { name: "Mountain View", slug: "mountain-view" },
              { name: "Redwood City", slug: "redwood-city" },
              { name: "Fremont", slug: "fremont" },
              { name: "San Rafael", slug: "san-rafael" },
              { name: "Walnut Creek", slug: "walnut-creek" },
            ].map((city) => (
              <Link key={city.slug} href={`/${city.slug}`} className="bg-white/10 backdrop-blur border border-white/20 p-5 rounded-2xl shadow-md hover:bg-white/20 hover:border-brandOrange/50 hover:-translate-y-1 transition-all duration-300 text-center group" data-testid={`link-preview-city-${city.slug}`}>
                <i aria-hidden="true" className="fas fa-map-marker-alt text-brandOrange mb-2 group-hover:scale-110 transition-transform"></i>
                <p className="text-sm font-black text-white uppercase tracking-wide group-hover:text-brandOrange transition">{city.name}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/service-areas" className="inline-flex items-center bg-brandOrange text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-brandNavy transition shadow-lg group" data-testid="link-view-all-cities">
              View All 63 Cities <i aria-hidden="true" className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW SECTION */}
      <section className="py-24 bg-white border-t border-gray-100 cv-auto" data-testid="section-blog-preview">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <span className="bg-brandNavy text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-6 inline-block tracking-[0.2em]">Expert Insights</span>
   <h2 className="text-4xl md:text-5xl font-black text-brandNavy mb-4">From Our Roofing <span className="text-brandOrange">Blog</span></h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">Tips, Guides & Industry Knowledge</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Bay Area Roofing Cost Factors", description: "A comprehensive breakdown of what drives roofing costs in the San Francisco Bay Area, from materials to labor and permits.", slug: "bay-area-roofing-cost-factors", category: "Cost Guide", id: "cost" },
              { title: "Roof Repair vs Replacement", description: "When does a simple patch become a full replacement? Learn the key indicators that help you make the right decision.", slug: "roof-repair-vs-replacement", category: "Homeowner Tips", id: "repair" },
              { title: "Best Roofing Materials for Coastal Cities", description: "Comparing options for fog-belt and coastal homes, including durability, aesthetics, and long-term value.", slug: "best-roofing-materials-coastal-cities", category: "Materials", id: "materials" },
            ].map((article) => (
              <div key={article.id} className="bg-brandGrey p-8 rounded-3xl border border-slate-100 shadow-lg hover:-translate-y-2 transition-transform duration-300 group flex flex-col" data-testid={`card-blog-${article.id}`}>
                <span className="inline-block self-start bg-brandOrange/5 text-brandOrange text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest mb-4" data-testid={`badge-blog-${article.id}`}>{article.category}</span>
                <h3 className="text-xl font-black text-brandNavy mb-3 uppercase group-hover:text-brandOrange transition">{article.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6 flex-grow">{article.description}</p>
                <Link href={`/blog/${article.slug}`} className="inline-flex items-center text-sm font-black text-brandOrange uppercase tracking-widest hover:text-brandNavy transition group/link" data-testid={`link-blog-${article.id}`}>
                  Read Article <i aria-hidden="true" className="fas fa-arrow-right ml-2 group-hover/link:translate-x-1 transition"></i>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center bg-brandNavy text-white px-10 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-brandOrange transition shadow-lg group" data-testid="link-view-all-articles">
              View All Articles <i aria-hidden="true" className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
