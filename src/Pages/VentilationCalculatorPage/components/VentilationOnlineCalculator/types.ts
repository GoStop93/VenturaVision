import { Dispatch, SetStateAction } from "react";
import { IVentilationEntity } from "../../../../models/ventilation";

export interface IVentilationOnlineCalculatorProps {
  rooms: IVentilationEntity[],
  setRooms: Dispatch<SetStateAction<IVentilationEntity[]>>,
}