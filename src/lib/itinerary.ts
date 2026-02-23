export type TrekDay = {
    dayId: number;
    dateStr: string;
    title: string;
    subtitle: string;
    distanceKm?: number;
    description: string;
    activities: string[];
    logistics: string;
    accommodation: string;
    coordinates?: [number, number]; // lat, lng for the overnight/destination
};

export const itinerary: TrekDay[] = [
    {
        dayId: 1,
        dateStr: "Sat 16 / Sun 17",
        title: "Arrival in Istanbul & Transfer to Antalya",
        subtitle: "A Historical Gateway",
        description: "After arriving from SFO and spending a brief layover or day in Istanbul, you transfer down to Antalya. The journey begins in this beautiful ancient city set dramatically on cliffs above the sea.",
        activities: [
            "Fly SFO to Istanbul (TK80)",
            "Explore Sultanahmet / Old City in Istanbul",
            "Transfer to Antalya Old City (Kaleiçi)"
        ],
        logistics: "Flights all day on Wed 20. Transfer to Kaleiçi.",
        accommodation: "White Garden Hotel (Adults Only) - Kaleiçi Kılıçaslan Mah. Hesapçi Geçidi No: 9, Antalya",
        coordinates: [36.8841, 30.7056] // Antalya
    },
    {
        dayId: 2,
        dateStr: "Thu 21",
        title: "Hisarcandir – Göynük",
        subtitle: "The Path of Water and Stone",
        distanceKm: 16,
        description: "The first day of trekking begins with a transfer to the village of Hisarcandir. This segment serves as a gentle introduction to the trail's terrain, passing through the spectacular Göynük Gorge and involves a river crossing.",
        activities: [
            "Transfer from Antalya to Hisarcandir",
            "Hike through Göynük Gorge (river crossing involved)",
            "Swim in the boulder-strewn riverbed"
        ],
        logistics: "Transfer from Antalya to Hisarcandir trails head.",
        accommodation: "Goynuk Canyon Pension or Local Homestay",
        coordinates: [36.6667, 30.5500] // Göynük
    },
    {
        dayId: 3,
        dateStr: "Fri 22",
        title: "Göynük – Yayla Kuzdere",
        subtitle: "Ascending to the Villages",
        distanceKm: 16,
        description: "One of the more challenging but rewarding segments, involving a long hike along high mountain paths up to 900m. Offers magnificent views of Mount Tahtalı and a chance to experience authentic village life.",
        activities: [
            "Ascend to high mountain pastures",
            "Enjoy traditional meals prepared by locals"
        ],
        logistics: "Hike fully loaded or utilize luggage transfer.",
        accommodation: "Sevim's Village House (Traditional homestay) or Local Pansiyon",
        coordinates: [36.5833, 30.4500] // Yayla Kuzdere approx
    },
    {
        dayId: 4,
        dateStr: "Sat 23",
        title: "Yayla Kuzdere – Gedelme",
        subtitle: "Ancient Fortresses and History",
        distanceKm: 15,
        description: "The trail leads to Gedelme, featuring a well-preserved 9th-century Byzantine medieval fortress. A 2,500-year-old plane tree sits nearby, providing a powerful sense of the historical continuum.",
        activities: [
            "Hike to Gedelme castle ruins",
            "Visit the ancient plane tree"
        ],
        logistics: "Medium difficulty walk bridging ancient Roman roads.",
        accommodation: "Caner Mountain Hotel or Gedelme Pansiyon",
        coordinates: [36.5667, 30.5167] // Gedelme
    },
    {
        dayId: 5,
        dateStr: "Sun 24",
        title: "Gedelme – Beycik",
        subtitle: "The Mountain of Myths",
        distanceKm: 15,
        description: "A steady, steep climb along a riverbed toward the pastures of Çukur Yayla, located just below the formidable Mount Olympos (Tahtalı Dağı), before descending into the village of Beycik.",
        activities: [
            "Cross the pass under Mt. Tahtalı (Olympos)",
            "Hike through forests of pine and cedar trees"
        ],
        logistics: "High-altitude setting; prepare for temperature changes.",
        accommodation: "Olympos Mountain Lodge or Beycik Panorama Camping",
        coordinates: [36.4333, 30.4667] // Beycik
    },
    {
        dayId: 6,
        dateStr: "Mon 25",
        title: "Rest Day in Çıralı",
        subtitle: "The Eternal Flames and Coastal Serenity",
        description: "A designated rest day for deep exploration. Relax on the 4km protected beach, explore the ruins of Olympos nestled in the forest, and take a nighttime visit to Yanartaş—the eternal flames.",
        activities: [
            "Short drive down to Çıralı coast",
            "Visit Olympos ruins",
            "Nighttime hike to Eternal Flames (Yanartaş)",
            "Swim at Çıralı beach"
        ],
        logistics: "Transfer required down to the coast.",
        accommodation: "Cemils Guest House, Hane-i Keyif Pension, or Turkuaz Bungalows",
        coordinates: [36.4000, 30.4833] // Çıralı
    },
    {
        dayId: 7,
        dateStr: "Tue 26",
        title: "Çıralı – Adrasan",
        subtitle: "The Coastal Traverse",
        distanceKm: 20,
        description: "A long and undulating coastal stage from Çıralı to Adrasan. The trail begins with an ascent of Musa Dağı (Moses Mountain) through a dense forest of strawberry trees, rewarding hikers with breathtaking views.",
        activities: [
            "Coastal traverse via Musa Dağı",
            "Eat stewed trout in Ulupınar (optional transfer)"
        ],
        logistics: "Long hiking day; carry plenty of water.",
        accommodation: "Deniz Hotel, Adrasan Shambala, or Engin Pansiyon",
        coordinates: [36.3167, 30.4667] // Adrasan
    },
    {
        dayId: 8,
        dateStr: "Wed 27",
        title: "Rest Day in Adrasan",
        subtitle: "Aquatic Escapes",
        description: "A dedicated rest day focused on the Mediterranean. Take a boat trip to explore secluded coves like Korsan Koyu (Pirate Bay) and Suluada Island, often called the 'Maldives of Turkey'.",
        activities: [
            "Rest and swim",
            "Boat trip to Suluada ('Turkish Maldives') or pirate bays"
        ],
        logistics: "Book boat tours in advance through local pansiyons.",
        accommodation: "Same as Day 7 (Deniz Hotel, Adrasan Shambala, etc.)",
        coordinates: [36.3167, 30.4667] // Adrasan
    },
    {
        dayId: 9,
        dateStr: "Wed 27",
        title: "Adrasan – Gelidonia – Karaöz – Demre",
        subtitle: "The Gelidonia Lighthouse & The Transfer West",
        distanceKm: 18,
        description: "Follow a rocky path along high-altitude cliffs to the Gelidonia Lighthouse for spectacular sea views. Descend to Karaöz and take a taxi to Demre to skip the flat, paved road walking.",
        activities: [
            "Hike to Gelidonia Lighthouse",
            "Descend to Karaöz",
            "Taxi from Karaöz to Demre"
        ],
        logistics: "Hike is approx 7 hours. Transfer from Karaöz to Demre is 45 mins. Avoid walking greenhouses.",
        accommodation: "Santa Suites, Andriake Beach Club, or Local Demre Pansiyon",
        coordinates: [36.2444, 29.9833] // Demre
    },
    {
        dayId: 10,
        dateStr: "Thu 28",
        title: "Rest Day in Demre & Myra",
        subtitle: "Inland History and Authentic Encounters",
        description: "Explore the impressive Myra rock tombs carved directly into cliff faces, and visit the Church of St. Nicholas. Optional walk to the Andriake harbor (Çayağzı).",
        activities: [
            "Visit Lycian rock tombs of Myra",
            "Visit St. Nicholas Church",
            "Optional Walk to Andriake harbor"
        ],
        logistics: "Full day of historical exploration in Demre.",
        accommodation: "Same as Day 9 (Santa Suites, Demre Pansiyon, etc.)",
        coordinates: [36.2444, 29.9833] // Demre
    },
    {
        dayId: 11,
        dateStr: "Fri 29",
        title: "Demre – Üçağız (Kekova)",
        subtitle: "The Sunken City and Aperlai",
        distanceKm: 20,
        description: "A stunning coastal section known as the 'Purple Route'. Hike from Demre through rugged scrubland and secluded coves before arriving in the quiet boating hub of Üçağız.",
        activities: [
            "Hike from Demre (Çayağzı) to Üçağız",
            "Rest in the traditional village"
        ],
        logistics: "Long coastal walking day.",
        accommodation: "Telemen'in Evi Pansiyon, Likya Pansiyon, or Ankh Pansiyon",
        coordinates: [36.1956, 29.8483] // Üçağız
    },
    {
        dayId: 12,
        dateStr: "Sat 30",
        title: "Üçağız & Simena (Sunken City)",
        subtitle: "Simena Castle and Coastal Charm",
        distanceKm: 5,
        description: "Take a boat tour over the Sunken City of Kekova. Later, enjoy a short coastal walk to the car-free village of Simena to visit the medieval castle and enjoy homemade ice cream.",
        activities: [
            "Boat trip over Sunken City",
            "Hike coastal path to Simena",
            "Visit Simena Castle"
        ],
        logistics: "Short walking day; mostly aquatic and historical exploration.",
        accommodation: "Simena Pansiyon (Waterfront), Ekin Pansiyon, or Theimussa Hotel",
        coordinates: [36.1911, 29.8603] // Simena / Kaleköy
    },
    {
        dayId: 13,
        dateStr: "Sun 31",
        title: "Üçağız – Aperlai – Kaş",
        subtitle: "Journey to a Lively Harbour Town",
        distanceKm: 12,
        description: "Hike from Üçağız to the ruins of Aperlai. To avoid walking the exposed lava fields, take a boat taxi from Aperlai into the lively harbor of Kaş—a perfect victory lap.",
        activities: [
            "Hike Üçağız to Aperlai ruins",
            "Boat Taxi from Aperlai to Kaş harbor",
            "Swim at Little Pebble Beach or Limanagzi"
        ],
        logistics: "Pre-arrange the boat pickup from Aperlai.",
        accommodation: "Hotel Sonne (Adults Only) - Eski Kilise Cad.No. 6 Antalya, Kaş",
        coordinates: [36.2000, 29.6333] // Kaş
    },
    {
        dayId: 14,
        dateStr: "Mon 1",
        title: "Departure from Kaş",
        subtitle: "Farewell to Lycia",
        description: "Enjoy a final traditional Turkish breakfast before transferring to the airport. Fly to Istanbul for one final city day of shopping and a Meyhane dinner.",
        activities: [
            "Drive from Kas to Dalaman Airport",
            "Fly to Istanbul (TK2555)",
            "Shopping in Karaköy/Galata",
            "Final dinner at a Meyhane (e.g. Kallavi)"
        ],
        logistics: "Transfer from Kaş to Dalaman Airport. Flight departs 10:25.",
        accommodation: "Hotel Turkish House Istanbul (Same as start)",
        coordinates: [41.0082, 28.9784] // Istanbul
    }
];
