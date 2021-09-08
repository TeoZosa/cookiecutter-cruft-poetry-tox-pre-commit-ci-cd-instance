window.BENCHMARK_DATA = {
  "lastUpdate": 1631126803688,
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
          "id": "73b7ef4c885b7aa6500e8b107fcbcfd93492d82c",
          "message": ":memo: Change to more appropriate admonitions\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5cd5ae0",
          "timestamp": "2021-09-08T18:36:13Z",
          "tree_id": "9452c883f7888a5aa28ff68af1c584a39ba04ff9"
        },
        "date": 1631126800944,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 216.58051478787206,
            "unit": "iter/sec",
            "range": "stddev: 0.0006983075080556747",
            "extra": "mean: 4.617220533340413 msec\nrounds: 90"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 752.0233534989814,
            "unit": "iter/sec",
            "range": "stddev: 0.00024256192210661055",
            "extra": "mean: 1.329745938536674 msec\nrounds: 423"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1352.2610579134457,
            "unit": "iter/sec",
            "range": "stddev: 0.00016820793809959898",
            "extra": "mean: 739.502179810614 usec\nrounds: 634"
          }
        ]
      }
    ]
  }
}