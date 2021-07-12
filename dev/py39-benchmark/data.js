window.BENCHMARK_DATA = {
  "lastUpdate": 1626110277775,
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
          "id": "e151a207f4f61f779f30ac664bd64933e374d504",
          "message": "Merge pull request #244 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-2c018e2\n\n⬆️ Bump python from `8ffb28a` to `2c018e2` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5c3161b",
          "timestamp": "2021-07-12T17:11:52Z",
          "tree_id": "5a20cae0f515ab54da533ea9e50aed94d283d668"
        },
        "date": 1626110275549,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1046.2218776451055,
            "unit": "iter/sec",
            "range": "stddev: 0.00018906500990844438",
            "extra": "mean: 955.8201958564046 usec\nrounds: 531"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1532.160166142242,
            "unit": "iter/sec",
            "range": "stddev: 0.00015127458114138283",
            "extra": "mean: 652.6732792680909 usec\nrounds: 1529"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10426.750546842533,
            "unit": "iter/sec",
            "range": "stddev: 0.000025868577192619407",
            "extra": "mean: 95.90715683735463 usec\nrounds: 1492"
          }
        ]
      }
    ]
  }
}