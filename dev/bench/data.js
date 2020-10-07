window.BENCHMARK_DATA = {
  "lastUpdate": 1602084171670,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "sffc@google.com",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c08d490c92c0187ee5504b8505d5fac7387d8675",
          "message": "Fix parsing of datetime data with variable numbering system. (#309)\n\n- Adds better error handling that reveals the JSON file with a parse error.",
          "timestamp": "2020-10-07T10:14:22-05:00",
          "tree_id": "f41d71416781609796330dedd4bb13b2bdb380fa",
          "url": "https://github.com/unicode-org/icu4x/commit/c08d490c92c0187ee5504b8505d5fac7387d8675"
        },
        "date": 1602084169660,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 652,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1089,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2002,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2049,
            "range": "± 87",
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
            "value": 2285,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2279,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3376,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5046,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2366,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3252,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 118,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3396,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6891,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 327,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 121,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 117,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 257,
            "range": "± 13",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}