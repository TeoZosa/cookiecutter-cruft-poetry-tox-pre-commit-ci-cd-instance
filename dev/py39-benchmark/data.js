window.BENCHMARK_DATA = {
  "lastUpdate": 1629250581592,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "9a96669f68427469f16061fe3f2e51cfcd3f8d33",
          "message": ":bulb: Remove deprecated comment\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c411085",
          "timestamp": "2021-08-18T01:28:44Z",
          "tree_id": "a5e8875ba57d98a8cf00e55a98f640bf3e3733fa"
        },
        "date": 1629250579863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 418.44529673270597,
            "unit": "iter/sec",
            "range": "stddev: 0.00003065677379763577",
            "extra": "mean: 2.3897986374997515 msec\nrounds: 160"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1190.4220879598188,
            "unit": "iter/sec",
            "range": "stddev: 0.000019690266357795865",
            "extra": "mean: 840.0381764705241 usec\nrounds: 1071"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2583.2390066347316,
            "unit": "iter/sec",
            "range": "stddev: 0.000010771283697430091",
            "extra": "mean: 387.1109089912404 usec\nrounds: 901"
          }
        ]
      }
    ]
  }
}