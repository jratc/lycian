export type NatureEntry = {
    id: string;
    name: string;
    scientificName: string;
    type: 'flora' | 'fauna';
    description: string;
    imageRef: string; // The generated filename (e.g., 'strawberry_tree')
};

export const floraFauna: NatureEntry[] = [
    {
        id: "cedar_lebanon",
        name: "Cedar of Lebanon",
        scientificName: "Cedrus libani",
        type: 'flora',
        description: "Majestic evergreen conifers with horizontally spreading branches. Often found at higher altitudes (above 1000m) along the Lycian Way, such as on the slopes of Mount Tahtalı. Culturally significant and historically used for shipbuilding.",
        imageRef: "cedar_lebanon"
    },
    {
        id: "strawberry_tree",
        name: "Eastern Strawberry Tree",
        scientificName: "Arbutus andrachne",
        type: 'flora',
        description: "A striking evergreen shrub or small tree instantly recognizable by its smooth, peeling red bark. It produces white bell-shaped flowers and edible red berries (though somewhat bland). Very common in the coastal maquis scrub.",
        imageRef: "strawberry_tree"
    },
    {
        id: "anatolian_orchid",
        name: "Anatolian Orchid",
        scientificName: "Orchis anatolica",
        type: 'flora',
        description: "A delicate, beautiful wild orchid with spotted leaves and purplish-pink flowers. Blooms in early spring (March/April) in the limestone soils along the path. *Please do not pick wild orchids.*",
        imageRef: "anatolian_orchid"
    },
    {
        id: "loggerhead_turtle",
        name: "Loggerhead Sea Turtle",
        scientificName: "Caretta caretta",
        type: 'fauna',
        description: "Large marine turtles that nest on specific sandy beaches along the Lycian coast, most notably at Çıralı and Patara. If you are hiking in summer, you might see their protected nesting sites.",
        imageRef: "loggerhead_turtle"
    },
    {
        id: "wild_boar",
        name: "Wild Boar",
        scientificName: "Sus scrofa",
        type: 'fauna',
        description: "A common mammal in the forests and scrublands. You are more likely to see the evidence of their rooting (turned up soil) than the animals themselves, as they are mostly nocturnal and shy away from humans.",
        imageRef: "wild_boar"
    },
    {
        id: "rock_nuthatch",
        name: "Western Rock Nuthatch",
        scientificName: "Sitta neumayer",
        type: 'fauna',
        description: "A nimble, agile bird often seen hopping up and down the limestone cliffs and ancient ruins. Recognizable by its grey back, pale belly, and distinct black eye-stripe, as well as its loud ringing call.",
        imageRef: "rock_nuthatch"
    }
];
