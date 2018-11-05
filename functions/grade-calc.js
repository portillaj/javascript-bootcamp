// students score, total possible score
// 15/20 --> you got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const calculateGrade = (studentScore, totalScore) => {
    const percentage = studentScore/totalScore * 100;
    let letterGrade;
    switch(true) {
        case (studentScore >= 90):
                letterGrade = 'A';
                break;
            case (studentScore >= 80):
                letterGrade = 'B';
                break;
            case (studentScore >= 70):
                letterGrade = 'C';
                break;
            case (studentScore >= 60):
                letterGrade = 'D';
                break;
            case (studentScore >= 0):
                letterGrade = 'F';
                break;
            default:
                console.log('cannot calculate grade');
                break;
    }
        return console.log(`score ${studentScore}/${totalScore} --> you got a ${letterGrade}(${percentage}%)`);
};

calculateGrade(50, 100);