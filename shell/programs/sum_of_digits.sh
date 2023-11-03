# Write a script o calculate the sum of digits of the given number.

read number
sum=0
for ((i = 0; i < ${#number}; i++))
do
    digit="${number:i:1}"
    sum=$((sum + digit))
done
echo $sum