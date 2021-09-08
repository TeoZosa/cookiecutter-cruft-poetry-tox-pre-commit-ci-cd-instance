window.BENCHMARK_DATA = {
  "lastUpdate": 1631126644930,
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
        "date": 1631126641887,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 365.19080294665554,
            "unit": "iter/sec",
            "range": "stddev: 0.00002751818275055914",
            "extra": "mean: 2.738294589927208 msec\nrounds: 139"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1052.0639722257486,
            "unit": "iter/sec",
            "range": "stddev: 0.000032217358951404285",
            "extra": "mean: 950.5125414421312 usec\nrounds: 929"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2179.747784179845,
            "unit": "iter/sec",
            "range": "stddev: 0.000011312760183989842",
            "extra": "mean: 458.7686737235342 usec\nrounds: 803"
          }
        ]
      }
    ]
  }
}