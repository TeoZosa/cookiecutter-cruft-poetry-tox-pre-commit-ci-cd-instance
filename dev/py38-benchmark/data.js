window.BENCHMARK_DATA = {
  "lastUpdate": 1630078629507,
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
          "id": "a1e9c3798037aeb20cfcb8cbbe30a3d0bc7d73f9",
          "message": "Merge pull request #304 from TeoZosa/dependabot/pip/importlib-metadata-4.7.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dbe3336",
          "timestamp": "2021-08-27T14:32:45Z",
          "tree_id": "7a7b277feba47a81384faeb8dd09a2d4cce8b854"
        },
        "date": 1630078626777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 283.7093911330273,
            "unit": "iter/sec",
            "range": "stddev: 0.0002726591344930577",
            "extra": "mean: 3.524733516949794 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 823.9352411856713,
            "unit": "iter/sec",
            "range": "stddev: 0.00017877443739095655",
            "extra": "mean: 1.2136876176833575 msec\nrounds: 803"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1627.9696884015148,
            "unit": "iter/sec",
            "range": "stddev: 0.00013361947649595822",
            "extra": "mean: 614.262051145368 usec\nrounds: 743"
          }
        ]
      }
    ]
  }
}