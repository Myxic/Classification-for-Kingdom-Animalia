class Animalia{
    constructor(){
        if(this.constructor === Animalia){
            throw new Error("Animalia cannot be instantiated")
        }
    }
    #Intro(){
        console.log("Welcome to Animalia")
    }; 
    HasBackBone(){
        throw new Error("This method cannot be called by this instance")  
    };
    ColdBlood(){
        throw new Error("This method cannot be called by this instance")  
    };
    WarmBlood(){
        throw new Error("This method cannot be called by this instance")  
    };
    Greetings(){
        this.#Intro()
    };

    
}


class Arthropoda extends Animalia{
    HasBackBone(){
        return "Arthropoda has no BackBone";
    }
    ColdBlood(){
        return "Arthropoda are ColdBlooded";
    }
}


class Fish extends Animalia{
    HasBackBone(){
        return "Fish has BackBone";
    }
    ColdBlood(){
        return "Fish are ColdBlooded"
    }
}


class Amphibia extends Animalia{
    HasBackBone(){
        return "Amphibia has BackBone";
    }
    ColdBlood(){
        return "Amphibia are ColdBlooded"
    }
}


class Reptiles extends Animalia{
    HasBackBone(){
        return "Reptiles has BackBone";
    }
    ColdBlood(){
        return "Reptiles are ColdBlooded"
    }
}
class AVES extends Animalia{
    HasBackBone(){
        return "AVES has BackBone";
    }
    WarmBlood(){
        return "AVES is WarmBlooded"
    }
}

class Mammals extends Animalia{
    HasBackBone(){
        return "Mammals has BackBone";
    } 
    WarmBlood(){
        return "Mammals is WarmBlooded"
    }
}


const butterfly = new Arthropoda()

butterfly.Greetings();
console.log(butterfly.ColdBlood())