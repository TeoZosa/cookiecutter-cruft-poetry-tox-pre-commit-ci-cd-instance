window.BENCHMARK_DATA = {
  "lastUpdate": 1613429098556,
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
        "date": 1613429097661,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1155.4509944248136,
            "unit": "iter/sec",
            "range": "stddev: 0.0002963709077043831",
            "extra": "mean: 865.4629273116014 usec\nrounds: 454"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1708.2939654338595,
            "unit": "iter/sec",
            "range": "stddev: 0.00021333035852760438",
            "extra": "mean: 585.3793435054531 usec\nrounds: 1409"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15063.498371692465,
            "unit": "iter/sec",
            "range": "stddev: 0.000011157874444068755",
            "extra": "mean: 66.38564132480764 usec\nrounds: 1631"
          }
        ]
      }
    ]
  }
}