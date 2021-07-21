window.BENCHMARK_DATA = {
  "lastUpdate": 1626876040933,
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
        "date": 1626876038930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 942.6209959231451,
            "unit": "iter/sec",
            "range": "stddev: 0.0001978925781022899",
            "extra": "mean: 1.0608717653489794 msec\nrounds: 456"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1232.9505185289127,
            "unit": "iter/sec",
            "range": "stddev: 0.00018251288151597742",
            "extra": "mean: 811.0625568276201 usec\nrounds: 1223"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8778.779770156856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000775367408002361",
            "extra": "mean: 113.91104756944284 usec\nrounds: 1871"
          }
        ]
      }
    ]
  }
}