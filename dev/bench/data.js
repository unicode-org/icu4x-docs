window.BENCHMARK_DATA = {
  "lastUpdate": 1600831538495,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "zibi@braniecki.net",
            "name": "Zibi Braniecki",
            "username": "zbraniecki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97e53be62ec500175572a4f9588bf2bdfe99e9cd",
          "message": "Adds support for CldrJSONDataProvider for Dates (based on #256) (#258)\n\n* Add support for Dates to CLDRJsonDataProvider\r\n\r\n* Apply feedback",
          "timestamp": "2020-09-22T20:18:24-07:00",
          "tree_id": "92b70d9e32b1bca60515fbc73fa21b4d9c190d28",
          "url": "https://github.com/unicode-org/icu4x/commit/97e53be62ec500175572a4f9588bf2bdfe99e9cd"
        },
        "date": 1600831537930,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 534,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 908,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 1618,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 1857,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 1729,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 1707,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 2709,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 4082,
            "range": "± 290",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 1910,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 2567,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 93,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 2670,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 5429,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 254,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 90,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 96,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 204,
            "range": "± 12",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}