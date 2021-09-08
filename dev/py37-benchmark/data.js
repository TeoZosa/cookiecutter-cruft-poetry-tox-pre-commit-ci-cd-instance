window.BENCHMARK_DATA = {
  "lastUpdate": 1631126629115,
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
        "date": 1631126626720,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 353.651027586537,
            "unit": "iter/sec",
            "range": "stddev: 0.000030135524897942967",
            "extra": "mean: 2.8276462444473007 msec\nrounds: 135"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1030.3236951294086,
            "unit": "iter/sec",
            "range": "stddev: 0.000019713417369679998",
            "extra": "mean: 970.5687685600592 usec\nrounds: 916"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2121.6570502543036,
            "unit": "iter/sec",
            "range": "stddev: 0.000010704946946757544",
            "extra": "mean: 471.3297089556199 usec\nrounds: 804"
          }
        ]
      }
    ]
  }
}