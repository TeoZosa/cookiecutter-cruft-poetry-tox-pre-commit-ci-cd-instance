window.BENCHMARK_DATA = {
  "lastUpdate": 1630350745848,
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
        "date": 1630350743356,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 283.73904503874115,
            "unit": "iter/sec",
            "range": "stddev: 0.00032373506168459105",
            "extra": "mean: 3.5243651428496983 msec\nrounds: 105"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 805.4126939900231,
            "unit": "iter/sec",
            "range": "stddev: 0.00015292113580243438",
            "extra": "mean: 1.2415995022948911 msec\nrounds: 653"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1682.5354911524346,
            "unit": "iter/sec",
            "range": "stddev: 0.00008888078633114682",
            "extra": "mean: 594.3411032090983 usec\nrounds: 717"
          }
        ]
      }
    ]
  }
}