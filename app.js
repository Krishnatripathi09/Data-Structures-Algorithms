function eligibleToVote(age) {
  if (age < 8) {
    console.log("Invalid Input");
  } else if (age < 18) {
    console.log("Not eligible to vote");
  } else {
    console.log("Eligible Ba Re");
  }
}

eligibleToVote(10);
eligibleToVote(18);
eligibleToVote(19);
eligibleToVote(7);
