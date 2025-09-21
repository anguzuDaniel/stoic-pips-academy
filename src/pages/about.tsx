import Layout from "../app/components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About Stoic Pips Academy</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At <span className="font-semibold">Stoic Pips Academy</span>, we believe
            trading is not just about charts — it’s about discipline, mindset, and strategy.  
            Our mission is to help traders move from beginners to consistently profitable
            by mastering price action, supply & demand, and risk management.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Founded by <span className="font-semibold">Daniel Anguzu</span>, a trader with years 
            of experience in synthetic indices and forex markets, Stoic Pips Academy 
            has helped many traders learn the principles of patience, precision, and 
            profitability.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you’re starting your trading journey or preparing for funded account 
            challenges, we provide structured mentorship and guidance every step of the way.
          </p>
        </div>
      </section>
    </Layout>
  );
}
