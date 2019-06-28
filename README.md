# claireFinder
## A thing Tommy's brother did for Simon

This is dumb and I'm sure I could make it way way faster and simpler if I got around to learning regex properly but I mostly did it to get the idea out of my head and also to play around with streams, which I've never used before and which I probably didn't even need in this case. Maybe I'll improve it as a way to learn regex.

### Usage

running the file with `node claireFinder.js` will create a text file called possibleClaireNumbers.txt in the directory from which you run it... or maybe in the directory where the js file is. I'm not actually sure what the behaviour would be if you ran it from outside. Anyway, you'd already know that if you looked at the code; it's only like 60 lines and you really shouldn't exec random code from github without reading it first. Remember to try all the relevant area codes!

#### Why does it output multiple lists with and without 1s and 2s?

So it turns out there's some controversy among mathematicians over whether 1 is a prime number. It's mostly a matter of definitions. A prime number can only be divided by 1 and itself, but 1 is itself 1 obviously, and it's a little undefined whether 'and' in this case is, so to speak, 'exclusive and', it made it way harder to do with my limited regex knowledge because I had to include the possiblity for 11s, as Simon specifically mentions 11 in the episode dialog, as far as I can remember. I actually haven't seen the episode in several months or maybe even a couple of years so I'm working from memory here.

So why is 2 optional then? There's no controversy over whether 2 is prime.

Because as far as I remember Simon says (heh) something like 'All prime numbers, three, five, seven, eleven.' and I thought it was worthwhile (as worthwhile as any of this is) to adjust for that. The wording of this line is also why I disallowed any repeated prime digits other than 1/11, which is to say 22, 33, 55, 77, and 111. It seems logical to me that if he's going to mention 11 he doesn't think 1 is prime, and he also didn't remember any repeated primes. I also figured that a 1 before the hyphen which is generally implied in US-style phone numbers followed by a 1 after it wouldn't count as an 11. I have obviously overthought this significantly.

```
if you are more confused now
than you were before you got here
watch Studio 60
and all will be revealed
```
