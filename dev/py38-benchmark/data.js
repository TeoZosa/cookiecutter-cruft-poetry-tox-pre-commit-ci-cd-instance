window.BENCHMARK_DATA = {
  "lastUpdate": 1629732307885,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "24eb011bc66c67e260b9d2fc46366f83684f1b5d",
          "message": "Merge pull request #182 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-23T13:45:08Z",
          "tree_id": "7a0e76f2d369e2ccf05c02f8e9ad0d31d53fd295"
        },
        "date": 1629731801042,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 365.3115999668049,
            "unit": "iter/sec",
            "range": "stddev: 0.00002930200172961099",
            "extra": "mean: 2.7373891223023517 msec\nrounds: 139"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1065.8099411455476,
            "unit": "iter/sec",
            "range": "stddev: 0.00001281429106575936",
            "extra": "mean: 938.2535866809292 usec\nrounds: 946"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2190.4291259533707,
            "unit": "iter/sec",
            "range": "stddev: 0.000013438193588499514",
            "extra": "mean: 456.5315481571476 usec\nrounds: 841"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "27b0bba6dc5d654fe992a0328ba802f63a653fb3",
          "message": "Merge pull request #183 from TeoZosa/dependabot/pip/dot-github/workflows/tox-3.24.3",
          "timestamp": "2021-08-23T14:09:16Z",
          "tree_id": "de06a12266c5bb9fe410973ffb47a47499a1bd5d"
        },
        "date": 1629732303729,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 250.70899554308113,
            "unit": "iter/sec",
            "range": "stddev: 0.0006920482080163533",
            "extra": "mean: 3.9886881515113517 msec\nrounds: 99"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 756.3627305736401,
            "unit": "iter/sec",
            "range": "stddev: 0.00046182080882568784",
            "extra": "mean: 1.3221169679283122 msec\nrounds: 686"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1511.8266320979667,
            "unit": "iter/sec",
            "range": "stddev: 0.00014565653736141736",
            "extra": "mean: 661.4515042722171 usec\nrounds: 702"
          }
        ]
      }
    ]
  }
}