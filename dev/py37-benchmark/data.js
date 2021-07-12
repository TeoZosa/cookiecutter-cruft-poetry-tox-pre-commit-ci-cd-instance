window.BENCHMARK_DATA = {
  "lastUpdate": 1626111540001,
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
        "date": 1626111537646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1029.7345040349662,
            "unit": "iter/sec",
            "range": "stddev: 0.00002612926371458913",
            "extra": "mean: 971.1241063415346 usec\nrounds: 489"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1501.3449087677257,
            "unit": "iter/sec",
            "range": "stddev: 0.000025282828461811034",
            "extra": "mean: 666.069464891169 usec\nrounds: 1239"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11348.253100660451,
            "unit": "iter/sec",
            "range": "stddev: 0.000006787593571676958",
            "extra": "mean: 88.119289473884 usec\nrounds: 1482"
          }
        ]
      }
    ]
  }
}