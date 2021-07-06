window.BENCHMARK_DATA = {
  "lastUpdate": 1625578986623,
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
          "id": "1048a56f2cf9735c0931bb9b6f1b44103e095d6c",
          "message": "Merge pull request #241 from TeoZosa/dependabot/pip/sphinx-4.0.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@42db373",
          "timestamp": "2021-07-06T13:25:54Z",
          "tree_id": "f493e1d582799d578ffbfe052ac390e9c53cdff1"
        },
        "date": 1625578984941,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1226.458224102554,
            "unit": "iter/sec",
            "range": "stddev: 0.000015627053711145315",
            "extra": "mean: 815.3559414807936 usec\nrounds: 581"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1767.4673332293605,
            "unit": "iter/sec",
            "range": "stddev: 0.00001539125890217041",
            "extra": "mean: 565.781319518301 usec\nrounds: 1496"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13426.317486433503,
            "unit": "iter/sec",
            "range": "stddev: 0.000005433909456607096",
            "extra": "mean: 74.48058643112235 usec\nrounds: 1695"
          }
        ]
      }
    ]
  }
}