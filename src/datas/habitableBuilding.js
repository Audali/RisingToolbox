module.exports = [
    {
        idLine: 0,
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
                name: 2,
                image: "hab_open_poor",
                workforce: 0,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_habitation", value: 4 }, { from: "direct", to: "sys_happiness", value: -1 }], level: 1 },
                ],
            },
            {
                name: 3,
                image: "hab_open_rich",
                workforce: 0,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_habitation", value: 3 }, { from: "body_act", to: "sys_credit", value: 5 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 1,
        buildings: [
            {
                name: 1, image: "factory_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "body_ind", to: "sys_production", value: 3 }, { from: "body_ind", to: "sys_credit", value: 6 }, { from: "body_pop", to: "sys_happiness", value: -0.1 }], level: 1 },
                ],
            },
            {
                name: 2, image: "lift_open", workforce: 3, levels: [
                    { bonus: [{ from: "body_ind", to: "sys_credit", value: 8 }, { from: "body_ind", to: "sys_mobility", value: 1.6 }], level: 1 },
                ],
            },
            {
                name: 3, image: "research_open", workforce: 5, levels: [
                    { bonus: [{ from: "body_tec", to: "sys_technology", value: 3 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 2,
        buildings: [
            {
                name: 1, image: "university_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_technology", value: 3 }, { from: "body_pop", to: "sys_technology", value: 0.1 }], level: 1 },
                ],
            },
            {
                name: 2, image: "ideo_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_ideology", value: 3 }, { from: "body_pop", to: "sys_ideology", value: 0.1 }], level: 1 },
                ],
            },
            {
                name: 3, image: "ideo_credit_open", workforce: 4,
                levels: [
                    { bonus: [{ from: "body_act", to: "sys_ideology", value: 1 }, { from: "body_pop", to: "sys_credit", value: 1 }, { from: "body_act", to: "sys_happiness", value: 1 }], level: 1 },
                ],
            },
            {
                name: 4, image: "market_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "body_pop", to: "sys_credit", value: 2 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 3,
        buildings: [
            {
                name: 1, image: "monument_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_happiness", value: 1.6 }, { from: "direct", to: "sys_ideology", value: 3.8 }], level: 1 },
                ],
            },
            {
                name: 2, image: "finance_open", workforce: 5,
                levels: [
                    { bonus: [{ from: "sys_mobility", to: "sys_credit", value: 2 }, { from: "direct", to: "sys_happiness", value: -6.4 }], level: 1 },
                ],
            },
            {
                name: 3, image: "happy_pot_open", workforce: 5,
                levels: [
                    { bonus: [{ from: "body_act", to: "sys_happiness", value: 5 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 4,
        buildings: [
            {
                name: 1, image: "defense_local_open", workforce: 3,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_defense", value: 4.8 }], level: 1 },
                ],
            },
            {
                name: 2, image: "counterintelligence_open", workforce: 5,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_ci", value: 20 }, { from: "direct", to: "sys_remove_contact", value: 24 }], level: 1 },
                ],
            },
            {
                name: 3, image: "removecontact_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_ci", value: 10 }], level: 1 },
                ],
            },
        ],
    },
]