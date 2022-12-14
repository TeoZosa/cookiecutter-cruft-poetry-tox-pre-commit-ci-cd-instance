window.BENCHMARK_DATA = {
  "lastUpdate": 1671017085524,
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
        "date": 1671017080269,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 419.97815323056494,
            "unit": "iter/sec",
            "range": "stddev: 0.00002547867726606875",
            "extra": "mean: 2.3810762352940946 msec\nrounds: 425"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 901.8978628298657,
            "unit": "iter/sec",
            "range": "stddev: 0.00007107997953486862",
            "extra": "mean: 1.1087730010384116 msec\nrounds: 963"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2719.683163249887,
            "unit": "iter/sec",
            "range": "stddev: 0.000007812182271655228",
            "extra": "mean: 367.68988884905605 usec\nrounds: 2789"
          }
        ]
      }
    ]
  }
}