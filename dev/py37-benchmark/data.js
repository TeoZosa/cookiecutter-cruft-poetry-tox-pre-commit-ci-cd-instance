window.BENCHMARK_DATA = {
  "lastUpdate": 1631120697451,
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
          "id": "0559e55630b03db013f3a7cde137a3353621e4f9",
          "message": ":cookie: :memo: Mark ADR documentation component as optional\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@648d262",
          "timestamp": "2021-09-08T16:55:38Z",
          "tree_id": "3f2e03c84bf888a1cf3e9fbbd6cf11ebf5823397"
        },
        "date": 1631120693922,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 282.3561136194682,
            "unit": "iter/sec",
            "range": "stddev: 0.00026212348546821403",
            "extra": "mean: 3.5416268738834593 msec\nrounds: 111"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 823.4723627692589,
            "unit": "iter/sec",
            "range": "stddev: 0.00016793417393108902",
            "extra": "mean: 1.214369838274955 msec\nrounds: 742"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1671.8283925687967,
            "unit": "iter/sec",
            "range": "stddev: 0.00009742832770757449",
            "extra": "mean: 598.1475158843789 usec\nrounds: 661"
          }
        ]
      }
    ]
  }
}