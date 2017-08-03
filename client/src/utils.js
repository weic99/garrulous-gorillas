

var sortArgsByVote = function(data) {
  let results = [];
  // sort array of argument objects
  return data.sort((a, b)=> {
    return a.votes - b.votes
  }).map(obj => obj.body)

  // return 
}

exports.sortArgsByVote = sortArgsByVote;