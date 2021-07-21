window.BENCHMARK_DATA = {
  "lastUpdate": 1626891453259,
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
        "date": 1626891451942,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1211.2859501854234,
            "unit": "iter/sec",
            "range": "stddev: 0.000017117269068501392",
            "extra": "mean: 825.5688921735782 usec\nrounds: 575"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1752.5327172586256,
            "unit": "iter/sec",
            "range": "stddev: 0.00001844927131238496",
            "extra": "mean: 570.6027568856094 usec\nrounds: 1489"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13398.492839105023,
            "unit": "iter/sec",
            "range": "stddev: 0.000004990696951264517",
            "extra": "mean: 74.63526024967423 usec\nrounds: 1829"
          }
        ]
      }
    ]
  }
}