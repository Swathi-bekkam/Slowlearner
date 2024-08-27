document.addEventListener("DOMContentLoaded", function() {
    // Function to format result
    function formatResult(results) {
        if (!results) {
            return "No results available.";
        }

        return `
            Name: ${results.name}<br>
            Score: ${results.score} out of 10<br>
            Percentage: ${results.percentage.toFixed(2)}%<br>
            Type of Learner: ${results.typeOfLearner}
        `;
    }

    // Load results for Logical Thinking Quiz
    const logicalResults = JSON.parse(localStorage.getItem("quizResults"));
    document.getElementById("logical-result").innerHTML = formatResult(logicalResults);

    // Load results for Observation Skills Quiz
    const observationResults = JSON.parse(localStorage.getItem("observationQuizResults"));
    document.getElementById("observation-result").innerHTML = formatResult(observationResults);

    // Load results for Problem Solving Skills Quiz
    const problemSolvingResults = JSON.parse(localStorage.getItem("observationQuizResults")); // Note: Make sure the key matches
    document.getElementById("problem-solving-result").innerHTML = formatResult(problemSolvingResults);
});
