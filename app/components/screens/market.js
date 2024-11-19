import Link from "next/link";
import { ArrowRight, TrendingUp, Sparkles, Award } from "lucide-react";
import CryptoCard from "../card";
import TopMovers from "./TopMovers";

const SectionHeader = ({ title, link }) => (
  <div className="flex items-center justify-between py-4 px-6">
    <div className="flex items-center space-x-2">
      {title === "Top Movers" && (
        <TrendingUp className="w-5 h-5 text-green-500" />
      )}
      {title === "New" && <Sparkles className="w-5 h-5 text-purple-500" />}
      {title === "Top Assets" && <Award className="w-5 h-5 text-yellow-500" />}
      <h2 className="text-lg font-semibold text-white">{title}</h2>
    </div>
    {link && (
      <Link
        href={link}
        className="flex items-center space-x-1 text-sm text-gray-400 hover:text-green-500 transition-colors"
      >
        <span>View all</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    )}
  </div>
);

const Market = () => {
  return (
    <div className="min-h-screen bg-gray-900 mb-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-500/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            Market Overview
          </h1>
          <p className="text-gray-400 text-center">
            Track real-time cryptocurrency prices and market trends
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        {/* Top Movers Section */}
        <section className="bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
          <SectionHeader title="Top Movers" link="#" />
          <div className="px-6 pb-6">
            <CryptoCard />
          </div>
        </section>

        {/* New Listings Section */}
        <section className="bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
          <SectionHeader title="New" link="#" />
          <div className="px-6 pb-6">
            <CryptoCard />
          </div>
        </section>

        {/* Top Assets Section */}
        <section className="bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
          <SectionHeader title="Top Assets" link="#" />
          <div className="px-6 pb-6">
            <TopMovers />
          </div>
        </section>
      </div>

      {/* Market Stats */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "24h Volume", value: "$24.8B" },
            { label: "Market Cap", value: "$1.2T" },
            { label: "Active Currencies", value: "2,547" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50"
            >
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <p className="text-white text-lg font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Market;
