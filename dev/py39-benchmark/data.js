window.BENCHMARK_DATA = {
  "lastUpdate": 1623020296727,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "afeac3c477383b63119b9cb020ce59af1b1c625f",
          "message": ":green_heart: Fix Publish Benchmark Workflow\n\nThe official Github Action doesn't support `workflow_run` events.\nConsequently, this functionality was added to a fork of this action.\n\nOnce testing is successful, a PR will be opened in the upstream project\nrepository.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ec12e55",
          "timestamp": "2021-06-06T22:50:41Z",
          "tree_id": "30541387360e799a61376491d5ab97ae9c97f6be"
        },
        "date": 1623020294503,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 941.8502524924246,
            "unit": "iter/sec",
            "range": "stddev: 0.0002410611398548149",
            "extra": "mean: 1.0617399075423013 msec\nrounds: 411"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1281.8905835075534,
            "unit": "iter/sec",
            "range": "stddev: 0.0001582207332205342",
            "extra": "mean: 780.0977812503821 usec\nrounds: 1120"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8428.628310701923,
            "unit": "iter/sec",
            "range": "stddev: 0.00010164791712792014",
            "extra": "mean: 118.64326710554894 usec\nrounds: 1520"
          }
        ]
      }
    ]
  }
}