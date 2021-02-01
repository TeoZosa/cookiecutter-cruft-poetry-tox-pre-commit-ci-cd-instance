window.BENCHMARK_DATA = {
  "lastUpdate": 1612144784525,
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
        "date": 1612144782293,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1036.9654838810363,
            "unit": "iter/sec",
            "range": "stddev: 0.00014399475754043987",
            "extra": "mean: 964.3522523597543 usec\nrounds: 531"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1479.6245929638958,
            "unit": "iter/sec",
            "range": "stddev: 0.00016342887468775993",
            "extra": "mean: 675.8471065940176 usec\nrounds: 1304"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9724.044662611444,
            "unit": "iter/sec",
            "range": "stddev: 0.00004168812643399211",
            "extra": "mean: 102.83786579518288 usec\nrounds: 1222"
          }
        ]
      }
    ]
  }
}