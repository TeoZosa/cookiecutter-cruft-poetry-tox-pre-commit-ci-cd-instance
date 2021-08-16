window.BENCHMARK_DATA = {
  "lastUpdate": 1629126551806,
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
          "id": "d6224ed9d3f3b6e813bf108883975ddcd627759c",
          "message": "Merge pull request #284 from TeoZosa/dependabot/pip/pygments-2.10.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8dd499e",
          "timestamp": "2021-08-16T14:28:11Z",
          "tree_id": "2d68578a7c684326b3d344aff492e90b1aec7c63"
        },
        "date": 1629126549700,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 372.2348562580929,
            "unit": "iter/sec",
            "range": "stddev: 0.00003060489971184251",
            "extra": "mean: 2.6864759793119415 msec\nrounds: 145"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1063.2607821745826,
            "unit": "iter/sec",
            "range": "stddev: 0.00001486555426428093",
            "extra": "mean: 940.5030419299379 usec\nrounds: 954"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2295.300298227667,
            "unit": "iter/sec",
            "range": "stddev: 0.000010371407157013469",
            "extra": "mean: 435.6728401822443 usec\nrounds: 876"
          }
        ]
      }
    ]
  }
}