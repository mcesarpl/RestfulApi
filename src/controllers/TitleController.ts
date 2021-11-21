import { Request, Response } from "express";
import { TitleRepository } from "src/database/repositories/TitleRepository";
import Title from "../database/models/Title";

class TitleController {
  static async findOne(req: Request, res: Response) {
    const { id } = req.body;

    const title = await Title.findOne({ where: { id } });

    return res.status(200).json(title);
  }

  static async findByDate(req: Request, res: Response) {
    const { createdAt } = req.body;

    const titles = await Title.findAll({ where: { createdAt } });

    return res.status(200).json(titles);
  }

  static async create(req: Request, res: Response) {
    const { title, writer, price, rating, ranking } = req.body;

    const newTitle = await Title.create({
      title,
      writer,
      price,
      rating,
      ranking,
    });

    return res.status(201).json(newTitle);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.body;

    await Title.destroy({ where: { id } });

    return res.status(201).send();
  }
}

export default TitleController;
