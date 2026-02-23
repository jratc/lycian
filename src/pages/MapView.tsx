import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { itinerary } from '../lib/itinerary';
import L from 'leaflet';

// Fix Leaflet's default icon paths when bundled by Vite
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

export default function MapView() {
    // Center roughly on the Eastern Lycian Way
    const center: [number, number] = [36.4, 30.2];

    // Filter out days without coordinates
    const markers = itinerary.filter(day => day.coordinates !== undefined);

    return (
        <div className="h-screen w-full relative flex flex-col font-sans">
            <div className="absolute top-0 left-0 right-0 z-[400] bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4 pt-safe flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-black tracking-tighter text-slate-900">Trail Map</h1>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-teal-600">Eastern Heartlands</p>
                </div>
            </div>

            <div className="flex-1 w-full bg-slate-100 relative z-0">
                <MapContainer
                    center={center}
                    zoom={9}
                    scrollWheelZoom={true}
                    zoomControl={false}
                    className="w-full h-full pb-20" // space for bottom nav
                >
                    {/* using OSM initially. A real production offline PWA would point to locally cached tiles */}
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {markers.map((day) => (
                        <Marker key={day.dayId} position={day.coordinates!}>
                            <Popup className="rounded-2xl font-sans">
                                <div className="p-1">
                                    <span className="text-[9px] uppercase font-black tracking-widest text-teal-600 block mb-1">Day {day.dayId}</span>
                                    <strong className="text-sm font-bold text-slate-900 block leading-tight">{day.title}</strong>
                                    <p className="text-xs text-slate-500 mt-1">{day.subtitle}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}
