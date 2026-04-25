"use client";

import { MapPin } from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher/languageSwitcher";
import { Logo } from "../Logo";
import { useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();

  return (
    <footer className="bg-primary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-400 text-sm">
              Откройте для себя настоящий Париж с лучшими гидами города
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Экскурсии</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  По Парижу
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  По пригородам
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  По регионам
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href={`${locale}${"/about-us"}`}
                  className="hover:text-yellow-600 transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-600 transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Париж, Франция</span>
              </li>
              <li>+33-609-57-27-80</li>
              <li>garik@france-gid.ru</li>
            </ul>
          </div>
          <LanguageSwitcher />
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Elite Paris Guide. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
