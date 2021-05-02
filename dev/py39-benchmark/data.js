window.BENCHMARK_DATA = {
  "lastUpdate": 1619995848681,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "31779f21a839e25b398d88c4eef6948e105f33a0",
          "message": ":bug: Fix `clean-requirements` target\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ccde155",
          "timestamp": "2021-05-02T22:46:42Z",
          "tree_id": "21a57077159b1bb9a45001fec19eaa306be4fa28",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/31779f21a839e25b398d88c4eef6948e105f33a0"
        },
        "date": 1619995847182,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1066.3571329375593,
            "unit": "iter/sec",
            "range": "stddev: 0.0001707008446406006",
            "extra": "mean: 937.772130097952 usec\nrounds: 515"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1472.5782304755041,
            "unit": "iter/sec",
            "range": "stddev: 0.00014997188921917374",
            "extra": "mean: 679.0810697215687 usec\nrounds: 1506"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10401.267719664771,
            "unit": "iter/sec",
            "range": "stddev: 0.000032257673289121206",
            "extra": "mean: 96.14212680146547 usec\nrounds: 2082"
          }
        ]
      }
    ]
  }
}