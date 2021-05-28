window.BENCHMARK_DATA = {
  "lastUpdate": 1622208815380,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "59ee4d51615938ede5a8f605d604c64700232322",
          "message": "Merge pull request #189 from TeoZosa/dependabot/pip/hypothesis-6.13.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c3455d2",
          "timestamp": "2021-05-28T13:26:28Z",
          "tree_id": "cc37474e5c6c2231e242027c517ee94711d7e094",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/59ee4d51615938ede5a8f605d604c64700232322"
        },
        "date": 1622208813190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 861.251170311416,
            "unit": "iter/sec",
            "range": "stddev: 0.0003839249640284159",
            "extra": "mean: 1.1611014701302693 msec\nrounds: 385"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1233.7052720140334,
            "unit": "iter/sec",
            "range": "stddev: 0.000381460936176517",
            "extra": "mean: 810.5663667688574 usec\nrounds: 987"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11281.626915659615,
            "unit": "iter/sec",
            "range": "stddev: 0.000006614105924801289",
            "extra": "mean: 88.63969775599797 usec\nrounds: 1426"
          }
        ]
      }
    ]
  }
}