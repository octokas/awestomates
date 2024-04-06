#!/bin/bash -e
read -p "Commit description: " desc
git add . && \
git add -u && \
git commit -m "$desc" && \
git push origin HEAD
