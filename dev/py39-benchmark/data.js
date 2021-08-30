window.BENCHMARK_DATA = {
  "lastUpdate": 1630350750217,
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
          "id": "64ec4f9eceb34a6e74a64c6a6d6006bacba8ea0b",
          "message": "Merge pull request #309 from TeoZosa/dependabot/pip/black-21.8b0\n\n⬆️ Bump black from 21.7b0 to 21.8b0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fc9a9ae",
          "timestamp": "2021-08-30T19:02:31Z",
          "tree_id": "483e93af1a6ea1c16cfc2a4bbfbbd9243fb5af1a"
        },
        "date": 1630350747519,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.4786501919737,
            "unit": "iter/sec",
            "range": "stddev: 0.00043500425892877855",
            "extra": "mean: 3.466461033891176 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 832.0785510801318,
            "unit": "iter/sec",
            "range": "stddev: 0.00018954969509843485",
            "extra": "mean: 1.2018096112463028 msec\nrounds: 818"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1756.9999049839025,
            "unit": "iter/sec",
            "range": "stddev: 0.000171312442214935",
            "extra": "mean: 569.1519943532164 usec\nrounds: 886"
          }
        ]
      }
    ]
  }
}