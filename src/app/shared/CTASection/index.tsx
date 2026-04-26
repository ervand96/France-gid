"use client";

import Container from "../Container";

export default function CTASection() {
  return (
    <Container>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-3xl p-12 text-center shadow-lg">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Готовы открыть Париж вместе со мной?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Забронируйте экскурсию прямо сейчас и получите незабываемые
            впечатления от города влюбленных
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-lg transition-colors shadow-md">
              Забронировать экскурсию
            </button>
            <button className="px-8 py-4 bg-white border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-bold rounded-lg transition-colors">
              Связаться со мной
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}
