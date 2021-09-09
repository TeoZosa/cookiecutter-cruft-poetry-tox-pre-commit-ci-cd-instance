window.BENCHMARK_DATA = {
  "lastUpdate": 1631195478480,
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
          "id": "a51aba4383a67f4691f444c6176e842f1c66ace4",
          "message": "Merge pull request #324 from TeoZosa/dependabot/pip/hypothesis-6.20.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3cb4674",
          "timestamp": "2021-09-09T13:31:39Z",
          "tree_id": "f7e6ce03e9b5c003ad6f78cc87878f8e33341626"
        },
        "date": 1631195425363,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 274.0175296736423,
            "unit": "iter/sec",
            "range": "stddev: 0.00023872814438984498",
            "extra": "mean: 3.649401559057227 msec\nrounds: 127"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 774.6250576614738,
            "unit": "iter/sec",
            "range": "stddev: 0.00011033910804569807",
            "extra": "mean: 1.2909471364364506 msec\nrounds: 645"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1608.4930552193018,
            "unit": "iter/sec",
            "range": "stddev: 0.00004501905919103766",
            "extra": "mean: 621.6999176683794 usec\nrounds: 583"
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
          "id": "dfef1465585ef0caf8d96133fac7328565b198f9",
          "message": "Merge pull request #211 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-09-09T13:26:24Z",
          "tree_id": "93f8dfb7fb8f057bdb3b7cfadfda14bf96494935"
        },
        "date": 1631195475891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 299.1277041497776,
            "unit": "iter/sec",
            "range": "stddev: 0.0005657871380516879",
            "extra": "mean: 3.343053773111184 msec\nrounds: 119"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 869.4781525541815,
            "unit": "iter/sec",
            "range": "stddev: 0.00037065711056034494",
            "extra": "mean: 1.1501151547769164 msec\nrounds: 743"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1844.212421334045,
            "unit": "iter/sec",
            "range": "stddev: 0.00010178919219324104",
            "extra": "mean: 542.236885746942 usec\nrounds: 849"
          }
        ]
      }
    ]
  }
}