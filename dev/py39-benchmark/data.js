window.BENCHMARK_DATA = {
  "lastUpdate": 1626111506789,
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
          "id": "74790ac92ddce824b7f00b64c93dc9463efda5f0",
          "message": ":rotating_light: Read `rst_prolog` in via `pathlib.Path`\n\nAutomate file opening/closing; fixes:\n```\n  pylint...............................................................................Failed\n  - hook id: pylint\n  - duration: 8.29s\n  - exit code: 8\n\n  ************* Module conf\n  docs/source/conf.py:60:13: R1732: Consider using 'with' for resource-allocating operations (consider-using-with)\n```\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4c6ed9f",
          "timestamp": "2021-07-12T17:32:18Z",
          "tree_id": "aae74ddda9e54f1cea3ea36e6b6ff8164d650f5c"
        },
        "date": 1626111504434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1121.8449214162201,
            "unit": "iter/sec",
            "range": "stddev: 0.00009432452656944702",
            "extra": "mean: 891.3888015266829 usec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1619.1715534399095,
            "unit": "iter/sec",
            "range": "stddev: 0.00012505824755770924",
            "extra": "mean: 617.5997829726643 usec\nrounds: 1433"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13460.432654350487,
            "unit": "iter/sec",
            "range": "stddev: 0.000015302404810088967",
            "extra": "mean: 74.29181703730708 usec\nrounds: 1667"
          }
        ]
      }
    ]
  }
}