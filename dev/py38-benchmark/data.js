window.BENCHMARK_DATA = {
  "lastUpdate": 1629813010715,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "b0c1f58857d9b755ff431709cc56820b2d1a65a7",
          "message": "Merge pull request #185 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-24T13:34:59Z",
          "tree_id": "59fe788aa6e6c8300de1eccb0996090693a43b9e"
        },
        "date": 1629813008039,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 280.6613538400147,
            "unit": "iter/sec",
            "range": "stddev: 0.0002806917916345837",
            "extra": "mean: 3.5630128135490637 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 822.9279428745815,
            "unit": "iter/sec",
            "range": "stddev: 0.0001607111248636855",
            "extra": "mean: 1.215173222222696 msec\nrounds: 747"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1628.151060513281,
            "unit": "iter/sec",
            "range": "stddev: 0.00013885142292107208",
            "extra": "mean: 614.193623830424 usec\nrounds: 747"
          }
        ]
      }
    ]
  }
}