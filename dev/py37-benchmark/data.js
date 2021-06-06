window.BENCHMARK_DATA = {
  "lastUpdate": 1623020299662,
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
        "date": 1623020294811,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 922.7376372836804,
            "unit": "iter/sec",
            "range": "stddev: 0.00027058291777997556",
            "extra": "mean: 1.0837316693223455 msec\nrounds: 502"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1263.889365158998,
            "unit": "iter/sec",
            "range": "stddev: 0.00015555857801859678",
            "extra": "mean: 791.208493058409 usec\nrounds: 576"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8207.722184027853,
            "unit": "iter/sec",
            "range": "stddev: 0.000049427882640526605",
            "extra": "mean: 121.8364824708602 usec\nrounds: 1569"
          }
        ]
      },
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
        "date": 1623020294811,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 922.7376372836804,
            "unit": "iter/sec",
            "range": "stddev: 0.00027058291777997556",
            "extra": "mean: 1.0837316693223455 msec\nrounds: 502"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1263.889365158998,
            "unit": "iter/sec",
            "range": "stddev: 0.00015555857801859678",
            "extra": "mean: 791.208493058409 usec\nrounds: 576"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8207.722184027853,
            "unit": "iter/sec",
            "range": "stddev: 0.000049427882640526605",
            "extra": "mean: 121.8364824708602 usec\nrounds: 1569"
          }
        ]
      }
    ]
  }
}