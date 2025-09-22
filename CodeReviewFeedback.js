import React, { useState } from "react";

const FeedbackSystem = () => {
   
  // Component displays 5 categories: 
  const categories = ["Readability", "Performance", "Security", "Documentation", "Testing"]; 

  // settings states for votes (one object per category)
  
  const [votes, setVotes] = useState(
      categories.map(() => ({upvote: 0, downvote: 0}))

  );

  // Handling upvote/downvote per category 
  const handleVotes = (index, type) => {

    const newVotes = [...votes]; 
    if (type === "upvote") {
      newVotes[index].upvote += 1;
    }
     else {
      newVotes[index].downvote += 1; 
     }
     setVotes(newVotes); 

  }; 


  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-around mt-30 gap-30 flex-wrap">
        {categories.map((category, index) => (
          <div className="pa-10 w-300 card">
          <h2> {category}    </h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button onClick={() => handleVotes(index, "upvote")} className="py-10 px-15" data-testid={'upvote-btn-${index}'}>
              👍 Upvote
            </button>
            <button onClick={() => handleVotes(index, "downvote")}  className="py-10 px-15 danger" data-testid={'downvote-btn-${index}'} >
             👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid={'upvote-count-${index}'}>
            Upvotes: <strong>{votes[index].upvote}</strong>
          </p>
          <p className="my-10 mx-0" data-testid={'downvote-count-${index}'}>
            Downvotes: <strong>{votes[index].downvote}</strong>
          </p>
        </div>


        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
