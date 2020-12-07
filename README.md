# Where's DigitalCrafts?

This program displays the states which have cities named "Atlanta", "Houston", "Tampa".

# Bugs to fix

- [chk] After lots of debugging, code stopped running. `node index.js` does nothing
1. The code wasn't running because 'main()' was commented out. Once that function was uncommented, the code was able to run, but with an ReferenceError: statesWithCity is not defined. //main(); >> [main();]

- [chk] Started crashing after adding "tampa" search
2. On line 21 on the RHS, the function was missing an db, and let was missing within the () on line 23. .statesWithCity('houston'); >> [db].statesWithCity('houston');

- [chk] Prints "Atlanta" locations twice (instead of Houston)
3. The Houston function was printing AnAtlanta, instead of AHouston on line 15. statesWithAnAtlanta >> [statesWithAHouston]


For each bug you fix, add documentation to this README about how you fixed it (include before/after code samples).

# For the more curious:

`db.js` includes more functions that you can try out. In `index.js`, try to `console.log()` the results of the following function calls:

- `getByAbbreviation('ak')`
- `searchByName('dakota')`
- Why does this only return results for North Dakota (and not South Dakota)?
