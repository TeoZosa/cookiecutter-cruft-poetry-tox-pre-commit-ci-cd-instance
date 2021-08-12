window.BENCHMARK_DATA = {
  "lastUpdate": 1628811204148,
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
          "id": "baa191e99c22d74fdbe9fcf62a2b69df8a5ee295",
          "message": ":cookie: :wrench: Move Mypy configurations to `pyproject.toml`\n\nAll tooling configurations are now fully centralized in\n`pyproject.toml`.\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@07ac940",
          "timestamp": "2021-08-12T23:18:57Z",
          "tree_id": "62d568f91afd5933733579b9632867e043403186"
        },
        "date": 1628811201504,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 263.09020109183587,
            "unit": "iter/sec",
            "range": "stddev: 0.00024676779373188377",
            "extra": "mean: 3.8009777477456637 msec\nrounds: 111"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 792.1796819030686,
            "unit": "iter/sec",
            "range": "stddev: 0.00015106313831674784",
            "extra": "mean: 1.2623398742033887 msec\nrounds: 628"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1538.4799075157257,
            "unit": "iter/sec",
            "range": "stddev: 0.0003678679679256608",
            "extra": "mean: 649.9922391672694 usec\nrounds: 623"
          }
        ]
      }
    ]
  }
}