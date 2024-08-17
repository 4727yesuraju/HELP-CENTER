import Card from "../models/card.model.js";
import { errorHandler } from "../utils/error.js";

import { data } from "../data/data.js";

export async function createCard(req,res,next){
    try {
        const {title, description} = req.body;

        //checking length greated then 4 
        if(title.length < 4 || description.length < 4) {
            return next(errorHandler(401,"title and description length must be greater then 4"));
        }

        //checking strings or not 
        if(!isNaN(title) || !isNaN(description)){
            return next(errorHandler(401,"title and description must be string format"));
        }
        const newCard = new Card({title,description});

        if(newCard){
            await newCard.save();

            res.status(201).json({
                success : true,
                card : {
                    _id : newCard._id,
                    title : newCard.title,
                    description : newCard.description
                }
            })
        }else {
            next(errorHandler(401,"invalid title and description data"));
        }
    } catch (error) {
        next(error);
    }
}


export async function getCards(req,res,next){
    try {
        const cards = await Card.find();
        
        res.json({
            success : true,
            cards
        });
    } catch (error) {
        next(error);
    }
}


export async function getCard(req,res,next){
    try {
        const {id} = req.params;
        const card = await Card.findById(id);
        if (!card) {
            return next(errorHandler(404, 'Card not found!'));
          }
        res.json({
            success : true,
            card
        })
    } catch (error) {
        next(error);
    }
}


export async function deleteCard(req, res, next){
    const {id} = req.params;
    const card = await Card.findById(id);
  
    if (!card) {
      return next(errorHandler(404, 'Card not found!'));
    }

    try {
      await Card.findByIdAndDelete(id);
      res.status(200).json({
        success : true,
        "message" : 'Card has been deleted!'
      });
    } catch (error) {
      next(error);
    }
};
