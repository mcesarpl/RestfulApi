import { ClientRepository } from './ClientRepository';
import Title from '../models/Title';

class TitleRepository extends ClientRepository {
  constructor() {
    super(Title);
  }
}

export default new TitleRepository();
