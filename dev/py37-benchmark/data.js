window.BENCHMARK_DATA = {
  "lastUpdate": 1628525257048,
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
          "id": "c5eec3ee066bd5d272c3f8e40cddc627a0d68a67",
          "message": "Merge pull request #279 from TeoZosa/dependabot/pip/xdoctest-0.15.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@583bd6d",
          "timestamp": "2021-08-09T14:38:20Z",
          "tree_id": "a279f11385946797c7bcc1a2c68450edb94ff8f0"
        },
        "date": 1628525255007,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 356.66471634039226,
            "unit": "iter/sec",
            "range": "stddev: 0.000027875196735360817",
            "extra": "mean: 2.8037536492553525 msec\nrounds: 134"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1036.6328190033203,
            "unit": "iter/sec",
            "range": "stddev: 0.000017590010396984976",
            "extra": "mean: 964.6617217477823 usec\nrounds: 938"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2152.826628345227,
            "unit": "iter/sec",
            "range": "stddev: 0.00001644676007286737",
            "extra": "mean: 464.505588528813 usec\nrounds: 802"
          }
        ]
      }
    ]
  }
}