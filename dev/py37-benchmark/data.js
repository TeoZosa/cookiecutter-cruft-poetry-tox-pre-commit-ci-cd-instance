window.BENCHMARK_DATA = {
  "lastUpdate": 1628810252530,
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
        "date": 1628810249723,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 295.1383278407059,
            "unit": "iter/sec",
            "range": "stddev: 0.0003221107148785583",
            "extra": "mean: 3.388241735040685 msec\nrounds: 117"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 856.8065652384548,
            "unit": "iter/sec",
            "range": "stddev: 0.00012472574652576095",
            "extra": "mean: 1.1671245769711083 msec\nrounds: 825"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1722.0501145574217,
            "unit": "iter/sec",
            "range": "stddev: 0.00006859302980616829",
            "extra": "mean: 580.7031929828631 usec\nrounds: 684"
          }
        ]
      }
    ]
  }
}