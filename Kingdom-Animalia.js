class Animalia{
    constructor(){
        if(this.constructor === Animalia){
            throw new Error("Animalia cannot be instantiated")
        }
    }
    #Intro(){
        console.log("Welcome to Kingdom Animalia")
    }; 
    HasBackBone(){
        throw new Error("This method cannot be called by this instance")  
    };
    ColdBlood(){
        throw new Error("This method cannot be called by this instance because it is not ColdBlooded")  
    };
    WarmBlood(){
        throw new Error("This method cannot be called by this instance because it is not WarmBlooded")  
    };
    Greetings(){
        this.#Intro()
    };
    Info(){
        throw new Error("This method cannot be called by this instance")
    };
    
}


class Arthropoda extends Animalia{
    HasBackBone(){
        return "Arthropoda has no BackBone\n";
    }
    ColdBlood(){
        return "Arthropoda are ColdBlooded";
    }
    Info(){
        this.Greetings()
        console.log(` ${this.HasBackBone()}\n ${this.ColdBlood()}`);
    }
}


class Fish extends Animalia{
    HasBackBone(){
        return "Fish has BackBone";
    }
    ColdBlood(){
        return "Fish are ColdBlooded"
    }
    Info(){
        this.Greetings()
        console.log(` ${this.HasBackBone()}\n ${this.ColdBlood()}`);
    }
}


class Amphibia extends Animalia{
    HasBackBone(){
        return "Amphibia has BackBone";
    }
    ColdBlood(){
        return "Amphibia are ColdBlooded"
    }
    Info(){
        this.Greetings()
        console.log(` ${this.HasBackBone()}\n ${this.ColdBlood()}`);
    }
}


class Reptiles extends Animalia{
    HasBackBone(){
        return "Reptiles has BackBone";
    }
    ColdBlood(){
        return "Reptiles are ColdBlooded"
    }
    Info(){
        this.Greetings()
        console.log(` ${this.HasBackBone()}\n ${this.ColdBlood()}`);
    }
}
class AVES extends Animalia{
    HasBackBone(){
        return "AVES has BackBone";
    }
    WarmBlood(){
        return "AVES is WarmBlooded"
    }
    Info(){
        this.Greetings()
        console.log(` ${this.HasBackBone()}\n ${this.WarmBlood()}`);
    }
}

class Mammals extends Animalia{
    HasBackBone(){
        return "Mammals has BackBone";
    } 
    WarmBlood(){
        return "Mammals is WarmBlooded"
    }
    Info(){
        this.Greetings()
        console.log(` ${this.HasBackBone()}\n ${this.WarmBlood()}`);
    }
}


const butterfly = new Arthropoda()
try{
    console.log(butterfly.WarmBlood());
    butterfly.Info();
}catch(error){
    console.log(`${error}`);
}

const snake = new Reptiles()

try{
    snake.Info();
    snake.WarmBlood();
}catch(error){
    console.log(`${error}`);
}

const Goat = new Mammals();
try {
    Goat.Info();
    Goat.ColdBlood();
} catch (error)  {
    console.log(`${error}`);
}