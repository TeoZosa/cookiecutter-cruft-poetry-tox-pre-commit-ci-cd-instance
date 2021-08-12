window.BENCHMARK_DATA = {
  "lastUpdate": 1628810281603,
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
        "date": 1628810278207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 317.1818966009817,
            "unit": "iter/sec",
            "range": "stddev: 0.00007551630993930411",
            "extra": "mean: 3.152765056001954 msec\nrounds: 125"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 929.6204410107274,
            "unit": "iter/sec",
            "range": "stddev: 0.00003238139996409278",
            "extra": "mean: 1.0757078436364336 msec\nrounds: 825"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1884.0897861257936,
            "unit": "iter/sec",
            "range": "stddev: 0.000018400622887554005",
            "extra": "mean: 530.7602680954366 usec\nrounds: 746"
          }
        ]
      }
    ]
  }
}