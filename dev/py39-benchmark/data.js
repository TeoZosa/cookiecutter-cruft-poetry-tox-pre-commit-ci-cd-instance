window.BENCHMARK_DATA = {
  "lastUpdate": 1631569086934,
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
        "date": 1631569084306,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 374.36502506252225,
            "unit": "iter/sec",
            "range": "stddev: 0.000022903373182618844",
            "extra": "mean: 2.6711897027052443 msec\nrounds: 148"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1064.2597531602344,
            "unit": "iter/sec",
            "range": "stddev: 0.000011724932680700489",
            "extra": "mean: 939.6202355962254 usec\nrounds: 972"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2297.890382503872,
            "unit": "iter/sec",
            "range": "stddev: 0.000010147498199271508",
            "extra": "mean: 435.1817682923415 usec\nrounds: 902"
          }
        ]
      }
    ]
  }
}