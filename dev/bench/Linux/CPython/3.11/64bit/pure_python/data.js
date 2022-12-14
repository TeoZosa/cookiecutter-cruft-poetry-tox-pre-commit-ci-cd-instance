window.BENCHMARK_DATA = {
  "lastUpdate": 1671017101140,
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
        "date": 1671017094800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 452.71850706500163,
            "unit": "iter/sec",
            "range": "stddev: 0.00017289720233852368",
            "extra": "mean: 2.208878109452723 msec\nrounds: 603"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 893.0568982393444,
            "unit": "iter/sec",
            "range": "stddev: 0.00007592080101791779",
            "extra": "mean: 1.119749482895763 msec\nrounds: 1257"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2418.8123792472625,
            "unit": "iter/sec",
            "range": "stddev: 0.00004207190230213777",
            "extra": "mean: 413.4260303030206 usec\nrounds: 3300"
          }
        ]
      }
    ]
  }
}