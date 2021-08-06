window.BENCHMARK_DATA = {
  "lastUpdate": 1628258364756,
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
          "id": "76d92c34169e7abff00471cb55c51d76fa910c87",
          "message": "Merge pull request #151 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.2.3",
          "timestamp": "2021-08-06T13:32:32Z",
          "tree_id": "091f06ad162613cbb38bb73756293a13a060c08a"
        },
        "date": 1628258168495,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 791.6848939706903,
            "unit": "iter/sec",
            "range": "stddev: 0.0004050246881562783",
            "extra": "mean: 1.2631288125058275 msec\nrounds: 352"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1195.7412519604004,
            "unit": "iter/sec",
            "range": "stddev: 0.00021084445557976197",
            "extra": "mean: 836.3013305433049 usec\nrounds: 1195"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7100.692053079223,
            "unit": "iter/sec",
            "range": "stddev: 0.00011548808281801807",
            "extra": "mean: 140.8313432725686 usec\nrounds: 1576"
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
          "id": "d18c7a3f4684929a10c2774c2bc313fd2ea1b8e8",
          "message": "Merge pull request #270 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-21.2.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@557a2cb",
          "timestamp": "2021-08-06T13:41:33Z",
          "tree_id": "7aa816e2a9e658023b51dd9214cc4c8c415c373f"
        },
        "date": 1628258362129,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1172.7402287004875,
            "unit": "iter/sec",
            "range": "stddev: 0.00006538448154668811",
            "extra": "mean: 852.7037578544562 usec\nrounds: 541"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1736.9437834731805,
            "unit": "iter/sec",
            "range": "stddev: 0.00004434284309896173",
            "extra": "mean: 575.7238717308438 usec\nrounds: 1606"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12527.622433872533,
            "unit": "iter/sec",
            "range": "stddev: 0.000009077474346125563",
            "extra": "mean: 79.82360621726372 usec\nrounds: 1737"
          }
        ]
      }
    ]
  }
}