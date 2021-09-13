window.BENCHMARK_DATA = {
  "lastUpdate": 1631551897404,
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
        "date": 1631551895222,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 364.2048028230135,
            "unit": "iter/sec",
            "range": "stddev: 0.000036689427791136656",
            "extra": "mean: 2.7457078881135817 msec\nrounds: 143"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1058.112138659743,
            "unit": "iter/sec",
            "range": "stddev: 0.000014298676238321617",
            "extra": "mean: 945.0794140464632 usec\nrounds: 954"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2191.4172338245035,
            "unit": "iter/sec",
            "range": "stddev: 0.000011158297394445645",
            "extra": "mean: 456.3256985319864 usec\nrounds: 816"
          }
        ]
      }
    ]
  }
}