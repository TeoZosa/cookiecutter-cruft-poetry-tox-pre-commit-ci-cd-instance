window.BENCHMARK_DATA = {
  "lastUpdate": 1620331760422,
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
        "date": 1620331758853,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 937.2612192428767,
            "unit": "iter/sec",
            "range": "stddev: 0.00017837287019107953",
            "extra": "mean: 1.0669384153201218 msec\nrounds: 496"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1337.0773546725707,
            "unit": "iter/sec",
            "range": "stddev: 0.00010414062948376736",
            "extra": "mean: 747.8998851527812 usec\nrounds: 1219"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8896.895478311915,
            "unit": "iter/sec",
            "range": "stddev: 0.000028348853957728468",
            "extra": "mean: 112.3987577956506 usec\nrounds: 1796"
          }
        ]
      }
    ]
  }
}