# Write a program to print the Fibonacci series using for loop.

read number
a=0
b=1
echo $a
echo $b
for ((i = 3; i <= $number; i++))
do
    next=$((a + b))
    echo $next
    a=$b
    b=$next
done
echo