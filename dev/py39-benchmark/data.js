window.BENCHMARK_DATA = {
  "lastUpdate": 1626891461779,
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
          "id": "8423659a3596d1525794108e772d2235b4583aed",
          "message": "Merge pull request #247 from TeoZosa/dependabot/pip/black-21.7b0\n\n⬆️ Bump black from 21.6b0 to 21.7b0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@be0ed03",
          "timestamp": "2021-07-21T18:11:40Z",
          "tree_id": "0ddae22add9e380230a9a4e99efc605818493b73"
        },
        "date": 1626891459902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1256.3641532881447,
            "unit": "iter/sec",
            "range": "stddev: 0.000015269966715182428",
            "extra": "mean: 795.947574103264 usec\nrounds: 641"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1854.3297281839102,
            "unit": "iter/sec",
            "range": "stddev: 0.000014463077152090418",
            "extra": "mean: 539.2784167783245 usec\nrounds: 1502"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14599.633556493709,
            "unit": "iter/sec",
            "range": "stddev: 0.000004212885775077093",
            "extra": "mean: 68.49486982878513 usec\nrounds: 1982"
          }
        ]
      }
    ]
  }
}