# Write a program to print multiplication table using while loop.

read num
i=1
while [ $i -le 10 ]; do
  result=$((num * i))
  echo "$num x $i = $result"
  i=$((i + 1))
done