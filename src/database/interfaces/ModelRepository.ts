import { Title } from "./ITittle";

export interface ModelRepository<T> {
  create(instance: Title): Promise<T>;
  findOne(id: string): Promise<T>;
}
