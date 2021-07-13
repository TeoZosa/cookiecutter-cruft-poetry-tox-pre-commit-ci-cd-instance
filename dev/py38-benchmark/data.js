window.BENCHMARK_DATA = {
  "lastUpdate": 1626194906063,
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
        "date": 1626194903919,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1030.7721214544313,
            "unit": "iter/sec",
            "range": "stddev: 0.0001447813021996172",
            "extra": "mean: 970.1465330561992 usec\nrounds: 484"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1598.3190948174388,
            "unit": "iter/sec",
            "range": "stddev: 0.00010422030820428322",
            "extra": "mean: 625.6572941176184 usec\nrounds: 1564"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10106.510471561485,
            "unit": "iter/sec",
            "range": "stddev: 0.00002389968335301644",
            "extra": "mean: 98.94612020774932 usec\nrounds: 1930"
          }
        ]
      }
    ]
  }
}