#! /bin/bash

# declare a function called addcommitpush

function addcommitpush () {

# find current branch and store it in a var called current
current=$(git branch | grep "*" | cut -b 3-)

# wrap inline var in single quotes and store in another var called message
message=\'"$@"\'

# git add and pass message var to git commit
git add -A && git commit -a -m "$message"

# PUSH
git push origin "$current"

}

addcommitpush $1