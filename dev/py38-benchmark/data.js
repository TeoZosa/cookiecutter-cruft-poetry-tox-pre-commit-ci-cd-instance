window.BENCHMARK_DATA = {
  "lastUpdate": 1620331716651,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "767057347d7426e8762a5994b28ab83299c6701d",
          "message": "Merge pull request #159 from TeoZosa/dependabot/pip/black-21.5b0\n\n⬆️ Bump black from 21.4b2 to 21.5b0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f38c6af",
          "timestamp": "2021-05-06T20:05:00Z",
          "tree_id": "0cc9992c529e663316f64f854e7bb879b788c276",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/767057347d7426e8762a5994b28ab83299c6701d"
        },
        "date": 1620331715532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1211.1156994026353,
            "unit": "iter/sec",
            "range": "stddev: 0.00013336824232711055",
            "extra": "mean: 825.684945289071 usec\nrounds: 329"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1798.9175547196046,
            "unit": "iter/sec",
            "range": "stddev: 0.00011066710405477778",
            "extra": "mean: 555.8898446326347 usec\nrounds: 1416"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13251.256570148496,
            "unit": "iter/sec",
            "range": "stddev: 0.000024809112869108014",
            "extra": "mean: 75.46454139698193 usec\nrounds: 1389"
          }
        ]
      }
    ]
  }
}