window.BENCHMARK_DATA = {
  "lastUpdate": 1631120717708,
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
        "date": 1631120715094,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 289.96628199613866,
            "unit": "iter/sec",
            "range": "stddev: 0.00020369715427477137",
            "extra": "mean: 3.4486768362030333 msec\nrounds: 116"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 844.7295016685293,
            "unit": "iter/sec",
            "range": "stddev: 0.00014771970506832944",
            "extra": "mean: 1.183810909912317 msec\nrounds: 777"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1640.4720610568309,
            "unit": "iter/sec",
            "range": "stddev: 0.0002082982894447739",
            "extra": "mean: 609.5806345862278 usec\nrounds: 717"
          }
        ]
      }
    ]
  }
}