window.BENCHMARK_DATA = {
  "lastUpdate": 1626194937771,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "1cadc911fb86dc4d683daea6f6fb4ef9a1d7933e",
          "message": "Merge pull request #101 from TeoZosa/dependabot/pip/importlib-metadata-4.6.1\n\n⬆️ Bump importlib-metadata from 2.1.1 to 4.6.1",
          "timestamp": "2021-07-13T16:42:39Z",
          "tree_id": "80e3bea662f37dbf63d6a314053d38dee47b4cdb"
        },
        "date": 1626194935356,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1091.5855871408262,
            "unit": "iter/sec",
            "range": "stddev: 0.000038384233228539424",
            "extra": "mean: 916.0985742027659 usec\nrounds: 566"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1564.428180754281,
            "unit": "iter/sec",
            "range": "stddev: 0.00003013306817012529",
            "extra": "mean: 639.2111905820152 usec\nrounds: 1359"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11662.20229866019,
            "unit": "iter/sec",
            "range": "stddev: 0.000006767232960059755",
            "extra": "mean: 85.74709770854213 usec\nrounds: 1617"
          }
        ]
      }
    ]
  }
}