import HeroService from "../services/heroes.services.js"

export class HeroController {
  async getAllHeroes(_, res){
    const heroes = await HeroService.getAllHeroes();
   
    res.status(200).send(heroes);
  }
  async addNewHero(req, res){
    const data = req.body;
    const newHero = await HeroService.addNewHero(data);
    res.status(200).send(newHero);
  }
  async updateHero(req, res){
    const { id: _id } = req.params;
    const data = req.body;
    const undateHero = await HeroService.updateHero(_id, data)
    res.status(200).send(undateHero);
  }
  async deleteHero(req, res){
    const { id: _id } = req.params;
    await HeroService.deleteHero(_id)
    res.status(200).send('Deleted');
  }
}

const heroController = new HeroController();
export default heroController;
