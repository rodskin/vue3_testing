const library = {
    calculBonus : function (carac) {
        let bonus = Math.floor((carac - 10) / 2)
        if (bonus >= 0) {
            bonus = '+' + bonus
        }
        return bonus
    },
    calculMonnaie : function (amount) {
        let strAmount = amount.toString();
        let bourse = {};
        let pp = this.platiniumFromAmount(amount);
        if (strAmount.length > 3 && pp != '') {
            bourse.pp = pp + ' pp';
        }
        let po = this.goldFromAmount(amount);
        if (strAmount.length > 2 && po != '' && po > 0) {
            bourse.po = po + ' po';
        }
        let pa = this.silverFromAmount(amount);
        if (strAmount.length > 1 && pa != '' && pa > 0) {
            bourse.pa = pa + ' pa';
        }
        let pc = this.copperFromAmount(amount);
        if (pc != '' && pc > 0) {
            bourse.pc = pc + ' pc';
        }

        let count = Object.keys(bourse).length;
        let bourse_string = '';
        let i = 1;
        if (count == 0) {
            return 'rien';
        } else {
            Object.keys(bourse).forEach(key => {
                if (count > 1) {
                    if (i == count) {
                        bourse_string += ' et ';
                    } else {
                        bourse_string += ', ';
                    }
                }
                bourse_string += ' ' + bourse[key];
                i ++;
            });
            return bourse_string.slice(3);
        }
    },
    platiniumFromAmount: function (amount) {
        return amount.toString().slice(0, -3);
    },
    goldFromAmount: function (amount) {
        let amountString = amount.toString();
        return amountString.charAt(amountString.length -3);
    },
    silverFromAmount: function (amount) {
        let amountString = amount.toString();
        return amountString.charAt(amountString.length -2);
    },
    copperFromAmount: function (amount) {
        let amountString = amount.toString();
        return amountString.charAt(amountString.length -1);
    }
}

export default library
