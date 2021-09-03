window.BENCHMARK_DATA = {
  "lastUpdate": 1630699350795,
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
        "date": 1630699348527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 372.67313320028853,
            "unit": "iter/sec",
            "range": "stddev: 0.00002811446085373231",
            "extra": "mean: 2.6833165874143186 msec\nrounds: 143"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1063.206386350579,
            "unit": "iter/sec",
            "range": "stddev: 0.000013440213709703161",
            "extra": "mean: 940.5511599986407 usec\nrounds: 950"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2278.9678074207945,
            "unit": "iter/sec",
            "range": "stddev: 0.000010356651002002723",
            "extra": "mean: 438.7951408281378 usec\nrounds: 845"
          }
        ]
      }
    ]
  }
}