import { Link } from 'react-router-dom';
import { itinerary } from '../lib/itinerary';
import { ChevronRight, MapPin } from 'lucide-react';

export default function Timeline() {
    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans px-4 pt-12">
            <div className="mb-8 px-2">
                <h1 className="text-3xl font-black tracking-tighter text-slate-900">Itinerary</h1>
                <p className="text-sm text-slate-500 font-medium mt-1">Day by day breakdown</p>
            </div>

            <div className="relative space-y-4">
                {/* Connecting line behind cards */}
                <div className="absolute left-6 top-10 bottom-10 w-px bg-teal-100 z-0"></div>

                {itinerary.map((day) => (
                    <Link
                        key={day.dayId}
                        to={`/day/${day.dayId}`}
                        className="block relative z-10"
                    >
                        <div className="flex items-stretch gap-4">
                            {/* Day Number Pucks */}
                            <div className="flex flex-col items-center pt-2">
                                <div className="w-10 h-10 rounded-full bg-white border-2 border-teal-100 flex items-center justify-center shadow-sm z-10">
                                    <span className="text-sm font-black text-teal-600">{day.dayId}</span>
                                </div>
                            </div>

                            {/* Info Card */}
                            <div className="flex-1 bg-white rounded-3xl p-4 border border-slate-100 shadow-sm flex items-center gap-3 active:scale-[0.98] transition-all">
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">
                                        {day.dateStr}
                                        {day.distanceKm ? ` • ${day.distanceKm} km` : ''}
                                    </p>
                                    <h3 className="font-bold text-slate-900 text-sm leading-tight mb-1 truncate">
                                        {day.title}
                                    </h3>
                                    <div className="flex items-center gap-1 text-slate-500">
                                        <MapPin className="w-3 h-3" />
                                        <p className="text-[11px] truncate">{day.subtitle}</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
