import { Title } from "./ITittle";

export interface ModelRepository<T> {
  create(instance: Title): Promise<T>;
  findOne(id: string): Promise<T | null>;
  findAll(param: any): Promise<T[]>;
  destroy(id: string): Promise<Number>;
}
