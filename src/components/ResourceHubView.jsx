import React, { useState } from 'react';
import { 
  Library, 
  Book, 
  Headphones, 
  Video, 
  ExternalLink, 
  Search, 
  Star, 
  Bookmark, 
  CheckCircle,
  Tag
} from 'lucide-react';

export default function ResourceHubView({ resources }) {
  const [activeType, setActiveType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const typeTabs = [
    { id: 'all', label: 'All Resources', icon: Library },
    { id: 'book', label: 'Books', icon: Book },
    { id: 'podcast', label: 'Podcasts', icon: Headphones },
    { id: 'video', label: 'Videos & Masterclasses', icon: Video }
  ];

  const filteredResources = resources.filter(res => {
    const matchesType = activeType === 'all' || res.type.toLowerCase() === activeType.toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query || 
      res.title.toLowerCase().includes(query) ||
      res.author.toLowerCase().includes(query) ||
      res.description.toLowerCase().includes(query) ||
      (res.tags && res.tags.some(t => t.toLowerCase().includes(query)));
    return matchesType && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Curated Multimedia Learning Hub
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Authoritative books, podcast series, animated masterclasses, and official framework guides curated for modern Product Owners.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by topic, title, author..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          />
        </div>
      </div>

      {/* Type Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-3 overflow-x-auto scrollbar-none">
        {typeTabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeType === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveType(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-blue-800 text-blue-100' : 'bg-slate-100 text-slate-500'
              }`}>
                {tab.id === 'all' 
                  ? resources.length 
                  : resources.filter(r => r.type.toLowerCase() === tab.id).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => {
          return (
            <div
              key={res.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between group hover:border-blue-400"
            >
              <div className="space-y-4">
                {/* Top Badge & Rating */}
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center space-x-1 ${
                    res.type === 'book'
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                      : res.type === 'podcast'
                      ? 'bg-purple-50 text-purple-700 border border-purple-200'
                      : 'bg-rose-50 text-rose-700 border border-rose-200'
                  }`}>
                    {res.type === 'book' && <Book className="w-3 h-3" />}
                    {res.type === 'podcast' && <Headphones className="w-3 h-3" />}
                    {res.type === 'video' && <Video className="w-3 h-3" />}
                    <span>{res.type}</span>
                  </span>

                  <div className="flex items-center space-x-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{res.rating}</span>
                  </div>
                </div>

                {/* Title & Author */}
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-blue-600 transition leading-snug">
                    {res.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    By {res.author} {res.publisher && `• ${res.publisher}`}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {res.description}
                </p>

                {/* Key Takeaways */}
                {res.keyTakeaways && res.keyTakeaways.length > 0 && (
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-700 block">Core Takeaways for POs:</span>
                    <ul className="text-[11px] text-slate-600 space-y-1 pl-4 list-disc leading-tight">
                      {res.keyTakeaways.slice(0, 2).map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                {res.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {res.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-slate-100">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition shadow-xs group-hover:bg-blue-600"
                >
                  <span>
                    {res.type === 'book' ? 'Read Book Guide' : res.type === 'podcast' ? 'Listen to Episodes' : 'Watch Masterclass'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
