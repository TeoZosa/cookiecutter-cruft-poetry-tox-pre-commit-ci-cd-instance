window.BENCHMARK_DATA = {
  "lastUpdate": 1624638713597,
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
        "date": 1624638712113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1238.0339564743183,
            "unit": "iter/sec",
            "range": "stddev: 0.00006519467727391673",
            "extra": "mean: 807.7322877700439 usec\nrounds: 556"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1816.7139855989765,
            "unit": "iter/sec",
            "range": "stddev: 0.00005299830579378529",
            "extra": "mean: 550.4443781062746 usec\nrounds: 1288"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13163.925089208231,
            "unit": "iter/sec",
            "range": "stddev: 0.000034189967753244925",
            "extra": "mean: 75.96518464084839 usec\nrounds: 1836"
          }
        ]
      }
    ]
  }
}