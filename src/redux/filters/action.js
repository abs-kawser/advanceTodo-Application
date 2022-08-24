import { STATUSCHANGED, COLORCHANGED } from './actionTypes';


export const colorChanged = (colors, changeType) => {
    // action retrun kora type nama akta action jar moddha js object thakba let's start 

    return {
        type: COLORCHANGED,
        payload: {
            colors,
            changeType

        }

    }

};

export const statusChanged = (status) => {
    // action retrun kora type nama akta action jar moddha js object thakba let's start 

    return {
        type: STATUSCHANGED,
        payload: status,

    }

};