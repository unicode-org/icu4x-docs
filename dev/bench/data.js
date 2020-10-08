window.BENCHMARK_DATA = {
  "lastUpdate": 1602188841689,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dminor@mozilla.com",
            "name": "Dan Minor",
            "username": "dminor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51928c963c1a92983b7b0adcc7954a668abb86e9",
          "message": "Implement Debug for LanguageIdentifier and Locale using to_string (#294) (#300)\n\n* Implement Debug for LanguageIdentifier and Locale using to_string (#294)\r\n\r\n* Address review feedback\r\n\r\n* Avoid intermediate string",
          "timestamp": "2020-10-08T13:19:13-07:00",
          "tree_id": "8753455a6de10d5e814d2b299db89a461e012d38",
          "url": "https://github.com/unicode-org/icu4x/commit/51928c963c1a92983b7b0adcc7954a668abb86e9"
        },
        "date": 1602188841030,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 606,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1107,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 1934,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 1962,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 14,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 14,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2094,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2096,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3255,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 4918,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2238,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 2964,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 111,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3180,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6253,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 303,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 114,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 117,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 243,
            "range": "± 30",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}