window.BENCHMARK_DATA = {
  "lastUpdate": 1671036513017,
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
        "date": 1671036508224,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 334.5790105635218,
            "unit": "iter/sec",
            "range": "stddev: 0.00026774327090002743",
            "extra": "mean: 2.988830645161299 msec\nrounds: 372"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 663.249489946711,
            "unit": "iter/sec",
            "range": "stddev: 0.0002828435971234164",
            "extra": "mean: 1.5077282608695943 msec\nrounds: 828"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1879.1314780399816,
            "unit": "iter/sec",
            "range": "stddev: 0.00004080004888515718",
            "extra": "mean: 532.160741111657 usec\nrounds: 1997"
          }
        ]
      }
    ]
  }
}