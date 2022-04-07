import { Exercise } from "./exercise";
import { Modality } from "./modality";
import { WodGroup } from "./wor-group";

export class Wod {
    id: number;
    name: string;
    wodGroups: WodGroup[] = [];
    goal: string;
    addGroup(wodGroup: WodGroup) {

        this.wodGroups.push(wodGroup);
    }

   
}


export class wodTemplateResponse {
    name: string;
    wodGroups: wodTemplateGroupResponse[] = [];
    id: number;
    goal: string;
    getWod(): Wod {
        var wod = new Wod();
        var indexes = this.wodGroups.map(x => x.groupIndex);
        indexes.filter((x, i, a) => a.indexOf(x) == i)


        indexes.forEach(i => {
            var wodGroup = new WodGroup();
            var exercises = this.wodGroups.filter(x => x.groupIndex == i).map(e => {
                return {
                    exercise: e.exercise,
                    modality: e.modality,
                    units: e.units
                }
            });
            wodGroup.exercises = exercises;
            wod.addGroup(wodGroup)

        })
        return {
            wodGroups: this.wodGroups.map(g => new WodGroup())
        } as Wod;
    }


}

export class wodTemplateGroup {
    exerciseId: number;
    modalityId: number;
    units: string;
    groupIndex: string;
    detail: string;
}

export class wodTemplateGroupResponse {
    exercise: Exercise;
    modality: Modality;
    units: string;
    groupIndex: string;
    detail: string;
}
