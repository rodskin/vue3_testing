const player = {
    name: 'Player',
    attributes: {
        for: 8,
        dex: 8,
        con: 8,
        int: 8,
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

export default player
