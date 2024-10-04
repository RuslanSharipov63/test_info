import { FilterStoreForStateType } from "@/type";
import { Cars } from "@/type";

export const sortFilter = (checkFilter: FilterStoreForStateType[], afterArr: Cars[]) => {
    let resultArr: Cars[] = [];
    checkFilter.map(el => {
        if (el.model) {
            afterArr.map(item => {
                if (el.model === item.model) {
                    const checkEl = resultArr.includes(item);
                    if (checkEl === false) {
                        resultArr.push(item);
                    }
                }
            })
        }

    })

    
    return resultArr;

}