window.BENCHMARK_DATA = {
  "lastUpdate": 1624890686452,
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
        "date": 1624890507570,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1227.733271890383,
            "unit": "iter/sec",
            "range": "stddev: 0.000015626726663480862",
            "extra": "mean: 814.5091632649702 usec\nrounds: 539"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1749.8675948466414,
            "unit": "iter/sec",
            "range": "stddev: 0.000015064054562630496",
            "extra": "mean: 571.4718090357231 usec\nrounds: 1461"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13211.584200438718,
            "unit": "iter/sec",
            "range": "stddev: 0.000010806392585325002",
            "extra": "mean: 75.69114989001795 usec\nrounds: 1808"
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
        "date": 1624890684213,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1053.6762872298257,
            "unit": "iter/sec",
            "range": "stddev: 0.00011211508127381914",
            "extra": "mean: 949.058085599569 usec\nrounds: 514"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1433.2530266016074,
            "unit": "iter/sec",
            "range": "stddev: 0.00008040138438442057",
            "extra": "mean: 697.7135100639588 usec\nrounds: 1292"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8913.539022619112,
            "unit": "iter/sec",
            "range": "stddev: 0.000020017717202091968",
            "extra": "mean: 112.1888845117957 usec\nrounds: 1472"
          }
        ]
      }
    ]
  }
}