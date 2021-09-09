window.BENCHMARK_DATA = {
  "lastUpdate": 1631195426541,
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
          "id": "dfef1465585ef0caf8d96133fac7328565b198f9",
          "message": "Merge pull request #211 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-09-09T13:26:24Z",
          "tree_id": "93f8dfb7fb8f057bdb3b7cfadfda14bf96494935"
        },
        "date": 1631195416793,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 368.8442509361643,
            "unit": "iter/sec",
            "range": "stddev: 0.000034350957290095163",
            "extra": "mean: 2.7111714428567013 msec\nrounds: 140"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1072.2643955571957,
            "unit": "iter/sec",
            "range": "stddev: 0.000016966972652896786",
            "extra": "mean: 932.6058051944884 usec\nrounds: 847"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2212.046144239778,
            "unit": "iter/sec",
            "range": "stddev: 0.000011318183744147155",
            "extra": "mean: 452.07013542824325 usec\nrounds: 827"
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "a51aba4383a67f4691f444c6176e842f1c66ace4",
          "message": "Merge pull request #324 from TeoZosa/dependabot/pip/hypothesis-6.20.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3cb4674",
          "timestamp": "2021-09-09T13:31:39Z",
          "tree_id": "f7e6ce03e9b5c003ad6f78cc87878f8e33341626"
        },
        "date": 1631195423741,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 266.76392998122094,
            "unit": "iter/sec",
            "range": "stddev: 0.0003543515812159865",
            "extra": "mean: 3.74863273333241 msec\nrounds: 105"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 782.998041838377,
            "unit": "iter/sec",
            "range": "stddev: 0.00017246419080417944",
            "extra": "mean: 1.2771424021088618 msec\nrounds: 664"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1529.127692256013,
            "unit": "iter/sec",
            "range": "stddev: 0.0002088598686795978",
            "extra": "mean: 653.9676215821064 usec\nrounds: 658"
          }
        ]
      }
    ]
  }
}