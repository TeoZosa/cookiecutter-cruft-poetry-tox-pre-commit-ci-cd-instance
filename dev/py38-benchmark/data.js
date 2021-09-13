window.BENCHMARK_DATA = {
  "lastUpdate": 1631547086369,
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
          "id": "469b2d722151c1125b58d133da61e92e6ea209a6",
          "message": "Merge pull request #329 from TeoZosa/dependabot/pip/hypothesis-6.21.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@eca744f",
          "timestamp": "2021-09-13T14:39:13Z",
          "tree_id": "accf806f68780b5fbcde42ab43d478f61f3d6517"
        },
        "date": 1631547084225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 364.41231063410294,
            "unit": "iter/sec",
            "range": "stddev: 0.00003076950229996205",
            "extra": "mean: 2.7441443958353933 msec\nrounds: 144"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1062.2636452134502,
            "unit": "iter/sec",
            "range": "stddev: 0.000012811208465505571",
            "extra": "mean: 941.3858833501366 usec\nrounds: 943"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2186.015357366529,
            "unit": "iter/sec",
            "range": "stddev: 0.000010977573664356295",
            "extra": "mean: 457.4533278689726 usec\nrounds: 854"
          }
        ]
      }
    ]
  }
}