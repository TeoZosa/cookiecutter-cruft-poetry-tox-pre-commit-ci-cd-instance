window.BENCHMARK_DATA = {
  "lastUpdate": 1671017131496,
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
        "date": 1671017126221,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 418.2998526524038,
            "unit": "iter/sec",
            "range": "stddev: 0.000029517843350374313",
            "extra": "mean: 2.39062957746479 msec\nrounds: 426"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 846.552577426996,
            "unit": "iter/sec",
            "range": "stddev: 0.000014091041639360541",
            "extra": "mean: 1.1812615384615457 msec\nrounds: 884"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2303.6388360668084,
            "unit": "iter/sec",
            "range": "stddev: 0.000010216698267388723",
            "extra": "mean: 434.09582454660386 usec\nrounds: 2371"
          }
        ]
      }
    ]
  }
}