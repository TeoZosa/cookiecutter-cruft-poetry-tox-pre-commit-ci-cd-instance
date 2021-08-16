window.BENCHMARK_DATA = {
  "lastUpdate": 1629126114185,
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
          "id": "1f67b2d6997426f3d38e9ded5bd752e0c1f25cb7",
          "message": "Merge pull request #284 from TeoZosa/dependabot/pip/pygments-2.10.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5f2bde9",
          "timestamp": "2021-08-16T14:08:41Z",
          "tree_id": "2d68578a7c684326b3d344aff492e90b1aec7c63"
        },
        "date": 1629126112224,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 320.37909932881064,
            "unit": "iter/sec",
            "range": "stddev: 0.0004044602561203466",
            "extra": "mean: 3.1213022388007983 msec\nrounds: 134"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 958.3116138950872,
            "unit": "iter/sec",
            "range": "stddev: 0.00014614836408581661",
            "extra": "mean: 1.0435019105481451 msec\nrounds: 872"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1888.3591776136527,
            "unit": "iter/sec",
            "range": "stddev: 0.00010307342814634143",
            "extra": "mean: 529.5602721425671 usec\nrounds: 937"
          }
        ]
      }
    ]
  }
}