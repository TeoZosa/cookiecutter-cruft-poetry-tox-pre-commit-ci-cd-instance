window.BENCHMARK_DATA = {
  "lastUpdate": 1620331775310,
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
        "date": 1620331773659,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 901.208303129218,
            "unit": "iter/sec",
            "range": "stddev: 0.0007907728176965692",
            "extra": "mean: 1.1096213789062448 msec\nrounds: 512"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1280.2526917190062,
            "unit": "iter/sec",
            "range": "stddev: 0.00015696742145981344",
            "extra": "mean: 781.0957996559971 usec\nrounds: 1163"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8146.656277333152,
            "unit": "iter/sec",
            "range": "stddev: 0.000049317906455611915",
            "extra": "mean: 122.74974737578532 usec\nrounds: 1334"
          }
        ]
      }
    ]
  }
}