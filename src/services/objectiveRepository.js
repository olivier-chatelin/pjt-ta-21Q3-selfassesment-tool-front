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
function getSkillsByCheckPointId(id){
    let wholeObjectives = getObjectivesBy('checkpointId',id);
    let skills = [];
    for (const objective of wholeObjectives) {
        for(const skill of objective.skills) {
            if (!skills.includes(skill.name)) {
                skills.push(skill.name);
            }
        }
    }
    return skills;
}
function countSkillOccurrenceByCheckpointId(skillName,id){
    let wholeObjectives = getObjectivesBy('checkpointId',id);
    let result =0;
    for (const objective of wholeObjectives) {
        for(const skill of objective.skills) {
            if (skill.name === skillName && !objective.isBonus) {
                result ++;
            }
        }
    }
    return result;
}
function countSkillCheckedByCheckpointId(skillName,id){
    let wholeObjectives = getObjectivesBy('checkpointId',id);
    let result =0;
    for (const objective of wholeObjectives) {
        for(const skill of objective.skills) {
            if (skill.name === skillName && objective.isChecked) {
                result ++;
            }
        }
    }
    return result;
}
function getDataSkillsByCheckpointId(id){
    const skills = getSkillsByCheckPointId(id);
    let skillCounts = [];
    let skillCheckedCounts= [];
    for (const skill of skills) {
        skillCounts.push(countSkillOccurrenceByCheckpointId(skill,id));
        skillCheckedCounts.push(countSkillCheckedByCheckpointId(skill,id));
    }
    console.log(skills, skillCounts, skillCheckedCounts);
    let result = [];
    for( let i =0; i < skillCounts.length; i++){
        result.push(Math.floor(100*skillCheckedCounts[i]/skillCounts[i]));
    }
    return result;
}
export { getRatiosByCheckpointId, getSkillsByCheckPointId, getDataSkillsByCheckpointId};