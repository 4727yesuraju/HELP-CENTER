
export async function getCard(req,res,next){
    try {
        res.json({message : "getcard"})
    } catch (error) {
        next(err);
    }
}

export async function getCards(req,res,next){
    try {
        res.json({message : "getcards"})
    } catch (error) {
        next(err);
    }
}

export async function createCard(req,res,next){
    try {
        res.json({message : "creadcard"})
    } catch (error) {
        next(err);
    }
}