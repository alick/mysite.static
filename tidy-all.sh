#!/bin/bash
# Tidy all html pages

newfile=".new"

if [[ -d ".git" && -f "tidy.conf" ]]; then
    :
else
    echo "Please run this script from the top working directory." 1>&2
    exit 1
fi

for file in index.html html/*.html; do
    echo "Doing $file"
    newfile="${file}.new"
    tidy -q -config ./tidy.conf -o "$newfile" "$file"
    if [ $? -eq 0 ]; then
        cp "$newfile" "$file"
    else
        echo "Error with $file" 1>&2
    fi
    rm "$newfile"
    echo "Done with $file"
    #sleep 1
done
# vim:set et sw=4:
