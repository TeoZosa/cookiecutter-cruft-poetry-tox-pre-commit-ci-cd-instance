window.BENCHMARK_DATA = {
  "lastUpdate": 1628603415139,
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
          "id": "272b92e586ecdacb5b60d5b6735b93f263172600",
          "message": "Merge pull request #157 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-10T13:41:40Z",
          "tree_id": "f6d8f4abc45ac6332554f12135ff9110ea65c71c"
        },
        "date": 1628603412658,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 299.43748809374904,
            "unit": "iter/sec",
            "range": "stddev: 0.00003867969682468319",
            "extra": "mean: 3.3395952068864405 msec\nrounds: 116"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 864.906706452766,
            "unit": "iter/sec",
            "range": "stddev: 0.000022069428581598655",
            "extra": "mean: 1.1561940640988793 msec\nrounds: 780"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1785.6734069044394,
            "unit": "iter/sec",
            "range": "stddev: 0.000015639646766718175",
            "extra": "mean: 560.0128198882423 usec\nrounds: 694"
          }
        ]
      }
    ]
  }
}