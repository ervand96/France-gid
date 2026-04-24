"use client"

import { Home, MapPin, Compass, ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NotFound() {

    const t = useTranslations("NotFound")

    return (
        <div className="size-full relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
            <div className="relative size-full flex items-center justify-center px-6">
                <div className="max-w-2xl w-full text-center">
                    <div className="mb-8">
                        <h1 className="text-[12rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-white to-red-600 drop-shadow-lg">
                            404
                        </h1>
                    </div>

                    <div className="flex justify-center gap-2 mb-8">
                        <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
                        <div className="w-16 h-1 bg-white border border-gray-300 rounded-full"></div>
                        <div className="w-16 h-1 bg-red-600 rounded-full"></div>
                    </div>

                    <h2 className="text-4xl mb-4 text-gray-800">{t("LostInFrance")}</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-md mx-auto">
                        {t("ThisPage")}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center mb-12">
                        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg">
                            <Home className="w-5 h-5" />
                            {t("ReturnHome")}
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-50 transition-colors shadow-lg border border-blue-200">
                            <MapPin className="w-5 h-5" />
                            {t("ExploreDirections")}
                        </button>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Compass className="w-5 h-5 text-blue-600" />
                            <h3 className="text-xl text-gray-800">{t("PopularDestinations")}</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { name: "Paris", icon: "🗼" },
                                { name: "Nice", icon: "🏖️" },
                                { name: "Lyon", icon: "🍷" },
                                { name: "Marseille", icon: "⛵" },
                            ].map((destination) => (
                                <button
                                    key={destination.name}
                                    className="p-4 rounded-xl hover:bg-blue-50 transition-colors border border-gray-200 hover:border-blue-300 group"
                                >
                                    <div className="text-3xl mb-2">{destination.icon}</div>
                                    <div className="text-sm text-gray-700 group-hover:text-blue-600">
                                        {t(destination.name)}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Back Link */}
                    <button className="mt-8 inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        {t("GoBack")}
                    </button>
                </div>
            </div>

            <div className="absolute top-10 left-10 text-6xl opacity-30 animate-bounce">
                🥐
            </div>
            <div
                className="absolute bottom-20 right-20 text-6xl opacity-30 animate-bounce"
                style={{ animationDelay: "1s" }}
            >
                🧀
            </div>
            <div
                className="absolute top-1/3 right-10 text-6xl opacity-30 animate-bounce"
                style={{ animationDelay: "0.5s" }}
            >
                🍷
            </div>
        </div>
    );
}