window.BENCHMARK_DATA = {
  "lastUpdate": 1627566457909,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "c6bd39eb3998547da034b516d4731e3c7902a846",
          "message": "Merge pull request #259 from TeoZosa/dependabot/pip/pylint-2.9.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8947a08",
          "timestamp": "2021-07-29T13:27:15Z",
          "tree_id": "2bf56f075e338282a18509209a18ad9f2b39dfaf"
        },
        "date": 1627566456636,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1373.7135588720203,
            "unit": "iter/sec",
            "range": "stddev: 0.000015946687131593123",
            "extra": "mean: 727.9537961473694 usec\nrounds: 623"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1991.102944310496,
            "unit": "iter/sec",
            "range": "stddev: 0.000015161756103847324",
            "extra": "mean: 502.2342028359023 usec\nrounds: 1410"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15251.344711667238,
            "unit": "iter/sec",
            "range": "stddev: 0.000004754564316040325",
            "extra": "mean: 65.56798884986205 usec\nrounds: 1973"
          }
        ]
      }
    ]
  }
}