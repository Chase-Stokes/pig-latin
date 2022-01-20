## Testing

describe vowell()

Test: If words begin with a vowel it will add "way" to the end
Const: "energy"
Code: vowell("energy")
Expected Output: "energyway"

describe consonant()

Test: It will push consonants to the end of the word until it reaches a vowel and add "ay" to the end
Const: "code"
Code: consonant("code")
Expected Output: "odecay"

Test: If a q is pushed and is followed by a u, the u will also be pushed
Const: "squeal"
Code: consonant("squeal")
Expected Output: "ealsquay"

