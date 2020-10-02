window.BENCHMARK_DATA = {
  "lastUpdate": 1601605101855,
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
          "id": "456c03bfe2bd88bad0bac25830472b1acca01834",
          "message": "Some speed improvements to FixedDecimal parsing (#287)\n\n* Some speed improvements to FixedDecimal parsing\r\n\r\n* Change str iteration into bytes iteration.  Since the input alphabet\r\n  is only single bytes, this should be OK.\r\n\r\n* Use `FixedDecimal::default()` instead of zero for initialization.\r\n\r\nSeems to make a 7% improvement in some microbenchmarks, going roughly\r\nfrom 35ns to 31ns.\r\n\r\n```\r\nfrom_string/0012.3400   time:   [30.871 ns 30.887 ns 30.907 ns]\r\n                        change: [-9.2063% -9.1540% -9.1054%] (p = 0.00 < 0.05)\r\n                        Performance has improved.\r\nFound 5 outliers among 100 measurements (5.00%)\r\n  4 (4.00%) high mild\r\n  1 (1.00%) high severe\r\nfrom_string/00.0012216734340\r\n                        time:   [67.715 ns 67.778 ns 67.844 ns]\r\n                        change: [-1.4520% -0.4672% +0.4506%] (p = 0.35 > 0.05)\r\n                        No change in performance detected.\r\nFound 1 outliers among 100 measurements (1.00%)\r\n  1 (1.00%) high mild\r\nfrom_string/00002342561123400.0\r\n                        time:   [72.554 ns 72.708 ns 72.854 ns]\r\n                        change: [-1.1182% -0.8930% -0.6325%] (p = 0.00 < 0.05)\r\n                        Change within noise threshold.\r\nFound 2 outliers among 100 measurements (2.00%)\r\n  1 (1.00%) low mild\r\n  1 (1.00%) high mild\r\nfrom_string/-00123400   time:   [30.959 ns 30.971 ns 30.984 ns]\r\n                        change: [-10.060% -9.6862% -9.4502%] (p = 0.00 < 0.05)\r\n                        Performance has improved.\r\nFound 4 outliers among 100 measurements (4.00%)\r\n  1 (1.00%) low mild\r\n  2 (2.00%) high mild\r\n  1 (1.00%) high severe\r\nfrom_string/922337203685477580898230948203840239384.9823094820384023938423424\r\n                        time:   [215.19 ns 215.40 ns 215.63 ns]\r\n                        change: [+3.1132% +3.6683% +4.0742%] (p = 0.00 < 0.05)\r\n                        Performance has regressed.\r\nFound 7 outliers among 100 measurements (7.00%)\r\n  2 (2.00%) low mild\r\n  3 (3.00%) high mild\r\n  2 (2.00%) high severe\r\nfrom_string/0.000000001 time:   [29.235 ns 29.268 ns 29.308 ns]\r\n                        change: [-9.7930% -9.7035% -9.6051%] (p = 0.00 < 0.05)\r\n                        Performance has improved.\r\nFound 7 outliers among 100 measurements (7.00%)\r\n  1 (1.00%) low mild\r\n  2 (2.00%) high mild\r\n  4 (4.00%) high severe\r\nfrom_string/1000000001  time:   [60.990 ns 61.038 ns 61.088 ns]\r\n                        change: [+5.0850% +5.2075% +5.3511%] (p = 0.00 < 0.05)\r\n                        Performance has regressed.\r\nFound 4 outliers among 100 measurements (4.00%)\r\n  3 (3.00%) high mild\r\n  1 (1.00%) high severe\r\nfrom_string/0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000...\r\n                        time:   [71.210 us 71.251 us 71.306 us]\r\n                        change: [-1.7824% -1.7383% -1.6889%] (p = 0.00 < 0.05)\r\n                        Performance has improved.\r\nFound 13 outliers among 100 measurements (13.00%)\r\n  6 (6.00%) high mild\r\n  7 (7.00%) high severe\r\n\r\n```\r\n\r\n* fixup: remove unneeded mutability removal\r\n\r\n* fixup: remove unneeded mutability",
          "timestamp": "2020-10-01T19:10:37-07:00",
          "tree_id": "92776143631672e1d077216c4602e99d97c22788",
          "url": "https://github.com/unicode-org/icu4x/commit/456c03bfe2bd88bad0bac25830472b1acca01834"
        },
        "date": 1601605101473,
        "tool": "cargo",
        "benches": [
          {
            "name": "langid/construct/langid",
            "value": 715,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "langid/construct/locale",
            "value": 1148,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/langid",
            "value": 2051,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "langid/to_string/locale",
            "value": 2056,
            "range": "± 65",
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
            "value": 2179,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "langid/compare/str/locale",
            "value": 2270,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/langid",
            "value": 3498,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "langid/canonicalize/locale",
            "value": 5303,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "locale/construct/locale",
            "value": 2225,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "locale/to_string/locale",
            "value": 3127,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/struct/locale",
            "value": 130,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "locale/compare/str/locale",
            "value": 3095,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "locale/canonicalize/locale",
            "value": 6344,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "language_subtag_parse",
            "value": 325,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "script_subtag_parse",
            "value": 116,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "region_subtag_parse",
            "value": 118,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "variant_subtag_parse",
            "value": 268,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}