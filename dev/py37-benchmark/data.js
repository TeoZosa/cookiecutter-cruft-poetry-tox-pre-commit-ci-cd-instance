window.BENCHMARK_DATA = {
  "lastUpdate": 1631551972305,
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
          "id": "0bd81a15355318cac50b7bb336cda258959b7721",
          "message": ":construction_worker: Update test instance template initialization parameters\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0f2795d",
          "timestamp": "2021-09-13T16:43:41Z",
          "tree_id": "f178ccff6b2dff0fc2699d5176cdb2a028a3f120"
        },
        "date": 1631551969416,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 282.89716209572725,
            "unit": "iter/sec",
            "range": "stddev: 0.0003077480560386403",
            "extra": "mean: 3.53485341666884 msec\nrounds: 108"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 796.3850758324461,
            "unit": "iter/sec",
            "range": "stddev: 0.00036660615547758676",
            "extra": "mean: 1.2556739576701876 msec\nrounds: 567"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1454.7107042915043,
            "unit": "iter/sec",
            "range": "stddev: 0.00021448440222230877",
            "extra": "mean: 687.4219025473078 usec\nrounds: 472"
          }
        ]
      }
    ]
  }
}