window.BENCHMARK_DATA = {
  "lastUpdate": 1628258062366,
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
          "id": "4c67cf166dec516a25f52a7e1e00d85d348980b1",
          "message": "Merge pull request #269 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7b579be",
          "timestamp": "2021-08-06T13:36:20Z",
          "tree_id": "7aa816e2a9e658023b51dd9214cc4c8c415c373f"
        },
        "date": 1628258059586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 830.9672594736529,
            "unit": "iter/sec",
            "range": "stddev: 0.0007480132037192993",
            "extra": "mean: 1.2034168477749834 msec\nrounds: 427"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1244.6393809693752,
            "unit": "iter/sec",
            "range": "stddev: 0.0002629353638467399",
            "extra": "mean: 803.4455725008153 usec\nrounds: 1200"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8569.891265846743,
            "unit": "iter/sec",
            "range": "stddev: 0.000045820631977330356",
            "extra": "mean: 116.68759485727216 usec\nrounds: 1750"
          }
        ]
      }
    ]
  }
}