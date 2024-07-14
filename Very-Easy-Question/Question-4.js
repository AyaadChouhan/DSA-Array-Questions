// Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

function getVoteCount(obj) {
    // return obj.upvotes - obj.downvotes;
  
    let { upvotes, downvotes } = obj;
    // return upvotes - downvotes;
  
    let [upVote, downVote] = Object.values(obj);
    return upVote - downVote;
  
    let num = 0;
    let val = Object.values(obj);
    // return val[0] - val[1]
    for (let i = 0; i < val.length; i++) {
      num += val[i] - val[i + 1];
    }
    return num;
  }
  console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
  console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));
  console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
  