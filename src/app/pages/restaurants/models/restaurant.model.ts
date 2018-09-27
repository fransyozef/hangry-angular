import {Deserializable} from '../../../_shared/models/deserializable.model';

export class Restaurant implements Deserializable {
    public id: number;
    public name: string;
    
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
  }