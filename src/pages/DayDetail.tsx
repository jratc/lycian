import { useParams, Link } from 'react-router-dom';
import { itinerary } from '../lib/itinerary';
import { ChevronLeft, MapPin, CheckCircle2, BedDouble } from 'lucide-react';

export default function DayDetail() {
    const { id } = useParams();
    const day = itinerary.find(d => d.dayId === Number(id));

    if (!day) return <div className="p-6">Day not found</div>;

    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans animate-in slide-in-from-right-4 duration-300">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-4 py-4 flex items-center gap-3">
                <Link to="/timeline" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 active:scale-95 transition-all">
                    <ChevronLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h2 className="text-sm font-black tracking-tighter text-slate-900">Day {day.dayId}</h2>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-teal-600">{day.dateStr}</p>
                </div>
            </div>

            <div className="p-6 space-y-8">
                {/* Title Area */}
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-slate-900 leading-tight mb-2">
                        {day.title}
                    </h1>
                    <div className="flex items-center gap-2 text-slate-500 mb-4">
                        <MapPin className="w-4 h-4 text-teal-600" />
                        <span className="text-sm font-medium">{day.subtitle}</span>
                    </div>
                    {day.distanceKm && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest">
                            Distance: {day.distanceKm} km
                        </div>
                    )}
                </div>

                {/* Description */}
                <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">The Route</h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {day.description}
                    </p>
                </div>

                {/* Activities */}
                <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Activities</h3>
                    <div className="space-y-3">
                        {day.activities.map((act, i) => (
                            <div key={i} className="flex gap-3 items-start">
                                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-slate-700 font-medium">{act}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logistics & Accommodation */}
                <div className="space-y-4">
                    <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Logistics</h3>
                        <p className="text-sm text-slate-700 font-medium">{day.logistics}</p>
                    </div>

                    <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-5 border border-teal-100/50 shadow-sm">
                        <div className="flex items-center gap-2 mb-2 text-teal-800">
                            <BedDouble className="w-4 h-4" />
                            <h3 className="text-xs font-black uppercase tracking-widest">Accommodation Idea</h3>
                        </div>
                        <p className="text-sm text-teal-900 font-bold">{day.accommodation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
