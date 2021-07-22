window.BENCHMARK_DATA = {
  "lastUpdate": 1626963364693,
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
          "id": "cb6dc7c5f71c5190d4fd5d97825b9c4b229fea64",
          "message": "Merge pull request #125 from TeoZosa/dependabot/pip/typer-cli-0.0.12",
          "timestamp": "2021-07-22T14:10:11Z",
          "tree_id": "919c805b2060090e24a49a68045b000c647ba9e7"
        },
        "date": 1626963361446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1232.8845477572333,
            "unit": "iter/sec",
            "range": "stddev: 0.000014804077525160991",
            "extra": "mean: 811.1059562058114 usec\nrounds: 548"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1755.8066566831121,
            "unit": "iter/sec",
            "range": "stddev: 0.000017140050728708115",
            "extra": "mean: 569.5387907283006 usec\nrounds: 1510"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13624.750532812834,
            "unit": "iter/sec",
            "range": "stddev: 0.00000456551241153257",
            "extra": "mean: 73.39583925530779 usec\nrounds: 1773"
          }
        ]
      }
    ]
  }
}