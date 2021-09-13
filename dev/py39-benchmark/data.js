window.BENCHMARK_DATA = {
  "lastUpdate": 1631548242963,
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
          "id": "ad221c71292383e6aae28abbc19a0c81b5cc77ac",
          "message": "Merge pull request #218 from TeoZosa/dependabot/pip/sphinx-4.2.0",
          "timestamp": "2021-09-13T14:23:20Z",
          "tree_id": "accf806f68780b5fbcde42ab43d478f61f3d6517"
        },
        "date": 1631548240015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 278.6279151828159,
            "unit": "iter/sec",
            "range": "stddev: 0.0006893441583141363",
            "extra": "mean: 3.5890158362053235 msec\nrounds: 116"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 761.2935687878555,
            "unit": "iter/sec",
            "range": "stddev: 0.0002931547249727431",
            "extra": "mean: 1.313553720928205 msec\nrounds: 645"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1604.4389541449698,
            "unit": "iter/sec",
            "range": "stddev: 0.00018199015288476565",
            "extra": "mean: 623.2708308512214 usec\nrounds: 739"
          }
        ]
      }
    ]
  }
}