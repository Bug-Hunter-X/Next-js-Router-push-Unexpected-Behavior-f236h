# Next.js router.push() Bug
This repository demonstrates a common but subtle bug related to the `router.push()` method in Next.js.  The issue arises from incorrectly providing both a pathname and a query parameter to `router.push()`, leading to unpredictable routing.

## Bug Description:
The provided `bug.js` file shows an example where `router.push()` is used with both a pathname ('/my-page') and a query parameter ('/my-page?param=value'). This usage is problematic and can lead to unexpected results, like the query parameter being ignored or the page not rendering as intended. 

## Solution:
The `bugSolution.js` file provides the correct approach. It demonstrates how to properly pass query parameters using the object syntax.

## How to Reproduce:
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button in the browser; observe the URL in the address bar. The difference in the generated URL will clearly highlight the problem and its fix.
