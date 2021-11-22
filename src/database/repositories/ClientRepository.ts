import Sequelize, { Model } from 'sequelize';
import { ModelRepository, Title } from '../interfaces';

export abstract class ClientRepository
implements ModelRepository<Model<any, any>> {
  constructor(private readonly model: Sequelize.ModelCtor<Model<any, any>>) {}

  async create(instance: Title): Promise<Model<any, any>> {
    return this.model.create(instance);
  }

  async findOne(id: string): Promise<Model<any, any> | null> {
    return this.model.findOne({ where: { id }});
  }

  async destroy(id: string): Promise<Number> {
    return this.model.destroy({ where: { id }});
  }

  async findAll(param: any): Promise<Model<any, any>[]> {
    return this.model.findAll({ where: { ...param }});
  }
}
