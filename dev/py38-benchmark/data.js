window.BENCHMARK_DATA = {
  "lastUpdate": 1624890707817,
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
          "id": "9c9367fc36269bb461e35ed12857995809fdd1c9",
          "message": "Merge pull request #231 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-21.1.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5bad031",
          "timestamp": "2021-06-28T14:14:40Z",
          "tree_id": "2cb62558eb41e9c0d5f34ed286e39d8c771ae892"
        },
        "date": 1624890600082,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 876.4267547656623,
            "unit": "iter/sec",
            "range": "stddev: 0.00021949195184013944",
            "extra": "mean: 1.1409966600887014 msec\nrounds: 456"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1238.391416614787,
            "unit": "iter/sec",
            "range": "stddev: 0.00018739252461635975",
            "extra": "mean: 807.499136850897 usec\nrounds: 1213"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7968.423732342378,
            "unit": "iter/sec",
            "range": "stddev: 0.0001094899444034372",
            "extra": "mean: 125.4953342831384 usec\nrounds: 1756"
          }
        ]
      },
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
          "id": "f370709f21c7c4fbb5fa579306c934e18e5b1180",
          "message": "Merge pull request #232 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.1.7\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@940d1a1",
          "timestamp": "2021-06-28T14:24:44Z",
          "tree_id": "b5b25509099d680603f42a48319b19310343d7e2"
        },
        "date": 1624890705384,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 913.0993425978642,
            "unit": "iter/sec",
            "range": "stddev: 0.00036746173237803254",
            "extra": "mean: 1.0951710874688556 msec\nrounds: 423"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1366.3164757719867,
            "unit": "iter/sec",
            "range": "stddev: 0.00015459080260669093",
            "extra": "mean: 731.894855790996 usec\nrounds: 1373"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8694.056853131468,
            "unit": "iter/sec",
            "range": "stddev: 0.000028079754534572796",
            "extra": "mean: 115.02110198874709 usec\nrounds: 1961"
          }
        ]
      }
    ]
  }
}