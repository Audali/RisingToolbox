module.exports = [
    {
        idLine: 0,
        buildings: [
            {
                name: 1, image: "mine_dome", workforce: 1,
                levels: [
                    { bonus: [{ from: "body_ind", to: "sys_production", value: 3 }], level: 1 },
                ],
            },
            {
                name: 2, image: "factory_open", workforce: 1,
                levels: [
                    { bonus: [{ from: "body_ind", to: "sys_production", value: 1 }, { from: "body_ind", to: "sys_credit", value: 5 }], level: 1 },
                ],
            },
            {
                name: 3, image: "research_open", workforce: 1,
                levels: [
                    { bonus: [{ from: "body_tec", to: "sys_technology", value: 0.6 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 1,
        buildings: [
            {
                name: 1, image: "finance_open", workforce: 3,
                levels: [
                    { bonus: [{ from: "sys_mobility", to: "sys_credit", value: 1.2 }, { from: "direct", to: "sys_happiness", value: -3.6 }], level: 1 },
                ],
            },
            {
                name: 2, image: "spatioport_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_mobility", value: 1.5 }, { from: "direct", to: "sys_credit", value: 20 }], level: 1 },
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
                    { bonus: [{ from: "direct", to: "sys_defense", value: 3 }], level: 1 },
                ],
            },
            {
                name: 2, image: "radar_orbital", workforce: 3,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_radar", value: 0.5 }, { from: "direct", to: "sys_ci", value: 4 }, { from: "direct", to: "sys_remove_contact", value: 5 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 3,
        buildings: [
            {
                name: 1, image: "happy_pot_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "body_act", to: "sys_happiness", value: 2 }, { from: "body_act", to: "sys_credit", value: 2 }], level: 1 },
                ],
            },
            {
                name: 2, image: "happy_open", workforce: 1,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_happiness", value: 3 }, { from: "direct", to: "sys_production", value: 1 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 4,
        buildings: [
            {
                name: 1, image: "shipyard_1_orbital", workforce: 2,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_production", value: 10 }, { from: "direct", to: "sys_ci", value: 2 }, { from: "direct", to: "sys_fighter_lvl", value: 3 }], level: 1 },
                ],
            },
            {
                name: 2, image: "shipyard_2_orbital", workforce: 3,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_production", value: 15 }, { from: "direct", to: "sys_ci", value: 3 }, { from: "direct", to: "sys_corvette_lvl", value: 3 }], level: 1 },
                ],
            },
            {
                name: 3, image: "shipyard_3_orbital", workforce: 4,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_production", value: 20 }, { from: "direct", to: "sys_ci", value: 4 }, { from: "direct", to: "sys_defense", value: 2 }, { from: "direct", to: "sys_frigate_lvl", value: 3 }], level: 1 },
                ],
            },
            {
                name: 4, image: "shipyard_4_orbital", workforce: 6,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_production", value: 25 }, { from: "direct", to: "sys_ci", value: 5 }, { from: "direct", to: "sys_defense", value: 3 }, { from: "direct", to: "sys_capital_lvl", value: 3 }], level: 1 },
                ],
            },
        ],
    },
]