# MAg05 &middot; ![npm version](https://img.shields.io/npm/v/electron.svg)
MAg05 is a program that calculates stochastic operations based on challenge 5 of a [Matheon](https://www.matheon.de/index.php?&lang=en) math competition.


## Challenge
The challenge is linked [here](https://github.com/SamderJK/MAg05/blob/v1.0.1/airplane.pdf) but the whole document is written in German, so you may have to translate it for yourself.

### Information
* Santa has 22 days to choose an airplane which has enough capacity that he can store all his presents at one time. Only one plane fits that description but only the airline knows, what the maximum capacity is.
* He is offered one plane a day and he can either take it or not. The offer is only available for 24 hours.

### Strategy
The perfect method to solve this problem is to wait for the first 8 planes to notice the highest capacity. As soon as there is a higher number after the first 8, Santa has to take the plane with that capacity.
If it is the maximum capacity, Santa is good to go. If not, he has no chance to transport all presents.

But why 8?

### Start value & first planes
Finding the start value is easy. Devide the **amount of days / airplanes (n)** by Euler's number and round it.

```
22 / e = 8,0933477057717310751015229435521

22 / e + 1 ≈ 9
```

The result shows the first planes for this process.
After that you have to increase the above result by 1.

Et voilà, thats the start value!

#### Examples
Let's look at some examples. In the following 
