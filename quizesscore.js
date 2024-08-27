// Example: Storing Logical Thinking quiz score
function saveLogicalThinkingScore(score) {
    localStorage.setItem('logicalThinkingScore', score);
}

// Example: Storing Observation quiz score
function saveObservationScore(score) {
    localStorage.setItem('observationScore', score);
}

// Example: Storing Problem Solving quiz score
function saveProblemSolvingScore(score) {
    localStorage.setItem('problemSolvingScore', score);
}
function calculateLearnerType() {
    const logicalThinkingScore = parseInt(localStorage.getItem('logicalThinkingScore')) || 0;
    const observationScore = parseInt(localStorage.getItem('observationScore')) || 0;
    const problemSolvingScore = parseInt(localStorage.getItem('problemSolvingScore')) || 0;

    const totalScore = logicalThinkingScore + observationScore + problemSolvingScore;
    const averageScore = totalScore / 3;

    let learnerType;
    if (averageScore >= 75) {
        learnerType = 'Fast Learner';
    } else if (averageScore >= 50) {
        learnerType = 'Moderate Learner';
    } else {
        learnerType = 'Slow Learner';
    }

    return {
        logicalThinkingScore,
        observationScore,
        problemSolvingScore,
        learnerType
    };
}