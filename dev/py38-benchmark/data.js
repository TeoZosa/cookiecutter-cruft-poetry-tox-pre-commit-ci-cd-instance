window.BENCHMARK_DATA = {
  "lastUpdate": 1612201293320,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "63a21db71185442eed99e81ad2cb716480fa2a10",
          "message": "Merge pull request #57 from TeoZosa/add-performance-testing-component\n\n✨ Add Performance Testing Component\n\nCloses RND-877.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5499369",
          "timestamp": "2021-02-01T17:36:52Z",
          "tree_id": "ef2c9b1bc1b0d02d9d0c02e02efc161bf39e39cd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/63a21db71185442eed99e81ad2cb716480fa2a10"
        },
        "date": 1612201288462,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 982.6051674739113,
            "unit": "iter/sec",
            "range": "stddev: 0.00018807369252799963",
            "extra": "mean: 1.0177027692321297 msec\nrounds: 494"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1366.9732581563628,
            "unit": "iter/sec",
            "range": "stddev: 0.0002059360758078055",
            "extra": "mean: 731.5432061551081 usec\nrounds: 975"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9504.155480962225,
            "unit": "iter/sec",
            "range": "stddev: 0.000025318234148933543",
            "extra": "mean: 105.21713391611702 usec\nrounds: 2173"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "63a21db71185442eed99e81ad2cb716480fa2a10",
          "message": "Merge pull request #57 from TeoZosa/add-performance-testing-component\n\n✨ Add Performance Testing Component\n\nCloses RND-877.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5499369",
          "timestamp": "2021-02-01T17:36:52Z",
          "tree_id": "ef2c9b1bc1b0d02d9d0c02e02efc161bf39e39cd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/63a21db71185442eed99e81ad2cb716480fa2a10"
        },
        "date": 1612201288462,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 982.6051674739113,
            "unit": "iter/sec",
            "range": "stddev: 0.00018807369252799963",
            "extra": "mean: 1.0177027692321297 msec\nrounds: 494"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1366.9732581563628,
            "unit": "iter/sec",
            "range": "stddev: 0.0002059360758078055",
            "extra": "mean: 731.5432061551081 usec\nrounds: 975"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9504.155480962225,
            "unit": "iter/sec",
            "range": "stddev: 0.000025318234148933543",
            "extra": "mean: 105.21713391611702 usec\nrounds: 2173"
          }
        ]
      }
    ]
  }
}