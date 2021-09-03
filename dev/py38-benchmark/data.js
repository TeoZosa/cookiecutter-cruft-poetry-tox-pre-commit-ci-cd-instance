window.BENCHMARK_DATA = {
  "lastUpdate": 1630698726367,
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
          "id": "445b2d89a66356f95bd6d739b192d62ce7326d49",
          "message": "Merge pull request #198 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-09-03T19:41:47Z",
          "tree_id": "eebc56d0b650d101e4210ff516b2d3e30f0d3bdd"
        },
        "date": 1630698723439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 291.2873224256707,
            "unit": "iter/sec",
            "range": "stddev: 0.0005632955887128917",
            "extra": "mean: 3.4330364661001513 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 794.4740549857681,
            "unit": "iter/sec",
            "range": "stddev: 0.000346826803538197",
            "extra": "mean: 1.2586943446729846 msec\nrounds: 676"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1796.9787169374763,
            "unit": "iter/sec",
            "range": "stddev: 0.0001288446944342782",
            "extra": "mean: 556.4896181432035 usec\nrounds: 893"
          }
        ]
      }
    ]
  }
}