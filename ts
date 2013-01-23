#!/bin/bash

TIMESTAMP=$(date +"%s")

echo "Timestamp: $TIMESTAMP"
echo -n "Copy to clipboard? (y/n) "

read -e CONFIRM

case ${CONFIRM} in
	y|yes|Y|YES|Yes)
		echo $TIMESTAMP | pbcopy
		;;  
esac
