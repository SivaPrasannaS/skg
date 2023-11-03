# Write a shell script to check whether the given number is prime or not. 

read number
factors=0
for ((i=2; i < number; i++)); 
do
  if [ $((number % i)) -eq 0 ]; 
  then
    factors=$((factors + 1))
    break
  fi
done
if [ $number -le 1 ] || [ $factors -gt 0 ]; 
then
  echo "Not Prime"
else
  echo "Prime"
fi