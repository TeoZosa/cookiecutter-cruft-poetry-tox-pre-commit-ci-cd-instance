window.BENCHMARK_DATA = {
  "lastUpdate": 1630687582979,
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
        "date": 1630687579892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 385.7191788013264,
            "unit": "iter/sec",
            "range": "stddev: 0.0002541328727765416",
            "extra": "mean: 2.5925597039473978 msec\nrounds: 152"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1113.9268691955265,
            "unit": "iter/sec",
            "range": "stddev: 0.00009954724128424111",
            "extra": "mean: 897.725001213227 usec\nrounds: 825"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2257.889057815216,
            "unit": "iter/sec",
            "range": "stddev: 0.00005795567106906723",
            "extra": "mean: 442.8915568454114 usec\nrounds: 862"
          }
        ]
      }
    ]
  }
}