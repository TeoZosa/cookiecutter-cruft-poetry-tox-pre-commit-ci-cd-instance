window.BENCHMARK_DATA = {
  "lastUpdate": 1631569259502,
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
        "date": 1631569256567,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 249.05705034484822,
            "unit": "iter/sec",
            "range": "stddev: 0.00029767823331248533",
            "extra": "mean: 4.015144315791843 msec\nrounds: 95"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 737.4274903672302,
            "unit": "iter/sec",
            "range": "stddev: 0.00014661253218225238",
            "extra": "mean: 1.3560655292386938 msec\nrounds: 684"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1481.6798411189357,
            "unit": "iter/sec",
            "range": "stddev: 0.0001417409617936762",
            "extra": "mean: 674.9096344894722 usec\nrounds: 632"
          }
        ]
      }
    ]
  }
}