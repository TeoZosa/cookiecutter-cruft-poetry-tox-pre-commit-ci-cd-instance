window.BENCHMARK_DATA = {
  "lastUpdate": 1628864694902,
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
        "date": 1628864692484,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 308.813051443594,
            "unit": "iter/sec",
            "range": "stddev: 0.0002908321762304956",
            "extra": "mean: 3.23820510605153 msec\nrounds: 132"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 926.2484425293045,
            "unit": "iter/sec",
            "range": "stddev: 0.00010121197400961156",
            "extra": "mean: 1.0796239476196066 msec\nrounds: 840"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1864.2211239896835,
            "unit": "iter/sec",
            "range": "stddev: 0.00006739604030282583",
            "extra": "mean: 536.4170522109875 usec\nrounds: 747"
          }
        ]
      }
    ]
  }
}