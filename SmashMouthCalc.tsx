class SmashCalc {
    smashMouth: string; //the entirety of smash mouth
    smashMouthArr: Array<string>;
    strArr: Array<string>;

    constructor() {
        this.smashMouth = "somebody once told me the world is gonna roll me" //TODO: replace with all of all star //get rid of all punctuation
        this.smashMouthArr = this.smashMouth.split("");
    }
    sing() {
        return this.smashMouth;
    }

    stripAndStoreInput(str) {
        str = str.toLowerCase();
        this.strArr = str.split("");
    }

    countChain(strPos, smPos) {
        var tmpcount = 0;
        while (smPos < this.smashMouthArr.length && strPos < this.strArr.length) {
            if (this.smashMouthArr[smPos] === this.strArr[strPos]) {
                console.log(this.smashMouthArr[smPos]);
                console.log(this.strArr[strPos]);
                tmpcount = tmpcount + 1;
                console.log(tmpcount);

                smPos = smPos + 1;
                strPos = strPos + 1;
            } else {
                break; //end the loop if no match
            }
            
        }
        
        console.log("-----------");
        return tmpcount;
    }

    calculate(str) {
        this.stripAndStoreInput(str);
        var totalcount = 0;
        var tmpcount = 0;
        for (var i = 0; i < this.smashMouthArr.length; i++){
            for (var j = 0; j < this.strArr.length; j++) {
                if (this.smashMouthArr[i] === this.strArr[j]) { //find first character that matches
                    tmpcount = this.countChain(j, i);
                    if (tmpcount > totalcount)
                        totalcount = tmpcount;
                }
            }
        }


        return totalcount;
    }
}



//----------------------------------


let smasher = new SmashCalc();

let button = document.createElement('button');
button.textContent = "Calculate SmashMouth Similarity";
button.onclick = function() {
    alert(smasher.calculate((<HTMLInputElement>document.getElementById("txt")).value));
}

let txtbox = document.createElement("INPUT");
txtbox.id = "txt";
txtbox.setAttribute("type", "text");

document.body.appendChild(button);
document.body.appendChild(txtbox);