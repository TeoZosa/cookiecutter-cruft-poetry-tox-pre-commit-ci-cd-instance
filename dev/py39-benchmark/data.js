window.BENCHMARK_DATA = {
  "lastUpdate": 1630079121023,
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
      }
    ]
  }
}