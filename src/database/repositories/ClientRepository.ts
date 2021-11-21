/* eslint-disable no-useless-constructor */
/* eslint-disable indent */
import Sequelize, { Model } from 'sequelize';
import { ModelRepository } from '../interfaces/modelRepository';

export abstract class ClientRepository
  implements ModelRepository<Model<any, any>> {
  constructor(private readonly model: Sequelize.ModelCtor<Model<any, any>>) {}

  async create(instance: any): Promise<Model<any, any>> {
    return this.model.create(instance);
  }

  async findOne(instance: any): Promise<Model<any, any>> {
    return this.model.findOne(instance);
  }
}
