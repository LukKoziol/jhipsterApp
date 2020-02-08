import { ICar } from 'app/shared/model/car.model';

export interface IDriver {
  id?: number;
  firstName?: string;
  lastName?: string;
  mileage?: number;
  cars?: ICar[];
}

export class Driver implements IDriver {
  constructor(public id?: number, public firstName?: string, public lastName?: string, public mileage?: number, public cars?: ICar[]) {}
}
