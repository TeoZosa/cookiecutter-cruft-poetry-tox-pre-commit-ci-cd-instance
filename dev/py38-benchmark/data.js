window.BENCHMARK_DATA = {
  "lastUpdate": 1613429094840,
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
          "id": "be74c5e2110a4a61a8517e87e081402c876cdade",
          "message": "Merge pull request #70 from TeoZosa/dependabot/pip/sphinx-3.5.0\n\n⬆️ Bump sphinx from 3.4.3 to 3.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7d2fe16",
          "timestamp": "2021-02-15T22:41:01Z",
          "tree_id": "3e1c4c10e931138c1e22df4e090515114ca344d2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/be74c5e2110a4a61a8517e87e081402c876cdade"
        },
        "date": 1613429093991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1471.2549375204587,
            "unit": "iter/sec",
            "range": "stddev: 0.000028756449564615028",
            "extra": "mean: 679.6918565896704 usec\nrounds: 516"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2196.3455199431405,
            "unit": "iter/sec",
            "range": "stddev: 0.000021861094350988234",
            "extra": "mean: 455.30176874260127 usec\nrounds: 1734"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14228.89297993044,
            "unit": "iter/sec",
            "range": "stddev: 0.00003121775612628839",
            "extra": "mean: 70.27953625137805 usec\nrounds: 1462"
          }
        ]
      }
    ]
  }
}