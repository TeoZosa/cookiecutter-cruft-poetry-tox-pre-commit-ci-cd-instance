window.BENCHMARK_DATA = {
  "lastUpdate": 1612144805474,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "e58275fe6ef1e905c5217f71100e6b9f5870366a",
          "message": ":alembic: Test `test-performance` CI test job\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a737126",
          "timestamp": "2021-02-01T01:55:14Z",
          "tree_id": "30fe75947b64c9b080d8be4ecefd0dd43b321e66",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e58275fe6ef1e905c5217f71100e6b9f5870366a"
        },
        "date": 1612144801026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 924.9279418456686,
            "unit": "iter/sec",
            "range": "stddev: 0.00025135885393964537",
            "extra": "mean: 1.0811653046231118 msec\nrounds: 476"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1275.891151156713,
            "unit": "iter/sec",
            "range": "stddev: 0.00009987101362763473",
            "extra": "mean: 783.7659185059852 usec\nrounds: 1178"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8614.975027196779,
            "unit": "iter/sec",
            "range": "stddev: 0.000017955583419659287",
            "extra": "mean: 116.07694704199153 usec\nrounds: 1133"
          }
        ]
      }
    ]
  }
}