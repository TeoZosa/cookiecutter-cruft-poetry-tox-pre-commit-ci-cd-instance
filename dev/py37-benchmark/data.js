window.BENCHMARK_DATA = {
  "lastUpdate": 1620095638343,
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
          "id": "d1a15050c5d710ad6e4413a19de2d093e04ef91c",
          "message": "Merge pull request #157 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.1.1\n\n⬆️ Bump pip from 21.1 to 21.1.1 in /.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7892fcc",
          "timestamp": "2021-05-04T02:29:58Z",
          "tree_id": "c9822d66bf36a9629bf4efe08c5b7ace5fe90c12",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d1a15050c5d710ad6e4413a19de2d093e04ef91c"
        },
        "date": 1620095637395,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1108.0201482395703,
            "unit": "iter/sec",
            "range": "stddev: 0.00013848607837032117",
            "extra": "mean: 902.5106642589546 usec\nrounds: 554"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1523.136263953526,
            "unit": "iter/sec",
            "range": "stddev: 0.00013888840199951293",
            "extra": "mean: 656.5400769884841 usec\nrounds: 1182"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8460.667694980333,
            "unit": "iter/sec",
            "range": "stddev: 0.00016750488352864777",
            "extra": "mean: 118.19398137966043 usec\nrounds: 1826"
          }
        ]
      }
    ]
  }
}