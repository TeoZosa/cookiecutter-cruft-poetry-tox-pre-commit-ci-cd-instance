window.BENCHMARK_DATA = {
  "lastUpdate": 1619808534798,
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
          "id": "4cdc7b8d70275c5d6765430631fbd8e8748805cb",
          "message": "Merge pull request #154 from TeoZosa/dependabot/pip/pylint-2.8.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@81ccf9d",
          "timestamp": "2021-04-30T18:43:59Z",
          "tree_id": "0e9bcca84c9ee66c7e801aec00022d8a13fa225e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4cdc7b8d70275c5d6765430631fbd8e8748805cb"
        },
        "date": 1619808533823,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 927.013438992538,
            "unit": "iter/sec",
            "range": "stddev: 0.00042737739933562105",
            "extra": "mean: 1.078733012853387 msec\nrounds: 389"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1295.349229477204,
            "unit": "iter/sec",
            "range": "stddev: 0.00018730129890943948",
            "extra": "mean: 771.9925848904813 usec\nrounds: 1284"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7352.525470841499,
            "unit": "iter/sec",
            "range": "stddev: 0.0001595489939847497",
            "extra": "mean: 136.00768932603913 usec\nrounds: 1677"
          }
        ]
      }
    ]
  }
}