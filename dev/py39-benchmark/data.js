window.BENCHMARK_DATA = {
  "lastUpdate": 1630078595674,
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
        "date": 1630078593225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 338.0171852148471,
            "unit": "iter/sec",
            "range": "stddev: 0.00026601821953680825",
            "extra": "mean: 2.9584294637693938 msec\nrounds: 138"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 884.2702411402075,
            "unit": "iter/sec",
            "range": "stddev: 0.00038555498055651996",
            "extra": "mean: 1.1308760076677087 msec\nrounds: 652"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1989.3186786051601,
            "unit": "iter/sec",
            "range": "stddev: 0.00009410610335376277",
            "extra": "mean: 502.6846682509232 usec\nrounds: 841"
          }
        ]
      }
    ]
  }
}