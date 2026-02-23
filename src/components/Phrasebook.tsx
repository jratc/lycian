import { useState } from 'react';
import { phrasebook, PhraseCategory } from '../lib/phrasebook';
import { Search, Volume2 } from 'lucide-react';

export default function Phrasebook() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPhrasebook = phrasebook.map((category: PhraseCategory) => ({
        ...category,
        phrases: category.phrases.filter(p =>
            p.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.turkish.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.phrases.length > 0);

    return (
        <div className="space-y-6">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search phrases (e.g., hello, su...)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium text-slate-700 placeholder:text-slate-400 shadow-sm"
                />
            </div>

            <div className="space-y-8">
                {filteredPhrasebook.length === 0 ? (
                    <div className="text-center py-10 text-slate-500 font-medium">No phrases found.</div>
                ) : (
                    filteredPhrasebook.map((category, i) => (
                        <div key={i} className="space-y-3">
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">{category.title}</h3>
                            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-50">
                                {category.phrases.map((phrase, j) => (
                                    <div key={j} className="p-4 flex items-center justify-between group hover:bg-slate-50/50 transition-colors">
                                        <div>
                                            <p className="font-bold text-slate-900 mb-0.5">{phrase.english}</p>
                                            <p className="text-sm font-medium text-teal-700 mb-1">{phrase.turkish}</p>
                                            <p className="text-[10px] text-slate-400 font-mono tracking-wide">{phrase.pronunciation}</p>
                                        </div>
                                        <button className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center active:scale-90 transition-all group-hover:bg-white group-hover:text-teal-600 group-hover:shadow-sm border border-transparent group-hover:border-slate-100">
                                            <Volume2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
