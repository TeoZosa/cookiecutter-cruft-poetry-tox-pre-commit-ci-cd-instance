window.BENCHMARK_DATA = {
  "lastUpdate": 1671035629024,
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
        "date": 1671035623833,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.2453318852082,
            "unit": "iter/sec",
            "range": "stddev: 0.0003292112627894183",
            "extra": "mean: 3.4101139601139607 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 615.8521886603115,
            "unit": "iter/sec",
            "range": "stddev: 0.0004005966455586702",
            "extra": "mean: 1.6237662517289106 msec\nrounds: 723"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1576.6371510537613,
            "unit": "iter/sec",
            "range": "stddev: 0.0001098184623873407",
            "extra": "mean: 634.2613449972557 usec\nrounds: 1829"
          }
        ]
      }
    ]
  }
}