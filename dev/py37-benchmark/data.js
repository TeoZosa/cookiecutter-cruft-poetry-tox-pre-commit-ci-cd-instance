window.BENCHMARK_DATA = {
  "lastUpdate": 1622554412228,
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
          "id": "ee12de4d65c068916904ea70a0ac6287d4ebcc86",
          "message": "Merge pull request #194 from TeoZosa/dependabot/pip/pylint-2.8.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@bbee650",
          "timestamp": "2021-06-01T13:21:42Z",
          "tree_id": "090ebc73577a21db5505a992d1c3087b671d8c6a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ee12de4d65c068916904ea70a0ac6287d4ebcc86"
        },
        "date": 1622554410203,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1063.8319400981006,
            "unit": "iter/sec",
            "range": "stddev: 0.00012018755429489656",
            "extra": "mean: 939.9980977331678 usec\nrounds: 573"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1461.739952799345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000729364189219619",
            "extra": "mean: 684.1162123843731 usec\nrounds: 1389"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9292.744379289355,
            "unit": "iter/sec",
            "range": "stddev: 0.000018742189867764334",
            "extra": "mean: 107.61083692656928 usec\nrounds: 1809"
          }
        ]
      }
    ]
  }
}