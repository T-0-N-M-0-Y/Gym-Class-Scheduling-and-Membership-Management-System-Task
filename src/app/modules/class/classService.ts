import { TClass } from "./classInterface";
import { ClassModel } from "./classModel";

const createClass = async (payload: TClass): Promise<TClass> => {
    return await ClassModel.create(payload);
}

const getAllClasses = async (): Promise<TClass[]> => {
    return await ClassModel.find();
}

export const ClassService = {
    createClass,
    getAllClasses
};
