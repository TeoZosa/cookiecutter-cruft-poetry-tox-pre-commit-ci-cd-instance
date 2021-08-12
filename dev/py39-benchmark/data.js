window.BENCHMARK_DATA = {
  "lastUpdate": 1628810326053,
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
          "id": "66ff669e2ab98cb58dbad6b7301686f08e248881",
          "message": ":cookie: :wrench: Move Mypy configurations to `pyproject.toml`\n\nAll tooling configurations are now fully centralized in\n`pyproject.toml`.\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9713e25",
          "timestamp": "2021-08-12T23:06:58Z",
          "tree_id": "515da3c30e52e51825088bf74b75bbabf11374ea"
        },
        "date": 1628810323051,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 264.2232388285982,
            "unit": "iter/sec",
            "range": "stddev: 0.000547267546640837",
            "extra": "mean: 3.7846784576306733 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 761.8973462793624,
            "unit": "iter/sec",
            "range": "stddev: 0.00012211866447972995",
            "extra": "mean: 1.3125127746977785 msec\nrounds: 577"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1501.7503784733174,
            "unit": "iter/sec",
            "range": "stddev: 0.00033341221606126946",
            "extra": "mean: 665.8896274203721 usec\nrounds: 722"
          }
        ]
      }
    ]
  }
}