window.BENCHMARK_DATA = {
  "lastUpdate": 1627567393883,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "db1ddeafb8de124264c58d28df4591add715bd48",
          "message": "Merge pull request #137 from TeoZosa/dependabot/pip/typer-cli-0.0.12",
          "timestamp": "2021-07-29T13:57:40Z",
          "tree_id": "51cc8d8a268b237e81d35e4f9822d85bbff81bc7"
        },
        "date": 1627567392184,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1390.972748612091,
            "unit": "iter/sec",
            "range": "stddev: 0.00001738679700140532",
            "extra": "mean: 718.9213455100378 usec\nrounds: 657"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2003.652939298096,
            "unit": "iter/sec",
            "range": "stddev: 0.000016007966907139883",
            "extra": "mean: 499.0884301301762 usec\nrounds: 1467"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15389.189935068438,
            "unit": "iter/sec",
            "range": "stddev: 0.000004696378861446169",
            "extra": "mean: 64.98067826957084 usec\nrounds: 2126"
          }
        ]
      }
    ]
  }
}