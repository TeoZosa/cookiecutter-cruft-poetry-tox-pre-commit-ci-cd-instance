window.BENCHMARK_DATA = {
  "lastUpdate": 1631547064556,
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
        "date": 1631547061120,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 354.1111391549088,
            "unit": "iter/sec",
            "range": "stddev: 0.000045535406513968995",
            "extra": "mean: 2.823972164181319 msec\nrounds: 134"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1018.0269909459087,
            "unit": "iter/sec",
            "range": "stddev: 0.000028100928317482352",
            "extra": "mean: 982.292226919093 usec\nrounds: 899"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2129.0820888098174,
            "unit": "iter/sec",
            "range": "stddev: 0.000012670221438251615",
            "extra": "mean: 469.685976532268 usec\nrounds: 767"
          }
        ]
      }
    ]
  }
}