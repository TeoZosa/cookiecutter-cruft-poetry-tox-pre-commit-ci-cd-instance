window.BENCHMARK_DATA = {
  "lastUpdate": 1613429125399,
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
        "date": 1613429124449,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1119.2430335503518,
            "unit": "iter/sec",
            "range": "stddev: 0.00005555760757003137",
            "extra": "mean: 893.4610000009552 usec\nrounds: 526"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1637.0508890000713,
            "unit": "iter/sec",
            "range": "stddev: 0.000046076273265017714",
            "extra": "mean: 610.8545596959488 usec\nrounds: 1315"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13401.89269199013,
            "unit": "iter/sec",
            "range": "stddev: 0.00000859976711929151",
            "extra": "mean: 74.6163264385535 usec\nrounds: 1789"
          }
        ]
      }
    ]
  }
}