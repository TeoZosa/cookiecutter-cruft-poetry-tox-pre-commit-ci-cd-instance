window.BENCHMARK_DATA = {
  "lastUpdate": 1628461428219,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "5817809472639e70ea3adff571b381e42b13bb97",
          "message": ":construction_worker: Run package root command as part of `verify-user-install` job\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@aa8a1a4",
          "timestamp": "2021-08-08T22:14:43Z",
          "tree_id": "65c93024b9bc73e4aa5c83eeb11e6a3bdc03424b"
        },
        "date": 1628461425518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 262.9987423347362,
            "unit": "iter/sec",
            "range": "stddev: 0.0002781598895565156",
            "extra": "mean: 3.802299551407104 msec\nrounds: 107"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 774.0453548762787,
            "unit": "iter/sec",
            "range": "stddev: 0.0001670571950367245",
            "extra": "mean: 1.2919139604679073 msec\nrounds: 683"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1547.7964817906752,
            "unit": "iter/sec",
            "range": "stddev: 0.00015603125193589472",
            "extra": "mean: 646.0797732548667 usec\nrounds: 688"
          }
        ]
      }
    ]
  }
}