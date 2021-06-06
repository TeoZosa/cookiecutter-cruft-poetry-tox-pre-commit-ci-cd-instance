window.BENCHMARK_DATA = {
  "lastUpdate": 1623020238572,
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
        "date": 1623020236388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1039.8762510495267,
            "unit": "iter/sec",
            "range": "stddev: 0.00030044691275969796",
            "extra": "mean: 961.6528880150111 usec\nrounds: 509"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1521.642153555778,
            "unit": "iter/sec",
            "range": "stddev: 0.00013626914745176584",
            "extra": "mean: 657.184737990596 usec\nrounds: 1603"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9371.153844711884,
            "unit": "iter/sec",
            "range": "stddev: 0.00003361489141616381",
            "extra": "mean: 106.71044532731658 usec\nrounds: 1637"
          }
        ]
      }
    ]
  }
}