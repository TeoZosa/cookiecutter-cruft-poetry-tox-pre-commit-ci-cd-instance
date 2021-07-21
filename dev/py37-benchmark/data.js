window.BENCHMARK_DATA = {
  "lastUpdate": 1626875957392,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "ca37ad7c2a6cef5ef098fb8262590b3eb629acd7",
          "message": "Merge pull request #120 from TeoZosa/dependabot/pip/mutmut-2.2.0",
          "timestamp": "2021-07-21T13:25:29Z",
          "tree_id": "8764bcbb5241fe57a470a23e13ba66e956c629d7"
        },
        "date": 1626875956105,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1216.5528943663874,
            "unit": "iter/sec",
            "range": "stddev: 0.00001438916727441133",
            "extra": "mean: 821.9946741574489 usec\nrounds: 623"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1748.6335815121565,
            "unit": "iter/sec",
            "range": "stddev: 0.00001546066738559608",
            "extra": "mean: 571.8750975462997 usec\nrounds: 1507"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13384.1772427826,
            "unit": "iter/sec",
            "range": "stddev: 0.000005531214482059001",
            "extra": "mean: 74.7150894567874 usec\nrounds: 1878"
          }
        ]
      }
    ]
  }
}