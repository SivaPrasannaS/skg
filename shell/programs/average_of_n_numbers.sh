# Write a program to calculate the average of N numbers.

read n
sum=0
count=0
for ((i = 0; i < $n; i++))
do
    read value
    sum=$((sum + value))
    count=$((count + 1))
done
average=$(bc -l <<< "scale=0; $sum / $count")
echo $average