window.BENCHMARK_DATA = {
  "lastUpdate": 1626111558637,
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
        "date": 1626111556605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 952.4881575451848,
            "unit": "iter/sec",
            "range": "stddev: 0.00019886122626769563",
            "extra": "mean: 1.0498818196094595 msec\nrounds: 510"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1290.3810232336712,
            "unit": "iter/sec",
            "range": "stddev: 0.0002899646427429789",
            "extra": "mean: 774.964899510083 usec\nrounds: 1224"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8036.42067288928,
            "unit": "iter/sec",
            "range": "stddev: 0.00011379125185517263",
            "extra": "mean: 124.43350599769894 usec\nrounds: 1751"
          }
        ]
      }
    ]
  }
}