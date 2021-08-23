window.BENCHMARK_DATA = {
  "lastUpdate": 1629732100087,
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
          "id": "27b0bba6dc5d654fe992a0328ba802f63a653fb3",
          "message": "Merge pull request #183 from TeoZosa/dependabot/pip/dot-github/workflows/tox-3.24.3",
          "timestamp": "2021-08-23T14:09:16Z",
          "tree_id": "de06a12266c5bb9fe410973ffb47a47499a1bd5d"
        },
        "date": 1629732098352,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 354.5993013789081,
            "unit": "iter/sec",
            "range": "stddev: 0.00002950347242712082",
            "extra": "mean: 2.820084518247393 msec\nrounds: 137"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1027.244794973983,
            "unit": "iter/sec",
            "range": "stddev: 0.000014717532958755655",
            "extra": "mean: 973.4777970087713 usec\nrounds: 936"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2142.9092364509165,
            "unit": "iter/sec",
            "range": "stddev: 0.000012018427627213132",
            "extra": "mean: 466.6553221153681 usec\nrounds: 832"
          }
        ]
      }
    ]
  }
}