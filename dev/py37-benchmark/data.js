window.BENCHMARK_DATA = {
  "lastUpdate": 1629985047536,
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
          "id": "fbf79cfb7b5c85dde51770acc33e4dc36dde87ae",
          "message": "Merge pull request #301 from TeoZosa/dependabot/pip/importlib-metadata-4.7.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2eb4b90",
          "timestamp": "2021-08-26T13:25:59Z",
          "tree_id": "f355935d4f258b7d2f7dd89a6ece74071d2e8a23"
        },
        "date": 1629985045741,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 356.17875381170904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000305377872217422",
            "extra": "mean: 2.8075790296257863 msec\nrounds: 135"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1028.6618674132808,
            "unit": "iter/sec",
            "range": "stddev: 0.00001610397919164838",
            "extra": "mean: 972.1367454930985 usec\nrounds: 943"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2147.5858208071836,
            "unit": "iter/sec",
            "range": "stddev: 0.00001444382684280661",
            "extra": "mean: 465.6391331658838 usec\nrounds: 796"
          }
        ]
      }
    ]
  }
}