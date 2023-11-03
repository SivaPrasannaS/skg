# Write a program to print the given number in words using switch case.

numbers=("zero" "one" "two" "three" "four" "five" "six" "seven" "eight" "nine")
read number
result=""
for ((i = 0; i < ${#number}; i++))
do
    digit="${number:i:1}"
    if [[ "$digit" =~ [0-9] ]];
    then
        # result="${result}${numbers[digit]} "
        case "$digit" in
            0) result="${result}${numbers[0]} ";;
            1) result="${result}${numbers[1]} ";;
            2) result="${result}${numbers[2]} ";;
            3) result="${result}${numbers[3]} ";;
            4) result="${result}${numbers[4]} ";;
            5) result="${result}${numbers[5]} ";;
            6) result="${result}${numbers[6]} ";;
            7) result="${result}${numbers[7]} ";;
            8) result="${result}${numbers[8]} ";;
            9) result="${result}${numbers[9]} ";;
        esac
    else
        echo "$number is not matching the pattern"
        exit 1
    fi
done
echo "${result#}"