const handleUpvoteComment = async (id, upvoteStatus) => {
    setUpvoteLoading(true);

    // Sending the upvote/downvote request to the backend
    const upvotedData = await getPostData({ url: 'comment/upvote', formData: { comment_id: id, upvoteStatus: upvoteStatus } });

    // After getting the response, check if it was successful
    if (upvotedData.isSuccess) {
        // Update localComments state to reflect the change in upvotes
        setLocalComments(prevComments => {
            return prevComments.map(comment => {
                // Only update the comment that was upvoted
                if (comment.id === id) {
                    // Update the comment's like status and vote count
                    const updatedLikes = comment.comment_like.some(like => like.user_id === user.id)
                        ? comment.comment_like.map(like =>
                            like.user_id === user.id
                                ? { ...like, upvote_status: upvoteStatus } 
                                : like
                        )
                        : [...comment.comment_like, { user_id: user.id, upvote_status: upvoteStatus }];

                    return { 
                        ...comment, 
                        comment_like: updatedLikes, 
                        gross_votes: updatedLikes.filter(like => like.upvote_status).length - updatedLikes.filter(like => !like.upvote_status).length 
                    };
                }
                return comment;
            });
        });
    }
    setUpvoteLoading(false);
};



setLocalComments(prevState =>
    prevState.map(comment => {
        // If the comment's id matches the id we want to update
        if (comment.id === id) {
            // Modify the comment - in this case, we're updating the like status
            const updatedLikes = comment.comment_like.some(like => like.user_id === user.id)    
                ? comment.comment_like.map(like =>
                      like.user_id === user.id
                          ? { ...like, upvote_status: upvoteStatus }  // Update the user's like status
                          : like
                  )
                : [...comment.comment_like, { user_id: user.id, upvote_status: upvoteStatus }]; // Add the like if not found

            // Calculate the updated gross_votes (upvotes - downvotes)
            const updatedVotes = updatedLikes.filter(like => like.upvote_status).length - updatedLikes.filter(like => !like.upvote_status).length;

            // Return the updated comment
            return { 
                ...comment,  // Keep other comment fields unchanged
                comment_like: updatedLikes,
                gross_votes: updatedVotes  // Update the gross_votes
            };
        }

        // If it's not the comment we're updating, return it unchanged
        return comment;
    })
);



const handleUpvoteComment1 = async (id, upvoteStatus) => {
    setUpvoteLoading(true);
    const upvotedData = await getPostData({ url: 'comment/upvote', formData: { comment_id: id, upvoteStatus: upvoteStatus } });

    setLocalComments(prevState =>
        prevState.map(comment => {
            if (comment.id === id) {
                // Here you should update the local comment's `comment_like` field
                // This is where you check if the logged-in user has already voted (using user.id)
                const userHasVoted = comment.comment_like.some(like => like.user_id === user.id);
                
                if (userHasVoted) {
                    // Update the existing vote of the user
                    return {
                        ...comment,
                        comment_like: comment.comment_like.map(like =>
                            like.user_id === user.id
                                ? { ...like, upvote_status: upvoteStatus } // Update the vote
                                : like // Keep other likes unchanged
                        ),
                        gross_votes: comment.gross_votes + (upvoteStatus ? 1 : -1), // Update the total votes
                    };
                } else {
                    // If the user hasn't voted yet, add a new vote
                    return {
                        ...comment,
                        comment_like: [
                            ...comment.comment_like,
                            { user_id: user.id, upvote_status: upvoteStatus }
                        ],
                        gross_votes: comment.gross_votes + (upvoteStatus ? 1 : -1),
                    };
                }
            }
            return comment; // Return the comment unchanged if it's not the one being updated
        })
    );

    setUpvoteLoading(false);
};

