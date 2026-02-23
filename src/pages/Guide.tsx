import { useState } from 'react';
import Phrasebook from '../components/Phrasebook';
import NatureGuide from '../components/NatureGuide';
import { BookA, Leaf } from 'lucide-react';

export default function Guide() {
    const [activeTab, setActiveTab] = useState<'phrases' | 'nature'>('phrases');

    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans animate-in slide-in-from-right-4 duration-300">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-6 font-sans">
                <h1 className="text-2xl font-black tracking-tight text-slate-900 leading-tight mb-4">
                    Field Guide
                </h1>

                {/* Tabs */}
                <div className="flex bg-slate-100 p-1 rounded-2xl w-full select-none">
                    <button
                        onClick={() => setActiveTab('phrases')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'phrases'
                                ? 'bg-white text-teal-600 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        <BookA className="w-4 h-4" />
                        Phrases
                    </button>
                    <button
                        onClick={() => setActiveTab('nature')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'nature'
                                ? 'bg-white text-teal-600 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                            }`}
                    >
                        <Leaf className="w-4 h-4" />
                        Nature
                    </button>
                </div>
            </div>

            <div className="p-6">
                {activeTab === 'phrases' ? <Phrasebook /> : <NatureGuide />}
            </div>
        </div>
    );
}
