window.BENCHMARK_DATA = {
  "lastUpdate": 1601584428040,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "filmil@gmail.com",
            "name": "Filip Filmar",
            "username": "filmil"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd4d2a5b7057fed49717780872cbe5fb7d137d4a",
          "message": "Implements From<FixedDecimal> for PluralOperands (#278)\n\n* Implements From<FixedDecimal> for PluralOperands\r\n\r\nThis will allow us to convert FixedDecimal representation without loss\r\nof precision into PluralOperands, for correct plural selection.\r\n\r\nFor example, a number `25` may sometimes be pluralized differently from\r\n`25.0`.\r\n\r\nAdded the benchmarks for the conversion, though without a baseline it is\r\nnot just as useful yet.  (Until we try to reimplement.)\r\n\r\nSee issue #190.\r\n\r\n* Rewrite eq() to branchless\r\n\r\n* Adds a test for eq()\r\n\r\nWe needed to add a custom implementation for eq() to account\r\nfor loss of precision in PluralOperands.\r\n\r\n* fixup:first\r\n\r\n* Clean up the code for From\r\n\r\n* Adds more illustrative naming in From\r\n\r\n* Makes clippy happy\r\n\r\n* Pulls num_fractional_digits out of the loop\r\n\r\nIt is possible to compute it based on the low end of the magnitude\r\nrange.  No performance change per benchmark.\r\n\r\n* fixup: benchmark was wrong\r\n\r\n* fixup: moves new operand tests to json\r\n\r\nDefines new tests for the data model for conversion, and places them\r\ninto the JSON files instead of inline with the tests.\r\n\r\n* fixup: moves the benchmark loop in\r\n\r\nThis allows criterion to run the benchmark loop\r\nwith a specific time limit.\r\n\r\n* fixup: formatting\r\n\r\n* fixup: adds individual sample measurements\r\n\r\nHelps smoke out specific performance regressions.",
          "timestamp": "2020-10-01T13:26:52-07:00",
          "tree_id": "cca4272fa893e7481952a652fd042f3698158b81",
          "url": "https://github.com/unicode-org/icu4x/commit/bd4d2a5b7057fed49717780872cbe5fb7d137d4a"
        },
        "date": 1601584427293,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 30496,
            "range": "± 3306",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 70755,
            "range": "± 7388",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 260,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 122,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 70,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}