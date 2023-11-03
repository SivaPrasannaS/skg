# Write a program to check whether the string is palindrome or not.

is_palindrome(){
    local input="$1"
    local reversed=""
    local length=${#input}
    for ((i = length - 1; i >= 0; i--))
    do
        reversed="${reversed}${input:i:1}"
    done
    if [ "$input" == "$reversed" ];
    then
        echo "$input is palindrome"
    else
        echo "$input is not palindrome"
    fi
}
read input
is_palindrome "$input"