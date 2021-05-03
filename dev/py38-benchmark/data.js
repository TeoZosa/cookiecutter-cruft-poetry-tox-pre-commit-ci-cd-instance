window.BENCHMARK_DATA = {
  "lastUpdate": 1620060286509,
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
          "id": "cc43e982dff6c08de912c76a4cfae76f97549e80",
          "message": ":construction_worker: Include minor versions in Dependabot PR auto-merging\n\nFor `cookiecutter` template.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0acfe6b",
          "timestamp": "2021-05-03T16:40:06Z",
          "tree_id": "b55aaf15d9944cb569358ad8e036480d287306a3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/cc43e982dff6c08de912c76a4cfae76f97549e80"
        },
        "date": 1620060283531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 897.123545657228,
            "unit": "iter/sec",
            "range": "stddev: 0.0002955898770814123",
            "extra": "mean: 1.1146736754829072 msec\nrounds: 567"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1342.5819481798214,
            "unit": "iter/sec",
            "range": "stddev: 0.00024156124985591577",
            "extra": "mean: 744.8334914347165 usec\nrounds: 1284"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7583.9800274207955,
            "unit": "iter/sec",
            "range": "stddev: 0.0001520811396746953",
            "extra": "mean: 131.85688733150394 usec\nrounds: 1926"
          }
        ]
      }
    ]
  }
}