import { JOB_LIST_UPDATE } from "./actionTypes";

export const companyListUpdate = (payload) => ({
    type: JOB_LIST_UPDATE,
    payload,
});
