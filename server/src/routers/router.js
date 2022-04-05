import { tryCatchWrapper } from "../midlewares/try.catch.wrapper.js";
import heroController from "../controllers/heroes.controller.js";
import { todoValidation } from "../midlewares/validation.js";
import { Router,} from "express";
const heroRouter = new Router();
import cors from "cors";

heroRouter.get("/heroes", cors(), heroController.getAllHeroes.bind(heroController), tryCatchWrapper);
heroRouter.post("/heroes", cors(), todoValidation, heroController.addNewHero.bind(heroController), tryCatchWrapper);
heroRouter.put("/heroes/:id", cors(), todoValidation, heroController.updateHero.bind(heroController), tryCatchWrapper);
heroRouter.delete("/heroes/:id", cors(), heroController.deleteHero.bind(heroController), tryCatchWrapper);
heroRouter.use((err, _, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

export default heroRouter;