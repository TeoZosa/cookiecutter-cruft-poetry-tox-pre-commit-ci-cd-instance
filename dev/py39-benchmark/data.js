window.BENCHMARK_DATA = {
  "lastUpdate": 1624638818554,
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
        "date": 1624638816299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 826.3355818811807,
            "unit": "iter/sec",
            "range": "stddev: 0.0005042822419535835",
            "extra": "mean: 1.2101620962798993 msec\nrounds: 457"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1238.7143161157685,
            "unit": "iter/sec",
            "range": "stddev: 0.0002146796313471567",
            "extra": "mean: 807.288643547526 usec\nrounds: 1139"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8453.306652007012,
            "unit": "iter/sec",
            "range": "stddev: 0.000032130131813974936",
            "extra": "mean: 118.29690334995439 usec\nrounds: 1552"
          }
        ]
      }
    ]
  }
}