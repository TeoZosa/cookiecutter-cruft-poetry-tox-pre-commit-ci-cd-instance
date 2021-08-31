window.BENCHMARK_DATA = {
  "lastUpdate": 1630420034489,
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
          "id": "28c1ea217a9e711a3f0acc44acd06cb275bbd007",
          "message": "Merge pull request #312 from TeoZosa/dependabot/pip/pytest-6.2.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2c4c6a3",
          "timestamp": "2021-08-31T13:59:14Z",
          "tree_id": "6f00cd90ee0895aec069a49b0d08e8d15e720fae"
        },
        "date": 1630420032346,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 373.501053102051,
            "unit": "iter/sec",
            "range": "stddev: 0.000028308117707579788",
            "extra": "mean: 2.6773686223764726 msec\nrounds: 143"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1062.462358423319,
            "unit": "iter/sec",
            "range": "stddev: 0.000014309977582090905",
            "extra": "mean: 941.2098151731112 usec\nrounds: 936"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2299.489317561632,
            "unit": "iter/sec",
            "range": "stddev: 0.000010456784084916932",
            "extra": "mean: 434.8791674581013 usec\nrounds: 842"
          }
        ]
      }
    ]
  }
}