class Singleton {
    private static instance: Singleton;
    public ramdon : number

    private constructor(){
        this.ramdon = Math.random()
    }

    public static getInstance(): Singleton{
        if(!this.instance){            
            this.instance = new Singleton();
        }

        return this.instance;
    }

}

const mySingleton = Singleton.getInstance()
const mySingleton2 = Singleton.getInstance()
console.log(mySingleton);
console.log(mySingleton2);
console.log(mySingleton === mySingleton2);
