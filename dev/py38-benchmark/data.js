window.BENCHMARK_DATA = {
  "lastUpdate": 1612203746672,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "373163c133a7421a9de8d49d0dc19a8e440ad950",
          "message": "Merge pull request #54 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.0.1\n\n⬆️ Bump pip from 21.0 to 21.0.1 in /.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3948eba",
          "timestamp": "2021-02-01T18:17:17Z",
          "tree_id": "c6e73ce4e17ea70930555d4f9f28a6b893ff8d45",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/373163c133a7421a9de8d49d0dc19a8e440ad950"
        },
        "date": 1612203745810,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1281.8641907701424,
            "unit": "iter/sec",
            "range": "stddev: 0.0000164034811165463",
            "extra": "mean: 780.1138429486834 usec\nrounds: 624"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1909.7683508559076,
            "unit": "iter/sec",
            "range": "stddev: 0.00001618573600360755",
            "extra": "mean: 523.6237156992504 usec\nrounds: 1516"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14263.598963518745,
            "unit": "iter/sec",
            "range": "stddev: 0.000005544125703336343",
            "extra": "mean: 70.10853309586501 usec\nrounds: 1677"
          }
        ]
      }
    ]
  }
}