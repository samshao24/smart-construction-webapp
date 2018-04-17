import {Address} from "./address";

export class Customer {
  public id: number;
  public givenName: string;
  public middleName: string;
  public familyName: string;
  public email: string;
  public cellPhone: string;
  public homePhone: string;
  public address: Address;
}
