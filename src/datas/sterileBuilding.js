module.exports = [
    {
        idLine: 0,
        buildings: [
            { name: 1, image: "mine_dome", workforce: 2 },
            { name: 2, image: "high_factory_dome", workforce: 5 },
            { name: 3, image: "lift_open", workforce: 3 },
            { name: 4, image: "research_open", workforce: 1 },
        ],
    },
    {
        idLine: 1,
        buildings: [
            {
                name: 1,
                image: "hab_open",
                workforce: 0,
                levels: [
                    { bonus: [{ to: "sys_habitation", value: 3 }], level: 1 },
                ],
            },
            { name: 2, image: "ideo_open", workforce: 2 },
            { name: 3, image: "market_open", workforce: 2 },
        ],
    },
    {
        idLine: 2,
        buildings: [
            { name: 1, image: "monument_open", workforce: 3 },
            { name: 2, image: "spatioport_open", workforce: 2 },
            { name: 3, image: "happy_pot_open", workforce: 2 },
        ],
    },
    {
        idLine: 3,
        buildings: [
            { name: 1, image: "defense_global_dome", workforce: 5 },
            { name: 2, image: "defense_local_open", workforce: 3 },
            { name: 3, image: "military_school_dome", workforce: 3 },
            { name: 4, image: "removecontact_open", workforce: 1 },
        ],
    },
]