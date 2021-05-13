const library = {
    calculBonus : function (carac) {
        let bonus = Math.floor((carac - 10) / 2)
        if (bonus >= 0) {
            bonus = '+' + bonus
        }
        return bonus
    }
}

export default library
