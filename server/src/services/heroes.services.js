import Hero from "../models/Hero.js";

export class HeroService {
  async getAllHeroes() {
    const heroes = await Hero.find();
    return heroes;
  }
  async addNewHero(data){
    const newHero = new Hero(data);
    await newHero.save();
    return newHero;
  }
  async updateHero(id, data){
    const updateHero = await Hero.findByIdAndUpdate(id, data, {new: true});
    return updateHero;
  }
  async deleteHero(id){
    await Hero.findByIdAndRemove(id);
  }
}

export default new HeroService();