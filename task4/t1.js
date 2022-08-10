function isPowOfTwo(number) {
    if (number == 0)
        return false;

    for (let power = 1; power > 0; power = power << 1)
    {

        if (power == number)
            return true;
        if (power > number)
            return false;
    }
}

console.log(isPowOfTwo(1023))

console.log(isPowOfTwo(512))

for (let power = 1; power > 0; power = power << 1)
{
    console.log(power)
}
