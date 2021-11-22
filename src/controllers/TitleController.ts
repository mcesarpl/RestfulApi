import { Request, Response } from "express";
import TitleRepository from "src/database/repositories/TitleRepository"
import { Title } from "../database/classes/Title";

class TitleController {
  static async findOne(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const title = await TitleRepository.findOne(id);

      return res.status(200).json(title);

    }catch(error) {
      return res.status(500).send();
    }
  }

  static async findByDate(req: Request, res: Response) {
    const { createdAt } = req.body;

    try {
      const titles = await TitleRepository.findAll( { createdAt } );

      return res.status(200).json(titles);
    } catch(error) {
      return res.status(500).send();
    }
  }

  static async create(req: Request, res: Response) {

    const title = new Title(req.body);
    try {
      const newTitle = await TitleRepository.create(title);

      return res.status(200).json(newTitle);
    } catch(error) {
      return res.status(500).send();
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await TitleRepository.destroy(id);

      return res.status(201).send();
    } catch(error) {
      return res.status(500).send();
    }
  }
}

export default TitleController;
