window.BENCHMARK_DATA = {
  "lastUpdate": 1626963369483,
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
        "date": 1626963367668,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1268.690782142726,
            "unit": "iter/sec",
            "range": "stddev: 0.000017331902037129674",
            "extra": "mean: 788.2141291442767 usec\nrounds: 573"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1870.7311570834975,
            "unit": "iter/sec",
            "range": "stddev: 0.00001547669844035262",
            "extra": "mean: 534.5503527930852 usec\nrounds: 1576"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13843.442761502889,
            "unit": "iter/sec",
            "range": "stddev: 0.00000437568725652743",
            "extra": "mean: 72.23636614302993 usec\nrounds: 1849"
          }
        ]
      }
    ]
  }
}