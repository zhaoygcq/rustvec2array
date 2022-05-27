declare type IParamFromRustVec = IVecItem[];
interface IVecItem {
    [key: string]: any;
}
export default function transform(param: IParamFromRustVec): any[];
export {};
