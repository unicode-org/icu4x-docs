window.BENCHMARK_DATA = {
  "lastUpdate": 1601516878773,
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
        "date": 1601516876730,
        "tool": "cargo",
        "benches": [
          {
            "name": "isize/smaller",
            "value": 31586,
            "range": "± 2196",
            "unit": "ns/iter"
          },
          {
            "name": "isize/larger",
            "value": 73983,
            "range": "± 6540",
            "unit": "ns/iter"
          },
          {
            "name": "to_string/908070605040302010",
            "value": 270,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "write_to/908070605040302010",
            "value": 123,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "from_string/1000000001",
            "value": 75,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}