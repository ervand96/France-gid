"use client";

import Container from "../Container";

export default function CTASection() {
  return (
    <Container>
      <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-800/20 border border-yellow-600/30 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Готовы открыть Париж вместе с нами?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Забронируйте экскурсию прямо сейчас и получите незабываемые
            впечатления от города влюбленных
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-lg transition-colors">
              Забронировать экскурсию
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-bold rounded-lg transition-colors">
              Связаться с нами
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}
