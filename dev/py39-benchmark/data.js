window.BENCHMARK_DATA = {
  "lastUpdate": 1627566467990,
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
          "id": "c6bd39eb3998547da034b516d4731e3c7902a846",
          "message": "Merge pull request #259 from TeoZosa/dependabot/pip/pylint-2.9.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8947a08",
          "timestamp": "2021-07-29T13:27:15Z",
          "tree_id": "2bf56f075e338282a18509209a18ad9f2b39dfaf"
        },
        "date": 1627566466082,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1245.9082931570404,
            "unit": "iter/sec",
            "range": "stddev: 0.00002567146809353046",
            "extra": "mean: 802.6272924679498 usec\nrounds: 571"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1826.140203076965,
            "unit": "iter/sec",
            "range": "stddev: 0.000014338485941521586",
            "extra": "mean: 547.6030801550968 usec\nrounds: 1547"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14658.941877451447,
            "unit": "iter/sec",
            "range": "stddev: 0.000003995889787502526",
            "extra": "mean: 68.21774779926042 usec\nrounds: 1931"
          }
        ]
      }
    ]
  }
}