import { SubCategoryType } from "./subCategory.type.enum";

export interface financeModel {
    name: string;
    bank: string; 
    category: string;
    tax: string;
    subCategory: SubCategoryType;
    nacionality: string;
    value: number;
} 