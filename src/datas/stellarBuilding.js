module.exports = [
    {
        idLine: 0,
        buildings: [
            { name: 1, image: "mine_dome", workforce: 1 },
            { name: 2, image: "factory_open", workforce: 1 },
            { name: 3, image: "research_open", workforce: 1 },
        ],
    },
    {
        idLine: 1,
        buildings: [
            { name: 1, image: "finance_open", workforce: 3 },
            {
                name: 2, image: "spatioport_open", workforce: 2,
                levels: [
                    { bonus: [{ to: "sys_mobility", value: 1 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 2,
        buildings: [
            { name: 1, image: "defense_local_open", workforce: 1 },
            { name: 2, image: "radar_orbital", workforce: 3 },
        ],
    },
    {
        idLine: 3,
        buildings: [
            { name: 1, image: "happy_pot_open", workforce: 2 },
            { name: 2, image: "happy_open", workforce: 1 },
        ],
    },
    {
        idLine: 4,
        buildings: [
            { name: 1, image: "shipyard_1_orbital", workforce: 2 },
            { name: 2, image: "shipyard_2_orbital", workforce: 3 },
            { name: 3, image: "shipyard_3_orbital", workforce: 4 },
            { name: 4, image: "shipyard_4_orbital", workforce: 6 },
        ],
    },
]