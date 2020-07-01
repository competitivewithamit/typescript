import faker, { fake } from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyname: string;
  catchphase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "amit";
  constructor() {
    this.companyname = faker.company.companyName();
    this.catchphase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1>Company Name: ${this.companyname}</h1>
    <h3>CatchPhrase: ${this.catchphase}</h3>
    </div>
    `;
  }
}
