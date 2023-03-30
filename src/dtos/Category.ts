import { IBaseDTO } from "./Base";

export interface ICategory extends IBaseDTO, ICategoryRequest {}

export interface ICategoryRequest {
  name: string;
  description: string;
}