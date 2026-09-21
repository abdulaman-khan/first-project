let candidates = ["A", "B", "C"];

let votes = [120, 80, 100];

let totalVotes = 0;

for (let vote of votes) {
    totalVotes = totalVotes + vote;
}

console.log("Total Votes:", totalVotes);

for (let i = 0; i < candidates.length; i++) {

    let percentage = (votes[i] / totalVotes) * 100;

    console.log(
        candidates[i],
        "Votes:",
        votes[i],
        "Percentage:",
        percentage.toFixed(2) + "%"
    );
}