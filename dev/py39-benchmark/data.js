window.BENCHMARK_DATA = {
  "lastUpdate": 1626357314701,
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
          "id": "56be73c1421447f42616baaa60e9f3c72a1ecc19",
          "message": "Merge pull request #104 from TeoZosa/dependabot/github_actions/actions/setup-node-2.2.0",
          "timestamp": "2021-07-15T13:13:31Z",
          "tree_id": "83bf697425d0d394dd7974a3849e82da59539c6b"
        },
        "date": 1626357310944,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 758.8069758504442,
            "unit": "iter/sec",
            "range": "stddev: 0.0002571523912743442",
            "extra": "mean: 1.3178582061389659 msec\nrounds: 456"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1019.6006508732,
            "unit": "iter/sec",
            "range": "stddev: 0.00024441716300906434",
            "extra": "mean: 980.7761491164076 usec\nrounds: 1073"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7864.77264597328,
            "unit": "iter/sec",
            "range": "stddev: 0.000046171492825365324",
            "extra": "mean: 127.14925720224024 usec\nrounds: 1458"
          }
        ]
      }
    ]
  }
}