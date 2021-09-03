window.BENCHMARK_DATA = {
  "lastUpdate": 1630687652032,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "e522ec805ad4eab2424ab9f7ccf42d08d9a46f04",
          "message": ":arrow_up: Bump template dev-dependencies: `black`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8834781",
          "timestamp": "2021-09-03T16:38:39Z",
          "tree_id": "2005b9f71e6597eaf83624b559530d1084769ec7"
        },
        "date": 1630687649229,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 275.66896995865943,
            "unit": "iter/sec",
            "range": "stddev: 0.0003989197824096425",
            "extra": "mean: 3.6275392190494435 msec\nrounds: 105"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 809.6270351486257,
            "unit": "iter/sec",
            "range": "stddev: 0.00020902102912131462",
            "extra": "mean: 1.2351366204272403 msec\nrounds: 793"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1608.9750942100213,
            "unit": "iter/sec",
            "range": "stddev: 0.00017454967935810596",
            "extra": "mean: 621.5136602167124 usec\nrounds: 827"
          }
        ]
      }
    ]
  }
}