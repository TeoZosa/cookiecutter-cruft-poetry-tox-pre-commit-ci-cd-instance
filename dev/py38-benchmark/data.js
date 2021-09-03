window.BENCHMARK_DATA = {
  "lastUpdate": 1630699365049,
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
          "id": "bcac28b52b43bd324b41bbb1d053327082d96391",
          "message": ":children_crossing: Use dummy initial user-specific values\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@89f0357",
          "timestamp": "2021-09-03T19:54:19Z",
          "tree_id": "595b78ad5e65c9118eb03aca82e1fdd265ff4646"
        },
        "date": 1630699362542,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 309.00520535148183,
            "unit": "iter/sec",
            "range": "stddev: 0.0002775337976965326",
            "extra": "mean: 3.236191438466344 msec\nrounds: 130"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 902.536431892354,
            "unit": "iter/sec",
            "range": "stddev: 0.00020033410357964175",
            "extra": "mean: 1.1079885139963752 msec\nrounds: 786"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1796.1383928066225,
            "unit": "iter/sec",
            "range": "stddev: 0.00013086206342118276",
            "extra": "mean: 556.7499720538866 usec\nrounds: 823"
          }
        ]
      }
    ]
  }
}