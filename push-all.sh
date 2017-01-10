#!/bin/bash

git add --all
echo -n "commit message > "
read text
git commit -m "$text"
git push -u origin master