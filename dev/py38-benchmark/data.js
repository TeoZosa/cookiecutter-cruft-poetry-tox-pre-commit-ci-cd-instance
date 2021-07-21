window.BENCHMARK_DATA = {
  "lastUpdate": 1626891439683,
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
        "date": 1626891438381,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1263.6328639027568,
            "unit": "iter/sec",
            "range": "stddev: 0.000015576344595035427",
            "extra": "mean: 791.3690982295908 usec\nrounds: 621"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1862.4503535074257,
            "unit": "iter/sec",
            "range": "stddev: 0.000016522712796620822",
            "extra": "mean: 536.9270639170426 usec\nrounds: 1455"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13822.192575109299,
            "unit": "iter/sec",
            "range": "stddev: 0.000004351270109534364",
            "extra": "mean: 72.34742205811675 usec\nrounds: 1886"
          }
        ]
      }
    ]
  }
}