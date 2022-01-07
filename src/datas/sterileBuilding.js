module.exports = [
    {
        idLine: 0,
        buildings: [
            {
                name: 1, image: "mine_dome", workforce: 2,
                levels: [
                    { bonus: [{ from: "body_ind", to: "sys_production", value: 2.8 }, { from: "body_pop", to: "sys_happiness", value: -0.05 }], level: 1 },
                ],
            },
            {
                name: 2, image: "high_factory_dome", workforce: 5,
                levels: [
                    { bonus: [{ from: "body_ind", to: "sys_production", value: 7 }, { from: "body_tec", to: "sys_technology", value: 3 }], level: 1 },
                ],
            },
            {
                name: 3, image: "lift_open", workforce: 3,
                levels: [
                    { bonus: [{ from: "body_ind", to: "sys_production", value: 1.2 }, { from: "body_ind", to: "sys_mobility", value: 1.2 }], level: 1 },
                ],
            },
            {
                name: 4, image: "research_open", workforce: 1, levels: [
                    { bonus: [{ from: "body_tec", to: "sys_technology", value: 1.2 }], level: 1 }]
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
                    { bonus: [{ from: "direct", to: "sys_habitation", value: 3 }], level: 1 },
                ],
            },
            {
                name: 2, image: "ideo_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "body_pop", to: "sys_ideology", value: 0.3 }, { from: "body_pop", to: "sys_credit", value: 0.4 }], level: 1 },
                ],
            },
            {
                name: 3, image: "market_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "body_pop", to: "sys_credit", value: 1.2 }, { from: "direct", to: "sys_technology", value: 1.2 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 2,
        buildings: [
            {
                name: 1, image: "monument_open", workforce: 3,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_happiness", value: 5 }, { from: "sys_pop", to: "sys_ideology", value: 0.2 }], level: 1 },
                ],
            },
            {
                name: 2, image: "spatioport_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_mobility", value: 1.6 }, { from: "body_pop", to: "sys_production", value: 0.4 }], level: 1 },
                ],
            },
            {
                name: 3, image: "happy_pot_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "body_act", to: "sys_happiness", value: 2.4 }, { from: "body_act", to: "sys_technology", value: 0.6 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 3,
        buildings: [{
            name: 1, image: "defense_global_dome", workforce: 5,
            levels: [
                { bonus: [{ from: "direct", to: "sys_happiness", value: 2 }, { from: "sys_defense", to: "sys_defense", value: 0.2 }], level: 1 },
            ],
        },
        {
            name: 2, image: "defense_local_open", workforce: 3,
            levels: [
                { bonus: [{ from: "body_pop", to: "sys_defense", value: 0.4 }], level: 1 },
            ],
        },
        {
            name: 3, image: "military_school_dome", workforce: 3,
            levels: [
                { bonus: [{ from: "direct", to: "sys_fighter_lvl", value: 6 }, { from: "direct", to: "sys_corvette_lvl", value: 6 }, { from: "direct", to: "sys_frigate_lvl", value: 6 }, { from: "direct", to: "sys_capital_lvl", value: 6 }], level: 1 },
            ],
        },
        {
            name: 4, image: "removecontact_open", workforce: 1,
            levels: [
                { bonus: [{ from: "direct", to: "sys_remove_contact", value: 6 }], level: 1 },
            ],
        },
        ],
    },
]