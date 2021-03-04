window.BENCHMARK_DATA = {
  "lastUpdate": 1614868144739,
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
          "id": "447c51a2b98cb3a4b500bf2b38eb4961208ceae2",
          "message": "Merge pull request #96 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1d26b58",
          "timestamp": "2021-03-04T14:24:17Z",
          "tree_id": "0ec79250d1c25fd3f042d9506104c7f5abce3dfb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/447c51a2b98cb3a4b500bf2b38eb4961208ceae2"
        },
        "date": 1614868143312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1105.0515869131482,
            "unit": "iter/sec",
            "range": "stddev: 0.00013772857962722712",
            "extra": "mean: 904.9351286788344 usec\nrounds: 544"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1671.380692950231,
            "unit": "iter/sec",
            "range": "stddev: 0.00005434890884292472",
            "extra": "mean: 598.3077369613825 usec\nrounds: 1342"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11981.271940542956,
            "unit": "iter/sec",
            "range": "stddev: 0.000013180031038896745",
            "extra": "mean: 83.46359259371613 usec\nrounds: 1782"
          }
        ]
      }
    ]
  }
}