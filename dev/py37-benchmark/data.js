window.BENCHMARK_DATA = {
  "lastUpdate": 1624638731588,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "e28446c51a76919b896c8d3e1f3c12a06f5d867b",
          "message": "Merge pull request #222 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-b9f31c7\n\n⬆️ Bump python from `8349e05` to `b9f31c7` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8c85bd8",
          "timestamp": "2021-06-25T16:26:03Z",
          "tree_id": "5202f017b3e178cd51ae8491b7c2178564de5d91"
        },
        "date": 1624638729490,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1231.6381321316053,
            "unit": "iter/sec",
            "range": "stddev: 0.00008724314353235909",
            "extra": "mean: 811.926794008312 usec\nrounds: 534"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1811.6345016589341,
            "unit": "iter/sec",
            "range": "stddev: 0.00007132783091255659",
            "extra": "mean: 551.9877210796598 usec\nrounds: 1556"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13219.46915484307,
            "unit": "iter/sec",
            "range": "stddev: 0.000011170748287586916",
            "extra": "mean: 75.64600274691371 usec\nrounds: 1820"
          }
        ]
      }
    ]
  }
}