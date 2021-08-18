window.BENCHMARK_DATA = {
  "lastUpdate": 1629306863797,
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
          "id": "913bf2cced9ffba2141b861050235f3f3d0dadfa",
          "message": "Merge pull request #288 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-4115592\n\n⬆️ Bump python from `182f0ef` to `4115592` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@be25a8b",
          "timestamp": "2021-08-18T17:01:04Z",
          "tree_id": "961e3897f0513134ff6b28f8e0ef84d6e764d5c3"
        },
        "date": 1629306861457,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 287.2513882187238,
            "unit": "iter/sec",
            "range": "stddev: 0.0008931596983439591",
            "extra": "mean: 3.4812712523379106 msec\nrounds: 107"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 818.466941521664,
            "unit": "iter/sec",
            "range": "stddev: 0.0002559896370269496",
            "extra": "mean: 1.221796445609442 msec\nrounds: 763"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1740.7605821817067,
            "unit": "iter/sec",
            "range": "stddev: 0.00012670253939277323",
            "extra": "mean: 574.4615372360358 usec\nrounds: 752"
          }
        ]
      }
    ]
  }
}