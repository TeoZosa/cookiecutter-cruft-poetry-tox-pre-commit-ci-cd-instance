window.BENCHMARK_DATA = {
  "lastUpdate": 1627566520743,
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
          "id": "c6bd39eb3998547da034b516d4731e3c7902a846",
          "message": "Merge pull request #259 from TeoZosa/dependabot/pip/pylint-2.9.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8947a08",
          "timestamp": "2021-07-29T13:27:15Z",
          "tree_id": "2bf56f075e338282a18509209a18ad9f2b39dfaf"
        },
        "date": 1627566518770,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 989.8808828260067,
            "unit": "iter/sec",
            "range": "stddev: 0.00017382251879065932",
            "extra": "mean: 1.0102225604611177 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1370.4493867607341,
            "unit": "iter/sec",
            "range": "stddev: 0.0001669620672080311",
            "extra": "mean: 729.6876554949996 usec\nrounds: 1283"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8772.780573070662,
            "unit": "iter/sec",
            "range": "stddev: 0.000042302588195170375",
            "extra": "mean: 113.98894474457127 usec\nrounds: 1665"
          }
        ]
      }
    ]
  }
}