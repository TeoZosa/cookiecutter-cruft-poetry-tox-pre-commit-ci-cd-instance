window.BENCHMARK_DATA = {
  "lastUpdate": 1628523416174,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "e44e16099c9e1802bb70ff52714be679f038b772",
          "message": "Merge pull request #279 from TeoZosa/dependabot/pip/xdoctest-0.15.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1fafbc7",
          "timestamp": "2021-08-09T14:24:42Z",
          "tree_id": "a279f11385946797c7bcc1a2c68450edb94ff8f0"
        },
        "date": 1628523413948,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 335.9145707650941,
            "unit": "iter/sec",
            "range": "stddev: 0.0001707958610145621",
            "extra": "mean: 2.9769473760020446 msec\nrounds: 125"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 922.4911156721056,
            "unit": "iter/sec",
            "range": "stddev: 0.00007613201722337039",
            "extra": "mean: 1.0840212800005375 msec\nrounds: 875"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1942.0988137316933,
            "unit": "iter/sec",
            "range": "stddev: 0.000035958103731047274",
            "extra": "mean: 514.9068589762051 usec\nrounds: 702"
          }
        ]
      }
    ]
  }
}