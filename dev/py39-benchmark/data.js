window.BENCHMARK_DATA = {
  "lastUpdate": 1628811261303,
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
        "date": 1628811258323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 268.1792238363341,
            "unit": "iter/sec",
            "range": "stddev: 0.00048154163714131485",
            "extra": "mean: 3.7288496315817725 msec\nrounds: 114"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 784.0993553766154,
            "unit": "iter/sec",
            "range": "stddev: 0.0002335926876940198",
            "extra": "mean: 1.2753485806906244 msec\nrounds: 694"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1615.6945246885557,
            "unit": "iter/sec",
            "range": "stddev: 0.0001384268955343671",
            "extra": "mean: 618.9288783984472 usec\nrounds: 699"
          }
        ]
      }
    ]
  }
}