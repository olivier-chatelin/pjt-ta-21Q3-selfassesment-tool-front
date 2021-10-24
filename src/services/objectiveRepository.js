function getObjectivesBy(filterName, filter){
    let result =[];
    for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let objective = JSON.parse(localStorage[key]);
            if(objective[filterName] === filter){
                result.push(objective)
            }
    }
    return result;
}
function getRatiosByCheckpointId(id){
    let wholeObjectives = getObjectivesBy('checkpointId',id);
    let regularObjectives=[];
    let regularObjectivesChecked=[];
    let bonusObjectives=[];
    let bonusObjectivesChecked=[];
    for (const objective of wholeObjectives) {
        if(objective.isBonus) {
            bonusObjectives.push(objective);
            if(objective.isChecked) {
                bonusObjectivesChecked.push(objective);
            }
        } else{
        regularObjectives.push(objective);
            if(objective.isChecked) {
                regularObjectivesChecked.push(objective);
            }
        }
    }
    return {
        regularRatio: Math.floor(100 * regularObjectivesChecked.length/regularObjectives.length),
        bonusRatio: Math.floor(100 * bonusObjectivesChecked.length/regularObjectives.length)
    }
}
export {getObjectivesBy, getRatiosByCheckpointId};