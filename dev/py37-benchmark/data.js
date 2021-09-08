window.BENCHMARK_DATA = {
  "lastUpdate": 1631119971257,
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
        "date": 1631119968732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 271.3475888683308,
            "unit": "iter/sec",
            "range": "stddev: 0.00015764639955076154",
            "extra": "mean: 3.685310063636652 msec\nrounds: 110"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 790.6492073332545,
            "unit": "iter/sec",
            "range": "stddev: 0.00007652947198104489",
            "extra": "mean: 1.2647834092857126 msec\nrounds: 711"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1567.4775684089045,
            "unit": "iter/sec",
            "range": "stddev: 0.000044452684329610334",
            "extra": "mean: 637.9676622837209 usec\nrounds: 684"
          }
        ]
      }
    ]
  }
}