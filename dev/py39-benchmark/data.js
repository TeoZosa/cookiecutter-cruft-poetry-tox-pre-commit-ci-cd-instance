window.BENCHMARK_DATA = {
  "lastUpdate": 1626790285533,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "267056b14f6720ed998b81798300d52dba873a17",
          "message": "Merge pull request #118 from TeoZosa/dependabot/pip/typer-cli-0.0.12",
          "timestamp": "2021-07-20T14:04:12Z",
          "tree_id": "3b14f229d134d3cef4e0bcbef6f7d2634e056b08"
        },
        "date": 1626790284089,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1033.4294922556617,
            "unit": "iter/sec",
            "range": "stddev: 0.000018957112724890062",
            "extra": "mean: 967.651888681157 usec\nrounds: 530"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1501.5116907029394,
            "unit": "iter/sec",
            "range": "stddev: 0.000035987676382345064",
            "extra": "mean: 665.995480549236 usec\nrounds: 1234"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12140.42208301608,
            "unit": "iter/sec",
            "range": "stddev: 0.000004647804569845349",
            "extra": "mean: 82.3694590815715 usec\nrounds: 1723"
          }
        ]
      }
    ]
  }
}