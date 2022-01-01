module.exports = [
    {
        idLine: 0,
        buildings: [
            {
                name: 1,
                image: "hab_open",
                workforce: 0,
                levels: [
                    { bonus: [{ to: "sys_habitation", value: 3 }], level: 1 },
                ],
            },
            {
                name: 2,
                image: "hab_open_poor",
                workforce: 0,
                levels: [
                    { bonus: [{ to: "sys_habitation", value: 4 }], level: 1 },
                ],
            },
            {
                name: 3,
                image: "hab_open_rich",
                workforce: 0,
                levels: [
                    { bonus: [{ to: "sys_habitation", value: 3 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 1,
        buildings: [
            { name: 1, image: "factory_open", workforce: 2 },
            { name: 2, image: "lift_open", workforce: 3 },
            { name: 3, image: "research_open", workforce: 5 },
        ],
    },
    {
        idLine: 2,
        buildings: [
            { name: 1, image: "university_open", workforce: 2 },
            { name: 2, image: "ideo_open", workforce: 2 },
            { name: 3, image: "ideo_credit_open", workforce: 4 },
            { name: 4, image: "market_open", workforce: 2 },
        ],
    },
    {
        idLine: 3,
        buildings: [
            { name: 1, image: "monument_open", workforce: 2 },
            { name: 2, image: "finance_open", workforce: 5 },
            { name: 3, image: "happy_pot_open", workforce: 5 },
        ],
    },
    {
        idLine: 4,
        buildings: [
            { name: 1, image: "defense_local_open", workforce: 3 },
            { name: 2, image: "counterintelligence_open", workforce: 5 },
            { name: 3, image: "removecontact_open", workforce: 2 },
        ],
    },
]