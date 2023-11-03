# Write a program to print the position of the substring in the given string.

read string
read substring
position=$(awk -v a="$string" -v b="$substring" 'BEGIN{print index(a, b)}')
if [ "$position" -ne 0 ]; then
    echo "$position"
else
    echo 0
fi