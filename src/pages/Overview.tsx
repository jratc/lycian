import { Link } from 'react-router-dom';
import { itinerary } from '../lib/itinerary';
import { MapPin, Navigation, Mountain } from 'lucide-react';

export default function Overview() {
    const totalKm = itinerary.reduce((acc, day) => acc + (day.distanceKm || 0), 0);

    return (
        <div className="min-h-screen bg-slate-50 pb-24 font-sans">
            {/* Hero Header */}
            <div className="relative h-64 w-full bg-slate-900 overflow-hidden rounded-b-[2.5rem] shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                {/* Placeholder image for hero */}
                <img
                    src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1000&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Lycian Way Coastline"
                />
                <div className="absolute bottom-8 left-6 right-6 z-20 text-white">
                    <p className="text-[10px] font-black uppercase tracking-widest text-teal-300 mb-2">Eastern Heartlands</p>
                    <h1 className="text-3xl font-black tracking-tighter leading-tight mb-2">
                        The Lycian Way
                    </h1>
                    <p className="text-sm font-medium text-white/80">
                        A 14-Day Immersion
                    </p>
                </div>
            </div>

            {/* Stats Row */}
            <div className="flex z-30 relative -mt-4 mx-6 bg-white rounded-2xl shadow-lg border border-slate-100 p-4 justify-between items-center mb-6">
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-1">
                        <Navigation className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">{totalKm} km</span>
                    <span className="text-[9px] uppercase tracking-widest text-slate-400">Total Dist</span>
                </div>
                <div className="h-8 w-px bg-slate-100"></div>
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1">
                        <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">14 Days</span>
                    <span className="text-[9px] uppercase tracking-widest text-slate-400">Duration</span>
                </div>
                <div className="h-8 w-px bg-slate-100"></div>
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-1">
                        <Mountain className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">Antalya</span>
                    <span className="text-[9px] uppercase tracking-widest text-slate-400">Start</span>
                </div>
            </div>

            <div className="px-6 space-y-6">
                {/* Intro */}
                <div>
                    <h2 className="text-lg font-black tracking-tight text-slate-900 mb-2">The Journey</h2>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        This curated itinerary weaves together the physical challenge of the hike with a deep cultural immersion. Expect a beautiful and ancient journey along cliffs above the sea and isolated mountain paths.
                    </p>
                </div>

                {/* Quick Start / Up Next */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg font-black tracking-tight text-slate-900">Start Trekking</h2>
                        <Link to="/timeline" className="text-[10px] font-black uppercase tracking-widest text-teal-600">See All</Link>
                    </div>

                    <Link to={`/day/1`} className="block">
                        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm active:scale-[0.98] transition-all flex gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0">
                                <span className="text-2xl font-black text-teal-600">01</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-teal-600 mb-1">{itinerary[0].dateStr}</span>
                                <h3 className="font-bold text-slate-900 leading-tight mb-1">{itinerary[0].title}</h3>
                                <p className="text-xs text-slate-500 line-clamp-1">{itinerary[0].subtitle}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
