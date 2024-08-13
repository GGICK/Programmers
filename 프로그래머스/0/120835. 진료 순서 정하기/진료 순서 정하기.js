function solution(emergency) {

    const sortedEmergency = [...emergency].sort((a, b) => b - a);
    

    const rankDict = {};
    sortedEmergency.forEach((level, index) => {
        rankDict[level] = index + 1;
    });
    

    const treatmentOrder = emergency.map(level => rankDict[level]);
    
    return treatmentOrder;
}