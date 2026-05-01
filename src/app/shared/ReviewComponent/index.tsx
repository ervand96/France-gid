"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
  id: number;
  authorName: string;
  rating: number;
  content: string;
  date: string;
  tourName: string;
  isVerified: boolean;
  avatar: string;
}

export default function ReviewComponent({ reviews }: { reviews: Review[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-[64px] mt-30">
      {reviews.map((review, idx) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="break-inside-avoid bg-[#161920]/40 border border-gray-800 p-6 rounded-[24px] backdrop-blur-sm hover:border-accent/50 transition-all duration-500 group"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating
                      ? "fill-accent text-accent"
                      : "text-gray-700"
                  }`}
                />
              ))}
            </div>
            <Quote className="text-gray-800 group-hover:text-accent/20 transition-colors w-8 h-8" />
          </div>

          {/* Content */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
            {review.content}
          </p>

          {/* Footer */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-800/50">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <div className="text-4xl">{review?.avatar}</div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold text-sm">
                  {review.authorName}
                </span>
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">
                Тур: {review.tourName} • {review.date}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
