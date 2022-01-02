module.exports = [
    {
        idLine: 0,
        buildings: [
            {
                name: 1, image: "mine_dome", workforce: 2,
                levels: [
                    { bonus: [{ from: "body_ind", to: "sys_production", value: 16 }, { from: "body_pop", to: "sys_happiness", value: -0.25 }], level: 1 },
                ],
            },
            {
                name: 2, image: "high_factory_dome", workforce: 5,
                levels: [
                    { bonus: [{ from: "body_ind", to: "sys_production", value: 30 }, { from: "body_tec", to: "sys_technology", value: 20 }], level: 1 },
                ],
            },
            {
                name: 2, image: "spatioport_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_mobility", value: 15 }, { from: "body_pop", to: "sys_production", value: 2 }], level: 1 },
                ],
            },
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
                    { bonus: [{ from: "direct", to: "sys_habitation", value: 6 }], level: 1 },
                ],
            },
            {
                name: 1, image: "monument_open", workforce: 3,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_happiness", value: 20 }, { from: "sys_pop", to: "sys_ideology", value: 1 }], level: 1 },
                ],
            },
            {
                name: 3, image: "happy_pot_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "body_act", to: "sys_happiness", value: 12 }, { from: "body_act", to: "sys_technology", value: 5 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 2,
        buildings: [
            {
                name: 1, image: "defense_global_dome", workforce: 5,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_happiness", value: 10 }, { from: "sys_defense", to: "sys_defense", value: 1 }], level: 1 },
                ],
            },
            {
                name: 2, image: "defense_local_open", workforce: 3,
                levels: [
                    { bonus: [{ from: "body_pop", to: "sys_defense", value: 2 }], level: 1 },
                ],
            },
            {
                name: 3, image: "military_school_dome", workforce: 3,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_fighter_lvl", value: 20 }, { from: "direct", to: "sys_corvette_lvl", value: 20 }, { from: "direct", to: "sys_frigate_lvl", value: 20 }, { from: "direct", to: "sys_capital_lvl", value: 20 }], level: 1 },
                ],
            },
        ],
    }
]