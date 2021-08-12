window.BENCHMARK_DATA = {
  "lastUpdate": 1628811046964,
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
        "date": 1628811044980,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 350.23759164201863,
            "unit": "iter/sec",
            "range": "stddev: 0.00016718249702163746",
            "extra": "mean: 2.8552046492545267 msec\nrounds: 134"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 996.6543006385754,
            "unit": "iter/sec",
            "range": "stddev: 0.000179886982637754",
            "extra": "mean: 1.0033569306421304 msec\nrounds: 966"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1992.0119739103238,
            "unit": "iter/sec",
            "range": "stddev: 0.00018070260663114747",
            "extra": "mean: 502.00501457679377 usec\nrounds: 686"
          }
        ]
      }
    ]
  }
}