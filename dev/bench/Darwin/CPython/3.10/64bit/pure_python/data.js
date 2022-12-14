window.BENCHMARK_DATA = {
  "lastUpdate": 1671036241938,
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
        "date": 1671036236625,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 314.8382602171706,
            "unit": "iter/sec",
            "range": "stddev: 0.00016878613415054888",
            "extra": "mean: 3.176234042553199 msec\nrounds: 329"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 599.7713792804183,
            "unit": "iter/sec",
            "range": "stddev: 0.00015978779914505375",
            "extra": "mean: 1.667301966292156 msec\nrounds: 712"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1660.5837057878482,
            "unit": "iter/sec",
            "range": "stddev: 0.000072796612579822",
            "extra": "mean: 602.1978877153678 usec\nrounds: 1799"
          }
        ]
      }
    ]
  }
}