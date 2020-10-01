window.BENCHMARK_DATA = {
  "lastUpdate": 1601516963053,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "43288204+SahandFarhoodi@users.noreply.github.com",
            "name": "Sahand Farhoodi",
            "username": "SahandFarhoodi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c7bc2dd61855233b90d0cc75e6e6642d6c695f4",
          "message": "Adding from_str to FixedDecimal (#270)\n\n* Implemented from_str for FixedDecimal and added two tests for it, added Syntax to enum Error for FixedDecimal\r\n\r\n* Handled the case when the input string has only 0 in it and Added tests for it. Added test for test_from_str_usize_limits\r\n\r\n* correction for clipping errors and format error\r\n\r\n* Corrections for clipping errors and format error\r\n\r\n* fixing merging issues\r\n\r\n* fixing merging issues\r\n\r\n* run cargo fmt\r\n\r\n* Fixing two clipping errors\r\n\r\n* cleaning code and adding test cases\r\n\r\n* Added explanations for Error::Syntax\r\n\r\n* resolving warnings related to my code\r\n\r\n* corrections for documentation of Error::Syntax\r\n\r\n* fixing clipping errors\r\n\r\n* fixing new clipping errors\r\n\r\n* Applied cosmetic suggestions of Shane\r\n\r\n* deleted not necessary check on length of FixedDecimal::digits\r\n\r\n* adding from_str to benches",
          "timestamp": "2020-09-30T21:41:13-04:00",
          "tree_id": "04073ae69de74449596bfad966e09e6b336437e4",
          "url": "https://github.com/unicode-org/icu4x/commit/3c7bc2dd61855233b90d0cc75e6e6642d6c695f4"
        },
        "date": 1601516962633,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 712,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1127,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2151,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2149,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 16,
            "range": "± 0",
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
            "value": 2366,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2370,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3465,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5220,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2476,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3470,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 120,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3481,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6951,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 332,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 116,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 130,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 259,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}