window.BENCHMARK_DATA = {
  "lastUpdate": 1630350812711,
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
        "date": 1630350809864,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 277.8548085754493,
            "unit": "iter/sec",
            "range": "stddev: 0.00022561826328111947",
            "extra": "mean: 3.599001957630177 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 835.7339452037638,
            "unit": "iter/sec",
            "range": "stddev: 0.00011034210497092077",
            "extra": "mean: 1.1965530486573521 msec\nrounds: 596"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1673.6357826005326,
            "unit": "iter/sec",
            "range": "stddev: 0.00014005283207126925",
            "extra": "mean: 597.5015653920698 usec\nrounds: 734"
          }
        ]
      }
    ]
  }
}