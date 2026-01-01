export default function Services() {
  const services = [
    {
      id: "01",
      title: "Web design & development",
      desc: "Responsive design · High‑performing websites · Custom builds",
    },
    {
      id: "02",
      title: "UI/UX design",
      desc: "User‑centric approach · Seamless navigation · Intuitive interfaces",
    },
    {
      id: "03",
      title: "Branding & identity",
      desc: "Memorable visuals · Consistent brand voice · Strategic identity",
    },
   
   
  ];

  return (
    <section className="h-full mb-10 w-full text-white flex items-end justify-center">
      <div className="w-full max-w-6xl px-6">
        {services.map((item, index) => (
          <div
            key={item.id}
            className="group flex items-center justify-between py-8 border-b border-white/10 transition-all duration-300 hover:bg-white/5"
          >
            {/* Left */}
            <div className="flex items-center gap-6">
              <span className="text-red-600 text-sm">[{item.id}]</span>
              <h3 className="text-xl md:text-2xl font-medium text-white/90 group-hover:text-white transition">
                {item.title}
              </h3>
            </div>

            {/* Right */}
            <p className="hidden md:block text-sm text-white/40 max-w-md text-right group-hover:text-white/70 transition">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
