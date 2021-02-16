window.BENCHMARK_DATA = {
  "lastUpdate": 1613485027814,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "4e14dd2b8f615788923c8ab3e09baa214dd9583d",
          "message": "Merge pull request #73 from TeoZosa/dependabot/pip/pylint-2.6.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@04d81dc",
          "timestamp": "2021-02-16T14:12:15Z",
          "tree_id": "5a5b879844344e53da98379ceb0bdfcf4fe71cc7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4e14dd2b8f615788923c8ab3e09baa214dd9583d"
        },
        "date": 1613485026730,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 968.9948381356324,
            "unit": "iter/sec",
            "range": "stddev: 0.00006042210560894878",
            "extra": "mean: 1.0319972415168095 msec\nrounds: 501"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1372.432350225284,
            "unit": "iter/sec",
            "range": "stddev: 0.0001322302950407358",
            "extra": "mean: 728.6333638491185 usec\nrounds: 1278"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8349.229422217151,
            "unit": "iter/sec",
            "range": "stddev: 0.000018784223391473446",
            "extra": "mean: 119.77153212954212 usec\nrounds: 1385"
          }
        ]
      }
    ]
  }
}