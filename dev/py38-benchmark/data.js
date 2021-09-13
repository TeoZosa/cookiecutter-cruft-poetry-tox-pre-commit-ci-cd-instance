window.BENCHMARK_DATA = {
  "lastUpdate": 1631569118954,
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
          "id": "d46bfe34ebcfbb4187e533ab46fcd3f411b2950e",
          "message": ":coffin: Remove redundant `yamllint` `line-length` pragma\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@68ec11e",
          "timestamp": "2021-09-13T21:29:33Z",
          "tree_id": "ec58f995c72773f1621814a1f49f25f2f832f319"
        },
        "date": 1631569116816,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 368.3657880699437,
            "unit": "iter/sec",
            "range": "stddev: 0.000030210571879616806",
            "extra": "mean: 2.714692928568395 msec\nrounds: 140"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1067.670387882495,
            "unit": "iter/sec",
            "range": "stddev: 0.000014687227636028464",
            "extra": "mean: 936.6186524881472 usec\nrounds: 964"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2204.937492593545,
            "unit": "iter/sec",
            "range": "stddev: 0.00001033314011001745",
            "extra": "mean: 453.5275958429804 usec\nrounds: 866"
          }
        ]
      }
    ]
  }
}