# Write a program to reverse the number.

read number
reversed_number=$(echo "$number" | rev)
echo "$reversed_number"