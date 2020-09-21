window.BENCHMARK_DATA = {
  "lastUpdate": 1600665284262,
  "repoUrl": "https://github.com/unicode-org/icu4x",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "elango@google.com",
            "name": "Elango",
            "username": "echeran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2831539d93c41d208b66b10a5893425d24f42772",
          "message": "Continuous benchmarking (#197)",
          "timestamp": "2020-09-20T22:06:44-07:00",
          "tree_id": "07e252752ecf785cf988aca8aa49aaef17ded29f",
          "url": "https://github.com/unicode-org/icu4x/commit/2831539d93c41d208b66b10a5893425d24f42772"
        },
        "date": 1600665283843,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 736,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1184,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2115,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2037,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/langid",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/struct/locale",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/langid",
            "value": 2212,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2232,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3291,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 4975,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2260,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3088,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 131,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3209,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6433,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 330,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 97,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 115,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 265,
            "range": "± 13",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}