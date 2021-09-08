window.BENCHMARK_DATA = {
  "lastUpdate": 1631119962491,
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
        "date": 1631119960385,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 308.1506240658966,
            "unit": "iter/sec",
            "range": "stddev: 0.00035771971750513326",
            "extra": "mean: 3.2451662333357945 msec\nrounds: 120"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 893.3229333245225,
            "unit": "iter/sec",
            "range": "stddev: 0.00011827577799884715",
            "extra": "mean: 1.1194160170930305 msec\nrounds: 819"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1799.1061850347955,
            "unit": "iter/sec",
            "range": "stddev: 0.00027035901594509216",
            "extra": "mean: 555.83156142652 usec\nrounds: 757"
          }
        ]
      }
    ]
  }
}