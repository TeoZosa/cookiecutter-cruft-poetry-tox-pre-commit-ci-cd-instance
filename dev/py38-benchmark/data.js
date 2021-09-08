window.BENCHMARK_DATA = {
  "lastUpdate": 1631119946215,
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
          "id": "e6e33b4811ac26bf2237c933a8e5d54a62a08ebd",
          "message": ":arrow_up: Bump python in /{{cookiecutter.project_slug}}\n\nBumps python from `8402d0e` to `3d82b79`.\n\n---\nupdated-dependencies:\n- dependency-name: python\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9e95bd0",
          "timestamp": "2021-09-08T16:43:59Z",
          "tree_id": "3e6426f7791da38c6d56a072db3edb2ca5fd18ff"
        },
        "date": 1631119943740,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 367.0337539577443,
            "unit": "iter/sec",
            "range": "stddev: 0.000031070560055895736",
            "extra": "mean: 2.7245450567337404 msec\nrounds: 141"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1064.7700884305862,
            "unit": "iter/sec",
            "range": "stddev: 0.000018909144129743745",
            "extra": "mean: 939.1698835886216 usec\nrounds: 902"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2215.8187282965955,
            "unit": "iter/sec",
            "range": "stddev: 0.000010685392166237444",
            "extra": "mean: 451.3004548746401 usec\nrounds: 831"
          }
        ]
      }
    ]
  }
}