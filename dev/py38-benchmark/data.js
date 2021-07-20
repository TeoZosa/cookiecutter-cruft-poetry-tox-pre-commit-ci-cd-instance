window.BENCHMARK_DATA = {
  "lastUpdate": 1626788925505,
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
          "id": "c2c33c351e9fb69e58b6ed65251aa87c5eb42222",
          "message": "Merge pull request #250 from TeoZosa/dependabot/github_actions/actions/setup-node-2.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fde4ac5",
          "timestamp": "2021-07-20T13:23:15Z",
          "tree_id": "16d33e9488e9bd05ae12509fb647f8b1e1cf3e68"
        },
        "date": 1626788923755,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1065.6433354273515,
            "unit": "iter/sec",
            "range": "stddev: 0.00033480663963811677",
            "extra": "mean: 938.4002759225001 usec\nrounds: 569"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1704.543504547771,
            "unit": "iter/sec",
            "range": "stddev: 0.00009506096335755992",
            "extra": "mean: 586.6673378133038 usec\nrounds: 1637"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10678.848965083715,
            "unit": "iter/sec",
            "range": "stddev: 0.00002871185474331557",
            "extra": "mean: 93.64305116306707 usec\nrounds: 2150"
          }
        ]
      }
    ]
  }
}