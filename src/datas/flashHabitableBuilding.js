module.exports = [
    {
        idLine: 0,
        buildings: [
            {
                name: 2,
                image: "hab_open_poor",
                workforce: 0,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_habitation", value: 9 }, { from: "direct", to: "sys_happiness", value: -5 }], level: 1 },
                ],
            },
            {
                name: 3,
                image: "hab_open_rich",
                workforce: 0,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_habitation", value: 5 }, { from: "body_act", to: "sys_credit", value: 32 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 1,
        buildings: [
            {
                name: 2, image: "lift_open", workforce: 3,
                levels: [
                    { bonus: [{ from: "body_ind", to: "sys_credit", value: 20 }, { from: "body_ind", to: "sys_mobility", value: 5 }], level: 1 },
                ],
            },
            {
                name: 3, image: "research_open", workforce: 5,
                levels: [
                    { bonus: [{ from: "body_tec", to: "sys_technology", value: 22 }], level: 1 },
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
                    { bonus: [{ from: "direct", to: "sys_technology", value: 4 }, { from: "body_pop", to: "sys_technology", value: 0.6 }], level: 1 },
                ],
            },
            {
                name: 2, image: "ideo_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_ideology", value: 4 }, { from: "body_pop", to: "sys_ideology", value: 0.6 }], level: 1 },
                ],
            },
            {
                name: 3, image: "ideo_credit_open", workforce: 4,
                levels: [
                    { bonus: [{ from: "body_act", to: "sys_ideology", value: 7 }, { from: "body_pop", to: "sys_credit", value: 2 }, { from: "body_act", to: "sys_happiness", value: 4 }], level: 1 },
                ],
            },
            {
                name: 4, image: "market_open", workforce: 2,
                levels: [
                    { bonus: [{ from: "body_pop", to: "sys_credit", value: 8 }], level: 1 },
                ],
            },
        ],
    },
    {
        idLine: 3,
        buildings: [
            {
                name: 2, image: "finance_open", workforce: 5,
                levels: [
                    { bonus: [{ from: "sys_mobility", to: "sys_credit", value: 25 }, { from: "direct", to: "sys_happiness", value: -32 }], level: 1 },
                ],
            },
            {
                name: 3, image: "happy_pot_open", workforce: 5,
                levels: [
                    { bonus: [{ from: "body_act", to: "sys_happiness", value: 25 }], level: 1 },
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
                    { bonus: [{ from: "direct", to: "sys_defense", value: 24 }], level: 1 },
                ],
            },
            {
                name: 2, image: "counterintelligence_open", workforce: 5,
                levels: [
                    { bonus: [{ from: "direct", to: "sys_ci", value: 150 }, { from: "direct", to: "sys_remove_contact", value: 150 }], level: 1 },
                ],
            },
        ],
    },
]