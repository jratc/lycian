export type PhraseCategory = {
    title: string;
    phrases: {
        english: string;
        turkish: string;
        pronunciation: string;
    }[];
};

export const phrasebook: PhraseCategory[] = [
    {
        title: "Basics & Greetings",
        phrases: [
            { english: "Hello", turkish: "Merhaba", pronunciation: "MEHR-hah-bah" },
            { english: "Good morning", turkish: "Günaydın", pronunciation: "gyoon-EYE-dihn" },
            { english: "Good evening", turkish: "İyi akşamlar", pronunciation: "ee ahk-shahm-LAHR" },
            { english: "Please", turkish: "Lütfen", pronunciation: "LOOT-fehn" },
            { english: "Thank you", turkish: "Teşekkür ederim", pronunciation: "teh-sheh-KOOR eh-deh-reem" },
            { english: "You're welcome", turkish: "Bir şey değil / Rica ederim", pronunciation: "beer shey deyl / ree-JAH eh-deh-reem" },
            { english: "Yes / No", turkish: "Evet / Hayır", pronunciation: "eh-VET / HAH-yuhr" },
            { english: "Excuse me", turkish: "Afedersiniz", pronunciation: "ah-feh-DEHR-see-neez" },
            { english: "Do you speak English?", turkish: "İngilizce biliyor musunuz?", pronunciation: "een-gee-LEEZ-jeh bee-lee-yohr MOO-soo-nooz?" }
        ]
    },
    {
        title: "Trekking & Navigation",
        phrases: [
            { english: "Where is the Lycian Way?", turkish: "Likya Yolu nerede?", pronunciation: "LEEK-yah yoh-loo NEH-reh-deh?" },
            { english: "Trail / Path", turkish: "Patika", pronunciation: "pah-TEE-kah" },
            { english: "I am lost", turkish: "Kayboldum", pronunciation: "KAY-bohl-doom" },
            { english: "Is there water here?", turkish: "Burada su var mı?", pronunciation: "BOO-rah-dah soo vahr muh?" },
            { english: "How many kilometers to...?", turkish: "...kaç kilometre?", pronunciation: "...kahch kee-loh-MEH-treh?" },
            { english: "Village", turkish: "Köy", pronunciation: "kur" },
            { english: "Map", turkish: "Harita", pronunciation: "hah-REE-tah" }
        ]
    },
    {
        title: "Accommodation & Dining",
        phrases: [
            { english: "Do you have a room?", turkish: "Odanız var mı?", pronunciation: "oh-dah-nuhz vahr muh?" },
            { english: "I have a reservation", turkish: "Rezervasyonum var", pronunciation: "reh-zehr-vahs-YOH-noom vahr" },
            { english: "Water", turkish: "Su", pronunciation: "soo" },
            { english: "Bread", turkish: "Ekmek", pronunciation: "ek-MEK" },
            { english: "Tea", turkish: "Çay", pronunciation: "chay" },
            { english: "The bill, please", turkish: "Hesap, lütfen", pronunciation: "heh-SAHP, LOOT-fehn" },
            { english: "Delicious", turkish: "Lezzetli", pronunciation: "lez-zet-lee" }
        ]
    }, {
        title: "Emergencies",
        phrases: [
            { english: "Help!", turkish: "İmdat!", pronunciation: "EEM-daht!" },
            { english: "I need a doctor", turkish: "Doktora ihtiyacım var", pronunciation: "dok-tohr-ah eeh-tee-yah-JUHM vahr" },
            { english: "Hospital", turkish: "Hastane", pronunciation: "hahs-tah-neh" },
            { english: "Pharmacy", turkish: "Eczane", pronunciation: "ej-ZAH-neh" }
        ]
    }
];
