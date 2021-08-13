window.BENCHMARK_DATA = {
  "lastUpdate": 1628864783643,
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
          "id": "c397f6e0dac285044504e2ea0f8e42861d565c3b",
          "message": "Merge pull request #282 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-21.2.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@05e51bd",
          "timestamp": "2021-08-13T13:53:01Z",
          "tree_id": "35b420eaeaf2f37a96d3b863469e1650981d3513"
        },
        "date": 1628864781644,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 309.4574593358886,
            "unit": "iter/sec",
            "range": "stddev: 0.00005802752203769264",
            "extra": "mean: 3.2314619338827724 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 891.091109482115,
            "unit": "iter/sec",
            "range": "stddev: 0.000024861357475420262",
            "extra": "mean: 1.122219702743057 msec\nrounds: 693"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1919.5620513359352,
            "unit": "iter/sec",
            "range": "stddev: 0.000015732240342450824",
            "extra": "mean: 520.9521616162613 usec\nrounds: 693"
          }
        ]
      }
    ]
  }
}