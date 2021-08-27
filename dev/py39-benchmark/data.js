window.BENCHMARK_DATA = {
  "lastUpdate": 1630079168367,
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
          "id": "529a6d33207a55a8a3a130f525b71ec450498192",
          "message": "Merge pull request #305 from TeoZosa/dependabot/pip/myst-parser-0.15.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4a6e772",
          "timestamp": "2021-08-27T14:40:18Z",
          "tree_id": "e6bad82ed4f46e82ce9547d5770c6e8f510df574"
        },
        "date": 1630079118298,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 281.73569960289257,
            "unit": "iter/sec",
            "range": "stddev: 0.00024733076341919546",
            "extra": "mean: 3.5494259385995575 msec\nrounds: 114"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 815.8303986151077,
            "unit": "iter/sec",
            "range": "stddev: 0.00010686922732962624",
            "extra": "mean: 1.2257449608368662 msec\nrounds: 715"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1626.02575678343,
            "unit": "iter/sec",
            "range": "stddev: 0.00008856749315557938",
            "extra": "mean: 614.996408161565 usec\nrounds: 735"
          }
        ]
      },
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
          "id": "6c12dd1f2c51e84d88d69c5b458ba46a6278f761",
          "message": "Merge pull request #188 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-08-27T13:21:46Z",
          "tree_id": "dea9d63ca7c8b0f1c0100c07808331e681b4febd"
        },
        "date": 1630079165597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 291.435106321412,
            "unit": "iter/sec",
            "range": "stddev: 0.0001524666717444736",
            "extra": "mean: 3.431295606841341 msec\nrounds: 117"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 813.971717024202,
            "unit": "iter/sec",
            "range": "stddev: 0.0003245887151840285",
            "extra": "mean: 1.2285439150833135 msec\nrounds: 789"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1637.0745969100237,
            "unit": "iter/sec",
            "range": "stddev: 0.00020120913675449886",
            "extra": "mean: 610.8457133764697 usec\nrounds: 785"
          }
        ]
      }
    ]
  }
}