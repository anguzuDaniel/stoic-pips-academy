import Layout from "../app/components/Layout";
import Link from "next/link";

const services = [
  {
    title: "Mentorship Program",
    description: "Step-by-step guidance to take you from beginner to pro trader with price action, supply & demand, and mindset training.",
    link: "/mentorship",
  },
  {
    title: "Trading Signals",
    description: "Get access to high-quality trading signals and market insights delivered directly to your Telegram group.",
    link: "/signals",
  },
  {
    title: "Educational Resources",
    description: "Free guides, articles, and resources to sharpen your trading edge and keep you updated with market trends.",
    link: "/resources",
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="bg-gray-100 py-20">
        {/* Optional subtle pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('/image.png')] bg-cover pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Link key={index} href={service.link}>
                <div className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
