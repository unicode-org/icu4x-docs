window.BENCHMARK_DATA = {
  "lastUpdate": 1601584524063,
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
        "date": 1601584523387,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 724,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1150,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2167,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2175,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 16,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2372,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2365,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3512,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5702,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2568,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3409,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 117,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3530,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 7206,
            "range": "± 513",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 338,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 125,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 134,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 274,
            "range": "± 18",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}