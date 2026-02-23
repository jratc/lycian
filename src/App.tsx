import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Map, List } from 'lucide-react';

import Overview from './pages/Overview';
import Timeline from './pages/Timeline';
import MapView from './pages/MapView';
import DayDetail from './pages/DayDetail';

const BottomNav = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-xl border-t border-slate-200/50 flex items-center justify-around px-2 pb-safe z-50">
            <Link to="/" className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${isActive('/') ? 'text-teal-600' : 'text-slate-400 hover:text-slate-600'}`}>
                <Home className="w-5 h-5" strokeWidth={isActive('/') ? 2.5 : 2} />
                <span className="text-[10px] font-bold tracking-wider uppercase">Home</span>
            </Link>
            <Link to="/timeline" className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${isActive('/timeline') ? 'text-teal-600' : 'text-slate-400 hover:text-slate-600'}`}>
                <List className="w-5 h-5" strokeWidth={isActive('/timeline') ? 2.5 : 2} />
                <span className="text-[10px] font-bold tracking-wider uppercase">Route</span>
            </Link>
            <Link to="/map" className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${isActive('/map') ? 'text-teal-600' : 'text-slate-400 hover:text-slate-600'}`}>
                <Map className="w-5 h-5" strokeWidth={isActive('/map') ? 2.5 : 2} />
                <span className="text-[10px] font-bold tracking-wider uppercase">Map</span>
            </Link>
        </nav>
    );
};

export default function App() {
    return (
        <Router>
            <div className="min-h-screen max-w-md mx-auto relative bg-slate-50 shadow-2xl overflow-x-hidden">
                <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/day/:id" element={<DayDetail />} />
                    <Route path="/map" element={<MapView />} />
                </Routes>
                <BottomNav />
            </div>
        </Router>
    );
}
