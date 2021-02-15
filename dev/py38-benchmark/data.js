window.BENCHMARK_DATA = {
  "lastUpdate": 1613399164702,
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
          "id": "8178f1fafaf7a6405ff988f7fe911fcd9976ab48",
          "message": "Merge pull request #66 from TeoZosa/dependabot/pip/pre-commit-2.10.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1f26a28",
          "timestamp": "2021-02-15T14:21:24Z",
          "tree_id": "01df230fbdbf2317b3d8566a818581094b361e37",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8178f1fafaf7a6405ff988f7fe911fcd9976ab48"
        },
        "date": 1613399163152,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 874.3379388586077,
            "unit": "iter/sec",
            "range": "stddev: 0.0006680356174378139",
            "extra": "mean: 1.1437225305645962 msec\nrounds: 409"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1232.8443221718567,
            "unit": "iter/sec",
            "range": "stddev: 0.0004584179664428507",
            "extra": "mean: 811.1324211951893 usec\nrounds: 1104"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9377.443189117552,
            "unit": "iter/sec",
            "range": "stddev: 0.00002055521506362391",
            "extra": "mean: 106.63887584629593 usec\nrounds: 1772"
          }
        ]
      }
    ]
  }
}