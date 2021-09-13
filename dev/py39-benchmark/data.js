window.BENCHMARK_DATA = {
  "lastUpdate": 1631551930686,
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
        "date": 1631551927682,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 329.869460465742,
            "unit": "iter/sec",
            "range": "stddev: 0.0005345075291898609",
            "extra": "mean: 3.031502214809768 msec\nrounds: 135"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 947.4317096383649,
            "unit": "iter/sec",
            "range": "stddev: 0.00022352914382396224",
            "extra": "mean: 1.0554850442800785 msec\nrounds: 813"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2066.800646161693,
            "unit": "iter/sec",
            "range": "stddev: 0.00011935917646993611",
            "extra": "mean: 483.8396010070565 usec\nrounds: 797"
          }
        ]
      }
    ]
  }
}