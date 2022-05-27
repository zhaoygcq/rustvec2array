type IParamFromRustVec = IVecItem[]

interface IVecItem {
    [key: string]: any
}

interface IItemVal {
    [key: string]: any
}

export default function transform(param: IParamFromRustVec) {
    let res: any[] = []; 
    if(param && param.length) {
        for(let item of param) {
            res.push(transformItem(item));
        }
    }

    return res;
}

function transformItem(item: IItemVal) {
    let res: IItemVal = {};
    if(item) {
        for(let key in item) {
            if(typeof item[key] === 'object') {
                res = {...res, ...item[key]};
            } else {
                res = item[key];
            }
        }
    }

    return res;
}