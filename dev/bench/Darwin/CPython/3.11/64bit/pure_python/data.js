window.BENCHMARK_DATA = {
  "lastUpdate": 1671036934502,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "6ea74d3c94a45b88eb7702d574d76b5945728e73",
          "message": "Merge pull request #870 from TeoZosa/ci/fix-benchmarks-gh-pages-publishing\n\n💚 Fix benchmarks not being published on pushes to `master`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@858a704",
          "timestamp": "2022-12-14T11:21:39Z",
          "tree_id": "5c3ad8c622a604eb8700975c5cea442686d6e8b2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6ea74d3c94a45b88eb7702d574d76b5945728e73"
        },
        "date": 1671036930416,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 362.0927638171961,
            "unit": "iter/sec",
            "range": "stddev: 0.00021538830552035032",
            "extra": "mean: 2.761723237597904 msec\nrounds: 383"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 778.5180668769202,
            "unit": "iter/sec",
            "range": "stddev: 0.00012610059693741573",
            "extra": "mean: 1.28449170616113 msec\nrounds: 844"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1890.3897111097235,
            "unit": "iter/sec",
            "range": "stddev: 0.0001735559433874621",
            "extra": "mean: 528.9914529914394 usec\nrounds: 2106"
          }
        ]
      }
    ]
  }
}