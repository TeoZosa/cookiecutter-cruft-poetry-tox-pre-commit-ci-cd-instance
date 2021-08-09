window.BENCHMARK_DATA = {
  "lastUpdate": 1628525166371,
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
        "date": 1628525163362,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 367.06327275047937,
            "unit": "iter/sec",
            "range": "stddev: 0.000035700793742531046",
            "extra": "mean: 2.7243259520539813 msec\nrounds: 146"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1066.351167481248,
            "unit": "iter/sec",
            "range": "stddev: 0.000017795114921299434",
            "extra": "mean: 937.7773762484161 usec\nrounds: 901"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2201.305202768922,
            "unit": "iter/sec",
            "range": "stddev: 0.000010843930338219929",
            "extra": "mean: 454.2759444452071 usec\nrounds: 864"
          }
        ]
      }
    ]
  }
}