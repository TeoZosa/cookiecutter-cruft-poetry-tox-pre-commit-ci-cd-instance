window.BENCHMARK_DATA = {
  "lastUpdate": 1628356387487,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "4860cbf1a89b2a38626249ad29d340f4cbdf6f2e",
          "message": "Merge pull request #273 from TeoZosa/migrate-packaging-from-pure-python-to-mypyc-compiled-platform-specific-packages\n\n📦⚡️Compile Package Modules as C-Extensions via Mypyc\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2d0fc19",
          "timestamp": "2021-08-07T17:04:27Z",
          "tree_id": "774a8c143244f4c5d15e27898babc9a4902f6b01"
        },
        "date": 1628356385431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1215.993750145536,
            "unit": "iter/sec",
            "range": "stddev: 0.00010083046358521502",
            "extra": "mean: 822.3726477873057 usec\nrounds: 565"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1843.4777457765963,
            "unit": "iter/sec",
            "range": "stddev: 0.00007702851108725448",
            "extra": "mean: 542.4529817574407 usec\nrounds: 1809"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13061.372285469133,
            "unit": "iter/sec",
            "range": "stddev: 0.000011119427423759616",
            "extra": "mean: 76.56163365870115 usec\nrounds: 2050"
          }
        ]
      }
    ]
  }
}