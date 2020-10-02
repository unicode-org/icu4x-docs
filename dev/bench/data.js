window.BENCHMARK_DATA = {
  "lastUpdate": 1601613929621,
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
          "id": "8ddae047ea363f6752d0d7b996f71139a10f6c93",
          "message": "Scope out subbenchmarks to optional features (#286)",
          "timestamp": "2020-10-01T21:37:27-07:00",
          "tree_id": "5ee69cf09d17353894e316262bc5e06432fd0051",
          "url": "https://github.com/unicode-org/icu4x/commit/8ddae047ea363f6752d0d7b996f71139a10f6c93"
        },
        "date": 1601613929213,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 738,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1186,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2071,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2122,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2349,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2333,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3542,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5276,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2451,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3247,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 141,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3317,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6669,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 343,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 120,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 122,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 270,
            "range": "± 8",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}