module.exports = [
    {
        idLine: 0,
        buildings: [
            {
                name: 2, image: "factory_open", workforce: 1,
                levels: [
                    { bonus: [{ from: "body_ind", to: "sys_production", value: 2 }, { from: "body_ind", to: "sys_credit", value: 12 }], level: 1 },
                ],
            },
            {
                name: 3, image: "research_open", workforce: 1,
                levels: [
                    { bonus: [{ from: "body_tec", to: "sys_technology", value: 3 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 1,
        buildings: [
            {
                name: 2, image: "spatioport_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_mobility", value: 1 }, { from: "direct", to: "sys_mobility", value: 1 }], level: 1 },
                ],
            },
            {
                name: 1, image: "happy_pot_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_mobility", value: 5 }, { from: "direct", to: "sys_mobility", value: 60 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 2,
        buildings: [
            {
                name: 1, image: "defense_local_open", workforce: 1,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_defense", value: 7 }], level: 1 },
                ],
            },
            {
                name: 2, image: "radar_orbital", workforce: 3,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_radar", value: 2.5 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 3,
        buildings: [
            {
                name: 1, image: "shipyard_1_orbital", workforce: 2,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_production", value: 8 }], level: 1 },
                ],
            },
            {
                name: 2, image: "shipyard_2_orbital", workforce: 3,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_production", value: 10 }], level: 1 },
                ],
            },
            {
                name: 3, image: "shipyard_3_orbital", workforce: 4,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_defense", value: 6 }], level: 1 },
                ],
            },
            {
                name: 4, image: "shipyard_4_orbital", workforce: 6,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_defense", value: 8 }], level: 1 },
                ],
            },
        ],
    },
]