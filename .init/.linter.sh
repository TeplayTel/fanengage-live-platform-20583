#!/bin/bash
cd /home/kavia/workspace/code-generation/fanengage-live-platform-20583/match_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

