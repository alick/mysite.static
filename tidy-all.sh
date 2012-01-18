#!/bin/bash
# Tidy all html pages

newfile=".new"

for file in html/*.html; do
    echo "Doing $file"
    newfile="${file}.new"
    tidy -q -config ./tidy.conf -o "$newfile" "$file"
    if [ $? -eq 0 ]; then
        cp "$newfile" "$file"
    else
        echo "Error with $file" >&2
    fi
    rm "$newfile"
    echo "Done with $file"
    #sleep 1
done
