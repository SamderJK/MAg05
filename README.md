# MAg05 &middot; ![npm version](https://img.shields.io/npm/v/electron.svg)
MAg05 is a program that calculates stochastic operations based on challenge 5 of a [Matheon](https://www.matheon.de/index.php?&lang=en) math competition.


## Installation
* Clone the project.
* Install all dependencies

Open a new command line instance.
```
  mkdir MAg05 && cd MAg05
  git clone https://github.com/SamderJK/MAg05.git
  cd MAg05
  npm start
```
If there is an error, you can type `npm install` before you run `npm start`.

The above method starts the application in development mode.
Do the following steps if you want to install the app after that.
| Note: The app's author is not a known publisher, so there may be a security warning. |
| --- |

Of course, you can analyse the source code if you want! :D
```
  npm run dist
```

## Challenge
The challenge is linked [here](https://github.com/SamderJK/MAg05/blob/v1.0.1/airplane.pdf), but the whole document is written in German, so you may have to translate it for yourself.

### Information
* Santa has 22 days to choose an airplane which has enough capacity that he can store all his presents at one time. Only one plane fits that description, but only the airline knows what the maximum capacity is.
* He is offered one plane a day, and he can either take it or not. The offer is only available for 24 hours.

## Mathematical Docs
### Strategy
The perfect method to solve this [problem](https://github.com/SamderJK/MAg05/blob/v1.0.1/README.md#challenge) is to wait for the first 8 planes to notice the highest capacity. As soon as there is a higher number after the first 8, Santa has to take the plane with that capacity.
If it is the maximum capacity, Santa is good to go. If not, he has no chance to transport all presents.

But why 8?

### Start value & first planes
Finding the start value is easy. Divide the **amount of days or airplanes (n)** by Euler's number and round it.

```js
// First planes
22 / e ≈ 8

// Start value
22 / e + 1 ≈ 9
```

The result shows the first planes for this process.
After that, you have to increase the above result by 1.

Et voilà, that's the start value!

## Probability (p)
To find out the chance to get the best airplane, there is one cool and simple idea. At first, you have to create a kind of counter and set it to 0.
Then, you'll have to run the process multiple times, the amount of runs is labeled **N**.

If the try succeeds, the counter increases by 1. At the end, there is an easy formula.
```js
  // "p" stands for the probability.
  // "N" is the amount of runs.
  // "a" stands for the value of the counter.

  p = a / N * 100
```

### Examples
Let's look at some basic examples in vanilla JavaScript to make this calculation happen.

**Returning the start value (9 in default case)**
```js
function startValue(n) {
  return Math.round(n / Math.E + 1);
}
```

**Returning the probability**
```js
function getChance(a, N) {
  return a / N * 100;
}
```
