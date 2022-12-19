class Animalia{
    constructor(){
        if(this.constructor === Animalia){
            throw new Error("Animalia cannot be instantiated")
        }
    }

    HasBackBone(){
        throw new Error("This method cannot be called")  
    };
    ColdBlood(){
        throw new Error("This method cannot be called")  
    };
    WarmBlood(){
        throw new Error("This method cannot be called")  
    };

    
}

class Arthropoda{
    HasBackBone(){
        return "Arthropoda has no BackBone";
    }
}
class Fish{
    HasBackBone(){
        return "Fish has BackBone";
    }
}
class Amphibia{
    HasBackBone(){
        return "Amphibia has BackBone";
    }
}
class Reptiles{
    HasBackBone(){
        return "Reptiles has BackBone";
    }
}
class AVES{
    HasBackBone(){
        return "AVES has BackBone";
    }
}

class Mammals{
    HasBackBone(){
        return "Mammals has BackBone";
    } 
}