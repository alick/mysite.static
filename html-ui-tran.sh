#!/bin/bash
# Use ./ui-tran to transform UI of html pages.
# For example, splitting out nav bar, add main container...

newfile=".new"

for file in html/*.html; do
    echo "Doing $file"
    newfile="${file}.new"
    ./ui-tran "$file" > "$newfile"
    if [ $? -eq 0 ]; then
        cp "$newfile" "$file"
    fi
    rm "$newfile"
    echo "Done with $file"
done
