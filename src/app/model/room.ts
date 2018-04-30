import {RoomExpense} from "./roomExpense";

export class Room {
  public id: number;
  public type: string;
  public typeDisplay: string;
  public height: number;
  public width: number;
  public length: number;
  public closetCount: number;
  public doorCount: number;
  public mantleCount: number;
  public columnCount: number;
  public wallSize: number;
  public ceilingSize: number;
  public trimWithCrown: boolean;
  public trimSize: number;
  public paintingCost: number;
  public laborCost: number;
  public totalCost: number;
  public projectId: number;
  public expense: RoomExpense;
}
