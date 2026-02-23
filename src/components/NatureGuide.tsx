import { floraFauna } from '../lib/floraFauna';

export default function NatureGuide() {
    return (
        <div className="space-y-6">
            <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Flora (Plants)</h3>
                <div className="grid gap-4">
                    {floraFauna.filter(item => item.type === 'flora').map((item, i) => (
                        <div key={i} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col group">
                            <div className="h-48 relative overflow-hidden bg-slate-100">
                                <img
                                    src={`/images/nature/${item.imageRef}.png`}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <p className="absolute bottom-4 left-4 text-white text-[10px] font-mono tracking-widest uppercase truncate right-4">
                                    {item.scientificName}
                                </p>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-slate-900 mb-2 leading-tight">{item.name}</h4>
                                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-6 pt-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Fauna (Animals)</h3>
                <div className="grid gap-4">
                    {floraFauna.filter(item => item.type === 'fauna').map((item, i) => (
                        <div key={i} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col group">
                            <div className="h-48 relative overflow-hidden bg-slate-100">
                                <img
                                    src={`/images/nature/${item.imageRef}.png`}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <p className="absolute bottom-4 left-4 text-white text-[10px] font-mono tracking-widest uppercase truncate right-4">
                                    {item.scientificName}
                                </p>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-slate-900 mb-2 leading-tight">{item.name}</h4>
                                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
