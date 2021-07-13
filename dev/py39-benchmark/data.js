window.BENCHMARK_DATA = {
  "lastUpdate": 1626194956529,
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
        "date": 1626194953966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 989.0211618008583,
            "unit": "iter/sec",
            "range": "stddev: 0.0002018528001255962",
            "extra": "mean: 1.0111007111103174 msec\nrounds: 585"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1368.0271468726423,
            "unit": "iter/sec",
            "range": "stddev: 0.00018711476228346484",
            "extra": "mean: 730.9796463367227 usec\nrounds: 1377"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9625.029681866994,
            "unit": "iter/sec",
            "range": "stddev: 0.00015030691647605605",
            "extra": "mean: 103.89578349913485 usec\nrounds: 1612"
          }
        ]
      }
    ]
  }
}