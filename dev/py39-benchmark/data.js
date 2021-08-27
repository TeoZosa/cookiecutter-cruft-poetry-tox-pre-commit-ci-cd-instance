window.BENCHMARK_DATA = {
  "lastUpdate": 1630079317690,
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
          "id": "9fcb0712b8f45c613442c18c8ed7cfda8c9d4da8",
          "message": "Merge pull request #189 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.5",
          "timestamp": "2021-08-27T13:33:33Z",
          "tree_id": "669ff9ff9f6cfe28a5e29faf50869755708979b7"
        },
        "date": 1630079315045,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 275.0376888806167,
            "unit": "iter/sec",
            "range": "stddev: 0.0005451108496261091",
            "extra": "mean: 3.6358653392919598 msec\nrounds: 112"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 806.203429675361,
            "unit": "iter/sec",
            "range": "stddev: 0.00022472759194550192",
            "extra": "mean: 1.2403817240056596 msec\nrounds: 779"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1711.7991103319293,
            "unit": "iter/sec",
            "range": "stddev: 0.0002455556880904271",
            "extra": "mean: 584.1806985202214 usec\nrounds: 743"
          }
        ]
      }
    ]
  }
}