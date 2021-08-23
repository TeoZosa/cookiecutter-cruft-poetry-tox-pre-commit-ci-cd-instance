window.BENCHMARK_DATA = {
  "lastUpdate": 1629733230665,
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
          "id": "4b8a04803517c49492e734b63f8f869ca1772960",
          "message": "Merge pull request #299 from TeoZosa/dependabot/pip/tox-3.24.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d42a220",
          "timestamp": "2021-08-23T15:03:45Z",
          "tree_id": "de5f460f0f345effcec799d7724ff7a5b38f6dae"
        },
        "date": 1629733228994,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 421.1117617479601,
            "unit": "iter/sec",
            "range": "stddev: 0.000021281064159277593",
            "extra": "mean: 2.374666515722994 msec\nrounds: 159"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1193.0460669281683,
            "unit": "iter/sec",
            "range": "stddev: 0.000013199427893524768",
            "extra": "mean: 838.1906011180108 usec\nrounds: 1073"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2598.4330473545274,
            "unit": "iter/sec",
            "range": "stddev: 0.000010344289037101697",
            "extra": "mean: 384.84732212673447 usec\nrounds: 922"
          }
        ]
      }
    ]
  }
}