window.BENCHMARK_DATA = {
  "lastUpdate": 1626963377555,
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
          "id": "cb6dc7c5f71c5190d4fd5d97825b9c4b229fea64",
          "message": "Merge pull request #125 from TeoZosa/dependabot/pip/typer-cli-0.0.12",
          "timestamp": "2021-07-22T14:10:11Z",
          "tree_id": "919c805b2060090e24a49a68045b000c647ba9e7"
        },
        "date": 1626963376119,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1235.5965231789078,
            "unit": "iter/sec",
            "range": "stddev: 0.000020444995568539876",
            "extra": "mean: 809.3256829723252 usec\nrounds: 552"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1812.0784514231732,
            "unit": "iter/sec",
            "range": "stddev: 0.000021472714534455408",
            "extra": "mean: 551.8524869685517 usec\nrounds: 1458"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14564.882683968253,
            "unit": "iter/sec",
            "range": "stddev: 0.000004290372980081139",
            "extra": "mean: 68.65829417910193 usec\nrounds: 1890"
          }
        ]
      }
    ]
  }
}