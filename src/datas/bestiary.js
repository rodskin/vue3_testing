const bestiary = {
   gobelin: {
        nom: 'Gobelin',
        attributes: {
            for: 9,
            dex: 14,
            con: 10,
            int: 10,
            wis: 8,
            cha: 8
        },
        xp: 50,
        competences: {
            acrobatie: {
                nom: 'Acrobatie',
                score: 0,
                maitrise: false,
                caracteristique: ['dex']
            }
        }
   }
}

export default bestiary
